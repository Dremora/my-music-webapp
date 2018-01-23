import styled from 'styled-components';

export default styled.button`
  border: 2px solid black;
  border-radius: 4px;
  font-size: 16px;
  line-height: 2;
  padding: 2px 6px;
  display: block;
  font-family: 'Lato';
  font-weight: 700;

  ${props => props.full && `width: 100%;`};
`;
