import React, { Suspense } from 'react';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import AppLayout from '../../layout/AppLayout';

const Gogo = React.lazy(() =>
  import(/* webpackChunkName: "viwes-gogo" */ './gogo')
);
const SecondMenu = React.lazy(() =>
  import(/* webpackChunkName: "viwes-second-menu" */ './second-menu')
);
const Dashboards = React.lazy(() =>
  import(/* webpackChunkName: "dashboards" */ './dashboards')
);
const Pages = React.lazy(() =>
  import(/* webpackChunkName: "pages" */ './pages')
);
const Applications = React.lazy(() =>
  import(/* webpackChunkName: "applications" */ './applications')
);
const Ui = React.lazy(() => import(/* webpackChunkName: "ui" */ './ui'));
const Menu = React.lazy(() => import(/* webpackChunkName: "menu" */ './menu'));
const BlankPage = React.lazy(() =>
  import(/* webpackChunkName: "viwes-blank-page" */ './blank-page')
);

const Accounts = React.lazy(() =>
  import(/* webpackChunkName: "view-accounts" */ './accounts')
);

const Projects = React.lazy(() =>
  import(/* webpackChunkName: "view-projects" */ './projects')
);

const Clients = React.lazy(() =>
  import(/* webpackChunkName: "view-clients" */ './clients')
);

const Times = React.lazy(() =>
  import(/* webpackChunkName: "view-times" */ './times')
);

const Wallets = React.lazy(() =>
  import(/* webpackChunkName: "view-wallets" */ './wallets')
);
const App = ({ match }) => {
  return (
    <AppLayout>
      <div className="dashboard-wrapper">
        <Suspense fallback={<div className="loading" />}>
          <Switch>
            <Redirect
              exact
              from={`${match.url}/`}
              to={`${match.url}/dashboards`}
            />
            <Route
              path={`${match.url}/dashboards`}
              render={(props) => <Dashboards {...props} />}
            />
            <Route
              path={`${match.url}/applications`}
              render={(props) => <Applications {...props} />}
            />
            <Route
              path={`${match.url}/pages`}
              render={(props) => <Pages {...props} />}
            />
            <Route
              path={`${match.url}/ui`}
              render={(props) => <Ui {...props} />}
            />
            <Route
              path={`${match.url}/menu`}
              render={(props) => <Menu {...props} />}
            />
            <Route
              path={`${match.url}/accounts`}
              render={(props) => <Accounts {...props} />}
            />
            <Route
              path={`${match.url}/projects`}
              render={(props) => <Projects {...props} />}
            />
            <Route
              path={`${match.url}/clients`}
              render={(props) => <Clients {...props} />}
            />
            <Route
              path={`${match.url}/times`}
              render={(props) => <Times {...props} />}
            />
            <Route
              path={`${match.url}/wallets`}
              render={(props) => <Wallets {...props} />}
            />
            <Route
              path={`${match.url}/gogo`}
              render={(props) => <Gogo {...props} />}
            />
            <Route
              path={`${match.url}/second-menu`}
              render={(props) => <SecondMenu {...props} />}
            />
            <Route
              path={`${match.url}/blank-page`}
              render={(props) => <BlankPage {...props} />}
            />
            <Redirect to="/error" />
          </Switch>
        </Suspense>
      </div>
    </AppLayout>
  );
};

const mapStateToProps = ({ menu }) => {
  const { containerClassnames } = menu;
  return { containerClassnames };
};

export default withRouter(connect(mapStateToProps, {})(App));
