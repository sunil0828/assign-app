import { useMutation } from "@apollo/client";
import gql from "graphql-tag";

const DELETE_USER_MUTATION = gql`
  mutation DELETE_USER_MUTATION($id: ID!) {
    deleteUser(id: $id) {
      id
      name
    }
  }
`;

function update(cache, payload) {
  console.log(payload);
  console.log("running the update function after delete");
  cache.evict(cache.identify(payload.data.deleteUser));
}

export default function DeleteUser({ id, children }) {
  const [deleteUser, { loading }] = useMutation(DELETE_USER_MUTATION, {
    variables: { id },
    update,
  });
  return (
    <button
      type="button"
      disabled={loading}
      onClick={() => {
        if (confirm("Are you sure, you want to delete this user? ")) {
          deleteUser().catch((err) => alert(err.message));
        }
      }}
    >
      {children}
    </button>
  );
}
