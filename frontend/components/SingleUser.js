import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import Head from "next/head";

const SINGLE_USER_QUERY = gql`
  query SINGLE_USER_QUERY($id: ID!) {
    User(where: { id: $id }) {
      id
      name
      email
      phoneNumber
    }
  }
`;

export default function SingleUser({ id }) {
  console.log(id);
  const { data } = useQuery(SINGLE_USER_QUERY, {
    variables: {
      id,
    },
  });
  console.log(data);
  const { User } = data;
  console.log(User);
  return (
    <div>
      <h2>{User.name}</h2>
      <p>{User.email}</p>
    </div>
  );
}
