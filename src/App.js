import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Login from './page/Login';
import Register from './page/Register';

function App() {
    return (
        <div className="App">
            <Login />
        </div>
    );
}

export default App;
