import React, { PropTypes, Component } from 'react'
import _ from 'lodash'
import {addTextResult} from '../services/index'

export default class Battlefield extends Component {
    constructor(props) {
        super(props)
        this.desk = [];
        this.newCardF = {};
        this.newCardS = {};
        this.resulList = [];
    }

  makeMove() {

    // Верхние карты из колоды на стол
    this.newCardF = this.props.first[0]
    this.newCardS = this.props.second[0]
    this.desk.push(this.newCardF)
    this.desk.push(this.newCardS)

    // Удалили верхние карты из колод
    var newDeskF = _.drop(this.props.first, 1)
    var newDeskS = _.drop(this.props.second, 1)
    this.props.deleteFirst(newDeskF)
    this.props.deleteSecond(newDeskS)

    // Добавили сообщение в лог игры
    this.resulList.unshift({index: this.resulList.length, text: addTextResult(this.newCardF, this.newCardS)})

    if (this.newCardF.value == this.newCardS.value) {
        if (newDeskF.length && newDeskS.length) {

          //Если в результате спора закончились карты хотя бы у одного игрока, то завершаем игру
          if (!this.props.first.length || !this.props.first.length) this.props.finish()
        }
        return
    }

    if (this.newCardF.value > this.newCardS.value) {

      // Добавили победителю в этом раунде в конец колоды все карты со стола
      this.props.addFirst(_.concat(newDeskF, this.desk))

    } else {

      this.props.addSecond(_.concat(newDeskS, this.desk))
    } 

    // Убрали все карты со стола
    this.desk = [];

    //Если у одного из игроков закончились карты, то завершаем игру
    if (!this.props.first.length || !this.props.first.length) this.props.finish()

  }

  render() {

    return <div className='Buttlefield'>
      <div>
        <button type='button' className='StartButton' onClick={::this.makeMove}>Сходить</button>
      </div>
      <div>
      
        <div className='CardsBox'>
        { this.newCardF.name && 
          <div>
            <div className='Card'>
              <span>{this.newCardF.name}</span>
              <span>{this.newCardF.suit}</span>
            </div>
            <div className='Card'>
                <span>{this.newCardS.name}</span>
              <span>{this.newCardS.suit}</span>
            </div>
          </div>
        }
        </div>
      
      </div>
      <div className='ResultGame'>
        <h3>Ходы:</h3>
          <ul>
            {this.resulList.map(move => (
              <li key={move.index}>{move.text}</li>
            ))}
          </ul>
      </div>
    </div>
  }
}

Battlefield.propTypes = {
  first: PropTypes.array.isRequired,
  second: PropTypes.array.isRequired,
  desk: PropTypes.array.isRequired
}