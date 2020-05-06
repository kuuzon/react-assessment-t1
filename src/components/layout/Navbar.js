import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Navbar extends Component {
    static defaultProps = {
        title: 'Pokemon finder',
        icon: 'fas    fa-bolt'
    };

    static propTypes = {
        title: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired
    };
    
    render() {
        return (
            <nav classNames = 'navbar bg-primary'> 
                <h1><i className={this.props.icon}></i>{this.props.title}</h1>
            </nav>
        )
    }
}

export default Navbar