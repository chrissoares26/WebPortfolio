import React from "react";
import { connect, styled } from "frontity";
import ListIcon from "../../assets/icons/list.svg";
import Image from "@frontity/components/image";
import { Separator } from "../../common/separator";
/**
 * ExtraSkills list components
 * left sidebar
 * part of progress components
 * in roots.
 */
const ExtrsaSkills = ({ state }) => {
  const ExSkillOff = state.theme.exskill_off.off;
  const AutExSkill = state.theme.exskill;
  const isThereLinks = AutExSkill != null && AutExSkill.length > 0;
  return (
    ExSkillOff && (
      <>
        <ExtraSkillsWrapper>
          <h5>Extra Skills</h5>
          <ul>
            {isThereLinks &&
              AutExSkill.map(([name]) => {
                return (
                  <li key={name}>
                    <Image src={ListIcon} /> {name}
                  </li>
                );
              })}
          </ul>
        </ExtraSkillsWrapper>
        <Separator />
      </>
    )
  );
};

export default connect(ExtrsaSkills);

const ExtraSkillsWrapper = styled.div`
  margin: 15px 0;
  padding: 15px 0 0 0;
  && h5 {
    margin-bottom: 15px;
  }
  && ul {
  }
  && ul li {
    display: flex;
    justify-content: start;
    margin: 5px 0;
    padding-bottom: 10px;
  }
  && ul li img {
    width: auto;
    margin-right: 8px;
  }
`;
