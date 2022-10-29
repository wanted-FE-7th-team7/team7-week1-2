import { http, URLS } from './api';

export const UsersService = {
  get: async function () {
    try {
      const res = await http.get(URLS.USER);
      if (res.status === 200) return res.data;

      throw new Error('API통신 실패');
    } catch (error: any) {
      console.error(error.message);
    }
  },
};
