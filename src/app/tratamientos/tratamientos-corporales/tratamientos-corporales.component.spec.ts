import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TratamientosCorporalesComponent } from './tratamientos-corporales.component';

describe('TratamientosCorporalesComponent', () => {
  let component: TratamientosCorporalesComponent;
  let fixture: ComponentFixture<TratamientosCorporalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TratamientosCorporalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TratamientosCorporalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
