import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../components/home/Home';
import AuthenticationPage from '../components/Authentication';

const AppNavigator = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/authentication" element={<AuthenticationPage />} />
      </Routes>
    </Router>
  );
};

export default AppNavigator;
