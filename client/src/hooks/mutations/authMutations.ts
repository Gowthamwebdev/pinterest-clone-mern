import { useMutation, useQuery } from '@tanstack/react-query';
import { userLoginApi, userSignupApi, fetchUserProfileApi } from '../../api/authApi';
import { useUserStore } from '../../stores/userStore/userStore';
import { useAuthStore } from '../../stores/AuthStore';
import Cookies from 'js-cookie';

export const useLoginMutation = () => {
  const { setAccessToken, setIsAuthenticated } = useAuthStore();
  const profileQuery = useUserProfileQuery();

  return useMutation({
    mutationFn: userLoginApi,
    onSuccess: async (data) => {
      const { token } = data;
      
      setAccessToken(token);
      setIsAuthenticated(true);
      Cookies.set('token', token, { expires: 1 });
      console.log('logged in...')
      await profileQuery.refetch();
    },
    onError: (error) => {
      console.error('Login error:', error);
    }
  });
};

export const useUserProfileQuery = () => {
  const { setUserId, setName, setEmail, setProfileImg } = useUserStore();

  return useQuery({
    queryKey: ['userProfile'],
    queryFn: async () => {
      const user = await fetchUserProfileApi();
      setUserId(user.id);
      setName(user.name);
      setEmail(user.email);
      setProfileImg(user.profile_img || '');
      console.log(user)
      return user;
    },
    enabled: false,
    retry: false,
  });
};
export const useSignupMutation = () => {
  const { setIsAuthenticated } = useAuthStore();

  return useMutation({
    mutationFn: userSignupApi,
    onSuccess: (data) => {
      const { access_token } = data;
      
      setIsAuthenticated(true);
      Cookies.set('token', access_token, { expires: 1 });

      console.log('Signup success - token stored');
    },
    onError: (error) => {
      console.error('Signup error:', error);
    }
  });
};
