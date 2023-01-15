import { Route, Routes, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Routers from './components/Routers/Routers';
import { useLayoutEffect } from 'react';



function App() {

  const Wrapper = ({ children }) => {
    const location = useLocation();
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children
  }

  return (
    <div className="App">
      <Wrapper>
        <Routers />
      </Wrapper>
    </div>
  );
}

export default App;

