import React from 'react';
import { Redirect, Route } from 'react-router-dom';

function PrivateRoute ({ component: Component, ...rest }) {
    return (
        <Route
            {...rest}
            render = {props => 
                Object.keys(localStorage.getItem('user')).length === 0?(
                    <Component {...props} />
                ) : ( 
                    <Redirect to={{
                                    pathname: '/login', 
                                    state: {data: props.location}
                                  }}
                    />
                )
            }
        />
    )
}

export default PrivateRoute;