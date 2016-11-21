
import React from 'react'
import { render } from 'react-dom'

import { BrowserRouter, Match, Miss, Link } from 'react-router'

const App = () => (
    <BrowserRouter>
        <div>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/topics'>Topics</Link></li>
            </ul>
            <hr/>
            <Match exactly pattern='/' component={Home}/>
            <Match pattern='/topics' component={Topics}/>
            <Match pattern='/about' component={About}/>
            <Miss component={NoMatch} />
        </div>
    </BrowserRouter>
)

const Home = () => (
    <div>
        <h2>Home</h2>
    </div>
)

const About = () => (
    <div>
        <h2>About</h2>
    </div>
)

const NoMatch = ({ location }) => (
    <div>
        <h2>Whoops</h2>
        <p>Sorry but {location.pathname} didn't match any pages</p>
    </div>
)

const Topics = ({pathname, pattern}) => (
    <div>
        <h2>Topics</h2>
        <ul>
            <li><Link to={`${pathname}/rendering`}>Rendering with React</Link></li>
            <li><Link to={`${pathname}/components`}>Components</Link></li>
            <li><Link to={`${pathname}/props-v-state`}>Props v. State</Link></li>
        </ul>

        <Match pattern={`${pathname}/:topicId`} component={Topic}/>

        <Match pattern={pathname} exactly render={() => (
            <h3>Please select a topic</h3>
        )}/>
    </div>
)

const Topic = ({ params }) => (
    <div>
        <h3>{params.topicId}</h3>
    </div>
)

render(<App/>, document.querySelector("#root"));