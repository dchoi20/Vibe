import React from 'react'
import { Redirect, Route } from 'react-router-dom'

// class ProtectedRoute extends React.Component {

//     render() {
//         const Component = this.props.component;
       
       
//         return isAuthenticated ? (
//             <Component />
//         ) : (
//             <Redirect to={{ pathname: '/login' }} />
//         );
//     }
// }

// export default ProtectedRoute;


const ProtectedRoute = ({ component: Component, ...rest }) => {
    const isAuthenticated = localStorage.getItem('token');
    return (
    
    <Route {...rest} render={(props) => (
      isAuthenticated  ? <Component {...props} />
        : <Redirect to='/login' />
    )} />
    )}

    export default ProtectedRoute;