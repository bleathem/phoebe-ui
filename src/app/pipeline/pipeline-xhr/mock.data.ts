export const mockPipelinesResponse = {
  'took': 112,
  'timed_out': false,
  '_shards': {
    'total': 3,
    'successful': 3,
    'failed': 0
  },
  'hits': {
    'total': 2937729,
    'max_score': 0,
    'hits': []
  },
  'aggregations': {
    'job_list': {
      'doc_count_error_upper_bound': 0,
      'sum_other_doc_count': 0,
      'buckets': [
        {
          'key': 'Interop-RHSatellite_libvirt_6.1-d97ae-stable-runtest',
          'doc_count': 234671
        },
        {
          'key': 'Interop-RHSatellite_6.3-b3a8a-stable-runtest',
          'doc_count': 228902
        },
        {
          'key': 'Interop-RHSatellite_libvirt_6.2-08860-stable-runtest',
          'doc_count': 228402
        },
        {
          'key': 'Interop_DASHost_Tier1_Min-affae-stable-runtest',
          'doc_count': 189120
        },
        {
          'key': 'Interop_DASHost_Tier1-bb374-stable-runtest',
          'doc_count': 186624
        },
        {
          'key': 'Interop_DASHost_Tier3-287a2-stable-runtest',
          'doc_count': 183356
        },
        {
          'key': 'Interop_DASHost_Tier2-ed4d4-stable-runtest',
          'doc_count': 172382
        }
      ]
    }
  }
}

export const mockPackageBuildResponse = {
  'took': 11,
  'timed_out': false,
  '_shards': {
    'total': 3,
    'successful': 3,
    'failed': 0
  },
  'hits': {
    'total': 199786,
    'max_score': 0,
    'hits': []
  },
  'aggregations': {
    'buildID_list': {
      'doc_count_error_upper_bound': 0,
      'sum_other_doc_count': 0,
      'buckets': [
        {
          'key': 161,
          'doc_count': 14689
        },
        {
          'key': 166,
          'doc_count': 14689
        },
        {
          'key': 168,
          'doc_count': 14689
        },
        {
          'key': 171,
          'doc_count': 14689
        },
        {
          'key': 159,
          'doc_count': 14687
        },
        {
          'key': 162,
          'doc_count': 14687
        },
        {
          'key': 163,
          'doc_count': 14687
        },
        {
          'key': 160,
          'doc_count': 14683
        },
        {
          'key': 167,
          'doc_count': 14683
        },
        {
          'key': 169,
          'doc_count': 14683
        },
        {
          'key': 164,
          'doc_count': 14681
        },
        {
          'key': 158,
          'doc_count': 14679
        },
        {
          'key': 165,
          'doc_count': 14679
        },
        {
          'key': 157,
          'doc_count': 8881
        }
      ]
    }
  }
}

export const mockTestData = {
  'took': 5,
  'timed_out': false,
  '_shards': {
    'total': 3,
    'successful': 3,
    'failed': 0
  },
  'hits': {
    'total': 14779,
    'max_score': 0,
    'hits': []
  },
  'aggregations': {
    'testsuite_name': {
      'doc_count_error_upper_bound': 0,
      'sum_other_doc_count': 0,
      'buckets': [
        {
          'key': 'ci_framework',
          'doc_count': 14,
          'testcase_state': {
            'doc_count_error_upper_bound': 0,
            'sum_other_doc_count': 0,
            'buckets': [
              {
                'key': 'Successful',
                'doc_count': 13
              },
              {
                'key': 'passed',
                'doc_count': 1
              }
            ]
          }
        }
      ]
    }
  }
}

