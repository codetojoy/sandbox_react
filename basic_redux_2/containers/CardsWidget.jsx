
import React, { Component } from 'react'

import { reverseCards } from '../actions'
import CardsWidget from '../components/CardsWidget.jsx'

export default class CardsWidgetContainer extends Component {
    constructor(props) {
        super(props)
        this.state = props.store.getState()
        this.handleClick = this.handleClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount() {
        this.props.store.subscribe(this.handleChange)
    }

    handleChange() {
        this.setState(this.props.store.getState())
    }

    handleClick() {
        const action = reverseCards()
        this.props.store.dispatch(action)
    }

    render() {
        return (
            <CardsWidget cards={this.state.cards} 
                         handleClick={this.handleClick} /> 
        )
    }
}

