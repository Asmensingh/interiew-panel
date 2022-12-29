import { Injectable } from '@angular/core';
import {BehaviorSubject  } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class ShareDataService {
  

  constructor() { }
  // QuestionId
  private questionId = new BehaviorSubject('');
  sharedQuestionId = this.questionId.asObservable();
  nextQuestionId(message: string) {
    this.questionId.next(message)
  }
}
