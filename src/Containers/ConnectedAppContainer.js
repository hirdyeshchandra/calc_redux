import React, { Component } from 'react';
import Calculator from '../Components/CalculatorComponent';
import {ADD_NUM} from '../Actions/Action';

class AppContainer extends Component {

    constructor(props){
        super(props);
        this.state = {
            value1: 0,
            value2: 0
        }
    }

    render() {
        return (
            <Calculator value1={this.state.value1}
                        value2={this.state.value2}/>
        );
    }
}

const transferData = (obj) => {
    return obj;
}


const mapStateToProps = (state) => {  //  state- whats and from where it comes from?
    console.log('in mapstate to props of comnected item');
    return {
        objstate: transferData(state)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onClick: (indx) => {
            dispatch(removeItem(indx))
        }
    }
}

//export default AppContainer; 

const ConnectedAppContainer = connect(mapStateToProps, mapDispatchToProps)(AppContainer)
export default ConnectedAppContainer;
