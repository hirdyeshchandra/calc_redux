import React, { Component } from 'react';

class Calculator extends Component {

    constructor(props){
        super(props);
        this.state = {
            value3: this.props.value3,
            value4: this.props.value4,
            result: 0
        }

        this.handleChangeValue1 = this.handleChangeValue1.bind(this);
        this.handleChangeValue2 = this.handleChangeValue2.bind(this);
        this.calculate = this.calculate.bind(this);
    }

    handleChangeValue1(e) {
        this.setState({ value3 : e.target.value });
    }

    handleChangeValue2(e) {
        this.setState({ value4 : e.target.value });
    }

    calculate(e){
        e.preventDefault();
        this.setState({ result : Number.parseInt(this.state.value3)
            + Number.parseInt(this.state.value4) });
    }

    render() {
        return (
            <form>
                <div>
                    <label>Value 1</label>
                    <input name="value1" type="text"
                           onChange={this.handleChangeValue1}
                           value={this.state.value3}/>
                </div>
                <div>
                    <label>Value 2</label>
                    <input name="value2" type="text"
                           onChange={this.handleChangeValue2}
                           value={this.state.value4}/>
                </div>
                <div>
                    <label>Result:</label>
                    <div id="result">{this.state.result}</div>
                </div>
                <div>
                    <button onClick={this.calculate}>Calculate</button>
                </div>

            </form>
        );
    }
}

export default Calculator;
