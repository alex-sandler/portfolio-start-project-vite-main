import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./Skill";
import {FLexWrapper} from "../../../components/FLexWrapper";

export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle>MY SKILLS</SectionTitle>
            <FLexWrapper justify={"space-between"} wrap={"wrap"}>
                <Skill title={"React"} iconId={"react"}/>
                <Skill title={"Redux"} iconId={"redux"}/>
                <Skill title={"JavaScript"} iconId={"js"}/>
                <Skill title={"TypeScript"} iconId={"ts"}/>
                <Skill title={"Rest API"} iconId={"rest-api"}/>
                <Skill title={"CSS"} iconId={"css"}/>
                <Skill title={"Styled Components"} iconId={"styled"}/>
                <Skill title={"Material UI"} iconId={"material"}/>
                <Skill title={"Radix"} iconId={"radix"}/>
                <Skill title={"Figma"} iconId={"figma"}/>
                <Skill title={"Story Book"} iconId={"story-book"}/>
                <Skill title={"Figma"} iconId={"figma"}/>
                <Skill title={"Formik"} iconId={"formik"}/>
                <Skill title={"Zod"} iconId={"zod"}/>
                <Skill title={"Unit Tests"} iconId={"unit"}/>
                <Skill title={"Git"} iconId={"git"}/>
                <Skill title={"Github"} iconId={"github"}/>
                <Skill title={"Prettier"} iconId={"prettier"}/>
            </FLexWrapper>
        </StyledSkills>
    );
};


const StyledSkills = styled.section`
  background-color: #f5d8d8;
  min-height: 100vh;
`