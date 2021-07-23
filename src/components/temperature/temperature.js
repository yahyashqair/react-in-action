import {Component, useContext, useState} from "react";
import Contexts from "../../Contexts";

export const Temperature = () => {
    const [temp, setTemp] = useState(0);
    const theme = useContext(Contexts.Theme);
    console.log(theme);
    return (
        <div>
            <TemperatureReader type={"c"} temp={temp}
                               propagate={setTemp}/>
            <TemperatureReader temp={temp} type={"f"}
                               propagate={setTemp}/>
        </div>)
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
            this.props.propagate((event.target.value - 32) * 5 / 9)
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
            return parseFloat(temp) * 9 / 5+ 32;
        }
    }
}