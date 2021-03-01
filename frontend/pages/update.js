import UpdateUser from "../components/UpdateUser";

export default function UpdatePage({ query }) {
  return (
    <div>
      <UpdateUser id={query.id} />
    </div>
  );
}
