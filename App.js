import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import {
  Header,
  Footer,
  Body,
  About,
  Error,
  MainRestaurant,
  ShimmarUI,
} from "./src/Components/Index";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"; // First , Need to push to the repo
import Profile from "./src/Components/profile";
import ShimmarUI from "./src/Components/Index";
import { ShimmarCard } from "./src/Components/ShimmarUI/ShimmarUI";
import UserContext from "./src/utils/UserContext";
// import Instamart from "./src/Components/Instamart";
import { Provider } from "react-redux";
import store from "./src/utils/store";
import Cart from "./src/Components/Cart/Cart";

const Instamart = lazy(() => import("./src/Components/Instamart"));
// Upon On Demand --> Upon Loading --> React will suspend Loading
// upon on demand loading and react shows the content that's not present currently but at using SUSPENSE react knows it will take some time to get the data add it to the virtualDOM

function App() {
  const [user, setUser] = useState({
    name: "Ritesh Narwade",
    email: "riteshnarwade03@gmail.com",
  });

  return (
    <Provider store={store}>
      <UserContext.Provider value={{ user: user, setUser: setUser }}>
        {/* <UserContext.Provider value={{OLD:NEW}}> */}
        <Header />
        <Outlet />
        <Footer />
      </UserContext.Provider>
    </Provider>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/restaurant/:id",
        element: <MainRestaurant />,
      },
      {
        /**
         * chunking
         * dynamic bundling
         * lazy loading
         * on demand loading
         * dynamic import
         *
         * 
         *
         */
        path: "/instamart",
        element: (
          <Suspense fallback={<ShimmarCard />}>
            <Instamart />
          </Suspense>
        ),
      },
      {
        path:"/cart",
        element:<Cart />
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
