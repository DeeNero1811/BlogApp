// src/components/LazyComponent.js

import React, { Suspense, lazy } from "react";

const LazyComponent = lazy(() => import("./SomeLargeComponent"));

const LazyPage = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <LazyComponent />
  </Suspense>
);

export default LazyPage;
