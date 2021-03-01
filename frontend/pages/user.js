import SingleUser from "../components/SingleUser";

export default function User({ query }) {
  return <SingleUser id={query.id} />;
}
