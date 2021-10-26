import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-author-card',
  templateUrl: './author-card.component.html',
  styleUrls: ['./author-card.component.css']
})
export class AuthorCardComponent {

  @Input() author?: string;

  @Input() genre?: string;

  @Output() public toggled = new EventEmitter();

  toggleIsShowingAuthorQuotes(): void {
    this.toggled.emit();
  }
}
