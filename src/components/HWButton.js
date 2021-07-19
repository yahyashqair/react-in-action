import React from 'react';
import './HWButton.css'

function H1Component(props) {
    return (<h1>Hello My Friend {props.p1}</h1>)
}


export class HWButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {...this.state, counter: 0}
    }


    componentDidMount() {
        console.log("Mounted...")
    }

    componentWillUnmount() {
        console.log("UnMounted...")
    }

    render() {
        return (<div>
            <button onClick={() => {
                this.setState({...this.state, "counter": ++this.state.counter});
            }} className={"yahya"}>Hello World {this.props.x} , clicked
                times {this.state.counter}</button>
            <div><H1Component p1={2}/></div>
        </div>)
    }
}
