import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTimereportComponent } from './edit-timereport.component';

describe('EditTimereportComponent', () => {
  let component: EditTimereportComponent;
  let fixture: ComponentFixture<EditTimereportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditTimereportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditTimereportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
