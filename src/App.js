import PropTypes from 'prop-types';
import React from "react";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { Routes, Route } from "react-router-dom";
import { layoutTypes } from "./constants/layout";
// Import Routes all
import { authProtectedRoutes, publicRoutes } from "./routes";

// Import all middleware
import { Authmiddleware, GuestMiddleware } from "./routes/route";

// layouts Format
import VerticalLayout from "./components/VerticalLayout/";
import HorizontalLayout from "./components/HorizontalLayout/";
import NonAuthLayout from "./components/NonAuthLayout";
import NotFound from 'pages/Errors/NotFound';

// Import scss
import "./assets/scss/theme.scss";


import fakeBackend from "./helpers/AuthType/fakeBackend";

// Activating fake backend
fakeBackend();



const getLayout = (layoutType) => {
  let Layout = VerticalLayout;
  switch (layoutType) {
    case layoutTypes.VERTICAL:
      Layout = VerticalLayout;
      break;
    case layoutTypes.HORIZONTAL:
      Layout = HorizontalLayout;
      break;
    default:
      break;
  } 
  return Layout;
};

const App = () => {
  const userData = JSON.parse(localStorage.getItem('userData'));
  const selectLayoutState = (state) => state.Layout;
  const LayoutProperties = createSelector(
    selectLayoutState,
    (layout) => ({
      layoutType: layout.layoutType,
    })
  );

  const {
    layoutType
  } = useSelector(LayoutProperties);

  const Layout = getLayout(layoutType);

  return (
    <React.Fragment>
      <Routes>
        {publicRoutes.map((route, idx) => (
          <Route
            path={route.path}
            element={
              <GuestMiddleware>
                <NonAuthLayout>
                  {route.component}
                </NonAuthLayout>
              </GuestMiddleware>
            }
            key={idx}
            exact={true}
          />
        ))}

        {authProtectedRoutes.map((route, idx) => (
          <Route
            path={route.path}
            element={
              <Authmiddleware user={route.user}>
                <Layout>{route.component}</Layout>
              </Authmiddleware>}
            key={idx}
            exact={true}
          />
        ))}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </React.Fragment>
  );
};

App.propTypes = {
  layout: PropTypes.any
};

export default App;

const chintu = () =>{
  return <h1>CHINTU</h1>
}