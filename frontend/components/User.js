import Link from "next/link";
import DeleteUser from "./DeleteUser";
import Table from "../components/styles/Table";

export default function User({ user }) {
  return (
    <Table>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Id</th>
        <th>Phone Number</th>
        <th>Actions</th>
      </tr>
      <tr>
        <td>
          <Link href={`/user/${user.id}`}>{user.name}</Link>
        </td>
        <td>{user.email}</td>
        <td>{user.id}</td>
        <td>{user.phoneNumber}</td>
        <td>
          <div className="buttonList">
            <Link
              href={{
                pathname: "/update",
                query: {
                  id: user.id,
                },
              }}
            >
              ✏️
            </Link>
            (...)
            <DeleteUser id={user.id}>Delete </DeleteUser>
          </div>
        </td>
      </tr>
    </Table>
  );
}
