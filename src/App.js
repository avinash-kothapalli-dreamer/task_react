
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import TaskForm from './components/Task-from';
import Views from './components/view';
import Home from './components/home';
function App() {
  return (
    <Router>
      <div className='app'>
          <nav className="custom-navbar navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={'/create-task'}>
                    <b>Create Task</b>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/view'}>
                    <b>View Tasks</b>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* <h1>Task Manager</h1>
        <h4>Helps to Manage tasks effectively</h4> */}
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route path="/create-task" element={<TaskForm />} />
              <Route path="/view" element={<Views />} />


            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
