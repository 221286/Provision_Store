import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Body from "./Body";
import Mainpage from "./Components/Mainpage";
import Login from "./Components/Login";
import About from "./Components/About";

//import 
function App() {
  const route = createBrowserRouter([{
    element:<Body></Body>,
    path:"/",
    children:[{
      element:<Mainpage></Mainpage>,
      path:"/Login/Mainpage",
    },
  {
    element:<Login></Login>,
    path:"/"
  },
{
  element:<About></About>,
  path:"/Login/About"
}]
  }])
  return (
    <div className="App">
      <RouterProvider router={route}>
      <Body></Body>
      </RouterProvider>
      
    </div>
  );
}

export default App;
