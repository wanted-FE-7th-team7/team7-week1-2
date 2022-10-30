import React from 'react';
import styled from 'styled-components';
import Issue from '../components/Issue';

function IssuePage() {
  return (
    <IssuePageLayout>
      <Issue />
    </IssuePageLayout>
  );
}

const IssuePageLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default IssuePage;
