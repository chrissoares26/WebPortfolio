import React from "react";
import { connect, styled } from "frontity";
import ProgressBar from "../../common/progress-bar";
import { Separator } from "../../common/separator";

/**
 * Skills list components
 * left sidebar
 * part of progress components
 * in roots.
 */
const Skills = ({ state }) => {
  const SkillOff = state.theme.skill_off.off;
  const AutSkill = state.theme.skill;
  const isThereLinks = AutSkill != null && AutSkill.length > 0;
  return (
    SkillOff && (
      <>
        <SkillWrapper>
          <h5>Skills</h5>
          {isThereLinks &&
            AutSkill.map(([name, parsent]) => {
              return <ProgressBar key={name} label={name} now={parsent} />;
            })}
        </SkillWrapper>
        <Separator />
      </>
    )
  );
};

export default connect(Skills);

const SkillWrapper = styled.div`
  padding: 15px 0;
  margin: 15px 0;
  & h5 {
    margin-bottom: 15px;
  }
`;
