import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "font-awesome/css/font-awesome.css";

import React, { useState } from "react";
import HeaderPage from "./Header";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import CoursePage from "./CoursePage";
import NotFoundPage from "./NotFoundPage";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Registration from "./auth/Registration";
import Login from "./auth/Login";
import ProtectedRoute from "./ProtectedRoute";
import ForgotPassword from "./auth/ForgotPassword";
import ManageCoursePage from "./ManageCoursePage";
import VerifyForgotPassword from "./auth/VerifyForgotPassword";
import ChangePasswordConfirm from "./auth/ChangePasswordConfirm";

function App() {
  const [user, setUser] = useState({});
  const [isAuthenticated, setAuthenticated] = useState(false);

  /*
    async useEffect(() => {
    try {
      const session = await Auth.currentSession();
      this.setAuthStatus(true);
      console.log(session);
      const user = await Auth.currentAuthenticatedUser();
      this.setUser(user);
    } catch(error) {
      if (error !== 'No current user') {
        console.log(error);
      }
    }
    setAuthenticating(false);
    //this.setState({ setAuthenticating: false });
  },[])
*/

  const authProps = {
    isAuthenticated: isAuthenticated,
    user: user,
    setAuthenticated: setAuthenticated,
    setUser: setUser,
  };

  return (
    <div className="container-fluid">
      <BrowserRouter>
        <HeaderPage auth={authProps} />
        <br />
        <Switch>
          <Route path="/" exact component={HomePage}></Route>
          <Route
            path="/Login"
            render={(props) => <Login {...props} auth={authProps} />}
          ></Route>
          <Route
            path="/about"
            render={(props) => <AboutPage {...props} auth={authProps} />}
          ></Route>
          <Route
            path="/LogOut"
            render={(props) => <Login {...props} auth={authProps} />}
          ></Route>
          <Route
            path="/forgotPassword"
            render={(props) => (
              <ForgotPassword ForgotPassword {...props} auth={authProps} />
            )}
          ></Route>
          <Route
            path="/VerifyForgotPassword"
            render={(props) => (
              <VerifyForgotPassword {...props} auth={authProps} />
            )}
          ></Route>
          <Route
            path="/changepasswordconfirmation"
            render={(props) => (
              <ChangePasswordConfirm {...props} auth={authProps} />
            )}
          />
          <Route
            path="/Registration"
            component={Registration}
            auth={authProps}
          ></Route>
          <ProtectedRoute
            path="/courses"
            component={CoursePage}
            auth={authProps}
          ></ProtectedRoute>
          <ProtectedRoute
            path="/deleteCourse/:id"
            component={CoursePage}
            auth={authProps}
          ></ProtectedRoute>
          <ProtectedRoute
            path="/course/:id"
            component={ManageCoursePage}
            auth={authProps}
          ></ProtectedRoute>
          <ProtectedRoute
            path="/course"
            component={ManageCoursePage}
            auth={authProps}
          ></ProtectedRoute>
          <Route component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
