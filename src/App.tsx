import React from "react";
import createHistory from "history/createBrowserHistory";
import { Route, Router, Switch } from "react-router";
import { EmailBuilder } from "./templates/EmailBuilder";

const history = createHistory();

function App() {
    return (
        <Router history={history}>
            <Switch>
                <Route
                    path="/"
                    render={() => (
                        <EmailBuilder
                            title="You reached your log limit"
                            texts={[
                              "In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
                              "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.",
                              "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci."
                            ]}
                            callToActionLink="https://baselime.io"
                            callToActionText="Increase my log limit"
                        />
                    )}
                    exact
                />
            </Switch>
        </Router>
    );
}

export default App;
