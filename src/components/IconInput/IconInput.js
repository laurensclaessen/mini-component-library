import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const ICON_PROPS = {
  small: {
    size: 16,
    strokeWidth: 1,
  },
  large: {
    size: 24,
    strokeWidth: 2,
  },
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const Component = (() => {
    if (size === "small") return IconInputSmall;
    if (size === "large") return IconInputLarge;
    throw new Error(`ProgressBar shouldn't be used with a size of "${size}"`);
  })();

  return (
    <Component>
      <VisuallyHidden>
        <label htmlFor="icon-input">{label}</label>
      </VisuallyHidden>
      <InputWrapper
        id="icon-input"
        type="text"
        placeholder={placeholder}
        style={{ "--width": `${width}px` }}
      />
      <IconWrapper id={icon} {...ICON_PROPS[size]} />
    </Component>
  );
};

const IconInputBase = styled.div`
  position: relative;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const IconInputSmall = styled(IconInputBase)``;

const IconInputLarge = styled(IconInputBase)``;

const InputWrapper = styled.input`
  width: var(--width);
  border: none;
  border-bottom: 1px solid ${COLORS.black};
  padding: 4px 0 4px 24px;
  font-size: ${14 / 16}rem;
  line-height: ${16 / 16}rem;
  font-weight: 700;
  outline-offset: 2px;
  color: inherit;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }

  ${IconInputLarge} & {
    padding: 8px 0 8px 36px;
    font-size: ${18 / 16}rem;
    line-height: ${21 / 16}rem;
    border-bottom-width: 2px;
  }
`;

const IconWrapper = styled(Icon)`
  position: absolute;
  top: 0;
  bottom: 0;
  margin-block: auto;
  transform: translateY(-1px);
  pointer-events: none;
`;

export default IconInput;
