import { HttpModule, JsonpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import { pipelineReducer } from '../pipeline.reducer'
import { Pipeline, PackageBuild } from '../pipeline.model'

import { async, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { XHRBackend, Http, Response, BaseRequestOptions, ConnectionBackend, ResponseOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { PipelineXhrService } from './pipeline-xhr.service';

import { mockPipelinesResponse, mockPackageBuildResponse, mockTestData, queryAllPipelinesAndPackageBuildsMockResponse } from './mock.data';

describe('PipelineXhrService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule, BrowserModule ],
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

    it('should be created', () => {
      expect(service).toBeTruthy();
    });

    it('should return data', () => {
      // Initiate the request
      service.getPipelines()
      .subscribe(pipelines => {
        return expect(pipelines.length).toEqual(mockPipelinesResponse.aggregations.job_list.buckets.length);
      }, error => {
        console.error(error);
        throw new Error(error);
      });
    });

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

    it('should be created', () => {
      expect(service).toBeTruthy();
    });

    it('should return data', () => {
      // Initiate the request
      service.getPackageBuilds(pipeline).subscribe(packageBuilds => {
        expect(packageBuilds.length).toEqual(mockPackageBuildResponse.aggregations.buildID_list.buckets.length);
      }, error => {
        console.error(error);
      });
    });

  });

  describe('AllPipelinesAndPackageBuilds', () => {
    let service: PipelineXhrService;

    beforeEach(inject([PipelineXhrService, MockBackend], (_service: PipelineXhrService, mockBackend: MockBackend) => {
      // Mock the response from the http backend
      mockBackend.connections.subscribe(conn => {
        conn.mockRespond(new Response(new ResponseOptions({ body: JSON.stringify(queryAllPipelinesAndPackageBuildsMockResponse)})));
      });
      service = _service;
    }));

    it('should be created', () => {
      expect(service).toBeTruthy();
    });

    it('should return data', () => {
      // Initiate the request
      return service.getAllPipelinesAndPackageBuilds().subscribe(pipelines => {
        console.log(pipelines)
        expect(pipelines.length).toEqual(queryAllPipelinesAndPackageBuildsMockResponse.aggregations.job_name.buckets.length);
      }, error => {
        console.error(error);
      });
    });
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

    it('should be created', () => {
      expect(service).toBeTruthy();
    });

    it('should return data', () => {
      // Initiate the request
      service.getTestSuites(pipeline, packageBuild).subscribe(testSuites => {
        expect(testSuites.length).toEqual(mockTestData.aggregations.testsuite_name.buckets.length);
      }, error => {
        throw new Error(error);
      });
    });

  });
});
