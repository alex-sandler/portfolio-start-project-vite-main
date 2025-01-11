import styled from "styled-components";

type Menu = {
    menuItems: Array<string>
}

export const Menu = ({menuItems}: Menu) => {
    return (
        <StyledMenu>
            <ul>
                {menuItems.map((menuItems, index) => {
                    return <li key={index}>
                        <a href="">{menuItems}</a>
                    </li>
                })}
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    ul {
      display: flex;
      gap: 30px;
    }
`

