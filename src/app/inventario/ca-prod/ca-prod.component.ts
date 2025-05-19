import { Component, Input } from '@angular/core';
import { Producto } from '../../models/producto';

@Component({//etiqueta personalizada
  selector: 'app-ca-prod', 
  standalone: false,
  templateUrl: './ca-prod.component.html',
  styleUrl: './ca-prod.component.css'
})
export class CaProdComponent {
  @Input() producto: Producto | undefined;
}
