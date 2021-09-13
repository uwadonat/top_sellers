import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import HomePage from './components/HomePage';
import Header from './components/Header';
import DetailsPage from './components/DetailsPage';
import store from './redux/configStore';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/Homepage">
            <HomePage />
          </Route>
          <Route path='/DetailsPage'>
            <DetailsPage />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
