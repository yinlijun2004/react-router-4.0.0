import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Link, Miss, Match} from 'react-router'

const MissExample = ({history}) => (
    <Router history={history}>            
        <div>
            <ul>
                <li><Link to='/' >Home</Link></li>
                <li><Link to='/match' >MatchComponent</Link></li>
                <li><Link to='/notmatch'>Not Match</Link></li>
                <li><Link to='/also/will/notmatch'>Also Will Not Match</Link></li>
            </ul>
            <Match pattern='/' exactly component={Home}></Match>
            <Match pattern='/match' component={MatchComponent}></Match>
            <Miss render={({location}) => (<h2>{location.pathname}</h2>)}></Miss>
        </div>
    </Router>
)   

const Home = () => (
    <h2>Home</h2>
)

const MatchComponent = () => <h2>MatchComponent</h2>

render(<MissExample/>, document.getElementById('root'))