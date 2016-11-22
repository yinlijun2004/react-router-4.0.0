import React, { PropTypes } from "react"
import { render } from "react-dom"
import { Match, Link, Redirect, BrowserRouter as Router } from "react-router"

const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
        this.isAuthenticated = true
        setTimeout(cb, 100)
    },
    signout(cb) {
        this.isAuthenticated = false
        cb()
        setTimeout(cb, 100)
    }
}
const AuthExample = () => (
    <Router>
        {({ router }) => (
                <div>
                    {fakeAuth.isAuthenticated ? (
                        <p>
                            Welcome!{' '}
                            <button onClick={() => {
                                fakeAuth.signout(() => {
                                    router.transitionTo('/')
                                })
                            }}>Sign Out</button>
                        </p>
                    ) : (
                        <p>You are not logged in.</p>
                    )}
                    
                    <ul>
                        <li><Link to="/public">Public Page</Link></li>
                        <li><Link to="/protected">Protected Page</Link></li>
                    </ul>
                    <Match pattern="/public" component={Public}></Match>
                    <Match pattern="/login" component={Login}></Match>
                    <MatchWhenAuthorized pattern="/protected" component={Protected}></MatchWhenAuthorized>
                    
                </div>
            )
        } 
    </Router>
)

const MatchWhenAuthorized = ({ component: Component, ...rest}) => (
    <Match {...rest} render = {props => (
        fakeAuth.isAuthenticated ? (
            <Component {...props}/>
        ):(
            <Redirect to={{
                pathname:"/login",
                state:{from:props.location}
            }}/>
        )
    )}/>
)

const Protected = () =><h3>Protected</h3>
const Public = () =><h3>Public</h3>

class Login extends React.Component {
    state = {
        redirectToRefer: false
    }
    login =() => {
        fakeAuth.authenticate(() => {
            this.setState({redirectToRefer: true})
        })
    }
    render() {
        const {from} = this.props.location.state || '/'
        const {redirectToRefer} = this.state
        return (
            <div>
                {redirectToRefer && <Redirect to = {from || '/'}/>}
                {from && (
                    <p>
                        You must login to view the page at <code>{from.pathname}</code>    
                    </p>
                )}
                <button onClick={this.login}>Login</button>
            </div>
        )
    }
}

render(<AuthExample/>, document.querySelector("#root"));
