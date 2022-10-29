import { http, URLS } from './api';

export const IssuesService = {
  getIssues: async function () {
    try {
      const querys = '?sort=comments';
      const url = `${URLS.ISSUES_ANGULAR_CLI}`;
      const res = await http.get(url);
      if (res.status === 200) return res.data;

      throw new Error('API통신 실패');
    } catch (error: any) {
      console.error(error.message);
    }
  },
};
