import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Question } from '../models/question';
import { Observable } from '../../../node_modules/rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private  http:HttpClient) {
  }

  getData(): Observable<Question>
  {
    return this.http.get<Question>('http://localhost:4200/assets/mock/questions.json');
  }
}