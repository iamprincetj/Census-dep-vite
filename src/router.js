import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import Attendance from './components/Pages/Attendance';

function MainRouter() {
    return (
        <Router>
            <Route exact path='/' component={App} />
            <Route path='/attendance' component={Attendance} />
        </Router>
    );
}

export default MainRouter;
