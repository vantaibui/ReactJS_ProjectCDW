import { Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.scss";
import Header from "./Layouts/Header";
import HomePage from "./Pages/Home/HomePage";
import Routes from "./Routes";
import HomeTemplate from "./Templates/HomeTemplate";

function App() {
  let showContentMenu = (Routes) => {
    let result;
    if (Routes.length > 0) {
      result = Routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        );
      });
    }
    return <Switch>{result}</Switch>;
  };
  return (
    <BrowserRouter>
      <Fragment>
        <Header />
        {showContentMenu(Routes)}
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
