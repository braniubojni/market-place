import PublicRoutes from './routes/PublicRoutes';
// import PrivateRoutes from './routes/PrivateRoutes';
import { Suspense } from 'react';
import Header from './features/Header/Header';
import { AppStyles, Footer } from './App.styled';

function App() {
  return (
    <>
      <AppStyles />

      <Header />

      <Suspense fallback={'Loading ...'}>
        <PublicRoutes />
        {/* <PrivateRoutes /> */}
      </Suspense>

      <Footer>
        <div>Marketplace EH</div>
      </Footer>
    </>
  );
}

export default App;
