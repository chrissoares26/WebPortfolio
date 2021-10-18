import React from "react";
import { connect, styled } from "frontity";
import ProgressBar from "../../common/progress-bar";
import { Separator } from "../../common/separator";
/**
 * Language list components
 * left sidebar
 * part of progress components
 * in roots.
 */
const Language = ({ state }) => {
  const LangOff = state.theme.language_off.off;
  const AutLang = state.theme.language;
  const isThereLinks = AutLang != null && AutLang.length > 0;
  return (
    LangOff && (
      <>
        <LanguageWrapper>
          <h5>Languages</h5>
          {isThereLinks &&
            AutLang.map(([name, parsent]) => {
              return <ProgressBar key={name} label={name} now={parsent} />;
            })}
        </LanguageWrapper>
        <Separator />
      </>
    )
  );
};

export default connect(Language);

const LanguageWrapper = styled.div`
  padding: 15px 0;
  margin: 15px 0;
  & h5 {
    margin-bottom: 15px;
  }
`;
