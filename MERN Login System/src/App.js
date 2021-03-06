import React, { useState, useReducer, createContext, useContext, useEffect } from 'react';
import SignIn from './components/Login/SignIn';
import SignUp from './components/Login/SignUp.js';
import Dash from './components/Dashboard/Dash.js';
import LandingPage from './components/Login/LandingPage.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ReactDOM from 'react-dom';
import { ThemeContextProvider } from './components/contexts/ThemeContext';
import ProtectedRoute from './components/ProtectedRoute';
import GlobalState from './components/contexts/GlobalState';




// const globalStateContext = React.createContext(defaultGlobalState);
// const dispatchStateContext = React.createContext(undefined);

// const GlobalStateProvider = ({ children }) => {
//   const [state, dispatch] = React.useReducer(
//     (state, newValue) => ({ ...state, ...newValue }),
//     defaultGlobalState
//   );
//   return (
//     <globalStateContext.Provider value={state}>
//       <dispatchStateContext.Provider value={dispatch}>
//         {children}
//       </dispatchStateContext.Provider>
//     </globalStateContext.Provider>
//   );
// };

// const useGlobalState = () => [
//   React.useContext(globalStateContext),
//   React.useContext(dispatchStateContext)
// ];



export const App = (props) => {
  
  const initialSession = {
    loggedIn: false, email: 'a', jwt: 'a' 
  };

  const [session, setSession] = useState(initialSession);

  return (
    <div className="App">
      {/* <h1>Logged In: {JSON.stringify(session)}</h1> */}
        <Router>
          <Switch>
            <Route path='/' exact strict>
              <LandingPage></LandingPage>
            </Route>
            <Route path='/users/sign-in' exact strict>
              <SignIn appProps={{session}} setSession={setSession}></SignIn>
            </Route>
            <Route path='/users/sign-up' exact strict>
              <SignUp></SignUp>
            </Route>
            <ProtectedRoute
              path='/api/dashboard'
              exact strict
              setSession={setSession}
              appProps={{session}}
              component={Dash}>
            </ProtectedRoute>
          </Switch>
        </Router>
    </div>
  )
}



// // export default App;
// export default class App extends Component {

//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <Router>
//         <Switch>
//           <Route 
//             path='/' 
//             exact 
//             strict
//             render={(props) => 
//               <LandingPage/>
//             }
//           />
//           <Route path='/users/sign-in' exact strict>
//               <SignIn></SignIn>
//             </Route>
//             <Route path='/users/sign-up' exact strict>
//               <SignUp></SignUp>
//             </Route>
//             <Route path='/dashboard' exact strict>
//               <Dash></Dash>
//             </Route>
//         </Switch>
//       </Router>
//     );
//   }
// }
