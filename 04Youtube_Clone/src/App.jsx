import ErrorPage from "./page/ErrorPage.jsx";
import HomePage from "./page/HomePage.jsx";
import { createBrowserRouter , RouterProvider } from "react-router-dom"

const arrayOfObjectsToCreateBrowserRouter = [
  {
    path : "/" , 
    element : <HomePage />,
    errorElement : <ErrorPage />
  } , {} , {} , {}
]

const router = createBrowserRouter(arrayOfObjectsToCreateBrowserRouter);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
