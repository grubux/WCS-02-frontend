import styled from 'styled-components';

export const Container = styled.div`
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  padding: 24px;
`;

export const CardRow = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 32%);
  justify-content: space-between;
`;
