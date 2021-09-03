import React from 'react';
import { Redirect, Route } from 'react-router-dom';

function PrivateRoute ({ component: Component, ...rest }) {
    console.log(localStorage.getItem('user'));
    const user =  localStorage.getItem('user') !== null ? localStorage.getItem('user') : {};
    return (
        <Route
            {...rest}
            render = {props => 
                Object.keys(user).length !== 0 && JSON.parse(user).man_info_sn !== ""? (
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