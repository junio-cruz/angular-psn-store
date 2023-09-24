import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input()
  gameCover: string = '';

  @Input()
  gameLabel: string = '';

  @Input()
  price: string = '';

  @Input()
  midia: string = '';
  constructor() {
  }
  ngOnInit() {
  }
}
