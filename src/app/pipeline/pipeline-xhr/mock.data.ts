export const mockPipelinesResponse = {
  "took": 112,
  "timed_out": false,
  "_shards": {
    "total": 3,
    "successful": 3,
    "failed": 0
  },
  "hits": {
    "total": 2937729,
    "max_score": 0,
    "hits": []
  },
  "aggregations": {
    "job_list": {
      "doc_count_error_upper_bound": 0,
      "sum_other_doc_count": 0,
      "buckets": [
        {
          "key": "Interop-RHSatellite_libvirt_6.1-d97ae-stable-runtest",
          "doc_count": 234671
        },
        {
          "key": "Interop-RHSatellite_6.3-b3a8a-stable-runtest",
          "doc_count": 228902
        },
        {
          "key": "Interop-RHSatellite_libvirt_6.2-08860-stable-runtest",
          "doc_count": 228402
        },
        {
          "key": "Interop_DASHost_Tier1_Min-affae-stable-runtest",
          "doc_count": 189120
        },
        {
          "key": "Interop_DASHost_Tier1-bb374-stable-runtest",
          "doc_count": 186624
        },
        {
          "key": "Interop_DASHost_Tier3-287a2-stable-runtest",
          "doc_count": 183356
        },
        {
          "key": "Interop_DASHost_Tier2-ed4d4-stable-runtest",
          "doc_count": 172382
        }
      ]
    }
  }
}

export const mockPackageBuildResponse = {
  "took": 11,
  "timed_out": false,
  "_shards": {
    "total": 3,
    "successful": 3,
    "failed": 0
  },
  "hits": {
    "total": 199786,
    "max_score": 0,
    "hits": []
  },
  "aggregations": {
    "buildID_list": {
      "doc_count_error_upper_bound": 0,
      "sum_other_doc_count": 0,
      "buckets": [
        {
          "key": 161,
          "doc_count": 14689
        },
        {
          "key": 166,
          "doc_count": 14689
        },
        {
          "key": 168,
          "doc_count": 14689
        },
        {
          "key": 171,
          "doc_count": 14689
        },
        {
          "key": 159,
          "doc_count": 14687
        },
        {
          "key": 162,
          "doc_count": 14687
        },
        {
          "key": 163,
          "doc_count": 14687
        },
        {
          "key": 160,
          "doc_count": 14683
        },
        {
          "key": 167,
          "doc_count": 14683
        },
        {
          "key": 169,
          "doc_count": 14683
        },
        {
          "key": 164,
          "doc_count": 14681
        },
        {
          "key": 158,
          "doc_count": 14679
        },
        {
          "key": 165,
          "doc_count": 14679
        },
        {
          "key": 157,
          "doc_count": 8881
        }
      ]
    }
  }
}

export const mockTestData = {
  "took": 4,
  "timed_out": false,
  "_shards": {
    "total": 3,
    "successful": 3,
    "failed": 0
  },
  "hits": {
    "total": 14689,
    "max_score": 0,
    "hits": []
  },
  "aggregations": {
    "testcase_state": {
      "doc_count_error_upper_bound": 0,
      "sum_other_doc_count": 0,
      "buckets": [
        {
          "key": "Successful",
          "doc_count": 13
        },
        {
          "key": "passed",
          "doc_count": 1
        }
      ]
    }
  }
}
