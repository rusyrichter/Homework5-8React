import React from 'react';
import NumberRows from './NumberRows'
import SelectedNumbers from'./SelectedNumbers'
import { v4 as uuidv4 } from 'uuid';



class NumberTable extends React.Component {

    state = {
        numbers: [],       
        selectedNumbers: [],
        lockedNumbers: []
    }
    getRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }


    onAddClicked = () => {
        var min = 10;
        var max = 200;

        var randomNumber = this.getRandomNumber(min, max);

        const { numbers } = this.state;
        const copy = [...numbers, randomNumber];
        this.setState({
            numbers: copy,
            
        });
      
    }
    onNumberSelectClick = (number) => {
        const { selectedNumbers } = this.state;
        if (selectedNumbers.includes(number)) {
            this.setState({ selectedNumbers: selectedNumbers.filter(n => n !== number) });
        } else {
            this.setState({ selectedNumbers: [...selectedNumbers, number] });
        }      
    }
    onNumberLockClick = (number) => {
        const { lockedNumbers } = this.state;
        if (lockedNumbers.includes(number)) {
            this.setState({ lockedNumbers: lockedNumbers.filter(n => n !== number) });
        } else {
            this.setState({ lockedNumbers: [...lockedNumbers, number] });
        }  
    }
   

    render() {
        return (
           
            <div className="container mt-10">
                <div className="row">
                    <button onClick={this.onAddClicked} className="btn btn-success btn-lg w-100">Add</button>

                    <table className="table table-hover table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Number</th>
                                <th>Add/Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                           
                            {this.state.numbers.map((n) => <NumberRows number={n}
                                onNumberSelectClick={this.onNumberSelectClick}
                                isSelected={this.state.selectedNumbers.includes(n)}                                
                                isLocked={this.state.lockedNumbers.includes(n)}    
                            />)}  
                           
                           
                        </tbody>
                        
                    </table>
                   
                    {this.state.selectedNumbers.map((sn) => <SelectedNumbers selectedNumber={sn}
                        onNumberLockClick={this.onNumberLockClick}
                        isLocked={this.state.lockedNumbers.includes(sn)}
                    />)}
                </div>
               
            </div>
        )
    }
}


export default NumberTable;
