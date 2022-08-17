import React, { Suspense } from "react";
import { connect } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import * as actions from '../../actions/index';
import Rouings from '../../routes/index';


function Body(props) {


  const checkAuthRoute = () => {
    // const token = localStorage.getItem("eth_requestAccounts"),
    //   key = localStorage.getItem("publicKey");
    return true;
  }

  return (
    <div className="body">
      <div className="body-container">
        <Suspense fallback={'..loading'}>
          <BrowserRouter>
            <Routes>
              {Rouings.publicRoutes.map((route, idx) => {
                return route.component && (
                  <Route
                    key={idx}
                    path={route.path}
                    name={route.name}
                    element={<route.component />} />
                )
              })}
              {/* {checkAuthRoute() && Rouings.privateRoutes.map((route, idx) => {
                return route.component && (
                  <Route
                    key={idx}
                    path={route.path}
                    name={route.name}
                    element={<route.component />} />
                )
              })} */}
              {/* <Redirect to="/" /> */}
            </Routes>
          </BrowserRouter>
        </Suspense>

      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    // isAuthStatus: state.authReducer.userAuth.islogin
  };
};

const mapDispatchToProps = dispatch => {
  return {
    showLoader: (obj) => dispatch(actions.showLoader(obj)),
    hideLoader: (obj) => dispatch(actions.hideLoader(obj))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Body);