import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginForm from "./components/movieLoginForm";
import HomePage from "./components/movieHomePage";
import MovieItemDetails from "./components/movieItemDetails";
import ProtectedRoute from "./components/protectedRoute";
import "./App.css";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/login" component={LoginForm} />
      <ProtectedRoute exact path="/" component={HomePage} />
      <ProtectedRoute
        exact
        path="/movies/:movieId"
        component={MovieItemDetails}
      />
    </Routes>
  </BrowserRouter>
);

export default App;
