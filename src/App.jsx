import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles/toast-custom.css';

function App() {
  return (
    <>
      <Outlet />

      <ToastContainer
        position="top-right"
        autoClose={5000}
        newestOnTop={false}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        pauseOnFocusLoss
        theme="light"
      />
    </>
  );
}

export default App;
