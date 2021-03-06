import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "./configureStore";
import { Subreddit } from "./components/snew";
import Routes from "./Routes";
import loaderConnector from "./connectors/loader";

const store = configureStore();

class Loader extends Component {
  componentDidMount() {
    this.props.onInit();
  }

  render() {
    return this.props.children;
  }
}

const LoaderComponent = loaderConnector(Loader);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <LoaderComponent>
          <Router onChange={this.handleRoute}>
            <Subreddit>
              <Routes />
            </Subreddit>
          </Router>
        </LoaderComponent>
      </Provider>
    );
  }
}
