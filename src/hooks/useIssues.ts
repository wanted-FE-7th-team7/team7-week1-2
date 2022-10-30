import { useContext } from 'react';
import {
  IssuesStateContext,
  IssuesDispatchContext,
} from '../contexts/IssuesContext';

export function useIssuesState() {
  const state = useContext(IssuesStateContext);

  if (!state) {
    throw new Error('Provider를 찾을 수 없습니다.');
  }

  return state;
}

export function useIssuesValue() {
  const state = useContext(IssuesStateContext);

  if (!state) {
    throw new Error('Provider를 찾을 수 없습니다.');
  }

  return state.data;
}

export function useIssuesDispatch() {
  const dispatch = useContext(IssuesDispatchContext);

  if (!dispatch) {
    throw new Error('Provider를 찾을 수 없습니다.');
  }

  return dispatch;
}
