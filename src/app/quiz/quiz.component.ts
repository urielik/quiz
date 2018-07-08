import { Component, OnInit } from '@angular/core';
import { Question } from '../models/question';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  question : Question[] = [
    {QuetionText: "?היום יום ראשון", answers: 
     [{id: 1, text: "כן"},{id: 2, text: "לא"}], id: 1},
     {QuetionText: "?עכשיו לילה", answers: 
     [{id: 2, text: "כן"},{id: 2, text: "לא"}], id: 2},
     {QuetionText: "?אתה רעב", answers: 
     [{id: 3, text: "כן"},{id: 2, text: "לא"}], id: 3}
  ]

  constructor() { }

  ngOnInit() {

  }

}
