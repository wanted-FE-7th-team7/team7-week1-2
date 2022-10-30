import { instance } from '.';

let BOARD_URL =
  'https://api.github.com/repos/angular/angular-cli/issues?sort=comments&per_page=100&state=open';

export const getBoard = async (setBoard: any) => {
  await instance
    .get(BOARD_URL)
    .then(res => {
      setBoard(res.data);
    })
    .catch(err => {});
};
