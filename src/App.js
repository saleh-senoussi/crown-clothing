import { Routes, Route } from 'react-router-dom';

import Navigation from './routes/navigation/navigation.component';
import { Suspense, lazy, useEffect } from 'react';
import Shop from './routes/shop/shop.component';
import Checkout from './routes/checkout/checkout.component';
import { createUserDocumentFromAuth, onAuthStateChangedListener } from './utils/firebase/firebase.utils';
import { setCurrentUser } from './store/user/user.action';
import { useDispatch } from 'react-redux';

const Home = lazy(() => import('./routes/home/home.component'));
const Authentication = lazy(() => import('./routes/authentication/authentication.component'));

const App = () => {
  const dispatch = useDispatch(); // dispatch never changes
  
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
        if (user) {
          createUserDocumentFromAuth(user);
        }
        dispatch(setCurrentUser(user));
      });

      return unsubscribe;
    }, []);

  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
          <Route index element={<Suspense fallback={'Loading...'}><Home/></Suspense>} />
          <Route path='auth' element={<Suspense fallback={'Loading...'}><Authentication /></Suspense>}></Route>
          <Route path='shop/*' element={<Suspense fallback={'Loading...'}><Shop /></Suspense>}></Route>
          <Route path='checkout' element={<Suspense fallback={'Loading...'}><Checkout /></Suspense>}></Route>
      </Route>
    </Routes>
  );
}

export default App;
