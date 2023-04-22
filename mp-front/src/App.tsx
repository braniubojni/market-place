import PublicRoutes from './routes/PublicRoutes'
import PrivateRoutes from './routes/PrivateRoutes'
import { Suspense } from 'react';

function App() {

  return (
    <Suspense fallback={'Loading ...'}>
      <PublicRoutes />
      {/* <PrivateRoutes /> */}
    </Suspense>
  );
}

export default App;
