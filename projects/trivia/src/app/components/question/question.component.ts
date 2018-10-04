import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import { Question, Answer, User } from '../../../../../shared-library/src/lib/shared/model';
import { AppState, appState, categoryDictionary } from '../../store';
import { Store, select } from '@ngrx/store';
import { QuestionActions } from '../../../../../shared-library/src/lib/core/store/actions';
import { Utils } from '../../../../../shared-library/src/lib/core/services';

@Component({
  selector: 'question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent {
  question: Question;
  @Input() userDict: { [key: string]: User };

  @Output() answerClicked = new EventEmitter<number>();
  @Output() continueClicked = new EventEmitter();

  answeredText: string;
  correctAnswerText: string;

  constructor(private store: Store<AppState>, private questionAction: QuestionActions) {
    this.answeredText = '';
    this.correctAnswerText = '';
    this.store.select(appState.coreState).pipe(select(s => s.questionOfTheDay)).subscribe(questionOfTheDay => {
      if (questionOfTheDay) {
        this.question = questionOfTheDay;
        this.question.answers = Utils.changeAnswerOrder(questionOfTheDay.answers);
        this.question.answers.forEach((item, index) => {
          if (item.correct === true) {
            this.correctAnswerText = item.answerText;
          }
        });
      }
    });
  }

  answerButtonClicked(answer: Answer) {
    if (this.answeredText !== '')
      return;
    this.answeredText = answer.answerText;
    const index = this.question.answers.findIndex(x => x.answerText === answer.answerText);
    this.answerClicked.emit(index);
  }

  getNextQuestion() {
    this.answeredText = '';
    this.correctAnswerText = '';
    this.store.dispatch(this.questionAction.getQuestionOfTheDay());

  }

}
