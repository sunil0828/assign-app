import Link from "next/link";
import styled from "styled-components";
import Navbar from "./Navbar";

const HeaderStyles = styled.header`
  .bar {
    border-bottom: 10px solid var(--black, black);
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: stretch;
  }

  .sub-bar {
    display: grid;
    grid-template-columns: 1fr auto;
    border-bottom: 1px solid var(--black, black);
  }
`;

export default function Header() {
  return (
    <HeaderStyles>
      <div className="bar">
        <h1>
          <Link href="/">Admin App</Link>
        </h1>

        <Navbar />
      </div>
      <div className="sub-bar"></div>
    </HeaderStyles>
  );
}
