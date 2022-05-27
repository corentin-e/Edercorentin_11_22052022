import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
              <Route path="/error">
              </Route>
              <Route path="/logement/:id">
              </Route>
              <Route path="/à-propos">
              </Route>
              <Route path="/">
              </Route>  
          </Switch>
      </Router>
    </div>
  );
}

export default App;
