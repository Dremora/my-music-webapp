import styled, { css } from 'styled-components';

export const Root = styled.div`
  padding: 10px 0;
  display: flex;
  align-items: center;
  height: 60px;
`;

export const Spacer = styled.div`
  width: 10px;
`;

interface LoginLinkProps {
  disabled?: boolean;
}

export const LoginLink = styled.div<LoginLinkProps>`
  margin-left: 62px;
  cursor: pointer;

  ${props =>
    props.disabled &&
    css`
      pointer-events: none;
      cursor: auto;
    `};
`;

export const NewAlbumLink = styled.div`
  margin-left: 20px;
  cursor: pointer;

  a {
    text-decoration: none;
  }
`;
