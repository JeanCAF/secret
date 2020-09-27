import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TratamientosRelajacionComponent } from './tratamientos-relajacion.component';

describe('TratamientosRelajacionComponent', () => {
  let component: TratamientosRelajacionComponent;
  let fixture: ComponentFixture<TratamientosRelajacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TratamientosRelajacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TratamientosRelajacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
