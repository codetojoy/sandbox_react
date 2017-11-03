
import React, { Component } from 'react'

import { deal } from '../actions'
import TableWidget from '../components/TableWidget.jsx'

export default class TableWidgetContainer extends Component {
    constructor(props) {
        super(props)
        this.state = props.store.getState()
        this.handleDealClick = this.handleDealClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount() {
        this.props.store.subscribe(this.handleChange)
    }

    handleChange() {
        this.setState(this.props.store.getState())
    }

    handleDealClick() {
        const action = deal()
        this.props.store.dispatch(action)
    }

    render() {
        return (
            <TableWidget players={this.state.players} 
                         kitty={this.state.kitty}
                         deck={this.state.deck}
                         handleDealClick={this.handleDealClick} /> 
        )
    }
}

