import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { NotificationsModule } from './notifications/notifications.module';
import { DataMockModule } from './data-mock/data-mock.module';
import { PipelineModule } from './pipeline/pipeline.module';
import { PipelineXhrModule } from './pipeline/pipeline-xhr/pipeline-xhr.module';
import { ReportsModule } from './reports/reports.module';

import { NotificationService } from './notifications/notification.service';
import { NotificationComponent } from './notifications/notification/notification.component';

import { pipelineReducer } from './pipeline/pipeline.reducer'
import { notificationReducer } from './notifications/notification.reducer'
import { PipelineEffects } from "./pipeline/pipeline-effects";

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
    NotificationsModule,
    StoreModule.provideStore({
      pipelineReducer,
      notificationReducer
    }),
    EffectsModule.run(PipelineEffects),
    StoreDevtoolsModule.instrumentOnlyWithExtension()
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [NotificationComponent]
})
export class AppModule { }
