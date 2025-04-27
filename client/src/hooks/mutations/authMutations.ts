import { useMutation } from '@tanstack/react-query';
import { userLoginApi, userSignupApi } from '../../api/authApi';
import { useUserStore } from '../../stores/userStore/userStore';
import { useAuthStore } from '../../stores/AuthStore';
import Cookies from 'js-cookie';

export const useLoginMutation = () => {
  const { setUserId, setName, setEmail, setProfileImg } = useUserStore();
  const { setAccessToken, setIsAuthenticated } = useAuthStore();

  return useMutation({
    mutationFn: userLoginApi,
    onSuccess: (data) => {
      const { accessToken, user } = data;

      setUserId(user.id.toString());
      setName(user.name);
      setEmail(user.email);
      setProfileImg(user.profile_img !== 'null' ? user.profile_img : '');

      setAccessToken(accessToken);
      setIsAuthenticated(true);

      Cookies.set('token', accessToken, { expires: 0.1 });

      console.log('Login success:', data);
    },
    onError: (error) => {
      console.error('Login error:', error);
    }
  });
};

export const useSignupMutation = () => {
  const { setUserId, setName, setEmail, setProfileImg } = useUserStore();
  const { setAccessToken, setIsAuthenticated } = useAuthStore();

  return useMutation({
    mutationFn: userSignupApi,
    onSuccess: (data) => {
      const { accessToken, user } = data;

      setUserId(user.id.toString());
      setName(user.name);
      setEmail(user.email);
      setProfileImg(user.profile_img !== 'null' ? user.profile_img : '');

      setAccessToken(accessToken);
      setIsAuthenticated(true);

      Cookies.set('token', accessToken, { expires: 0.1 });

      console.log('Signup success:', data);
    },
    onError: (error) => {
      console.error('Signup error:', error);
    }
  });
};
