import { HttpModule, JsonpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { pipelineReducer } from '../pipeline.reducer'
import { Pipeline, PackageBuild } from '../pipeline.model'
import { LoadPipelinesAction, LoadPackageBuildsAction } from '../pipeline.actions'

import { TestBed, inject } from '@angular/core/testing';
import { XHRBackend, Http, Response, BaseRequestOptions, ConnectionBackend, ResponseOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { PipelineXhrService } from './pipeline-xhr.service';
import { Store } from '@ngrx/store';
import { AppStore } from '../../app.store';

import { mockPipelinesResponse, mockPackageBuildResponse, mockTestData } from './mock.data';

describe('PipelineXhrService', () => {
  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule, BrowserModule, StoreModule.provideStore({pipelineReducer}) ],
      providers: [ PipelineXhrService, MockBackend, XHRBackend, BaseRequestOptions,
        {
          provide: Http,
          deps: [ MockBackend, BaseRequestOptions], // Replace MockBackend here with XHRBackend for a real request
          useFactory:
            (backend: ConnectionBackend, defaultOptions: BaseRequestOptions) => {
              return new Http(backend, defaultOptions);
            }
        }
      ]
    });
  });

  describe('Pipeline', () => {
    let service: PipelineXhrService;

    beforeEach(inject([PipelineXhrService, MockBackend], (_service: PipelineXhrService, mockBackend: MockBackend) => {
      // Mock the response from the http backend
      mockBackend.connections.subscribe(conn => {
        conn.mockRespond(new Response(new ResponseOptions({ body: JSON.stringify(mockPipelinesResponse)})));
      });
      service = _service;
    }));

    it('should be created', async() => {
      expect(service).toBeTruthy();
    });

    it('should return data', async() => {
      // Initiate the request
      service['getPipelines']().subscribe(pipelines => {
        expect(pipelines.length).toEqual(mockPipelinesResponse.aggregations.job_list.buckets.length);
      }, error => {
        console.error(error);
      });
    });

    it('should update the store', inject( [ Store ], ( store: Store<AppStore> ) => {
      // Initiate the request
      service.loadPipelines();
      store.select(store => store.pipelineReducer.pipelines)
      .subscribe(state => {
        expect(state.length).toEqual(mockPipelinesResponse.aggregations.job_list.buckets.length);
      }, error => {
        console.error(error);
      });


    }));
  });

  describe('PackageBuilds', () => {
    let service: PipelineXhrService;
    let pipeline = new Pipeline('Interop-RHSatellite_6.3-b3a8a-stable-runtest', 0);

    beforeEach(inject([PipelineXhrService, MockBackend], (_service: PipelineXhrService, mockBackend: MockBackend) => {
      // Mock the response from the http backend
      mockBackend.connections.subscribe(conn => {
        conn.mockRespond(new Response(new ResponseOptions({ body: JSON.stringify(mockPackageBuildResponse)})));
      });
      service = _service;
    }));

    it('should be created', async() => {
      expect(service).toBeTruthy();
    });

    it('should return data', async() => {
      // Initiate the request
      service['getPackageBuilds'](pipeline).subscribe(packageBuilds => {
        expect(packageBuilds.length).toEqual(mockPackageBuildResponse.aggregations.buildID_list.buckets.length);
      }, error => {
        console.error(error);
      });
    });

    it('should update the store', inject( [ Store ], ( store: Store<AppStore> ) => {
      // Load the mock pipline data into the store
      store.dispatch(new LoadPipelinesAction(mockPipelinesResponse.aggregations.job_list.buckets.map(obj => {return new Pipeline(obj.key, obj.doc_count)})));
      service.loadPackageBuilds(pipeline);
      store.select(store => store.pipelineReducer.pipelines)
      .subscribe(state => {
        let updatedPipeline = state.filter(_pipeline => {
          return _pipeline.key = pipeline.key;
        })[0];
        expect(updatedPipeline.packageBuilds.length).toEqual(mockPackageBuildResponse.aggregations.buildID_list.buckets.length);
      }, error => {
        console.error(error);
      });


    }));
  });

  describe('TestCases', () => {
    let service: PipelineXhrService;
    let pipeline = new Pipeline('Interop-RHSatellite_6.3-b3a8a-stable-runtest', 0);
    let packageBuild = new PackageBuild(166, 0);

    beforeEach(inject([PipelineXhrService, MockBackend], (_service: PipelineXhrService, mockBackend: MockBackend) => {
      // Mock the response from the http backend
      mockBackend.connections.subscribe(conn => {
        conn.mockRespond(new Response(new ResponseOptions({ body: JSON.stringify(mockTestData)})));
      });
      service = _service;
    }));

    it('should be created', async() => {
      expect(service).toBeTruthy();
    });

    it('should return data', async() => {
      // Initiate the request
      service['getPackageBuilds'](pipeline).subscribe(packageBuilds => {
        expect(packageBuilds.length).toEqual(mockTestData.aggregations.testcase_state.buckets.length);
      }, error => {
        console.error(error);
      });
    });

    it('should update the store', inject( [ Store ], ( store: Store<AppStore> ) => {
      // Load the mock pipline data into the store
      store.dispatch(new LoadPipelinesAction(mockPipelinesResponse.aggregations.job_list.buckets.map(obj => {return new Pipeline(obj.key, obj.doc_count)})));
      pipeline.packageBuilds = mockPackageBuildResponse.aggregations.buildID_list.buckets.map(obj => {return new PackageBuild(obj.key, obj.doc_count)});
      store.dispatch(new LoadPackageBuildsAction(pipeline));
      service.loadTestCases(pipeline, packageBuild);
      store.select(store => store.pipelineReducer.testCases)
      .subscribe(state => {
        expect(state.length).toEqual(mockTestData.aggregations.testcase_state.buckets.length);
      }, error => {
        console.error(error);
      });


    }));
  });
});
