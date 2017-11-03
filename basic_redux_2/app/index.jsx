
'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import reducer from '../reducers'

import CountWidget from '../containers/CountWidget.jsx'
import CardsWidget from '../containers/CardsWidget.jsx'
import TableWidget from '../containers/TableWidget.jsx'

let store = createStore(reducer)

const Header = props => (
    <p>This is a header v 2.2</p>
)

const Footer = props => (
    <div>
        <p>This is a footer v 2.2</p>
        <p>{props.timestamp}</p>
    </div>
)

class App extends React.Component {

    render() { 
        return (
            <div>
                <Header />
                <CountWidget store={this.props.store} />
                <hr />
                <CardsWidget store={this.props.store} />
                <hr />
                <TableWidget store={this.props.store} />
                <hr />
                <Footer timestamp={new Date().toString()}/>
            </div>
        )
    }
}

ReactDOM.render(<App store={store}/>, document.getElementById('app'));
