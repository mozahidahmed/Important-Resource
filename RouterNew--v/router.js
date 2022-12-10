

// 1...
import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    children: [
      {
        // path: "/home1",
        // element: <GetData/>,
      },
      {
        // path: "/home2",
        // element: <GetData/>,
      },
      {
        // path: "/home3",
        // element: <GetData/>,
      },
     
    ],
  },
]);

export default Routes;


// 2.
// tarpor App.js file a 
//  <RouterProvider router={Routes} />



 