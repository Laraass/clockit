import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTimereportComponent } from './create-timereport.component';

describe('CreateTimereportComponent', () => {
  let component: CreateTimereportComponent;
  let fixture: ComponentFixture<CreateTimereportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateTimereportComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateTimereportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
