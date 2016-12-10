import React, {Component} from 'react'
import {connect} from 'react-redux'
import {increment, decrement, reset} from './actions'

class Counter extends Component {

    incValue = () => {
        this.props.dispatch(increment())
    }

    decValue = () => {
        this.props.dispatch(decrement())
    }

    resetValue = () => {
        this.props.dispatch(reset())
    }

    render() {
        return (
            <div>
                <p>{this.props.counter}</p>
                <button onClick={this.incValue}>Increment</button>
                <button onClick={this.decValue}>Decrement</button>
                <button onClick={this.resetValue}>Reset</button>
            </div>
        )
    }

}

const mapStateToProps = (state) => state

export default connect(mapStateToProps)(Counter)