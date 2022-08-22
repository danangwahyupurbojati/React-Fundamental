import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import ReactComponent from './pages/ReactComponent';
import Navbar from './components/Navbar';
import CategoryPage from './pages/CategoryPage';
import DetailPage from './pages/DetailPage';
import JsxPage from './pages/JsxPage';
import StateAndProps from './pages/StateAndProps';
import BasicHooks from './pages/BasicHooks';
import EventHandling from './pages/EventHandling';
import EvenHandlingOnchange from './pages/EvenHandlingOnchange';
import FuncLifeCyclePage from './pages/FuncLifeCyclePage';
import ClassLifeCyclePage from './pages/ClassLifeCyclePage';
import StylingPage from './pages/StylingPage';
import FormValidation from './pages/FormValidation';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/react-component" element={<ReactComponent />} />
                    <Route path="/jsx" element={<JsxPage />} />
                    <Route path="/state-props" element={<StateAndProps />} />
                    <Route path="/basic-hooks" element={<BasicHooks />} />
                    <Route path="/event-handling-1" element={<EventHandling />} />
                    <Route path="/event-handling-2" element={<EvenHandlingOnchange />} />
                    <Route path="/lifecycle-function" element={<FuncLifeCyclePage />} />
                    <Route path="/lifecycle-class" element={<ClassLifeCyclePage />} />
                    <Route path="/styling-page" element={<StylingPage />} />
                    <Route path="/form-handling" element={<FormValidation />} />
                    <Route path="/category"  element={<CategoryPage />}/>
                    <Route path="/detail/:idProduct"  element={<DetailPage />}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
