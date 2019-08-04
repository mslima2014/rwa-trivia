import { Component, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { UserReaction } from './user-reaction';
import { Store } from '@ngrx/store';
import { GamePlayState } from '../../store';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';
import { Subscription } from 'rxjs';

@Component({
  selector: 'user-reaction',
  templateUrl: './user-reaction.component.html',
  styleUrls: ['./user-reaction.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

@AutoUnsubscribe({ 'arrayName': 'subscriptions' })
export class UserReactionComponent extends UserReaction implements OnDestroy {
  subscriptions: Subscription[] = [];
  constructor(public store: Store<GamePlayState>, public cd: ChangeDetectorRef) {
    super(store, cd);
  }

  ngOnDestroy() {

  }
}