import { Component, Input } from '@angular/core';
import {Filme } from '../../models'

@Component({
  selector: 'app-card-filme',
  templateUrl: './card-filme.component.html',
  styleUrls: ['./card-filme.component.scss']
})
export class CardFilmeComponent {
  @Input()
  filme: Filme = {};
}
