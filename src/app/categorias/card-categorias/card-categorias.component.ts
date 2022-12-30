import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-categorias',
  templateUrl: './card-categorias.component.html',
  styleUrls: ['./card-categorias.component.scss']
})
export class CardCategoriasComponent {

  @Input()
  categorias: String[] = []
}
