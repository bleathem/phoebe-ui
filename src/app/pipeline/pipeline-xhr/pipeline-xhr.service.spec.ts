import { HttpModule, JsonpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { pipelines } from '../pipeline.reducer'

import { TestBed, inject } from '@angular/core/testing';
import { XHRBackend, Http, Response, BaseRequestOptions, ConnectionBackend, ResponseOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { PipelineXhrService } from './pipeline-xhr.service';
import { Store } from '@ngrx/store';
import { AppStore } from '../../app.store';

import { mockResponse } from './mock.data';

describe('ElasticService', () => {
  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule, BrowserModule, StoreModule.provideStore({pipelines}) ],
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

  let service: PipelineXhrService;

  beforeEach(inject([PipelineXhrService, MockBackend], (_service: PipelineXhrService, mockBackend: MockBackend) => {
    // Mock the response from the http backend
    mockBackend.connections.subscribe(conn => {
      conn.mockRespond(new Response(new ResponseOptions({ body: JSON.stringify(mockResponse)})));
    });
    service = _service;
  }));

  it('should be created', async() => {
    expect(service).toBeTruthy();
  });

  it('should return data', async() => {
    // Initiate the request
    service['getPackages']().subscribe(pipelines => {
      expect(pipelines.length).toEqual(mockResponse.aggregations.job_list.buckets.length);
    }, error => {
      console.error(error);
    });
  });

  it('should update the store', inject( [ Store ], ( store: Store<AppStore> ) => {
    // Initiate the request
    let count = 0;
    service.loadPackages();
    store.select(store => store.pipelines)
    .subscribe(state => {
      console.log('state', state);
      expect(state.pipelines.length).toEqual(mockResponse.aggregations.job_list.buckets.length);
    }, error => {
      console.error(error);
    });


  }));
});
