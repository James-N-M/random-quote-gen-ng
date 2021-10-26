import { Component, Input, OnInit } from '@angular/core';
import { QuoteComponent } from '../quote/quote.component';
import { Quote } from '../Quote';
import { QuoteService } from '../quote.service';

@Component({
  selector: 'app-author-quotes',
  templateUrl: './author-quotes.component.html',
  styleUrls: ['./author-quotes.component.css']
})
export class AuthorQuotesComponent implements OnInit {

  @Input() author?: string;

  authorQuotes: Quote[] = [];

  constructor(
    private quoteService: QuoteService
  ) { }

  ngOnInit(): void {
    this.getAuthorQuotes();
  }

  getAuthorQuotes(): void {
    if(this.author) {
      this.quoteService.getAuthorQuotes(this.author)
        .subscribe((quotes) => {
          this.authorQuotes = quotes.data;
        })
    }
  }

}
