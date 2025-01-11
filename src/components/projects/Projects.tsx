import styled from "styled-components";
import {SectionTitle} from "../SectionTitle";
import {Menu} from "../menu/Menu";
import {FLexWrapper} from "../FLexWrapper";
import {Project} from "./project/Project";
import socialImg from "/src/assets/images/projects/social-network.webp"
import timerImg from "/src/assets/images/projects/timer.webp"

const projectsItems = ["All", "Landing Page", "React", "SPA"]

export const Projects = () => {
    return (
        <StyledProjects>
            <SectionTitle>My Projects</SectionTitle>
            <Menu menuItems={projectsItems}/>
            <FLexWrapper justify="space-around">
                <Project title="Social Network"
                         text="lorem"
                         src={socialImg}/>

                <Project title="Timer"
                         text="lorem"
                         src={timerImg}/>
            </FLexWrapper>
        </StyledProjects>
    );
};

const StyledProjects = styled.section`
  min-height: 100vh;
  background-color: #8fa4e7;
`