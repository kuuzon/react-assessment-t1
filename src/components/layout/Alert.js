import React, {Component} from 'react';

class Alert extends Component {
    render() {
        const{msg,type} = this.props;

        return(
            msg && type !== '' &&(
                <div className={`alert alert-${type}`}>
                    <i className="fas fa-info-circle"></i>
                    {msg}
                </div>
            )
        )
    }
}

export default Alert