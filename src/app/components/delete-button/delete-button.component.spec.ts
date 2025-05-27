import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeleteButtonComponent } from './delete-button.component';
import { TimeReportService } from 'app/services/timereport.service';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

describe('DeleteButtonComponent', () => {
  let component: DeleteButtonComponent;
  let fixture: ComponentFixture<DeleteButtonComponent>;
  let mockReportService: jasmine.SpyObj<TimeReportService>;

  beforeEach(async () => {
    mockReportService = jasmine.createSpyObj('TimeReportService', ['deleteReport']);

    await TestBed.configureTestingModule({
      imports: [DeleteButtonComponent],  // Använd imports istället för declarations för standalone-komponenter
      providers: [{ provide: TimeReportService, useValue: mockReportService }]
    }).compileComponents();

    fixture = TestBed.createComponent(DeleteButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should call deleteProject when button is clicked', () => {
    spyOn(component, 'deleteProject');

    const button = fixture.debugElement.query(By.css('button'));
    button.triggerEventHandler('click', new Event('click'));

    expect(component.deleteProject).toHaveBeenCalled();
  });

  it('should emit deleted event when reportService.deleteReport succeeds', () => {
    const projectId = 'abc123';
    component.projectId = projectId;
    mockReportService.deleteReport.and.returnValue(of({}));

    spyOn(component.deleted, 'emit');

    component.deleteProject(new Event('click'));

    expect(component.deleted.emit).toHaveBeenCalledWith(projectId);
  });
});
