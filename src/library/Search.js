import React from 'react';
import styled from 'styled-components';
import searchImage from './search.svg';

const Root = styled.div`
  border-bottom: 1px solid #DDDDDD;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 10px 0;
`;

const Image = styled.img`
  background-color: transparent;
  margin-right: 9px;
`;

const Input = styled.input`
  border-width: 0;
  font-family: 'Lato';
  line-height: 32px;
  font-size: 30px;
  height: 36px;
  width: 100%;
  padding: 2px 0;
  outline: none;
  font-weight: 300;
  color: #918F8F;
`;

export default ({ value, onChange }) => (
  <Root>
    <Image src={searchImage} />
    <Input
      placeholder="Search for music…"
      value={value}
      onChange={e => onChange(e.target.value)}
    />
  </Root>
)
