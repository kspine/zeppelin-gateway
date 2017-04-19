define({ "api": [
  {
    "type": "delete",
    "url": "/:bucket_name",
    "title": "DELETE Bucket",
    "version": "0.1.0",
    "name": "DELETE_Bucket",
    "group": "Buckets",
    "description": "<p>Delte bucket if exist.</p> ",
    "parameter": {
      "fields": {
        "Url Parameters": [
          {
            "group": "Url Parameters",
            "type": "String",
            "optional": false,
            "field": "bucket_name",
            "description": "<p>Bucket&#39;s Name</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Sample-Request:",
          "content": "DELETE /quotes HTTP/1.1\nHost: www.sample-host.com\nDate: Wed, 01 Mar 2006 12:00:00 GMT\nAuthorization: authorization string",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Sample-Response:",
          "content": "HTTP/1.1 204 No Content\nx-amz-id-2: JuKZqmXuiwFeDQxhD7M8KtsKobSzWA1QEjLbTMTagkKdBX2z7Il/jGhDeJ3j6s80\nx-amz-request-id: 32FE2CEB32F5EE25\nDate: Wed, 01 Mar  2006 12:00:00 GMT\nConnection: close\nServer: AmazonS3",
          "type": "json"
        }
      ]
    },
    "filename": "src/buckets_api.js",
    "groupTitle": "Buckets"
  },
  {
    "type": "get",
    "url": "/:bucket_name",
    "title": "GET Bucket (list object version 1)",
    "version": "0.1.0",
    "name": "GET_Bucket__list_object_version_1_",
    "group": "Buckets",
    "description": "<p>List 1000 Objects at most in bucket.</p> ",
    "parameter": {
      "fields": {
        "Url Parameters": [
          {
            "group": "Url Parameters",
            "type": "String",
            "optional": false,
            "field": "bucket_name",
            "description": "<p>Bucket&#39;s Name</p> "
          },
          {
            "group": "Url Parameters",
            "type": "Number",
            "size": "0-1000",
            "optional": true,
            "field": "max-keys",
            "description": "<p>需要返回的最大数量</p> "
          },
          {
            "group": "Url Parameters",
            "type": "String",
            "optional": true,
            "field": "delimiter",
            "description": "<p>根据此字符进行前缀分组</p> "
          },
          {
            "group": "Url Parameters",
            "type": "String",
            "optional": true,
            "field": "marker",
            "description": "<p>以此marker列出Objects</p> "
          },
          {
            "group": "Url Parameters",
            "type": "String",
            "optional": true,
            "field": "prefix",
            "description": "<p>列出name符合此prefix的Objects</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Sample-Request:",
          "content": "GET /bucket HTTP/1.1\nHost: www.sample-host.com\nDate: Wed, 12 Oct 2009 17:50:00 GMT\nAuthorization: authorization string\nContent-Type: text/plain",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Request Elements": [
          {
            "group": "Request Elements",
            "type": "String",
            "optional": false,
            "field": "CommonPrefixes",
            "description": "<p>根据delimiter分组的各组</p> "
          },
          {
            "group": "Request Elements",
            "type": "String",
            "optional": false,
            "field": "IsTruncated",
            "description": "<p>Objects列表是否截断</p> "
          },
          {
            "group": "Request Elements",
            "type": "String",
            "optional": false,
            "field": "Marker",
            "description": "<p>标记返回的Objects list从哪里开始</p> "
          },
          {
            "group": "Request Elements",
            "type": "String",
            "optional": false,
            "field": "NextMarker",
            "description": "<p>如果返回列表被截断，该字段说明是从哪里截断</p> "
          },
          {
            "group": "Request Elements",
            "type": "String",
            "optional": false,
            "field": "Prefix",
            "description": "<p>返回列表所用的prefix</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Sample-Response:",
          "content": "HTTP/1.1 200 OK\n<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<ListBucketResult xmlns=\"http://s3.amazonaws.com/doc/2006-03-01/\">\n  <Name>bucket</Name>\n  <Prefix/>\n  <Marker/>\n  <MaxKeys>1000</MaxKeys>\n  <IsTruncated>false</IsTruncated>\n  <Contents>\n    <Key>my-image.jpg</Key>\n    <LastModified>2009-10-12T17:50:30.000Z</LastModified>\n    <ETag>&quot;fba9dede5f27731c9771645a39863328&quot;</ETag>\n    <Size>434234</Size>\n    <StorageClass>STANDARD</StorageClass>\n    <Owner>\n      <ID>75aa57f09aa0c8caeab4f8c24e99d10f8e7faeebf76c078efc7c6caea54ba06a</ID>\n      <DisplayName>mtd@amazon.com</DisplayName>\n    </Owner>\n    </Contents>\n  <Contents>\n    <Key>my-third-image.jpg</Key>\n    <LastModified>2009-10-12T17:50:30.000Z</LastModified>\n    <ETag>&quot;1b2cf535f27731c974343645a3985328&quot;</ETag>\n    <Size>64994</Size>\n    <StorageClass>STANDARD_IA</StorageClass>\n    <Owner>\n      <ID>75aa57f09aa0c8caeab4f8c24e99d10f8e7faeebf76c078efc7c6caea54ba06a</ID>\n      <DisplayName>mtd@amazon.com</DisplayName>\n    </Owner>\n  </Contents>\n</ListBucketResult>",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response-NoSuchBucket",
          "content": "HTTP/1.1 404 Not Found\n<?xml version='1.0' encoding='utf-8' ?>\n<Error>\n  <Code>NoSuchBucket</Code>\n  <Message>The specified bucket does not exist.</Message>\n  <BucketName>bk2</BucketName>\n  <RequestId>tx00000000000000000113c-0058a43a07-7deaf-sh-bt-1</RequestId>\n  <HostId7deaf-sh-bt-1-sh/>\n</Error>",
          "type": "xml"
        }
      ]
    },
    "filename": "src/buckets_api.js",
    "groupTitle": "Buckets"
  },
  {
    "type": "head",
    "url": "/:bucket_name",
    "title": "HEAD Bucket",
    "version": "0.1.0",
    "name": "HEAD_Bucket",
    "group": "Buckets",
    "description": "<p>Check whether bucket exist.</p> ",
    "parameter": {
      "fields": {
        "Url Parameters": [
          {
            "group": "Url Parameters",
            "type": "String",
            "optional": false,
            "field": "bucket_name",
            "description": "<p>Bucket&#39;s Name</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Sample-Request:",
          "content": "HEAD /myawsbucket HTTP/1.1\nDate: Fri, 10 Feb 2012 21:34:55 GMT\nAuthorization: authorization string\nHost: www.sample-host.com\nConnection: Keep-Alive",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Sample-Response:",
          "content": "HTTP/1.1 200 OK\nx-amz-id-2: JuKZqmXuiwFeDQxhD7M8KtsKobSzWA1QEjLbTMTagkKdBX2z7Il/jGhDeJ3j6s80\nx-amz-request-id: 32FE2CEB32F5EE25\nDate: Fri, 10 2012 21:34:56 GMT\nServer: AmazonS3",
          "type": "json"
        }
      ]
    },
    "filename": "src/buckets_api.js",
    "groupTitle": "Buckets"
  },
  {
    "type": "put",
    "url": "/:bucket_name",
    "title": "PUT Bucket",
    "version": "0.1.0",
    "name": "PUT_Bucket",
    "group": "Buckets",
    "description": "<p>Create bucket if not exist.</p> ",
    "parameter": {
      "fields": {
        "Url Parameters": [
          {
            "group": "Url Parameters",
            "type": "String",
            "optional": false,
            "field": "bucket_name",
            "description": "<p>Bucket&#39;s Name</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Sample-Request:",
          "content": "PUT /mybucket HTTP/1.1\nHost: www.sample-host.com\nDate: Wed, 01 Mar 2006 12:00:00 GMT\nAuthorization: authorization string",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Sample-Response:",
          "content": "HTTP/1.1 200 OK\nx-amz-id-2: JuKZqmXuiwFeDQxhD7M8KtsKobSzWA1QEjLbTMTagkKdBX2z7Il/jGhDeJ3j6s80\nx-amz-request-id: 32FE2CEB32F5EE25\nDate: Wed, 01 Mar  2006 12:00:00 GMT\nConnection: close\nServer: AmazonS3",
          "type": "json"
        }
      ]
    },
    "filename": "src/buckets_api.js",
    "groupTitle": "Buckets"
  },
  {
    "type": "delete",
    "url": "/:bucket_name/:object_name?uploadId=:upload_id",
    "title": "Abort Multipart Upload",
    "version": "0.1.0",
    "name": "Abort_Multipart_Upload",
    "group": "Objects",
    "description": "<p>Abort Multipart Upload</p> ",
    "parameter": {
      "fields": {
        "Url Parameters": [
          {
            "group": "Url Parameters",
            "type": "String",
            "optional": false,
            "field": "bucket_name",
            "description": "<p>Bucket&#39;s Name</p> "
          },
          {
            "group": "Url Parameters",
            "type": "String",
            "optional": false,
            "field": "object_name",
            "description": "<p>Object&#39;s Name</p> "
          },
          {
            "group": "Url Parameters",
            "type": "String",
            "optional": false,
            "field": "upload_id",
            "description": "<p>multiupload task&#39;s id</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Sample-Request:",
          "content": "DELETE /mybucket/my-movie.m2ts?uploadId=VCVsb2FkIElEIGZvciBlbZZpbmcncyBteS1tb3ZpZS5tMnRzIHVwbG9hZR HTTP/1.1\nHost: www.sample-host.com\nDate: Wed, 28 Oct 2009 22:32:00 GMT\nAuthorization: authorization string",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Sample-Response:",
          "content": "HTTP/1.1 204 No Content\nx-amz-request-id: 0A49CE4060975EAC\nDate: Wed, 12 Oct 2009 17:50:00 GMT\nContent-Length: 0\nConnection: close\nServer: AmazonS3",
          "type": "json"
        }
      ]
    },
    "filename": "src/objects_api.js",
    "groupTitle": "Objects"
  },
  {
    "type": "post",
    "url": "/:bucket_name/:object_name?uploadId=:upload_id",
    "title": "Complete Multipart Upload",
    "version": "0.1.0",
    "name": "Complete_Multipart_Upload",
    "group": "Objects",
    "description": "<p>Complete Multipart Upload</p> ",
    "parameter": {
      "fields": {
        "Url Parameters": [
          {
            "group": "Url Parameters",
            "type": "String",
            "optional": false,
            "field": "bucket_name",
            "description": "<p>Bucket&#39;s Name</p> "
          },
          {
            "group": "Url Parameters",
            "type": "String",
            "optional": false,
            "field": "object_name",
            "description": "<p>Object&#39;s Name</p> "
          },
          {
            "group": "Url Parameters",
            "type": "String",
            "optional": false,
            "field": "upload_id",
            "description": "<p>multiupload task&#39;s id</p> "
          }
        ],
        "Request Elements": [
          {
            "group": "Request Elements",
            "type": "String",
            "optional": false,
            "field": "CompleteMultipartUpload",
            "description": "<p>Container for the request.</p> "
          },
          {
            "group": "Request Elements",
            "type": "String",
            "optional": false,
            "field": "Part",
            "description": "<p>Container for elements related to a particular previously uploaded part.</p> "
          },
          {
            "group": "Request Elements",
            "type": "String",
            "optional": false,
            "field": "PartNumber",
            "description": "<p>Part number that identifies the part.</p> "
          },
          {
            "group": "Request Elements",
            "type": "String",
            "optional": false,
            "field": "ETag",
            "description": "<p>Entity tag returned when the part was uploaded.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Sample-Request:",
          "content": "POST /mybucket/my-movie.m2ts?uploadId=VCVsb2FkIElEIGZvciBlbZZpbmcncyBteS1tb3ZpZS5tMnRzIHVwbG9hZR HTTP/1.1\nHost: www.sample-host.com\nDate: Wed, 28 Oct 2009 22:32:00 GMT\nAuthorization: authorization string\n\n<CompleteMultipartUpload>\n  <Part>\n    <PartNumber>1</PartNumber>\n    <ETag>\"a54357aff0632cce46d942af68356b38\"</ETag>\n  </Part>\n  <Part>\n    <PartNumber>2</PartNumber>\n    <ETag>\"0c78aef83f66abc1fa1e8477f296d394\"</ETag>\n  </Part>\n  <Part>\n    <PartNumber>3</PartNumber>\n    <ETag>\"acbd18db4cc2f85cedef654fccc4a4d8\"</ETag>\n  </Part>\n</CompleteMultipartUpload>",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Rsponse Elements": [
          {
            "group": "Rsponse Elements",
            "type": "String",
            "optional": false,
            "field": "CompleteMultipartUploadResult",
            "description": "<p>Container for the response</p> "
          },
          {
            "group": "Rsponse Elements",
            "type": "String",
            "optional": false,
            "field": "ETag",
            "description": "<p>所有Object的ETag的MD5值</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Sample-Response:",
          "content": "HTTP/1.1 204 No Content\nx-amz-request-id: 0A49CE4060975EAC\nDate: Wed, 12 Oct 2009 17:50:00 GMT\nContent-Length: 0\nConnection: close\nServer: AmazonS3\n\n<CompleteMultipartUploadResult xmlns=\"http://s3.amazonaws.com/doc/2006-03-01/\">\n  <Bucket>Example-Bucket</Bucket>\n  <Key>Example-Object</Key>\n  <ETag>\"3858f62230ac3c915f300c664312c11f-9\"</ETag>\n</CompleteMultipartUploadResult>",
          "type": "json"
        }
      ]
    },
    "filename": "src/objects_api.js",
    "groupTitle": "Objects"
  },
  {
    "type": "delete",
    "url": "/:bucket_name/:object_name",
    "title": "DELETE Object",
    "version": "0.1.0",
    "name": "DELETE_Object",
    "group": "Objects",
    "description": "<p>Delte object</p> ",
    "parameter": {
      "fields": {
        "Url Parameters": [
          {
            "group": "Url Parameters",
            "type": "String",
            "optional": false,
            "field": "bucket_name",
            "description": "<p>Bucket&#39;s Name</p> "
          },
          {
            "group": "Url Parameters",
            "type": "String",
            "optional": false,
            "field": "object_name",
            "description": "<p>Object&#39;s Name</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Sample-Request:",
          "content": "DELETE /bk1/ob1 HTTP/1.1\nHost: www.sample-host.com\nDate: Wed, 01 Mar 2006 12:00:00 GMT\nAuthorization: authorization string",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Sample-Response:",
          "content": "HTTP/1.1 204 No Content\nx-amz-request-id: 32FE2CEB32F5EE25\nDate: Wed, 01 Mar  2006 12:00:00 GMT\nConnection: close\nServer: AmazonS3",
          "type": "json"
        }
      ]
    },
    "filename": "src/objects_api.js",
    "groupTitle": "Objects"
  },
  {
    "type": "post",
    "url": "/:bucket_name/?delete=",
    "title": "Delete Multiple Objects",
    "version": "0.1.0",
    "name": "Delete_Multiple_Objects",
    "group": "Objects",
    "description": "<p>Delete Multiple Objects</p> ",
    "parameter": {
      "fields": {
        "Url Parameters": [
          {
            "group": "Url Parameters",
            "type": "String",
            "optional": false,
            "field": "bucket_name",
            "description": "<p>Bucket&#39;s Name</p> "
          }
        ],
        "Request Elements": [
          {
            "group": "Request Elements",
            "type": "String",
            "optional": false,
            "field": "Delete",
            "description": "<p>Container for the request.</p> "
          },
          {
            "group": "Request Elements",
            "type": "String",
            "optional": false,
            "field": "Key",
            "description": "<p>Key name of the object to delete.</p> "
          },
          {
            "group": "Request Elements",
            "type": "String",
            "optional": false,
            "field": "Object",
            "description": "<p>Container element that describes the delete request for an object.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Sample-Request:",
          "content": "POST /?delete HTTP/1.1\nHost: bucketname.S3.amazonaws.com\nx-amz-date: Wed, 30 Nov 2011 03:39:05 GMT\nContent-MD5: p5/WA/oEr30qrEEl21PAqw==\nAuthorization: AWS AKIAIOSFODNN7EXAMPLE:W0qPYCLe6JwkZAD1ei6hp9XZIee=\nContent-Length: 125\nConnection: Keep-Alive\n<Delete>\n  <Object>\n    <Key>sample1.txt</Key>\n  </Object>\n  <Object>\n    <Key>sample2.txt</Key>\n  </Object>\n</Delete>",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Response Elements": [
          {
            "group": "Response Elements",
            "type": "String",
            "optional": false,
            "field": "DeleteResult",
            "description": "<p>Container for the response</p> "
          },
          {
            "group": "Response Elements",
            "type": "String",
            "optional": false,
            "field": "Deleted",
            "description": "<p>删除成功的Key</p> "
          },
          {
            "group": "Response Elements",
            "type": "String",
            "optional": false,
            "field": "Error",
            "description": "<p>删除失败的Key</p> "
          },
          {
            "group": "Response Elements",
            "type": "String",
            "optional": false,
            "field": "Key",
            "description": "<p>删除成功或者失败的Key</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Sample-Response:",
          "content": "HTTP/1.1 200 OK\nx-amz-request-id: 0A49CE4060975EAC\nDate: Wed, 12 Oct 2009 17:50:00 GMT\nContent-Length: 0\nConnection: close\nServer: AmazonS3\n\n<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<DeleteResult xmlns=\"http://s3.amazonaws.com/doc/2006-03-01/\">\n  <Deleted>\n    <Key>sample1.txt</Key>\n  </Deleted>\n  <Error>\n    <Key>sample2.txt</Key>\n    <Code>AccessDenied</Code>\n    <Message>Access Denied</Message>\n  </Error>\n</DeleteResult>",
          "type": "json"
        }
      ]
    },
    "filename": "src/objects_api.js",
    "groupTitle": "Objects"
  },
  {
    "type": "get",
    "url": "/:bucket_name/:object_name",
    "title": "GET Object",
    "version": "0.1.0",
    "name": "GET_Object",
    "group": "Objects",
    "description": "<p>Get Object</p> ",
    "parameter": {
      "fields": {
        "Url Parameters": [
          {
            "group": "Url Parameters",
            "type": "String",
            "optional": false,
            "field": "bucket_name",
            "description": "<p>Bucket&#39;s Name</p> "
          },
          {
            "group": "Url Parameters",
            "type": "String",
            "optional": false,
            "field": "object_name",
            "description": "<p>Object&#39;s Name</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Sample-Request:",
          "content": "GET /bucket/ob1 HTTP/1.1\nHost: www.sample-host.com\nDate: Wed, 12 Oct 2009 17:50:00 GMT\nAuthorization: authorization string\nContent-Type: text/plain",
          "type": "json"
        },
        {
          "title": "Sample-Request-Range-Header:",
          "content": "GET /example-bucket/example-object HTTP/1.1\nHost: www.sample-host.com\nx-amz-date: Fri, 28 Jan 2011 21:32:02 GMT\nRange: bytes=0-9\nAuthorization: AWS AKIAIOSFODNN7EXAMPLE:Yxg83MZaEgh3OZ3l0rLo5RTX11o=",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Request Headers": [
          {
            "group": "Request Headers",
            "type": "String",
            "optional": true,
            "field": "range",
            "description": "<p>获取部分Object</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Sample-Response:",
          "content": "HTTP/1.1 200 OK\nx-amz-id-2: eftixk72aD6Ap51TnqcoF8eFidJG9Z/2mkiDFu8yU9AS1ed4OpIszj7UDNEHGran\nx-amz-request-id: 318BC8BC148832E5\nDate: Mon, 3 Oct 2016 22:32:00 GMT\nLast-Modified: Wed, 12 Oct 2009 17:50:00 GMT\nETag: \"fba9dede5f27731c9771645a39863328\"\nContent-Length: 434234\n[434234 bytes of object data]",
          "type": "json"
        },
        {
          "title": "Sample-Response-Range-Header:",
          "content": "HTTP/1.1 206 Partial Content\nx-amz-id-2: MzRISOwyjmnupCzjI1WC06l5TTAzm7/JypPGXLh0OVFGcJaaO3KW/hRAqKOpIEEp\nx-amz-request-id: 47622117804B3E11\nDate: Fri, 28 Jan 2011 21:32:09 GMT\nx-amz-meta-title: the title\nLast-Modified: Fri, 28 Jan 2011 20:10:32 GMT\nETag: \"b2419b1e3fd45d596ee22bdf62aaaa2f\"\nAccept-Ranges: bytes\nContent-Range: bytes 0-9/443\nContent-Type: text/plain\nContent-Length: 10\nServer: AmazonS3\n[10 bytes of object data]",
          "type": "json"
        }
      ]
    },
    "filename": "src/objects_api.js",
    "groupTitle": "Objects"
  },
  {
    "type": "head",
    "url": "/:bucket_name/:object_name",
    "title": "HEAD Object",
    "version": "0.1.0",
    "name": "HEAD_Object",
    "group": "Objects",
    "description": "<p>Check whether object exist.</p> ",
    "parameter": {
      "fields": {
        "Url Parameters": [
          {
            "group": "Url Parameters",
            "type": "String",
            "optional": false,
            "field": "bucket_name",
            "description": "<p>Bucket&#39;s Name</p> "
          },
          {
            "group": "Url Parameters",
            "type": "String",
            "optional": false,
            "field": "object_name",
            "description": "<p>Object&#39;s Name</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Sample-Request:",
          "content": "HEAD /bk1/ob2 HTTP/1.1\nDate: Fri, 10 Feb 2012 21:34:55 GMT\nAuthorization: authorization string\nHost: www.sample-host.com\nConnection: Keep-Alive",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Sample-Response:",
          "content": "HTTP/1.1 200 OK\nx-amz-id-2: JuKZqmXuiwFeDQxhD7M8KtsKobSzWA1QEjLbTMTagkKdBX2z7Il/jGhDeJ3j6s80\nx-amz-request-id: 32FE2CEB32F5EE25\nDate: Fri, 10 2012 21:34:56 GMT\nETag: \"ac2e33f90b26451d1c8f8987678f860d\"\nLast-Modified: Tue, 11 Apr 2017 03:22:24 GMT\nServer: AmazonS3",
          "type": "json"
        }
      ]
    },
    "filename": "src/objects_api.js",
    "groupTitle": "Objects"
  },
  {
    "type": "post",
    "url": "/:bucket_name/:object_name?uploads=",
    "title": "Initiate Multipart Upload",
    "version": "0.1.0",
    "name": "Initiate_Multipart_Upload",
    "group": "Objects",
    "description": "<p>Initiate multipart upload, return upload ID.</p> ",
    "parameter": {
      "fields": {
        "Url Parameters": [
          {
            "group": "Url Parameters",
            "type": "String",
            "optional": false,
            "field": "bucket_name",
            "description": "<p>Bucket&#39;s Name</p> "
          },
          {
            "group": "Url Parameters",
            "type": "String",
            "optional": false,
            "field": "object_name",
            "description": "<p>Object&#39;s Name</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Sample-Request:",
          "content": "POST /bucket1/my-second-image.jpg?uploads= HTTP/1.1\nHost: www.sample-host.com\nDate: Wed, 28 Oct 2009 22:32:00 GMT\nAuthorization: authorization string",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Response Elements": [
          {
            "group": "Response Elements",
            "type": "String",
            "optional": false,
            "field": "Bucket",
            "description": "<p>Objects&#39;s bucket</p> "
          },
          {
            "group": "Response Elements",
            "type": "String",
            "optional": false,
            "field": "Key",
            "description": "<p>Object&#39;s key</p> "
          },
          {
            "group": "Response Elements",
            "type": "String",
            "optional": false,
            "field": "UploadId",
            "description": "<p>上传任务的ID</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Sample-Response:",
          "content": "HTTP/1.1 200 OK\nDate:  Mon, 1 Nov 2010 20:34:56 GMT\nContent-Length: 197\nConnection: keep-alive\nServer: AmazonS3\n\n<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<InitiateMultipartUploadResult xmlns=\"http://s3.amazonaws.com/doc/2006-03-01/\">\n  <Bucket>example-bucket</Bucket>\n  <Key>example-object</Key>\n  <UploadId>VXBsb2FkIElEIGZvciA2aWWpbmcncyBteS1tb3ZpZS5tMnRzIHVwbG9hZA</UploadId>\n</InitiateMultipartUploadResult>",
          "type": "json"
        }
      ]
    },
    "filename": "src/objects_api.js",
    "groupTitle": "Objects"
  },
  {
    "type": "put",
    "url": "/:bucket_name/:object_name",
    "title": "PUT Object",
    "version": "0.1.0",
    "name": "PUT_Object",
    "group": "Objects",
    "description": "<p>Create object.</p> ",
    "parameter": {
      "fields": {
        "Url Parameters": [
          {
            "group": "Url Parameters",
            "type": "String",
            "optional": false,
            "field": "bucket_name",
            "description": "<p>Bucket&#39;s Name</p> "
          },
          {
            "group": "Url Parameters",
            "type": "String",
            "optional": false,
            "field": "object_name",
            "description": "<p>Object&#39;s Name</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Sample-Request:",
          "content": "PUT /bk1/ob1 HTTP/1.1\nContent-Type: application/x-www-form-urlencoded\nHost: www.sample-host.com\nX-Amz-Content-Sha256: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855\nX-Amz-Date: 20170411T024836Z\nAuthorization: authorization string\nCache-Control: no-cache\nPostman-Token: e1428bef-0ef7-072f-0e4b-3b72fb6b37a3\n\ncontent",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Sample-Response:",
          "content": "HTTP/1.1 200 OK\nx-amz-request-id: 0A49CE4060975EAC\nDate: Wed, 12 Oct 2009 17:50:00 GMT\nETag: \"9a0364b9e99bb480dd25e1f0284c8555\"\nContent-Length: 0\nConnection: close\nServer: AmazonS3",
          "type": "json"
        }
      ]
    },
    "filename": "src/objects_api.js",
    "groupTitle": "Objects"
  },
  {
    "type": "put",
    "url": "/:bucket_name/:object_name",
    "title": "PUT Object - Copy",
    "version": "0.1.0",
    "name": "PUT_Object___Copy",
    "group": "Objects",
    "description": "<p>Copy exist object.</p> ",
    "parameter": {
      "fields": {
        "Url Parameters": [
          {
            "group": "Url Parameters",
            "type": "String",
            "optional": false,
            "field": "bucket_name",
            "description": "<p>Bucket&#39;s Name</p> "
          },
          {
            "group": "Url Parameters",
            "type": "String",
            "optional": false,
            "field": "object_name",
            "description": "<p>Object&#39;s Name</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Sample-Request:",
          "content": "PUT /bucket1/my-second-image.jpg HTTP/1.1\nHost: www.sample-host.com\nDate: Wed, 28 Oct 2009 22:32:00 GMT\nx-amz-copy-source: /bucket/my-image.jpg\nAuthorization: authorization string",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Request Headers": [
          {
            "group": "Request Headers",
            "type": "String",
            "optional": false,
            "field": "x-amz-copy-source",
            "description": "<p>/source_bucket/source_object</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Response Elements": [
          {
            "group": "Response Elements",
            "type": "String",
            "optional": false,
            "field": "CopyObjectResult",
            "description": "<p>目的对象的修改时间及ETag</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Sample-Response:",
          "content": "HTTP/1.1 200 OK\nx-amz-request-id: 0A49CE4060975EAC\nDate: Wed, 12 Oct 2009 17:50:00 GMT\nETag: \"9a0364b9e99bb480dd25e1f0284c8555\"\nContent-Length: 238\nConnection: close\nServer: AmazonS3\n\n<CopyObjectResult>\n  <LastModified>2009-10-28T22:32:00</LastModified>\n  <ETag>\"9b2cf535f27731c974343645a3985328\"</ETag>\n</CopyObjectResult>",
          "type": "json"
        }
      ]
    },
    "filename": "src/objects_api.js",
    "groupTitle": "Objects"
  },
  {
    "type": "put",
    "url": "/:bucket_name/:object_name?uploadId=:upload_id&partNumber=:part_num",
    "title": "Upload Part",
    "version": "0.1.0",
    "name": "Upload_Part",
    "group": "Objects",
    "description": "<p>Upload Part</p> ",
    "parameter": {
      "fields": {
        "Url Parameters": [
          {
            "group": "Url Parameters",
            "type": "String",
            "optional": false,
            "field": "bucket_name",
            "description": "<p>Bucket&#39;s Name</p> "
          },
          {
            "group": "Url Parameters",
            "type": "String",
            "optional": false,
            "field": "object_name",
            "description": "<p>Object&#39;s Name</p> "
          },
          {
            "group": "Url Parameters",
            "type": "String",
            "optional": false,
            "field": "upload_id",
            "description": "<p>multiupload task&#39;s id</p> "
          },
          {
            "group": "Url Parameters",
            "type": "String",
            "optional": false,
            "field": "part_num",
            "description": "<p>multipart&#39;s sequence</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Sample-Request:",
          "content": "PUT /mybucket/my-movie.m2ts?partNumber=1&uploadId=VCVsb2FkIElEIGZvciBlbZZpbmcncyBteS1tb3ZpZS5tMnRzIHVwbG9hZR HTTP/1.1\nHost: www.sample-host.com\nDate: Mon, 1 Nov 2010 20:34:56 GMT\nContent-Length: 10485760\nContent-MD5: pUNXr/BjKK5G2UKvaRRrOA==\nAuthorization: authorization string\n\n***part data omitted***",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Sample-Response:",
          "content": "HTTP/1.1 200 OK\nDate:  Mon, 1 Nov 2010 20:34:56 GMT\nContent-Length: 197\nConnection: keep-alive\nETag: \"b54357faf0632cce46e942fa68356b38\"\nServer: AmazonS3",
          "type": "json"
        }
      ]
    },
    "filename": "src/objects_api.js",
    "groupTitle": "Objects"
  },
  {
    "type": "put",
    "url": "/:bucket_name/:object_name?uploadId=:upload_id&partNumber=:part_num",
    "title": "Upload Part - Copy",
    "version": "0.1.0",
    "name": "Upload_Part___Copy",
    "group": "Objects",
    "description": "<p>Upload Part - Copy</p> ",
    "parameter": {
      "fields": {
        "Url Parameters": [
          {
            "group": "Url Parameters",
            "type": "String",
            "optional": false,
            "field": "bucket_name",
            "description": "<p>Bucket&#39;s Name</p> "
          },
          {
            "group": "Url Parameters",
            "type": "String",
            "optional": false,
            "field": "object_name",
            "description": "<p>Object&#39;s Name</p> "
          },
          {
            "group": "Url Parameters",
            "type": "String",
            "optional": false,
            "field": "upload_id",
            "description": "<p>multiupload task&#39;s id</p> "
          },
          {
            "group": "Url Parameters",
            "type": "String",
            "optional": false,
            "field": "part_num",
            "description": "<p>multipart&#39;s sequence</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Sample-Request:",
          "content": "PUT /mybucket/my-movie.m2ts?partNumber=1&uploadId=VCVsb2FkIElEIGZvciBlbZZpbmcncyBteS1tb3ZpZS5tMnRzIHVwbG9hZR HTTP/1.1\nHost: www.sample-host.com\nDate: Wed, 28 Oct 2009 22:32:00 GMT\nx-amz-copy-source: /bucket/my-image.jpg\nAuthorization: authorization string",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Request Headers": [
          {
            "group": "Request Headers",
            "type": "String",
            "optional": false,
            "field": "x-amz-copy-source",
            "description": "<p>/source_bucket/source_object</p> "
          },
          {
            "group": "Request Headers",
            "type": "String",
            "optional": true,
            "field": "x-amz-copy-source-range",
            "description": "<p>Copy部分Object</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Response Elements": [
          {
            "group": "Response Elements",
            "type": "String",
            "optional": false,
            "field": "CopyObjectResult",
            "description": "<p>目的对象的修改时间及ETag</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Sample-Response:",
          "content": "HTTP/1.1 200 OK\nx-amz-request-id: 0A49CE4060975EAC\nDate: Wed, 12 Oct 2009 17:50:00 GMT\nETag: \"9a0364b9e99bb480dd25e1f0284c8555\"\nContent-Length: 238\nConnection: close\nServer: AmazonS3\n\n<CopyObjectResult>\n  <LastModified>2009-10-28T22:32:00</LastModified>\n  <ETag>\"9b2cf535f27731c974343645a3985328\"</ETag>\n</CopyObjectResult>",
          "type": "json"
        }
      ]
    },
    "filename": "src/objects_api.js",
    "groupTitle": "Objects"
  },
  {
    "type": "put",
    "url": "/admin_put_user/:name",
    "title": "AddUser",
    "version": "0.1.0",
    "name": "AddUser",
    "group": "Service",
    "description": "<p>Add New User.</p> ",
    "parameter": {
      "fields": {
        "Url Parameters": [
          {
            "group": "Url Parameters",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>User&#39;s Name</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Sample-Response:",
          "content": "HTTP/1.1 200 OK\nabcdeBhpidyJ9vigsaeb\nkZRVpHyb78CAua3U3mTrN8TtSbs7yFGela5UKlx2",
          "type": "json"
        }
      ]
    },
    "filename": "src/service_api.js",
    "groupTitle": "Service"
  },
  {
    "type": "get",
    "url": "/",
    "title": "GET Service",
    "version": "0.1.0",
    "name": "GET_Service",
    "group": "Service",
    "description": "<p>List All Buckets.</p> ",
    "success": {
      "examples": [
        {
          "title": "Sample-Response:",
          "content": "HTTP/1.1 200 OK\n\n<?xml version='1.0' encoding='utf-8' ?>\n<ListAllMyBucketsResult xmlns=\"http://s3.amazonaws.com/doc/2006-03-01/\"\n  <Owner>\n    <ID>d5abae9202d32b51156d0f4daa14f10905d29226dc088df1d34416ab9a4ea01c</ID>\n    <DisplayName>s3test</DisplayName>\n  </Owner>\n  <Buckets>\n    <Bucket>\n      <Name>bk1</Name>\n      <CreationDate>2017-03-23T02:59:42.599Z</CreationDate>\n    </Bucket>\n    <Bucket>\n      <Name>bk2</Name>\n      <CreationDate>2017-03-20T14:45:26.418Z</CreationDate>\n    </Bucket>\n  </Buckets>\n</ListAllMyBucketsResult>",
          "type": "json"
        }
      ]
    },
    "filename": "src/service_api.js",
    "groupTitle": "Service"
  },
  {
    "type": "get",
    "url": "/admin_list_users",
    "title": "GET Users",
    "version": "0.1.0",
    "name": "GET_Users",
    "group": "Service",
    "description": "<p>List User information.</p> ",
    "success": {
      "examples": [
        {
          "title": "Sample-Response:",
          "content": "HTTP/1.1 200 OK\ndisplay_name: s3test\nabcdeBhpidyJ9vigsaeb\nkZRVpHyb78CAua3U3mTrN8TtSbs7yFGela5UKlx2",
          "type": "json"
        }
      ]
    },
    "filename": "src/service_api.js",
    "groupTitle": "Service"
  }
] });