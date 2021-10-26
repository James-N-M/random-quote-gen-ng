import { Component,EventEmitter,Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-transparent-button',
  templateUrl: './transparent-button.component.html',
  styleUrls: ['./transparent-button.component.css']
})
export class TransparentButtonComponent implements OnInit {

  @Input() label?: string;

  @Input() icon?: string;

  @Output() onClick = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onClickButton(event: any): void {
    this.onClick.emit(event);
  }
}
