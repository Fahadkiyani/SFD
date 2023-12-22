import { Suspense } from "react";

// ==============================|| LOADABLE - LAZY LOADING ||============================== //

const Loadable = (Component) => (props) =>
  (
    <Suspense fallback={<h2>Loading...</h2>}>
      <Component {...props} />
    </Suspense>
  );

export default Loadable;
