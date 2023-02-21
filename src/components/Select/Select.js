import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <SpaceHolder aria-hidden>{displayedValue}</SpaceHolder>
      <SelectWrapper as="select" value={value} onChange={onChange}>
        {children}
      </SelectWrapper>
      <IconWrapper id="chevron-down" size={24} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: min-content;
  white-space: nowrap;
  position: relative;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const SelectBase = styled.div`
  padding: 12px 52px 12px 16px;
  font-size: 1rem;
  line-height: 1.1875em;
`;

const SelectWrapper = styled(SelectBase)`
  appearance: none;
  background: ${COLORS.transparentGray15};
  border: none;
  border-radius: 8px;
  width: 100%;
  position: absolute;
  top: 0;
  color: inherit;
`;

const SpaceHolder = styled(SelectBase)`
  visibility: hidden;
`;

const IconWrapper = styled(Icon)`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 16px;
  margin-block: auto;
  pointer-events: none;
`;

export default Select;
