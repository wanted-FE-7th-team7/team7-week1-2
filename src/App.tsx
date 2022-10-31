import { useCallback, useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { IssuesService } from './apis/IssuesService';
import { IssueContext } from './contexts/IssueContext';
import { Issue } from './interfaces/Issue';
import Layout from './Layouts/Layout';
import DetailPage from './pages/DetailPage';
import IssuesPage from './pages/IssuesPage';

function App() {
  const [issueList, setIssueList] = useState<Issue[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState(false);
  const [page, setPage] = useState(1);

  const handleFetch = useCallback(async (page: number) => {
    setIsLoading(true);
    try {
      const data = await IssuesService.getIssues(page);
      setIssueList(prev => [...prev, ...data]);
    } catch (error) {
      setErrors(true);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    handleFetch(page);
  }, [page, handleFetch]);

  return (
    <BrowserRouter>
      <Routes>
        <IssueContext.Provider value={{ issueList, isLoading, errors }}>
          <Route
            path="/"
            element={
              <Layout>
                <IssuesPage setPage={setPage} />
              </Layout>
            }
          />
          <Route
            path="/:number"
            element={
              <Layout>
                <DetailPage />
              </Layout>
            }
          />
        </IssueContext.Provider>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
