import React, {Fragment} from 'react';
import spinner from './spinner.gif'

const Spinner = () => {
    return (
        <Fragment>
            <img src = {spinner} alt = "Loading..." style = { userStyle } />
        </Fragment>
    )
}

const userStyle = {
    width: '200px', 
    margin: 'auto', 
    display: 'block'
}

export default Spinner