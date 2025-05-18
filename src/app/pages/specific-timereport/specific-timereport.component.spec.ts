import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificTimereportComponent } from './specific-timereport.component';

describe('SpecificTimereportComponent', () => {
  let component: SpecificTimereportComponent;
  let fixture: ComponentFixture<SpecificTimereportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecificTimereportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecificTimereportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
