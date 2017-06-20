import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReportsModule } from './reports/reports.module';
import { DataMockModule } from './data-mock/data-mock.module';

import { AppComponent } from './app.component';
import { PipelineSelectionComponent } from './pipeline-selection/pipeline-selection.component';

@NgModule({
  declarations: [
    AppComponent,
    PipelineSelectionComponent
  ],
  imports: [
    BrowserModule,
    ReportsModule,
    DataMockModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
