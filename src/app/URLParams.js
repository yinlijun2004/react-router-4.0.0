import React from "react"
import { render } from "react-dom"
import { BrowserRouter as Router, Match, Link } from "react-router"

const ParamsExample = () => {
    return (
        <Router>
            <div>
                <h2>Accounts</h2> 
                <ul>
                    <li><Link to="/netfix">Netfix</Link></li>
                    <li><Link to="/zillow-group">Zillow Group</Link></li>
                    <li><Link to="/yahoo">Yahoo</Link></li>
                    <li><Link to="/modus-create">Modus Create</Link></li>
                </ul>
                <Match pattern="/:id" component={Child} /> 
            </div>            
        </Router>
    )
}

const Child = ({ params }) => {
    return (<h2>ID:{params.id}</h2>)
}

render(<ParamsExample/>, document.querySelector("#root"))