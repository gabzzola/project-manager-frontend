import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { useNavigationStatus } from './hooks/useNavigationStatus';
import Loading from './components/ui/Loading';

function App() {
  const { isBusy } = useNavigationStatus();

  return (
    <>
      {isBusy && <Loading />}

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
