import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import Home from './Home/Home'
import Login from './Login/Login'
import { SignUp } from './SignUp/SignUp'
import  Events  from './Events/Events'
import DetailsEvent from './DetailsEvent/DetailsEvent'
import { AuthContextProvider, useAuthState } from '../firebase'

const AuthenticatedRoute = ({ component: C, ...props }) => {
  const { isAuthenticated } = useAuthState()
  console.log(`AuthenticatedRoute: ${isAuthenticated}`)
  return (
    <Route
      {...props}
      render={routeProps =>
        isAuthenticated ? <C {...routeProps} /> : <Redirect to="/login" />
      }
    />
  )
}

const UnauthenticatedRoute = ({ component: C, ...props }) => {
  const { isAuthenticated } = useAuthState()
  console.log(`UnauthenticatedRoute: ${isAuthenticated}`)
  return (
    <Route
      {...props}
      render={routeProps =>
        !isAuthenticated ? <C {...routeProps} /> : <Redirect to="/" />
      }
    />
  )
}

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <Switch>
          <AuthenticatedRoute path="/" exact component={Home} />
          <AuthenticatedRoute path="/events/:category" exact component={Events} />
          <AuthenticatedRoute path="/events-details/:idEvent" exact component={DetailsEvent} />
          <UnauthenticatedRoute path="/login" exact component={Login} />
          <UnauthenticatedRoute  path="/signup" exact component={SignUp} />
        </Switch>
      </Router>
    </AuthContextProvider>
  )
}

export default App
