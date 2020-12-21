import React, {Component} from 'react';
import './Step.css';

class Step extends Component{

        handleInputChange = (e) => {
               this.props.methodUpdate(e.target.value)
        }

        render(){
        return(
                <>
                        
                        <input type="number" onChange={this.handleInputChange} value={this.props.inputValue}>
                        
                        </input>
                </>
            );
    }
}

export default Step;