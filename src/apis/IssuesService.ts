import { http, URLS } from './api';

export const IssuesService = {
  getIssues: async function (page = 1) {
    try {
      const query = `?sort=comments&per_page=10&page=${page}`;
      const url = `${URLS.ISSUES.ANGULAR_CLI}${query}`;
      const res = await http.get(url);
      if (res.status === 200) return res.data;

      throw new Error('API통신 실패');
    } catch (error: any) {
      console.error(error.message);
      throw new Error();
    }
  },
};
