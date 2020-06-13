// @flow
import * as React from "react";
import styled from "styled-components";

const StyledFlex = styled.div`
  display: flex;
  flex-direction: ${props => props.flexDirection};
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
  flex-wrap: ${props => props.flexWrap || "nowrap"};
`;

/**
 * @param {React.Node | React.Element<any> | Function} props.children
 * @return {React.Node}
 */
function Flex({ children, ...otherProps }) {
  return <StyledFlex {...otherProps}>{children}</StyledFlex>;
}

export default Flex;
