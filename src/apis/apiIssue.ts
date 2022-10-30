import { instance } from '.';

let ISSUE_URL = 'https://api.github.com/repos/angular/angular-cli/issues';

export const getIssue = async (setBoard: any, param: any) => {
  await instance
    .get(`${ISSUE_URL}/${param}`)
    .then(res => {
      setBoard(res.data);
    })
    .catch(err => {});
};
