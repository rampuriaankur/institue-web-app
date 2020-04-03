import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import HeaderPage from "./Header";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import CoursePage from "./CoursePage";
import NotFoundPage from "./NotFoundPage";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Registration from "./auth/Registration";
import Login from "./auth/Login";

import ManageCoursePage from "./ManageCoursePage";

function App() {
  /*
  function route() {
    const route = window.location.pathname;
    if (route === "/course") return <CoursePage />;
    if (route === "/about") return <AboutPage />;
    else return <Homepage />;
  }
*/

  return (
    <div className="container-fluid">
      <BrowserRouter>
        <HeaderPage />
        <br />
        <Switch>
          <Route path="/" exact component={HomePage}></Route>
          <Route path="/about" component={AboutPage}></Route>
          <Route path="/courses" component={CoursePage}></Route>
          <Route path="/deleteCourse/:id" component={CoursePage}></Route>
          <Route path="/course/:id" component={ManageCoursePage}></Route>
          <Route path="/course" component={ManageCoursePage}></Route>
          <Route path="/Registration" component={Registration}></Route>
          <Route path="/Login" component={Login}></Route>

          <Route component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
