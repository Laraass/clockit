import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TimeReportComponent } from './time-report.component';

describe('TimeReportComponent', () => {
  let component: TimeReportComponent;
  let fixture: ComponentFixture<TimeReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimeReportComponent, HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render project title in h2', () => {
    component.project = 'Test Project';
    fixture.detectChanges();

    const h2 = fixture.nativeElement.querySelector('h2');
    expect(h2.textContent).toContain('Test Project');
  });

});
