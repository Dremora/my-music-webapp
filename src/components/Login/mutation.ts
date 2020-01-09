import gql from 'graphql-tag';

export default gql`
  mutation Login($password: String!) {
    login(password: $password)
  }
`;
