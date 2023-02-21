/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const ProgressBar = ({ value, size }) => {
  const Component = (() => {
    if (size === "small") return ProgressBarSmall;
    if (size === "medium") return ProgressBarMedium;
    if (size === "large") return ProgressBarLarge;
    throw new Error(`ProgressBar shouldn't be used with a size of "${size}"`);
  })();

  return (
    <Component
      role="progressbar"
      aria-valuenow={value}
      style={{ "--value": `${value}%` }}
    >
      <InnerBarWrapper>
        <InnerBar></InnerBar>
      </InnerBarWrapper>
    </Component>
  );
};

const ProgressBarBase = styled.div`
  background: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: 4px;
  overflow: hidden;
`;

const InnerBarWrapper = styled.div`
  overflow: hidden;
  height: 100%;
  width: 100%;
`;

const InnerBar = styled.div`
  height: 100%;
  width: var(--value);
  background: ${COLORS.primary};
`;

const ProgressBarSmall = styled(ProgressBarBase)`
  height: 8px;
`;

const ProgressBarMedium = styled(ProgressBarBase)`
  height: 12px;
`;

// took the wrapping approach -> as size is not about size only
const ProgressBarLarge = styled(ProgressBarBase)`
  height: 24px;
  border-radius: 8px;
  padding: 4px;

  ${InnerBarWrapper} {
    border-radius: 4px;
  }
`;

export default ProgressBar;
