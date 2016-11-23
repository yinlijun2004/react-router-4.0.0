import React from 'react'
import {render} from 'react-dom'
import {BrowserRouter as Router, Link, Match} from 'react-router'


const PEEPS = [
  { id: 0, name: 'Michelle', friends: [ 1, 2, 3 ] },
  { id: 1, name: 'Sean', friends: [ 0, 3 ] },
  { id: 2, name: 'Kim', friends: [ 0, 1, 3 ], },
  { id: 3, name: 'David', friends: [ 1, 2 ] }
]

const find = (id) => (PEEPS.find((p) => p.id == id))

const RecursivePathExample = () => (
    <Router>
        <Person params={{id:0}} pathname=''/>
    </Router>
) 

const Person = ({pathname, params}) => {
    const person = find(params.id)
    return (
        <div>
            <h3>{person.name}.s frinds</h3>
            <ul>
                {
                    person.friends.map((id) => (
                        <li key={id}><Link to={`${pathname}/${id}`}>{find(id).name}</Link></li>
                    ))
                }
            </ul>
            <Match pattern={`${pathname}/:id`} component={Person}/>            
        </div>
    )
}

render(<RecursivePathExample/>, document.getElementById('root'))