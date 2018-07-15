import { Component, OnInit } from '@angular/core';
import { Question } from '../models/question';
import { DataService } from '../service/data.service';


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  question : Question;
  
  constructor(private data: DataService) {
    this.data.getData().subscribe(data =>{
      console.log(data);
      this.question = data;
    });
   }

  ngOnInit() {
  }
}
