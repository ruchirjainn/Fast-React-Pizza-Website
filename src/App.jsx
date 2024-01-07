import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { loader as menuLoader } from './features/menu/Menu';
import { loader as orderLoader } from './features/order/Order';

import Home from './ui/Home';
import Error from './ui/Error';
import Menu from './features/menu/Menu';
import Cart from './features/cart/Cart';
import CreateOrder from './features/order/CreateOrder';
import { action as updateOrderAction } from './features/order/UpdateOrder';
import { action as createOrderAction } from './features/order/CreateOrder';
import Order from './features/order/Order';
import AppLayout from './ui/AppLayout';

// loaders are used to read data
// actions are used to write data

// use to load and submit data
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />, // global error element
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/menu',
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />, // local error element
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/order/new',
        element: <CreateOrder />,
        action: createOrderAction, // whenever there is any form submission in this route this action will be called
      },
      {
        path: '/order/:orderId',
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
        action: updateOrderAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
