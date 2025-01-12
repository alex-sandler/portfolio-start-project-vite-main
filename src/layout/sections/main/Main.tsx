import styled from "styled-components";
import photo from "../../../assets/images/photo.webp"
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Main = () => {
    return(
        <StyledMain>
            <FlexWrapper justify={"space-around"} align={"center"}>
                <Name>I'm Aleksey Sandler</Name>
                <MainTitle>Front-End Developer</MainTitle>
                <p>Passionate front-end developer with a flair for crafting engaging user interfaces that provide users with an intuitive and efficient experience. Committed to writing clean, scalable code and staying abreast of the latest technologies in web development</p>
            <Photo src={photo} alt="#"/>
            </FlexWrapper>
        </StyledMain>
    );
};

const StyledMain = styled.div`
  min-height: 100vh;
  background-color: #c99898;
`

const Photo = styled.img`
    width: 400px;
    height: 400px;
    object-fit: cover;
`

const MainTitle = styled.h1`
    
`

const Name = styled.h2`

`