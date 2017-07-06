import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';

import { DataMockModule } from './data-mock/data-mock.module';
import { PipelineModule } from './pipeline/pipeline.module';
import { PipelineXhrModule } from './pipeline/pipeline-xhr/pipeline-xhr.module';
import { ReportsModule } from './reports/reports.module';

import { pipelines } from './pipeline/pipeline.reducer'
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReportsModule,
    PipelineModule,
    PipelineXhrModule,
    DataMockModule,
    StoreModule.provideStore({
      pipelines
    }),
    StoreDevtoolsModule.instrumentOnlyWithExtension()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
