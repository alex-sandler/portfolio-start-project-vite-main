import {Icon} from "../../../components/icon/Icon";
import styled from "styled-components";

type Skill = {
    iconId: string
    title: string
}

export const Skill = ({iconId, title}: Skill) => {
    return (
        <StyledSkill>
            <Icon iconId={iconId}/>
            <SkillTitle>{title}</SkillTitle>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
  width: 33%;
  background-color: #efe8e8;
  margin: 10px;
`

const SkillTitle = styled.h3`

`