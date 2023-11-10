import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginForm from "./components/movieLoginForm";
import HomePage from "./components/movieHomePage";
import MovieItemDetails from "./components/movieItemDetails";
// import ProtectedRoute from "./components/protectedRoute";
import "./App.css";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/login" element={<LoginForm />} />
      <Route exact path="/" element={<HomePage />} />
      <Route exact path="/movies/:movieId" element={<MovieItemDetails />} />
    </Routes>
  </BrowserRouter>
);

export default App;
