import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/layouts/Layout'
import './styles/index.css';
import { connect } from 'react-redux';
import * as actions from './actions/index';

function App(props) {
  return (
    <div className="App">
      {props.isShowLoader && <div className="loader-wrapper">
        <div class="loader"></div>
        {/* <button onClick={() =>props.hideLoader()}>Hide Loader</button> */}
      </div>}
      {/* <button onClick={() =>props.showLoader()}>Show loader</button> */}

      <Layout></Layout>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    isShowLoader: state.loaderReducer.show
  };
};

const mapDispatchToProps = dispatch => {
  return {
    showLoader: () => dispatch(actions.showLoader()),
    hideLoader: () => dispatch(actions.hideLoader())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
