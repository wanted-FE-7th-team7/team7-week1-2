# team7-week1-2

원티드 프론트엔드 프리온보딩 7차 7팀 1-2 과제 레포리토리입니다
<br />

### 배포 주소

[http://team7-week1-2.s3-website.ap-northeast-2.amazonaws.com](http://team7-week1-2.s3-website.ap-northeast-2.amazonaws.com/)
<br />

### 폴더구조

```jsx
📦src
 ┣ 📂apis
 ┃ ┣ 📜axiosUtils.ts
 ┃ ┗ 📜issuesApi.ts
 ┣ 📂components
 ┃ ┣ 📜IssueDetail.tsx
 ┃ ┣ 📜IssueHeader.tsx
 ┃ ┣ 📜IssueItem.tsx
 ┃ ┣ 📜IssueLayout.tsx
 ┃ ┣ 📜IssueList.tsx
 ┃ ┣ 📜IssueLoader.tsx
 ┃ ┣ 📜IssueRouter.tsx
 ┃ ┣ 📜MainRouter.tsx
 ┃ ┗ 📜Providers.tsx
 ┣ 📂contexts
 ┃ ┗ 📜IssuesContext.tsx
 ┣ 📂hooks
 ┃ ┗ 📜useIssues.ts
 ┣ 📂models
 ┃ ┗ 📜issue.ts
 ┣ 📂pages
 ┃ ┣ 📜ErrorPage.tsx
 ┃ ┣ 📜IssueDetailPage.tsx
 ┃ ┗ 📜IssuesPage.tsx
 ┣ 📂utils
 ┃ ┣ 📜env.ts
 ┃ ┗ 📜parseIssue.ts
 ┣ 📜App.tsx
 ┣ 📜index.tsx
 ┗ 📜react-app-env.d.ts
```

1. apis : api 통신 함수 관리
2. components : 공통된 컴포넌트 관리
3. contexts : Context API 관리
4. hooks : 공통으로 사용되는 hooks 관리
5. models : 공통으로 사용되는 interface 관리
6. pages : 페이지 단위 컴포넌트 폴더
7. utils : 공통으로 사용되는 기타 함수 관리
<br />

### API 연동 (이슬)

- API `response` 를 `interface` 로 작성

```tsx
export interface IssueResponse {
  id: number;
  number: number;
  title: string;
  body: string;
  user: {
    login: string;
    avatar_url: string;
  };
  comments: number;
  created_at: string;
}
```
<br />

- API 요청시 필요한 `상수` 및 `변수` 정의

```tsx
export type IssuesSort = 'created' | 'updated' | 'comments';

export const GITHUB_API_URL = 'https://api.github.com';
export const GITHUB_ACCEPT = 'application/vnd.github+json';
export const GITHUB_OWNER_NAME = 'angular';
export const GITHUB_REPO_NAME = 'angular-cli';

const path = {
  issues: `/repos/${GITHUB_OWNER_NAME}/${GITHUB_REPO_NAME}/issues`,
};
```
<br />

- API 요청 `class` 작성

```tsx
class IssuesApi {
  private axiosInstance: AxiosInstance;

  constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance;
  }

  getIssues = (
    sort: IssuesSort = 'comments',
    page: number = 1,
    per_page: number = 10
  ) => {
    return this.axiosInstance.get<IssueResponse[]>(path.issues, {
      params: {
        sort,
        page,
        per_page,
      },
    });
  };
}
```
<br />

- `issuesApiInstance` 를 `IssuesApi` 에 주입하여 인스턴스화 한 것을 export 함.

```tsx
const issuesApiInstance = createAxiosInstance(GITHUB_API_URL, {
  Accept: GITHUB_ACCEPT,
  Authorization: createJwtAuthorization(env.token),
});

const issuesApi = new IssuesApi(issuesApiInstance);
export { IssuesApi, issuesApi };
```
<br />

### 무한 스크롤 (신상오)

- `IntersectionObserver API`  사용
- `useRef`를 활용해 마지막 요소에 스크롤 닿을 경우 페이지가 넘어가도록 구현되었습니다.

```tsx
export function IssueLoader() {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const divRef = useRef<HTMLDivElement>(null);
  const page = useRef(0);

  const [isEnd, setIsEnd] = useState(false);
  const { isLoading } = useIssuesState();
  const dispatch = useIssuesDispatch();
  const navigate = useNavigate();

  const onIntersect: IntersectionObserverCallback = useCallback(
    async ([entry], observer) => {
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);
        dispatch({ type: 'GET_ISSUES' });
        try {
          const response = await issuesApi.getIssues(
            'comments',
            ++page.current
          );
          dispatch({
            type: 'GET_ISSUES_SUCCESS',
            data: response.data.map(parseIssue),
          });
          if (response.data.length < 10) {
            setIsEnd(true);
          } else {
            observer.observe(entry.target);
          }
        } catch (e) {
          const axiosError = e as AxiosError;
          dispatch({ type: 'GET_ISSUES_ERROR', error: axiosError });
          navigate('/error');
        }
      }
    },
    [dispatch, navigate]
  );

  useEffect(() => {
    if (divRef.current !== null) {
      observerRef.current = new IntersectionObserver(onIntersect);
      observerRef.current.observe(divRef.current);
      return () => observerRef.current?.disconnect();
    }
  }, [onIntersect]);

  if (isEnd) {
    return null;
  } else {
    return (
      <div ref={divRef}>
        {isLoading && <S.Loading>데이터를 불러오는 중입니다.</S.Loading>}
      </div>
    );
  }
}
```
<br />

### 로딩 / 에러 처리(재현)

- `useRef` 사용하여 스크롤이 닿을경우 로딩이나오도록 구현
- 에러가 있을 경우  `/error`로 이동됩니다.

```tsx
//로딩
if (isEnd) {
    return null;
  } else {
    return (
      <div ref={divRef}>
        {isLoading && <S.Loading>데이터를 불러오는 중입니다.</S.Loading>}
      </div>
    );
  }
}

//에러 처리
const onIntersect: IntersectionObserverCallback = useCallback(
    async ([entry], observer) => {
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);
        dispatch({ type: 'GET_ISSUES' });
        try {
          const response = await issuesApi.getIssues(
            'comments',
            ++page.current
          );
          dispatch({
            type: 'GET_ISSUES_SUCCESS',
            data: response.data.map(parseIssue),
          });
          if (response.data.length < 10) {
            setIsEnd(true);
          } else {
            observer.observe(entry.target);
          }
        } catch (e) {
          const axiosError = e as AxiosError;
          dispatch({ type: 'GET_ISSUES_ERROR', error: axiosError });
          navigate('/error');
        }
      }
    },
    [dispatch, navigate]
  );
```
<br />

### Context API (승범)

- Context 를 만들 땐 다음과 같이 `React.createContext()` 를 사용
- Context 안에 Provider 컴포넌트를 통하여 Context 의 `value` 생성
- Context에서 보내는 value는 ‘state’와 ‘action’
- action type
    - GET_ISSUES_TYPE : error or loading 여부 확인
    - GET_ISSUES_SUCCESS_TYPE : 성공 처리
    - GET_ISSUES_ERROR_TYPE : error 처리

```jsx
import React, { createContext, useReducer } from 'react';

...

const issuesReducer = (state: State, action: Action) => {
  switch (action.type) {
    case GET_ISSUES_TYPE:
      return {
        ...state,
        ...loadingState,
      };
    case GET_ISSUES_SUCCESS_TYPE:
      return {
        isLoading: false,
        data: [...state.data, ...action.data],
        error: null,
      };
    case GET_ISSUES_ERROR_TYPE:
      return {
        ...state,
        error: action.error,
      };
    default:
      throw new Error('유효하지 않은 타입입니다.');
  }
};

...

export const IssuesStateContext = createContext<State>(initialState);
export const IssuesDispatchContext = createContext<React.Dispatch<any>>(
  () => {}
);

export function IssuesProvider({ children }: Props) {
  const [state, dispatch] = useReducer(issuesReducer, initialState);

  return (
    <IssuesStateContext.Provider value={state}>
      <IssuesDispatchContext.Provider value={dispatch}>
        {children}
      </IssuesDispatchContext.Provider>
    </IssuesStateContext.Provider>
  );
}

...
//사용부

const onIntersect: IntersectionObserverCallback = useCallback(
    async ([entry], observer) => {
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);
        dispatch({ type: 'GET_ISSUES' });
        try {
          const response = await issuesApi.getIssues(
            'comments',
            ++page.current
          );
          dispatch({
            type: 'GET_ISSUES_SUCCESS',
            data: response.data.map(parseIssue),
          });
          if (response.data.length < 10) {
            setIsEnd(true);
          } else {
            observer.observe(entry.target);
          }
        } catch (e) {
          const axiosError = e as AxiosError;
          dispatch({ type: 'GET_ISSUES_ERROR', error: axiosError });
          navigate('/error');
        }
      }
    },
    [dispatch, navigate]
  );
```
<br />

### TS 적용

- interface 사용

API Response 중 사용되는 부분을 따로 interface 작성

```jsx
export interface Issue {
  id: number;
  number: number;
  title: string;
  body: string;
  comments: number;
  created_at: string;
  user: {
    name: string;
    profile_url: string;
  };
}
```
<br />

- 컴포넌트 Props 사용 시

컴포넌트 props의 interface 이름 Props로 통일

```jsx
interface Props {
  issue: Issue;
  index?: number;
}

export function _IssueItem({ issue, index }: Props) {
}
```
<br />

### ContextAPI 커스텀 훅

- `useIssuesState()`

context API를 활용하여 “상태값”을 간단히 찾는 커스텀 훅

```jsx
export function useIssuesState() {
  const state = useContext(IssuesStateContext);

  if (!state) {
    throw new Error('Provider를 찾을 수 없습니다.');
  }

  return state;
}

// 예제
const { isLoading } = useIssuesState();

return (
    <div ref={divRef}>
      {isLoading && <S.Loading>데이터를 불러오는 중입니다.</S.Loading>}
    </div>
  );
```

---
<br />

- `useIssuesValue()`

context API를 활용하여 “데이터”를 찾는 커스텀 훅

```jsx
export function useIssuesValue() {
  const state = useContext(IssuesStateContext);

  if (!state) {
    throw new Error('Provider를 찾을 수 없습니다.');
  }

  return state.data;
}

// 예제
const issues = useIssuesValue();

return (
    <S.IssueList>
      {issues.map((issue: Issue, index) => (
        <IssueItem issue={issue} key={issue.id} index={index} />
      ))}
    </S.IssueList>
  );
```

---
<br />

- `useIssuesDispatch()`

context API를 활용하여 “dispatcher” (setState)를 찾는 커스텀 훅

```jsx
export function useIssuesDispatch() {
  const dispatch = useContext(IssuesDispatchContext);

  if (!dispatch) {
    throw new Error('Provider를 찾을 수 없습니다.');
  }

  return dispatch;
}

// 예제
const dispatch = useIssuesDispatch();

const onIntersect: IntersectionObserverCallback = useCallback(
  async ([entry], observer) => {
    if (entry.isIntersecting) {
      observer.unobserve(entry.target);
      dispatch({ type: 'GET_ISSUES' });
      try {
        const response = await issuesApi.getIssues(
          'comments',
          ++page.current
        );
        dispatch({
          type: 'GET_ISSUES_SUCCESS',
          data: response.data.map(parseIssue),
        });
        if (response.data.length < 10) {
          setIsEnd(true);
        } else {
          observer.observe(entry.target);
        }
      } catch (e) {
        const axiosError = e as AxiosError;
        dispatch({ type: 'GET_ISSUES_ERROR', error: axiosError });
        navigate('/error');
      }
    }
  },
  [dispatch, navigate]
);
```

---
