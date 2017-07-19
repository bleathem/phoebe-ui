import { TestBed, async } from '@angular/core/testing';
import {BrowserDynamicTestingModule} from '@angular/platform-browser-dynamic/testing';

import { ReportsModule } from './reports/reports.module';
import { PipelineModule } from './pipeline/pipeline.module';
import { NotificationsModule } from './notifications/notifications.module';
import { PipelineXhrModule } from './pipeline/pipeline-xhr/pipeline-xhr.module';
import { StoreModule } from '@ngrx/store';
import { pipelineReducer } from './pipeline/pipeline.reducer';
import { notificationReducer } from './notifications/notification.reducer';

import { AppComponent } from './app.component';
import { PipelineSelectionComponent } from './pipeline/pipeline-selection/pipeline-selection.component';
import { NotificationComponent } from './notifications/notification/notification.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.overrideModule(BrowserDynamicTestingModule, {
      set: {
        entryComponents: [NotificationComponent]
      }
    });
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        ReportsModule,
        PipelineModule,
        PipelineXhrModule,
        NotificationsModule,
        StoreModule.provideStore({
          pipelineReducer,
          notificationReducer
        })
      ],

    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('CI/CD Pipeline');
  });
});
