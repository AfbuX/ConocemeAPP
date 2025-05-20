import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaProdComponent } from './ca-prod.component';

describe('CaProdComponent', () => {
  let component: CaProdComponent;
  let fixture: ComponentFixture<CaProdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CaProdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
