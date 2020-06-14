// @flow
import * as React from "react";
import styled from "styled-components";
import theme from "../../config/styleConst";
import Flex from "../flex";
import ButtonCostum from "../button"

export const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${props => theme.colors.white_1};
  height: 3.125rem;
  border-top: solid 1px ${props => theme.colors.gray_light_alt};
  padding: 0.3125rem 0.625rem;
  z-index: ${props => theme.zIndex.footer};
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
 * @param {Node} children
 * @param {String} variant
 * @param {String} keyword
 * @return {React.Node}
 */
function Footer({ children, variant, keyword }) {
  return (
    <StyledFooter data-testid="footer-component">
      <StyledFlex justifyContent="space-between" alignItems="center">
        {children}
      </StyledFlex>
    </StyledFooter>
  );
}

Footer.defaultProps = {
  variant: "default",
  keyword: "",
};

export default Footer;
