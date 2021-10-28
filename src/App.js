import Index from "./Pages/Index";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import MovieDetails from "./components/MovieDetails";
import Navbar from "./components/Navbar";



function App() {
  return (
    <div>
      <Router>
      <Navbar />
        <Switch>
          <Route path="/" component={Index} exact />
          <Route path="/moviesdetails/" component={MovieDetails} exact />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
