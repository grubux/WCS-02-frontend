export const Button = styled.button`
  background-color: ${({ showLoading }) =>
    showLoading ? "#fff" : colors.primary};
  color: #fff;
  padding: 0.5em 1em;
  border-radius: 4px;
  display: inline-block;
  ${focus}
`;
