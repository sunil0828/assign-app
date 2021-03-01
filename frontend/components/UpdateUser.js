import { useMutation, useQuery } from "@apollo/client";
import gql from "graphql-tag";
import useForm from "../lib/useForm";

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

const UPDATE_USER_MUTATION = gql`
  mutation UPDATE_USER_MUTATION($id: ID!, $name: String, $phoneNumber: Int) {
    updateUser(id: $id, data: { name: $name, phoneNumber: $phoneNumber }) {
      id
      name
      phoneNumber
    }
  }
`;

export default function UpdateUser({ id }) {
  const { data } = useQuery(SINGLE_USER_QUERY, {
    variables: { id },
  });
  console.log(data);
  const [updateUser, { data: updateData }] = useMutation(UPDATE_USER_MUTATION);
  console.log(data);
  const { inputs, handleChange, clearForm, resetForm } = useForm(
    data?.User || {
      name: "",
      phoneNumber: "",
    }
  );
  console.log(inputs);
  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        const res = await updateUser({
          variables: {
            id,
            name: inputs.name,
            phoneNumber: inputs.phoneNumber,
          },
        }).catch(console.error);
        console.log(res);
      }}
    >
      <fieldset>
        <label htmlFor="name">
          Name
          <input
            required
            type="text"
            id="name"
            placeholder="Name"
            value={inputs.name}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="phoneNumber">
          Phone Number
          <input
            type="number"
            placeholder="phone number"
            value={inputs.phoneNumber}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Update User</button>
      </fieldset>
    </form>
  );
}
