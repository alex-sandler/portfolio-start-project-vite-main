import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";
import {Main} from "../sections/main/Main";

export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <Menu/>
        </StyledHeader>
    );
};


const StyledHeader = styled.header`
  background-color: #6dc76b;
  display: flex;
  justify-content: space-between;
`