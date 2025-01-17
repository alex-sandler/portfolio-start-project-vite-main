import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";

const items = ["Home", "Projects", "About", "Skills", "Contacts"]

export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <Menu menuItems={items}/>
        </StyledHeader>
    );
};


const StyledHeader = styled.header`
  background-color: #6dc76b;
  display: flex;
  justify-content: space-between;
`