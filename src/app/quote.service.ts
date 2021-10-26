import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  private quoteUrl = 'https://quote-garden.herokuapp.com/api/v3/quotes';

  constructor(
    private http: HttpClient
  ) { }

  getRandomQuote(): Observable<any> {
    return this.http.get<any>(`${this.quoteUrl}/random`);
  }

  getAuthorQuotes(author: string): Observable<any> {
    return this.http.get<any>(`${this.quoteUrl}?author=${author}`);
  }
}
