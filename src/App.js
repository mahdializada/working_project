// import App1 from './components/product/App1';

import { Container } from '@mantine/core';
import CallApi from './components/Api/CallApi';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import PostDetail from './components/Api/pages/post/detail.page';

const router = createBrowserRouter([
  {
    path: "/",
    element: <CallApi></CallApi>,
  },
  {
    path: "todo",
    element: <div>Todos Page</div>,
  },
  {
    path: "post/:post_id",
    element: <PostDetail/>,
  },
]);

function App() {
  return (
    <Container>
    <RouterProvider router={router} >
    <div className="App">
      <header className="App-header">
        {/* <App1></App1> */}
        {/* <CallApi></CallApi> */}
      </header>
    </div>
    </RouterProvider>
    </Container>
  );
}

export default App;
