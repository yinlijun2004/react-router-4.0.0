import React from 'react'
import {render} from 'react-dom'
import {BrowserRouter as Router, Link, Miss, Match} from 'react-router'

const AmbiguousExample = () => (
    <Router>
    <div>
        
        <ul>
            <li><Link to='/about'>About Us (static)</Link></li>
            <li><Link to='/company'>Company (static)</Link></li>
            <li><Link to='/kim'>Kim (dynamic)</Link></li>
            <li><Link to='/chris'>Chris (dynamic</Link></li>
        </ul>
        <Match pattern='/:user' render={(matchProps) =>(
            <div>
                <Match pattern='/about' component={About}/>
                <Match pattern='/company' component={Company}/>
                <Miss render={() => <User {...matchProps}/>}/>
            </div>
        )}>
        </Match>
    </div>
    </Router>
)

const About = () => <h2>About</h2>
const Company = () => <h2>Company</h2>
const User = ({params}) => (
    <div>
        <h2>User</h2>
        <div>
            {params.user}
        </div>
    </div>
)

render(<AmbiguousExample />, document.getElementById('root'))