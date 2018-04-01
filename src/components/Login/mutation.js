import gql from 'graphql-tag';

export default gql`
  mutation login($password: String) {
    login(password: $password)
  }
`;
