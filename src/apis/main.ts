import { REPO, OWNER, ISSUES_PER_PAGE } from '../constants';
import instance from './core';
//?state=open&sort=comments&per_page=10`
export const getIssues = async (page: number) => {
  try {
    const response = await instance.get(`/repos/${OWNER}/${REPO}/issues`, {
      params: {
        state: 'open',
        sort: 'comments',
        per_page: ISSUES_PER_PAGE,
        page: page,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
