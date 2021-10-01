import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom'
import Home from './Home/Home'
import Login from './Login/Login'
import { SignUp } from './SignUp/SignUp'
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
        <AuthenticatedRoute path="/" component={Home} />
        <UnauthenticatedRoute path="/login" component={Login} />
        <UnauthenticatedRoute  path="/signup" component={SignUp} />
      </Router>
    </AuthContextProvider>
  )
}

export default App
