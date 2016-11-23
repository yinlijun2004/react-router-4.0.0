import React from 'react'
import {render} from 'react-dom'
import {BrowserRouter as Router, Match, Link} from 'react-router'

const routes = [
    {
        pattern: '/',
        exactly: true,
        sidebar:() => <div>
            Home!
        </div>,
        main:() => <h2>Main</h2>
    },
    {
        pattern: '/foo',
        sidebar:() => <div>
            Foo!
        </div>,
        main:() => <h2>Foo</h2>
    },
    {
        pattern: '/bar',
        sidebar:() => <div>
            Bar!
        </div>,
        main: () => <h2>Bar</h2>
    }
]

const SidebarExample = ({history}) => (
    <Router history={history}>
        <div style={{display:'flex'}}>
            <div style={{
                padding:'10px',
                width:'40%',
                background:'#f0f0f0'
            }}>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/foo'>Foo</Link></li>
                <li><Link to='/bar'>Bar</Link></li>
            </ul>
            {routes.map((route, index) => (
                    <Match 
                        key={index} 
                        pattern={route.pattern} 
                        component={route.sidebar}
                        exactly={route.exactly} 
                    />       
                ))}
            </div>
            <div style={{flex:1, padding:'10px'}}>
                {routes.map((route, index) => (
                        <Match  
                            key={index} 
                            pattern={route.pattern} 
                            component={route.main}
                            exactly={route.exactly} 
                        />
                    ))}
            </div>
        </div>
    </Router>
)

render(<SidebarExample/>, document.getElementById('root'))