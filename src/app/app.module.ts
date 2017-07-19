import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
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
import { PipelineEffects } from './pipeline/pipeline-effects';
import { NotificationEffects } from './notifications/notification.effects';

import { AppComponent } from './app.component';

import { AppErrorHandler } from './error.handler';

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
    StoreDevtoolsModule.instrumentOnlyWithExtension({
      maxAge: 5
    }),
    EffectsModule.run(PipelineEffects),
    EffectsModule.run(NotificationEffects),
    StoreDevtoolsModule.instrumentOnlyWithExtension()
  ],
  providers: [ { provide: ErrorHandler, useClass: AppErrorHandler } ],
  bootstrap: [AppComponent],
  entryComponents: [NotificationComponent]
})
export class AppModule { }
