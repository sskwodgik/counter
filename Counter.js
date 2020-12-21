import React, {Component} from 'react';
import './Counter.css';
import Step from './Step';

class Counter extends Component{
    constructor(props){
        super(props);
        this.state = {
            counterValue: this.props.initValue,
            stepValue: 1
        }
    }
    changeValue = () =>{
        this.setState({
            counterValue: this.state.counterValue + this.state.stepValue
        })
    }
    addValue = () =>{
        this.setState({
            counterValue: this.state.counterValue + 1
        })
    }
    resetValue = () =>{
        this.setState({
            counterValue: 0
        })
    }
    updateStepValue = (value) =>{
        this.setState({
                stepValue: Number(value)
        })
    }

    render(){
        return(
                <div className="counter">
                    Counter:
                    <span className="value">
                        {this.state.counterValue}
                    </span><br/>
                    <button onClick={this.addValue}>
                        Add 1
                    </button>
                    <button onClick={this.changeValue}>
                        Add {this.state.stepValue} 
                    </button>
                    <button onClick={this.resetValue}>
                        Reset 
                    </button><br />
                    <Step methodUpdate={this.updateStepValue} inputValue={this.state.stepValue}  />
                </div>
            );
    }
}

export default Counter;