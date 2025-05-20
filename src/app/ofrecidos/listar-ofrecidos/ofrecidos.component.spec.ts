import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListarOfrecidosComponent } from './ofrecidos.component';

describe('OfrecidosComponent', () => {
  let component: ListarOfrecidosComponent;
  let fixture: ComponentFixture<ListarOfrecidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListarOfrecidosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarOfrecidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
