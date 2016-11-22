import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Link, Match } from 'react-router'

const CustonLinkExample = () => (
    <Router>
        <div>
            <Link activeOnlyWhenExact to='/'>{({ isActive, onClick, href }) => <OldSchoolMenuLink label="Home" onClick={onClick} href={href} isActive={isActive}/>}</Link>
            <Link to='/about'>{(params) => <OldSchoolMenuLink label='About' {...params} />}</Link>
            
            <hr/>
            
            <Match exactly pattern='/' component={Home} />
            <Match pattern='/about' component={About} />
        </div>
    </Router>
)

const OldSchoolMenuLink = ({label, isActive, onClick, href}) => (
    <div className = {isActive ? "active" : ""} >
        {isActive ? ">" : ""}
        <a href={href} onClick={onClick}>
            {label}
        </a>
    </div>
)
const Home = () => (<div>
    <h3>Home</h3>
</div>)
const About = () => (<div>
    <h3>About</h3>
</div>)

render(<CustonLinkExample/>, document.querySelector('#root'));