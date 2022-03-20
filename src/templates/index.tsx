import { FC } from "react";
import { StyledLayout, StyledMain, Header } from "./style";

interface Props {}

const Layout: FC<Props> = ({ children }) => {
  return (
    <StyledLayout>
      <Header>Ice and Fire</Header>
      <StyledMain>{children}</StyledMain>
    </StyledLayout>
  );
};

export default Layout;
