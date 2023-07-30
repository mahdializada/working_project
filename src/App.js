// import App1 from './components/product/App1';

import CallApi from './components/Api/CallApi';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CallApi></CallApi>,
  },
  {
    path: "todo",
    element: <div>Todos Page</div>,
  },
]);

function App() {
  return (
    <RouterProvider router={router} >
    <div className="App">
      <header className="App-header">
        {/* <App1></App1> */}
        <CallApi></CallApi>
      </header>
    </div>
    </RouterProvider>
  );
}

export default App;
