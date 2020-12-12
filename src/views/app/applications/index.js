import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const Todo = React.lazy(() =>
  import(/* webpackChunkName: "application-todo" */ './todo')
);
const Survey = React.lazy(() =>
  import(/* webpackChunkName: "application-survey" */ './survey')
);
const Applications = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/todo`} />
      <Route
        path={`${match.url}/todo`}
        render={(props) => <Todo {...props} />}
      />
      <Route
        path={`${match.url}/survey`}
        render={(props) => <Survey {...props} />}
        isExact
      />
      <Redirect to="/error" />
    </Switch>
  </Suspense>
);
export default Applications;
