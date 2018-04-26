import React, { Component } from 'react';
import Clock from './clock';
import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deadline: 'July 1, 2018',
            newDeadline: ''
        }
    }

    changeDeadline() {
        this.setState({deadline: this.state.newDeadline})
    }

    render() {
        return (
            <div className='App'>
                <div className='App-Title'>Countdown to {this.state.deadline}</div>
                <Clock deadline={this.state.deadline}/>
                <div>
                    <input className='new-date' onChange={event => this.setState({newDeadline: event.target.value})} placeholder='New Date' />
                    <button className='new-date' onClick={() => this.changeDeadline()}>Submit</button>
                </div>
            </div>
        )
    }
}

export default App;