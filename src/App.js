// import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";
import store from "./redux/store";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
      <Provider store={store}>
        <RouterProvider router={router} />
        <Toaster position="top-right" />
      </Provider>
    </div>
  );
}

export default App;
