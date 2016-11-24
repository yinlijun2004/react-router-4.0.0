import React from 'react'
import {render} from 'react-dom'
import {BrowserRouter as Router, Link, Miss, Match} from 'react-router'

 const Main = () => <h2>Main</h2>
 const Sandwiches = () => <h2>Sandwiches</h2>
 const Bus = () => <h3>Bus</h3>
 const Cart = () => <h3>Cart</h3>


 const Tacos = ({routes}) => (
     <div>
         <h2>Toacos</h2>
         <ul>
             <li><Link to='/tacos/bus'>Bus</Link></li>
             <li><Link to='/tacos/cart'>Cart</Link></li>
         </ul>
         {routes.map((route, i) => (
             <MatchWithSubRoutes key={i} {...route}/>
         ) )}
     </div>
 )

 const routes = [
  { pattern: '/sandwiches',
    component: Sandwiches
  },
  { pattern: '/tacos',
    component: Tacos,
    routes: [
      { pattern: '/tacos/bus',
        component: Bus
      },
      { pattern: '/tacos/cart',
        component: Cart
      }
    ]
  }
]

const MatchWithSubRoutes = (route) => (
    <Match {...route} render={(props) => (
        <route.component {...props} routes={route.routes}/>
    )}/>
)

const RouteConfigExample = ({history}) => (
    <Router history={history}>
        <div>
            <ul>
                <li><Link to='/tacos'>Tacos</Link></li>
                <li><Link to='/sandwiches'>Sandwiches</Link></li>
            </ul>
            {
                routes.map((route, i) => (
                    <MatchWithSubRoutes key={i} {...route} /> 
                ))
            }
        </div>
    </Router>
)

render(<RouteConfigExample/>, document.getElementById('root'))