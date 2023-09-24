import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card-label',
  templateUrl: './card-label.component.html',
  styleUrls: ['./card-label.component.scss']
})
export class CardLabelComponent implements OnInit {

  @Input()
  gameLabel: string = ''

  constructor() {
  }

  ngOnInit(): void {

  }
}
