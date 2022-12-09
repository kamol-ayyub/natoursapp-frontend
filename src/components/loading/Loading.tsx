import styled from 'styled-components';

const LoadingBase = styled.div`
  margin-left: 30%;
  & > h1 {
    font-size: 50px;
  }
`;

export const Loading = () => {
  return (
    <LoadingBase>
      <h1>Loading ...</h1>
    </LoadingBase>
  );
};
