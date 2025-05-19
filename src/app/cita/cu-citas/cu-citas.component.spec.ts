import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuCitasComponent } from './cu-citas.component';

describe('CuCitasComponent', () => {
  let component: CuCitasComponent;
  let fixture: ComponentFixture<CuCitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CuCitasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuCitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
