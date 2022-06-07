import React, { useState, useEffect } from "react";
import { connect, styled, Global, css } from "frontity";

/*
 * Progress Component.
 * part of common component.
 * Author: ojjomedia <info@ojjomedia.com>
 */
const ProgressBar = ({ state, label, now, theme }) => {
  const { barLine, primary, secondary } = state.theme.colors.lightTheme;
  const [completed, setCompleted] = useState(0);
  useEffect(() => {
    setCompleted(now);
  }, []);

  return (
    <ProgressWrapper>
      <ProgressBarlabel>
        <ProgressBarTitle> {label} </ProgressBarTitle>
        <ProgressBarWidth> {now} </ProgressBarWidth>
      </ProgressBarlabel>
      <ProgressBarOutline color={barLine}>
        <ProgressBarbox>
          <ProgressBarLine width={completed} color={barLine}></ProgressBarLine>
        </ProgressBarbox>
      </ProgressBarOutline>
    </ProgressWrapper>
  );
};

export default connect(ProgressBar);

// components css started here
const ProgressWrapper = styled.div`
  margin-bottom: 10px;
`;
const ProgressBarOutline = styled.div`
  width: 99%;
  height: 7px;
  display: inline-grid;
  border-radius: 20px;
  border: 1px solid ${(props) => props.color};
`;
const ProgressBarbox = styled.div`
  width: 98%;
  display: inline-grid;
  @-moz-document url-prefix() {
    width: 100%;
  }
`;
const ProgressBarLine = styled.div`
  background: ${(props) => props.color};
  width: ${(props) => props.width};
  max-width: 100%;
  height: 3px;
  align-self: center;
  margin: 2px;
  border-radius: 20px;
  display: inline-table;
  transition: width 1s ease;
`;
const ProgressBarlabel = styled.div`
  display: flex;
  font-size: 12px;
  justify-content: space-between;
`;
const ProgressBarTitle = styled.p`
  margin: 0;
`;
const ProgressBarWidth = styled.span``;
