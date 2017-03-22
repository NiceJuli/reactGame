
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Battlefield from '../components/Battlefield'
import User from '../components/User'
import * as actions from '../actions/Actions'
//import _ from 'lodash'
import {createDesk, giveOutCards} from '../services/index'

class App extends Component {

    constructor(props) {
        super(props)
        this.deskFull = createDesk();
    }

    onStartBtnClick() {
        if (this.props.page.stateGame == 'default') {
            this.props.actions.startGame()
            this.props.actions.addCardsFirst(giveOutCards(this.deskFull)[0])
            this.props.actions.addCardsSecond(giveOutCards(this.deskFull)[1])
        } else {
            this.props.actions.restartGame()
        }
    }

    render() {

    const { stateGame, deskFirst, deskSecond } = this.props.page
    const { deleteFirst, deleteSecond, addCardsFirst, addCardsSecond, finish } = this.props.actions

    return <div className='Content'>
        <div className='Content-top'>
            <User name='Игрок 1' cards={deskFirst}/>
            <button type='button' className='StartButton' onClick={::this.onStartBtnClick}>

              {(() => {
                switch (stateGame) {
                  case 'start': return 'Раздать карты';
                  case 'game': return 'Начать заново';
                  case 'finish': return 'Начать заново';
                  default: return 'Раздать карты';
                }
              })()}

            </button>
            <User name='Игрок 2' cards={deskSecond}/>
        </div>
            { stateGame == 'game' && 
                <Battlefield first={deskFirst} second={deskSecond} desk={this.deskFull} finish={finish}
                addFirst={addCardsFirst} addSecond={addCardsSecond}
                deleteFirst={deleteFirst} deleteSecond={deleteSecond}/>
            }
            { stateGame == 'finish' && 
                <div className='ResultGameText'>
                    {(() => {
                        var result = (deskSecond.length == deskFirst.length) ? 'draw' : 
                        (deskFirst.length > deskSecond.length) ? 'first' : 'second'
                        switch (result) {
                          case 'draw': return 'Победила дружба';
                          case 'first': return 'Победил Игрок 1';
                          case 'second': return 'Победил Игрок 2';
                          default: return 'Здесь будет результат игры';
                        }
                    })()}
                </div>
            }
        </div>
    }
}

function mapStateToProps(state) {
  return {
    page: state
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)