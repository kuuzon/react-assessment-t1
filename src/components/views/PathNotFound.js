import React, { Fragment } from 'react'
import errorimage from './errorimage.png'

const PathNotFound = () => {
    return (
        <Fragment>
            <div className="text-center card">
                <h1 className="large">
                    <i className="fas fa-window-close text-danger"></i> Page Not Found
                </h1>
                <img className="errorimage" src={errorimage} alt="errorpage"/>
                <h2 className="text-primary">This Pokédex entry does not exist.</h2>
                <p className="text-primary">Please return to the Home page to begin Pokémon hunting again!</p>
            </div>
        </Fragment>
    )
}

export default PathNotFound
