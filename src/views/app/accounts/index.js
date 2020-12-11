import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const Overview = React.lazy(() =>
  import(/* webpackChunkName: "overview" */ './overview')
);

const Account = React.lazy(() =>
  import(/* webpackChunkName: "accounts-account" */ './account')
);
const Accounts = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/overview`} />
      <Route
        path={`${match.url}/overview`}
        render={(props) => <Overview {...props} />}
      />
      <Route
        path={`${match.url}/account`}
        render={(props) => <Account {...props} />}
      />
      <Redirect to="/error" />
    </Switch>
  </Suspense>
);
export default Accounts;
