import React from "react";
import { withRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import AppContext from "app/AppContext";
import Header from "./components/Header";
import Footer from "./components/Footer";

class Layout extends React.Component {
  render() {
    return (
      <AppContext.Consumer>
        {({ routes }) => (
          <div className="h-full">
            <div className="flex flex-1 flex-col overflow-hidden relative h-full">
              <Header />
              <div className="flex relative flex-col h-full">
                {renderRoutes(routes)}
                {this.props.children}
              </div>
              <Footer />
            </div>
          </div>
        )}
      </AppContext.Consumer>
    );
  }
}
export default withRouter(Layout);
