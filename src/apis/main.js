import { REPO, OWNER } from '../constants';
import instance from './core';

export const getIssues = async () => {
  try {
    const response = await instance.get(
      `/repos/${OWNER}/${REPO}/issues?state=open&sort=comments&per_page=10`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
