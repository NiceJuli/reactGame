import {
    START_GAME,
    FINISH_GAME,
    INIT_GAME,
    ADD_CARDS_F,
    DELETE_CARDS_F,
    ADD_CARDS_S,
    DELETE_CARDS_S
} from '../constants/Store'

export function stateGame (state = 'default', action) {
    switch (action.type) {
        case START_GAME:
          return 'game'
        case FINISH_GAME:
          return 'finish'
        case INIT_GAME:
          return 'default'
        default: return state
    }
}

export function deskFirst (state = [], action) {
    switch (action.type) {
        case ADD_CARDS_F:
          return action.payload 
        case DELETE_CARDS_F:
          return action.payload
        default: return state
    }
}

export function deskSecond (state = [], action) {
    switch (action.type) {
        case ADD_CARDS_S:
          return action.payload
        case DELETE_CARDS_S:
          return action.payload
        default: return state
    }
}