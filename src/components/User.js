import React, { PropTypes, Component } from 'react';

export default class User extends Component {
  render() {

    const { name } = this.props
    const { cards } = this.props

    return <div className='User'>
      <div>{name}</div>
      <div>Количество карт: {cards.length}</div>
    </div>
  }
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  cards: PropTypes.array.isRequired
}