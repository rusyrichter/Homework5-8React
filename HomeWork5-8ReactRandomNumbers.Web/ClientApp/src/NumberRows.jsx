import React from 'react';
class NumberRows extends React.Component {



    onNumberSelectClick = () => {
        this.props.onNumberSelectClick(this.props.number);
    }

    render() {

        return (<>
          
            <tr>
                <td>{this.props.number}</td>
                <td>
                    <button disabled={this.props.isLocked} className={`btn ${this.props.isSelected ? 'btn-danger' : 'btn-success'}`} onClick={this.onNumberSelectClick}>
                        {this.props.isSelected ? 'Unselect' : 'Select'} </button>
                </td>
            </tr>
        </>)


    }
}
export default NumberRows;