export const queryAllPipelinesAndPackageBuildsMockResponse = {
  'took': 207,
  'timed_out': false,
  '_shards': {
    'total': 3,
    'successful': 3,
    'failed': 0
  },
  'hits': {
    'total': 3010454,
    'max_score': 0,
    'hits': []
  },
  'aggregations': {
    'job_name': {
      'doc_count_error_upper_bound': 0,
      'sum_other_doc_count': 0,
      'buckets': [
        {
          'key': 'Interop-RHSatellite_libvirt_6.1-d97ae-stable-runtest',
          'doc_count': 256367,
          'build_agg': {
            'doc_count_error_upper_bound': 0,
            'sum_other_doc_count': 102775,
            'buckets': [
              {
                'key': 168,
                'doc_count': 21259
              },
              {
                'key': 162,
                'doc_count': 14779
              },
              {
                'key': 166,
                'doc_count': 14705
              },
              {
                'key': 164,
                'doc_count': 14697
              },
              {
                'key': 154,
                'doc_count': 14695
              },
              {
                'key': 165,
                'doc_count': 14695
              },
              {
                'key': 161,
                'doc_count': 14693
              },
              {
                'key': 156,
                'doc_count': 14691
              },
              {
                'key': 160,
                'doc_count': 14691
              },
              {
                'key': 167,
                'doc_count': 14687
              }
            ]
          }
        },
        {
          'key': 'Interop-RHSatellite_6.3-b3a8a-stable-runtest',
          'doc_count': 249761,
          'build_agg': {
            'doc_count_error_upper_bound': 0,
            'sum_other_doc_count': 102786,
            'buckets': [
              {
                'key': 188,
                'doc_count': 14775
              },
              {
                'key': 187,
                'doc_count': 14695
              },
              {
                'key': 184,
                'doc_count': 14693
              },
              {
                'key': 182,
                'doc_count': 14691
              },
              {
                'key': 180,
                'doc_count': 14689
              },
              {
                'key': 185,
                'doc_count': 14688
              },
              {
                'key': 190,
                'doc_count': 14687
              },
              {
                'key': 191,
                'doc_count': 14687
              },
              {
                'key': 179,
                'doc_count': 14685
              },
              {
                'key': 181,
                'doc_count': 14685
              }
            ]
          }
        },
        {
          'key': 'Interop-RHSatellite_libvirt_6.2-08860-stable-runtest',
          'doc_count': 237733,
          'build_agg': {
            'doc_count_error_upper_bound': 0,
            'sum_other_doc_count': 88086,
            'buckets': [
              {
                'key': 152,
                'doc_count': 15765
              },
              {
                'key': 146,
                'doc_count': 15557
              },
              {
                'key': 145,
                'doc_count': 15497
              },
              {
                'key': 150,
                'doc_count': 14697
              },
              {
                'key': 149,
                'doc_count': 14693
              },
              {
                'key': 154,
                'doc_count': 14691
              },
              {
                'key': 151,
                'doc_count': 14689
              },
              {
                'key': 144,
                'doc_count': 14688
              },
              {
                'key': 147,
                'doc_count': 14685
              },
              {
                'key': 155,
                'doc_count': 14685
              }
            ]
          }
        },
        {
          'key': 'Interop_DASHost_Tier1-bb374-stable-runtest',
          'doc_count': 203873,
          'build_agg': {
            'doc_count_error_upper_bound': 0,
            'sum_other_doc_count': 10743,
            'buckets': [
              {
                'key': 251,
                'doc_count': 27858
              },
              {
                'key': 253,
                'doc_count': 23886
              },
              {
                'key': 255,
                'doc_count': 23379
              },
              {
                'key': 248,
                'doc_count': 18178
              },
              {
                'key': 249,
                'doc_count': 17649
              },
              {
                'key': 254,
                'doc_count': 17517
              },
              {
                'key': 250,
                'doc_count': 16854
              },
              {
                'key': 247,
                'doc_count': 16129
              },
              {
                'key': 245,
                'doc_count': 15941
              },
              {
                'key': 246,
                'doc_count': 15739
              }
            ]
          }
        },
        {
          'key': 'Interop_DASHost_Tier2-ed4d4-stable-runtest',
          'doc_count': 202811,
          'build_agg': {
            'doc_count_error_upper_bound': 0,
            'sum_other_doc_count': 21493,
            'buckets': [
              {
                'key': 272,
                'doc_count': 27945
              },
              {
                'key': 273,
                'doc_count': 21054
              },
              {
                'key': 269,
                'doc_count': 21046
              },
              {
                'key': 275,
                'doc_count': 18192
              },
              {
                'key': 276,
                'doc_count': 18112
              },
              {
                'key': 274,
                'doc_count': 17800
              },
              {
                'key': 277,
                'doc_count': 17793
              },
              {
                'key': 270,
                'doc_count': 15648
              },
              {
                'key': 278,
                'doc_count': 12981
              },
              {
                'key': 279,
                'doc_count': 10747
              }
            ]
          }
        },
        {
          'key': 'Interop_DASHost_Tier1_Min-affae-stable-runtest',
          'doc_count': 199278,
          'build_agg': {
            'doc_count_error_upper_bound': 0,
            'sum_other_doc_count': 10745,
            'buckets': [
              {
                'key': 247,
                'doc_count': 25686
              },
              {
                'key': 250,
                'doc_count': 22575
              },
              {
                'key': 248,
                'doc_count': 20751
              },
              {
                'key': 243,
                'doc_count': 18847
              },
              {
                'key': 244,
                'doc_count': 18280
              },
              {
                'key': 251,
                'doc_count': 17824
              },
              {
                'key': 249,
                'doc_count': 16858
              },
              {
                'key': 246,
                'doc_count': 16212
              },
              {
                'key': 245,
                'doc_count': 15873
              },
              {
                'key': 242,
                'doc_count': 15627
              }
            ]
          }
        },
        {
          'key': 'Interop_DASHost_Tier3-287a2-stable-runtest',
          'doc_count': 195440,
          'build_agg': {
            'doc_count_error_upper_bound': 0,
            'sum_other_doc_count': 10749,
            'buckets': [
              {
                'key': 264,
                'doc_count': 23561
              },
              {
                'key': 266,
                'doc_count': 21053
              },
              {
                'key': 265,
                'doc_count': 19544
              },
              {
                'key': 273,
                'doc_count': 19073
              },
              {
                'key': 271,
                'doc_count': 17845
              },
              {
                'key': 272,
                'doc_count': 17706
              },
              {
                'key': 268,
                'doc_count': 17641
              },
              {
                'key': 267,
                'doc_count': 16615
              },
              {
                'key': 269,
                'doc_count': 15975
              },
              {
                'key': 270,
                'doc_count': 15678
              }
            ]
          }
        },
        {
          'key': 'Interop-OSP_10-OCP_3.4-MLibVirt-HA-smoke-70e5f-stable-runtest',
          'doc_count': 152569,
          'build_agg': {
            'doc_count_error_upper_bound': 0,
            'sum_other_doc_count': 0,
            'buckets': [
              {
                'key': 252,
                'doc_count': 16995
              },
              {
                'key': 254,
                'doc_count': 16995
              },
              {
                'key': 258,
                'doc_count': 16988
              },
              {
                'key': 256,
                'doc_count': 16986
              },
              {
                'key': 251,
                'doc_count': 16985
              },
              {
                'key': 250,
                'doc_count': 16963
              },
              {
                'key': 257,
                'doc_count': 16955
              },
              {
                'key': 255,
                'doc_count': 16944
              },
              {
                'key': 253,
                'doc_count': 16758
              }
            ]
          }
        },
        {
          'key': 'Interop-OSP_9-CFME_4.0-MLibVirt-smoke-5f7e8-stable-runtest',
          'doc_count': 148014,
          'build_agg': {
            'doc_count_error_upper_bound': 0,
            'sum_other_doc_count': 0,
            'buckets': [
              {
                'key': 260,
                'doc_count': 16464
              },
              {
                'key': 254,
                'doc_count': 16455
              },
              {
                'key': 255,
                'doc_count': 16455
              },
              {
                'key': 257,
                'doc_count': 16455
              },
              {
                'key': 256,
                'doc_count': 16446
              },
              {
                'key': 259,
                'doc_count': 16446
              },
              {
                'key': 258,
                'doc_count': 16437
              },
              {
                'key': 253,
                'doc_count': 16428
              },
              {
                'key': 261,
                'doc_count': 16428
              }
            ]
          }
        },
        {
          'key': 'Interop-CIF_Verify_PassFailSkip-iits_cif-stage-162bc-stable-runtest',
          'doc_count': 145578,
          'build_agg': {
            'doc_count_error_upper_bound': 0,
            'sum_other_doc_count': 54411,
            'buckets': [
              {
                'key': 516,
                'doc_count': 9141
              },
              {
                'key': 505,
                'doc_count': 9138
              },
              {
                'key': 518,
                'doc_count': 9117
              },
              {
                'key': 506,
                'doc_count': 9114
              },
              {
                'key': 509,
                'doc_count': 9114
              },
              {
                'key': 512,
                'doc_count': 9114
              },
              {
                'key': 515,
                'doc_count': 9114
              },
              {
                'key': 507,
                'doc_count': 9105
              },
              {
                'key': 510,
                'doc_count': 9105
              },
              {
                'key': 511,
                'doc_count': 9105
              }
            ]
          }
        },
        {
          'key': 'Interop-OSP_10-OCP_3.4-MLibVirt-smoke-1e0f6-stable-runtest',
          'doc_count': 145159,
          'build_agg': {
            'doc_count_error_upper_bound': 0,
            'sum_other_doc_count': 0,
            'buckets': [
              {
                'key': 316,
                'doc_count': 16151
              },
              {
                'key': 319,
                'doc_count': 16142
              },
              {
                'key': 312,
                'doc_count': 16126
              },
              {
                'key': 313,
                'doc_count': 16124
              },
              {
                'key': 314,
                'doc_count': 16124
              },
              {
                'key': 315,
                'doc_count': 16124
              },
              {
                'key': 317,
                'doc_count': 16124
              },
              {
                'key': 318,
                'doc_count': 16124
              },
              {
                'key': 320,
                'doc_count': 16120
              }
            ]
          }
        },
        {
          'key': 'Interop-OSP_9-MLibVirt-smoke-b3f3d-stable-runtest',
          'doc_count': 120080,
          'build_agg': {
            'doc_count_error_upper_bound': 0,
            'sum_other_doc_count': 0,
            'buckets': [
              {
                'key': 167,
                'doc_count': 25969
              },
              {
                'key': 166,
                'doc_count': 25865
              },
              {
                'key': 170,
                'doc_count': 25865
              },
              {
                'key': 168,
                'doc_count': 25173
              },
              {
                'key': 169,
                'doc_count': 17208
              }
            ]
          }
        },
        {
          'key': 'Interop-RHSatellite_6.3-b3a8a-stable-provision',
          'doc_count': 69951,
          'build_agg': {
            'doc_count_error_upper_bound': 0,
            'sum_other_doc_count': 28717,
            'buckets': [
              {
                'key': 194,
                'doc_count': 4131
              },
              {
                'key': 195,
                'doc_count': 4131
              },
              {
                'key': 179,
                'doc_count': 4124
              },
              {
                'key': 182,
                'doc_count': 4124
              },
              {
                'key': 188,
                'doc_count': 4124
              },
              {
                'key': 189,
                'doc_count': 4124
              },
              {
                'key': 190,
                'doc_count': 4124
              },
              {
                'key': 192,
                'doc_count': 4124
              },
              {
                'key': 187,
                'doc_count': 4118
              },
              {
                'key': 180,
                'doc_count': 4110
              }
            ]
          }
        },
        {
          'key': 'Interop-CIF_Verify_PassFailSkip-iits_cif-stage-162bc-stable-provision',
          'doc_count': 69488,
          'build_agg': {
            'doc_count_error_upper_bound': 0,
            'sum_other_doc_count': 28235,
            'buckets': [
              {
                'key': 523,
                'doc_count': 4138
              },
              {
                'key': 524,
                'doc_count': 4138
              },
              {
                'key': 526,
                'doc_count': 4132
              },
              {
                'key': 525,
                'doc_count': 4131
              },
              {
                'key': 537,
                'doc_count': 4130
              },
              {
                'key': 535,
                'doc_count': 4124
              },
              {
                'key': 538,
                'doc_count': 4118
              },
              {
                'key': 531,
                'doc_count': 4116
              },
              {
                'key': 534,
                'doc_count': 4116
              },
              {
                'key': 529,
                'doc_count': 4110
              }
            ]
          }
        },
        {
          'key': 'Interop-CIF_Verify_AllPass-iits_cif-stage-aab19',
          'doc_count': 994,
          'build_agg': {
            'doc_count_error_upper_bound': 0,
            'sum_other_doc_count': 0,
            'buckets': [
              {
                'key': 122,
                'doc_count': 994
              }
            ]
          }
        }
      ]
    }
  }
}
