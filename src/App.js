import Index from "./Pages/Index";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import MovieDetails from "./components/MovieDetails";


function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" component={Index} exact />
          <Route path="/moviesdetails/" component={MovieDetails} exact />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
