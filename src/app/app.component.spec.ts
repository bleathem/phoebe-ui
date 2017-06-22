import { TestBed, async } from '@angular/core/testing';

import { ReportsModule } from './reports/reports.module';
import { DataMockModule } from './data-mock/data-mock.module';
import { AppComponent } from './app.component';
import { PipelineSelectionComponent } from './pipeline-selection/pipeline-selection.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        PipelineSelectionComponent
      ],
      imports: [
        ReportsModule,
        DataMockModule
      ]
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
