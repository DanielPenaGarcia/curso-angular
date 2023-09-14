import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadoHijoComponentComponent } from './empleado-hijo-component.component';

describe('EmpleadoHijoComponentComponent', () => {
  let component: EmpleadoHijoComponentComponent;
  let fixture: ComponentFixture<EmpleadoHijoComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpleadoHijoComponentComponent]
    });
    fixture = TestBed.createComponent(EmpleadoHijoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
