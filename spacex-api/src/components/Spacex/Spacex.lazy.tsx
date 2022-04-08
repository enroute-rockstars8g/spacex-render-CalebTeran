import React, { lazy, Suspense } from 'react';

const LazySpacex = lazy(() => import('./Spacex'));

const Spacex = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazySpacex {...props} />
  </Suspense>
);

export default Spacex;
