export function startGame() {

  return {
    type: 'START_GAME'
  }

}

export function restartGame() {

  return {
    type: 'INIT_GAME'
  }

}

export function addCardsFirst(cards) {

  return {
    type: 'ADD_CARDS_F',
    payload: cards
  }

}

export function addCardsSecond(cards) {

  return {
    type: 'ADD_CARDS_S',
    payload: cards
  }

}

export function deleteFirst(cards) {

  return {
    type: 'DELETE_CARDS_F',
    payload: cards
  }

}

export function deleteSecond(cards) {

  return {
    type: 'DELETE_CARDS_S',
    payload: cards
  }

}

export function finish() {

  return {
    type: 'FINISH_GAME'
  }

}