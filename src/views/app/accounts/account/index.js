import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const FreelancerList = React.lazy(() =>
  import(/* webpackChunkName: "freelancer-list" */ './freelancer-list')
);
const ImageList = React.lazy(() =>
  import(/* webpackChunkName: "product-image-list" */ './image-list')
);
const ThumbList = React.lazy(() =>
  import(/* webpackChunkName: "product-thumb-list" */ './thumb-list')
);
const Details = React.lazy(() =>
  import(/* webpackChunkName: "product-details" */ './details')
);
const DetailsAlt = React.lazy(() =>
  import(/* webpackChunkName: "product-details-alt" */ './details-alt')
);

const AccountsAccount = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/freelancer`} />
      <Route
        path={`${match.url}/freelancer`}
        render={(props) => <FreelancerList {...props} />}
      />
      <Route
        path={`${match.url}/client`}
        render={(props) => <ImageList {...props} />}
      />
      <Route
        path={`${match.url}/recruiter`}
        render={(props) => <ThumbList {...props} />}
      />
      <Route
        path={`${match.url}/details`}
        render={(props) => <Details {...props} />}
      />
      <Route
        path={`${match.url}/details-alt`}
        render={(props) => <DetailsAlt {...props} />}
      />
      <Redirect to="/error" />
    </Switch>
  </Suspense>
);
export default AccountsAccount;
