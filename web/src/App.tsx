import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from "@apollo/client"
import { setContext } from 'apollo-link-context'
import React from "react"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import "./App.css"
import "./styles/primary.css"
import Users from "./components/Users"
import Landing from "./components/Landing"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import IsAuthenticated from "./components/IsAuthenticated"
import LeftNav from "./components/LeftNav"

const httpLink = new HttpLink({ uri: 'http://localhost:4000' })
const authLink = setContext(async (req, { headers }) => {
  const token = localStorage.getItem('token')

  return {
    ...headers,
    headers: {
      Authorization: token ? `Bearer ${token}` : null
    }
  }
})

const link = authLink.concat(httpLink as any)
const client = new ApolloClient({
  link: (link as any),
  cache: new InMemoryCache()
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <Route path="/landing" >
            <Landing />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <IsAuthenticated>
            <Route path="/">
              <div className="primary">
                <div className="left">
                  <LeftNav />
                </div>
              </div>
              <Users />
            </Route>
          </IsAuthenticated>
        </Switch>
      </Router>
    </ApolloProvider>
  )
}

export default App
