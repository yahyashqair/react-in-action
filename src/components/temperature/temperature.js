import {Component} from "react";

export class Temperature extends Component {
    constructor(props) {
        super(props);
        this.updateTemp = this.updateTemp.bind(this);
        this.state = {temp: 0};
    }

    updateTemp(updatedTemp) {
        this.setState({temp: updatedTemp});
    }

    render() {
        console.log(this)
        return (<div><TemperatureReader type={"c"} temp={this.state.temp}
                                        propagate={this.updateTemp}/>
            <TemperatureReader temp={this.state.temp} type={"f"}
                               propagate={this.updateTemp}/></div>)
    }
}

class TemperatureReader extends Component {

    constructor(props) {
        super(props);
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(event) {
        if (this.props.type == 'c') {
            this.props.propagate(event.target.value)
        } else {
            this.props.propagate(event.target.value / 2)
        }
    }

    render() {
        return (
            <div>
                <p>Enter the temperature
                    in {this.props.type == 'c' ? 'celescus' : "feherhit"}</p>
                <input onChange={this.handleOnChange}
                       value={this.getTemp(this.props.temp)}/>
            </div>
        );
    }

    getTemp(temp) {
        if (this.props.type == 'c') {
            return temp;
        } else {
            return parseInt(temp) * 2;
        }
    }
}