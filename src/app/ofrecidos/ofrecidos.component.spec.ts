import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfrecidosComponent } from './ofrecidos.component';

describe('OfrecidosComponent', () => {
  let component: OfrecidosComponent;
  let fixture: ComponentFixture<OfrecidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OfrecidosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfrecidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
