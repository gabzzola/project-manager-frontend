import { Outlet, useNavigation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Loading from './components/ui/Loading';
import 'react-toastify/dist/ReactToastify.css';
import './styles/toast-custom.css';

function App() {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';

  return (
    <>
      {isLoading && <Loading />}

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
