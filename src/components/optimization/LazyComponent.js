import React, { Suspense } from "react";

const LazyComponent = React.lazy(() => import("./LazyComponent"));

function LazyComponentApp() {
  return (
    <div>
      <h1>Main Application</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
}

export default LazyComponentApp;
