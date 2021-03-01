import PropTypes from "prop-types";
import Header from "./Header";

export default function Page({ children, cool }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

Page.propTypes = {
  cool: PropTypes.string,
  children: PropTypes.any,
};
