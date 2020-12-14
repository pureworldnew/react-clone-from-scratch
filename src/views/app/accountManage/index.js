import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const AccountInfo = React.lazy(() =>
  import(/* webpackChunkName: "accountInfo" */ './accountInfo')
);
const AccountNeedFill = React.lazy(() =>
  import(/* webpackChunkName: "accountNeedFill" */ './accountNeedFill')
);

const AccountHaveFill = React.lazy(() =>
  import(/* webpackChunkName: "AccountHaveFill" */ './accountHaveFill')
);

const AccountListings = React.lazy(() =>
  import(/* webpackChunkName: "AccountListings" */ './accountListings')
);

const AccountContactor = React.lazy(() =>
  import(/* webpackChunkName: "AccountContactor" */ './accountContactor')
);

const AccountNotification = React.lazy(() =>
  import(/* webpackChunkName: "AccountNotification" */ './accountNotification')
);

const AccountManage = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/info`} />
      <Route
        path={`${match.url}/info`}
        render={(props) => <AccountInfo {...props} />}
      />
      <Route
        path={`${match.url}/needfill`}
        render={(props) => <AccountNeedFill {...props} />}
      />
      <Route
        path={`${match.url}/havefill`}
        render={(props) => <AccountHaveFill {...props} />}
      />
      <Route
        path={`${match.url}/listings`}
        render={(props) => <AccountListings {...props} />}
      />
      <Route
        path={`${match.url}/contactor`}
        render={(props) => <AccountContactor {...props} />}
      />
      <Route
        path={`${match.url}/notifications`}
        render={(props) => <AccountNotification {...props} />}
      />
      <Redirect to="/error" />
    </Switch>
  </Suspense>
);
export default AccountManage;
