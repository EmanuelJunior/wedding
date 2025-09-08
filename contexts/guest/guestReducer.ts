import { Guest, GuestState } from './GuestProvider';

type GuestActionType = 
  | { type: '[Guest] - Fetch Auth Guest', payload: Guest }

export const guestReducer = ( state: GuestState, action: GuestActionType ): GuestState => {

  switch( action.type ) {
    case '[Guest] - Fetch Auth Guest': 
      return {
        ...state,
        auth: action.payload,
      };
    default: 
      return state;
  }
}