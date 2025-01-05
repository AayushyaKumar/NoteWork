import { ProtectedRoute } from './pages/ProtectedRoute';
import Dashboard from './pages/Dashboard';
import Transcribe from './pages/Transcribe';
//  import Cards from './components/Cards';
import './index.css'
import Root from "./Root";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import Errorpage from "./components/Errorpage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
 
} from "react-router-dom";
import { ThemeProvider } from './context/Theme';
import ProfilePage from './components/ProfilePage';
import Cards from './components/Home/Cards';
import { ForgotPasswordForm } from './components/Auth/ForgotPassword';
import ResetPass from './components/Auth/ResetPass';
// import Section from './components/Sections';

export default function App(){

return(
<ThemeProvider>
  <Router> 
  <Routes> 
   <Route errorElement={<Errorpage/>}>
   <Route path="/" element={<Root/>}  >
 <Route path="/" element={<Cards/>}/> 
 {/* <Route path="/" element={<Section/>}/> */} 
   <Route path="/login" element={<Login/>} />
   <Route path="/signup"element={<Signup/>}/>
   <Route path="/resetPassword/:token" element={<ResetPass/>}/>
   <Route path="/forgotPassword" element={<ForgotPasswordForm/>}></Route>
   <Route element={<ProtectedRoute/>}>
   <Route path="/dash" element={ <Dashboard/>}  />
   <Route path="/pdf" element={ <Transcribe/>}  />
   <Route path="/profile" element={<ProfilePage/>}/>
   
   </Route> 

   </Route>
   </Route>
   </Routes> 
   </Router> 
   </ThemeProvider>
)
}




