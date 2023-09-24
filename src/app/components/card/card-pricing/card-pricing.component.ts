import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card-pricing',
  templateUrl: './card-pricing.component.html',
  styleUrls: ['./card-pricing.component.scss']
})
export class CardPricingComponent implements OnInit {

  @Input()
  price: string = '';

  @Input()
  midia: string = '';
  constructor() {
  }

  ngOnInit(): void {

  }
}
