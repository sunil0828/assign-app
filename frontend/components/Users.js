import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import Table from "./styles/Table";
import User from "./User";

export const ALL_USERS_QUERY = gql`
  query ALL_USERS_QUERY {
    allUsers {
      id
      name
      email
      phoneNumber
    }
  }
`;
export default function Users() {
  const { data, error, loading } = useQuery(ALL_USERS_QUERY);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  console.log(data);
  return (
    <div>
      {data.allUsers.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
}
