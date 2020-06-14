// @flow
import * as React from "react";
import styled from "styled-components";
import theme from "../../config/styleConst";
import Flex from "../flex";

export const StyledHeader = styled.header`
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${props => theme.colors.white_1};
  height: 3.125rem;
  border-bottom: solid 1px ${props => theme.colors.gray_light_alt};
  padding: 0.3125rem 0.625rem;
  z-index: ${props => theme.zIndex.header};
  font-weight: normal;
`;

const StyledFlex = styled(Flex)`
  > * {
    flex: 1;
  }

  > *:first-child {
    margin-right: ${('4dp', 'px')};
  }

  > *:last-child {
    margin-left: ${('4dp', 'px')};
  }
`

/**
 * @param {String} variant
 * @param {String} title
 * @return {React.Node}
 */
function Header({ variant, title }) {
  return (
    <StyledHeader data-testid="header-component">
      <StyledFlex justifyContent="space-between" alignItems="center">
        {title}
      </StyledFlex>
    </StyledHeader>
  );
}

Header.defaultProps = {
  variant: "default",
  keyword: "",
};

export default Header;
