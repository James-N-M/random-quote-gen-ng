import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatProgressSpinner, MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RandomQuoteComponent } from './random-quote/random-quote.component';
import { AuthorQuotesComponent } from './author-quotes/author-quotes.component';
import { QuoteComponent } from './quote/quote.component';
import { AuthorCardComponent } from './author-card/author-card.component';
import { TransparentButtonComponent } from './transparent-button/transparent-button.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NetworkInterceptor } from './network.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    RandomQuoteComponent,
    AuthorQuotesComponent,
    QuoteComponent,
    AuthorCardComponent,
    TransparentButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: NetworkInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
