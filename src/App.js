import { Routes, Route } from 'react-router-dom';

import Navigation from './routes/navigation/navigation.component';
import { Suspense, lazy } from 'react';
import Shop from './routes/shop/shop.component';

const Home = lazy(() => import('./routes/home/home.component'));
const Authentication = lazy(() => import('./routes/authentication/authentication.component'));

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
          <Route index element={<Suspense fallback={'Loading...'}><Home/></Suspense>} />
          <Route path='auth' element={<Suspense fallback={'Loading...'}><Authentication /></Suspense>}></Route>
          <Route path='shop' element={<Suspense fallback={'Loading...'}><Shop /></Suspense>}></Route>
      </Route>
    </Routes>
  );
}

export default App;
