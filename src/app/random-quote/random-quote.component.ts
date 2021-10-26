import { Component, OnInit } from '@angular/core';
import { Quote } from '../Quote';
import { QuoteService } from '../quote.service';

@Component({
  selector: 'app-random-quote',
  templateUrl: './random-quote.component.html',
  styleUrls: ['./random-quote.component.css']
})
export class RandomQuoteComponent implements OnInit {

  quote: Quote = {
    quoteAuthor: '',
    quoteGenre: '',
    quoteText: ''
  };

  isShowingAuthorQuotes: boolean = false;

  constructor(
    private quoteService: QuoteService,
  ) {}

  ngOnInit(): void {
    this.getRandomQuote();
  }

  getRandomQuote(): void {
    this.quoteService.getRandomQuote()
    .subscribe((quote) => {

      this.quote = quote.data[0];
      if(this.isShowingAuthorQuotes) {
        this.isShowingAuthorQuotes = false;
      }
    })
  }

  onIsShowingAuthorQuotesToggle(): void {
    this.isShowingAuthorQuotes = true;
  }
}
