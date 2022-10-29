import React, { useContext } from 'react';
import { issuesContext } from './contexts/issuesContext';
import { Issue } from './models/issue';

function App() {
  const { issues, loadNextIssues } = useContext(issuesContext);

  return (
    <div className="App">
      <button
        onClick={async () => {
          await loadNextIssues();
        }}
      >
        다음 페이지 요청 보내기
      </button>
      <div>몇개 가져왔는지 보기 : {issues.length}</div>
      <div>
        {issues.map((issue: Issue) => (
          <React.Fragment key={issue.number}>
            <div>{issue.title}</div>
            <div>{issue.comments}</div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default App;
