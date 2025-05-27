import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TaskComponent } from './task.component';
import { By } from '@angular/platform-browser';

describe('TaskComponent', () => {
  let component: TaskComponent;
  let fixture: ComponentFixture<TaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskComponent, RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(TaskComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render task text and link', () => {
    component.task = 'Test Task';
    component.link = '/test-link';
    component.id = 'task-1';
    fixture.detectChanges();

    const anchor = fixture.debugElement.query(By.css('a')).nativeElement;
    expect(anchor.textContent).toContain('Test Task');
    expect(anchor.getAttribute('href')).toBe('/test-link');
    expect(anchor.getAttribute('id')).toBe('task-1');
  });
});
