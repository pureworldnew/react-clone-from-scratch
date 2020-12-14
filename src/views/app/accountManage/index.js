import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const AccountInfo = React.lazy(() =>
  import(/* webpackChunkName: "start" */ './accountInfo')
);
const AccountNeedFill = React.lazy(() =>
  import(/* webpackChunkName: "start" */ './accountNeedFill')
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
      <Redirect to="/error" />
    </Switch>
  </Suspense>
);
export default AccountManage;
