import React from 'react';
class SelectedNumbers extends React.Component {



    onLockClick = () => {
        this.props.onNumberLockClick(this.props.selectedNumber);
    }

    render() {

        return (<>
        
            <div className="row p-5 rounded">
                <div className="col-md-6 col-md-offset-3">                  
                    <ul className="list-group">
                        <li className="list-group-item">
                            {this.props.selectedNumber}
                            <button onClick={this.onLockClick} className="ms-5 btn btn-primary"> {this.props.isLocked ? 'Unlock' : 'Lock'}</button>
                        </li>
                    </ul>
                </div>
            </div>
        </>)


    }
}
export default SelectedNumbers;