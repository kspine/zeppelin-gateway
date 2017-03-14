#include <unistd.h>

#include "zgw_store.h"
#include "zgw_user.h"

#include "include/slash_string.h"

namespace libzgw {
 
Status ZgwStore::AddBucket(const std::string &bucket_name, ZgwUserInfo user_info) {
  ZgwBucket bucket(bucket_name);

  // Add Bucket Meta
  int retry = 3;
  bucket.SetUserInfo(user_info);
  return zp_->Set(kZgwMetaTableName, bucket.MetaKey(), bucket.MetaValue());
}

Status ZgwStore::SaveNameList(const std::string &meta_key,
                              const std::string &meta_value) {
  Status s = zp_->Set(kZgwMetaTableName, meta_key, meta_value);
  if (!s.ok()) {
    return s;
  }

  return Status::OK();
}

Status ZgwStore::GetNameList(const std::string &meta_key,
                             std::string *meta_value) {
  std::string value;
  Status s = zp_->Get(kZgwMetaTableName, meta_key, meta_value);
  if (!s.ok()) {
    return s;
  }

  return Status::OK();
}

Status ZgwStore::DelBucket(const std::string &name) {
  return zp_->Delete(kZgwMetaTableName, ZgwBucket(name).MetaKey());
}

Status ZgwStore::ListBuckets(NameList *names, std::vector<ZgwBucket> *buckets) {
  // Get Bucket Meta
  Status s;
  std::string value;
  std::lock_guard<std::mutex> lock(names->list_lock);
  for (auto& name : names->name_list) {
    ZgwBucket obucket(name);
    zp_->Get(kZgwMetaTableName, obucket.MetaKey(), &value);
    if (!obucket.ParseMetaValue(value).ok()) {
      continue; // Skip table with not meta info
    }
    buckets->push_back(obucket);
  }

  return Status::OK();
}

Status ZgwStore::ListObjects(const std::string &bucket_name, NameList *names,
                             std::vector<ZgwObject> *objects, bool list_multiupload) {
  Status s;
  std::string meta_value;
  std::lock_guard<std::mutex> lock(names->list_lock);
  for (auto &object_name : names->name_list) {
    if (list_multiupload && object_name.size() < 32) {  // skip normal object
      continue;
    }
    ZgwObject ob(object_name);
    s = zp_->Get(kZgwMetaTableName, bucket_name + ob.MetaKey(), &meta_value);
    if (!s.ok()) {
      return s;
    }
    ob.ParseMetaValue(&meta_value);
    if (list_multiupload) {
      if (!ob.multiparts_done()) {
        objects->push_back(ob);
      }
    } else {
      if (ob.multiparts_done()) {
        objects->push_back(ob);
      }
    }
  }
  return Status::OK();
}

Status ZgwStore::InitMultiUpload(std::string &bucket_name, std::string &object_name,
                                 std::string *upload_id, std::string *internal_obname,
                                 ZgwUser *user) {
  Status s;
  // TODO (gaodq)
  // Create virtual object
  timeval now;
  gettimeofday(&now, NULL);
  ZgwObjectInfo ob_info(now, "", 0, kStandard, user->user_info());
  std::string tmp_obname = object_name + std::to_string(time(NULL));
  upload_id->assign(slash::md5(tmp_obname));;
  internal_obname->assign(object_name + *upload_id);
  ZgwObject object(*internal_obname);
  object.SetObjectInfo(ob_info);
  object.SetMultiPartsDone(false);
  object.SetUploadId(*upload_id);

  s = zp_->Set(bucket_name, object.MetaKey(), object.MetaValue());
  if (!s.ok()) {
    return s;
  }

  return s;
}

}  // namespace libzgw
