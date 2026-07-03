import {Component} from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import Header from './components/Header'
import NotFound from './components/NotFound'
import UserDetail from './components/UserDetail'
import ThemeContext from './context/ThemeContext'
import './App.css'

class App extends Component {
  state = {theme: 'light'}

  onChangeTheme = changeValue => {
    this.setState({theme: changeValue})
  }

  render() {
    const {theme} = this.state
    return (
      <ThemeContext.Provider value={{theme, onChangeTheme: this.onChangeTheme}}>
        <div className={`app-container-${theme}`}>
          <BrowserRouter>
            <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/users/:id" component={UserDetail} />
              <Route component={NotFound} />
            </Switch>
          </BrowserRouter>
        </div>
      </ThemeContext.Provider>
    )
  }
}

export default App
