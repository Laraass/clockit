import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTimereportsComponent } from './all-timereports.component';

describe('AllTimereportsComponent', () => {
  let component: AllTimereportsComponent;
  let fixture: ComponentFixture<AllTimereportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllTimereportsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllTimereportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
