import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Link, Match } from 'react-router'

const QueryParamExample = ({history}) => (
    <Router history={history}>
        <div>
        <ul>
            <li>
                <Link to='/' activeStyle={{color:"red"}} isActive={(location) => (Object.keys(location.qeury || {}).length)}>No Query</Link>
            </li>
            <li>
                <Link to={{
                    pathname:'/',
                    query:{foo:1, bar:2}
                }} activeStyle={{color:"red"}} 
                >foo=1, bar=2</Link>
            </li>
            <li>
                <Link to={{
                    pathname:'/',
                    query:{foo:23}
                }} activeStyle={{color:"red"}} 
                >foo=23</Link>
            </li>
        </ul>
        <Match pattern='/' component={Child}/>
        </div>
    </Router>
)

const Child = ({location}) => (
    <p>{JSON.stringify(location.query, null, 2)}</p>
)

render(<QueryParamExample/>, document.getElementById('root'))