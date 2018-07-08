import { Component, OnInit,  Input, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  @Input() QuestionProp;
  @Output() gotofather: EventEmitter = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

}
