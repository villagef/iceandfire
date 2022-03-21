import { FC } from "react";
import { Link } from "react-router-dom";
import { StyledLayout, StyledMain, Header } from "./style";

interface Props {}

const Layout: FC<Props> = ({ children }) => {
  return (
    <StyledLayout>
      <Link to={`/`}>
        <Header>Ice and Fire</Header>
      </Link>
      <StyledMain>{children}</StyledMain>
    </StyledLayout>
  );
};

export default Layout;
