import { useMutation } from "@apollo/client";
import Router from "next/router";
import useForm from "../lib/useForm";
import { SIGNUP_MUTATION } from "./SignUp";
import Form from "./styles/Form";

// const CREATE_USER_MUTATION = gql`
//   mutation CREATE_USER_MUTATION(
//     $name: String!
//     $email: String!
//     $password: String!
//     $phoneNumber: Int!
//   ) {
//     createUser(
//       data: {
//         name: $name
//         email: $email
//         password: $password
//         phoneNumber: $phoneNumber
//       }
//     ) {
//       id
//       name
//       email
//       phoneNumber
//     }
//   }
// `;

export default function CreateUser() {
  const { inputs, handleChange, resetForm } = useForm({
    email: "",
    name: "",
    password: "",
  });
  const [signup, { data, loading, error }] = useMutation(SIGNUP_MUTATION, {
    variables: inputs,
    // refectch the currently logged in user
    // refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });
  async function handleSubmit(e) {
    e.preventDefault(); // stop the form from submitting
    console.log(inputs);
    const res = await signup().catch(console.error);
    console.log(res);
    // Router.push({ pathname: `/user/${res.data.createUser.id}` });
    console.log({ data, loading, error });
    resetForm();
    // Send the email and password to the graphqlAPI

    // {
    //   async (e) => {
    //     e.preventDefault();
    //     const res = await createUser();
    //     clearForm();
    // Router.push({ pathname: `/user/${res.data.createUser}` });
    //   };
    // }
  }
  return (
    <Form method="POST" onSubmit={handleSubmit}>
      <h2>Add user account</h2>
      <p error={error} />
      <fieldset>
        {data?.createUser && <p>User added with {data.createUser.email}...!</p>}
        <label htmlFor="name">
          Name
          <input
            type="text"
            name="name"
            placeholder="User Name"
            autoComplete="name"
            value={inputs.name}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            placeholder="User Email Address"
            autoComplete="email"
            value={inputs.email}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="password">
          Password
          <input
            type="password"
            name="password"
            placeholder="Password"
            autoComplete="password"
            value={inputs.password}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Add User</button>
      </fieldset>
    </Form>
  );
}

// export default function CreateUser() {
//   const { inputs, handleChange, clearForm, resetForm } = useForm({});

//   console.log(inputs);

//   const [createUser, { loading, error, data }] = useMutation(
//     CREATE_USER_MUTATION,
//     {
//       variables: inputs,
//       refetchQueries: [{ query: ALL_USERS_QUERY }],
//     }
//   );
//   return (
//     <form
//       onSubmit={async (e) => {
//         e.preventDefault();
//         const res = await createUser();
//         clearForm();
//         Router.push({ pathname: `/user/${res.data.createUser.id}` });
//       }}
//     >
//       <fieldset>
//         <label htmlFor="name">
//           Name
//           <input
//             required
//             type="text"
//             id="name"
//             placeholder="Name"
//             value={inputs.name}
//             onChange={handleChange}
//           />
//         </label>
//         <label htmlFor="email">
//           Email{" "}
//           <input
//             required
//             type="email"
//             placeholder="Email address"
//             value={inputs.email}
//             onChange={handleChange}
//           />
//         </label>
//         <label htmlFor="password">
//           Password{" "}
//           <input
//             required
//             type="password"
//             placeholder="password"
//             value={inputs.password}
//             onChange={handleChange}
//           />
//         </label>
//         <label htmlFor="phoneNumber">
//           Phone Number{" "}
//           <input
//             type="phoneNumber"
//             placeholder="phone number"
//             value={inputs.phoneNumber}
//             onChange={handleChange}
//           />
//         </label>
//         <button type="submit">Add User</button>
//       </fieldset>
//     </form>
//   );
// }
