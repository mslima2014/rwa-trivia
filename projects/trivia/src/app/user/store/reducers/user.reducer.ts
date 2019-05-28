import { Question, User } from 'shared-library/shared/model';
import { UserActions, UserActionTypes } from '../actions';

// Load User Published Question by userId
export function userPublishedQuestions(state: any = [], action: UserActions): Question[] {
    switch (action.type) {
        case UserActionTypes.LOAD_USER_PUBLISHED_QUESTIONS_SUCCESS:
            return action.payload;
        default:
            return state;
    }
}

// Load User Unpublished Question by userId
export function userUnpublishedQuestions(state: any = [], action: UserActions): Question[] {
    switch (action.type) {
        case UserActionTypes.LOAD_USER_UNPUBLISHED_QUESTIONS_SUCCESS:
            return action.payload;
        default:
            return state;
    }
}


export function checkDisplayName(state: any = null, action: UserActions): boolean {
    switch (action.type) {
        case UserActionTypes.CHECK_DISPLAY_NAME_SUCCESS:
            return action.payload;
        default:
            return state;
    }
}

