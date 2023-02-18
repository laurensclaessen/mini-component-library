/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const ProgressBar = ({ value, size }) => {
  // return <progress id="loadinglabel" max="100" value={value}></progress>;

  // return (
  //   <span role="progressbar" aria-valuenow={value}>
  //     <svg width="100" height="10">
  //       <rect height="10" width="100" stroke="black" fill="black" />
  //       <rect height="10" width={value} fill="grey" />
  //     </svg>
  //   </span>
  // );

  return (
    <Wrapper role="progressbar" aria-valuenow={value}>
      <InnerBar style={{ "--value": `${value}%` }}></InnerBar>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 12px;
  overflow: hidden;
  background: ${COLORS.transparentGray15};
  border-radius: 4px;
`;

const InnerBar = styled.div`
  height: 100%;
  width: var(--value);
  background: ${COLORS.primary};
`;

export default ProgressBar;
