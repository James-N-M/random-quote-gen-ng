import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RandomQuoteComponent } from './random-quote/random-quote.component';
import { AuthorQuotesComponent } from './author-quotes/author-quotes.component';

const routes: Routes = [
  { path: '', redirectTo: '/random-quote', pathMatch: 'full' },
  { path: 'random-quote', component: RandomQuoteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
