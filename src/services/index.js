import _ from 'lodash'

/**
 * createDesk - создает колоду из 36 карт
 * @return {[type]}
 */
export function createDesk () {

    var desk = []
    var suits = ['Черви', 'Буби', 'Пики', 'Трефы'];
    var cards = ['6', '7', '8', '9', '10', 'Валет', 'Дама', 'Король', 'Туз'];

    cards.forEach(function (i, index) {
        suits.forEach(function (y) {
            desk.push({'name': i, 'suit': y, 'value': index+1})
        })
    })

    return desk;
}


/**
 * giveOutCards - перемешивает колоду и делит ее на два равных по длине массива
 * @return {[type]} [description]
 */
export function giveOutCards (arr) {

    var newArr = [];
    var shuffleArr = _.shuffle(arr)
    var firstArr = _.drop(shuffleArr, 18)
    var secondArr = _.dropRight(shuffleArr, 18)
    newArr.push(firstArr)
    newArr.push(secondArr)

    return newArr
}

/**
 * addTextResult возвращает сообщение в зависимости от результата
 * @param {[type]} cardF [description]
 * @param {[type]} cardS [description]
 */
export function addTextResult(cardF, cardS) {

  var first = cardF.name + ' ' + cardF.suit;
  var second = cardS.name + ' ' + cardS.suit;
  if (cardF.value > cardS.value) return first + ' больше, чем ' + second + '. Карты ушли к Игроку1.'
  if (cardF.value < cardS.value) return second + ' больше, чем ' + first + '. Карты ушли к Игроку2.'
  if (cardF.value == cardS.value) return 'Спор. Карты: ' + first + ' и ' + second
}