import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeEditcComponent } from './employee-editc.component';

describe('EmployeeEditcComponent', () => {
  let component: EmployeeEditcComponent;
  let fixture: ComponentFixture<EmployeeEditcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeEditcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeEditcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
