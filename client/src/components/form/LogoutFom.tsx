  import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../stores/authStore';

const LogoutForm = () => {
  const navigate = useNavigate();
  const resetAuth = useAuthStore((state) => state.resetAuth);

  const handleLogout = () => {
    resetAuth();
    Cookies.remove('token');
    setTimeout(() => {
      navigate('/login');
    }, 2000);
  };

  return (
    <button onClick={handleLogout} className="w-full text-left px-4 py-2">
      Sign out
    </button>
  );
};

export default LogoutForm;