import { HttpModule, JsonpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import { TestBed, inject } from '@angular/core/testing';
import { XHRBackend, Http, Response, BaseRequestOptions, ConnectionBackend, ResponseOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { ElasticService } from './elastic.service';

import { mockResponse } from './mock.data';

describe('ElasticService', () => {
  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule, BrowserModule ],
      providers: [ ElasticService, MockBackend, XHRBackend, BaseRequestOptions,
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

  it('should be created', inject([ElasticService], (service: ElasticService) => {
    expect(service).toBeTruthy();
  }));

  it('should return data', inject([ElasticService, MockBackend], (service: ElasticService, mockBackend: MockBackend) => {
    // Mock the response from the http backend
    mockBackend.connections.subscribe(conn => {
      conn.mockRespond(new Response(new ResponseOptions({ body: JSON.stringify(mockResponse)})));
    });

    // Initiate the request
    service.getPackages().subscribe(result => {
      expect(result.length).toEqual(mockResponse.aggregations.job_list.buckets.length);
    }, error => {
      console.error(error);
    });
  }));
});
