import * as React from "react";
import styled from "styled-components";

const StyledMain = styled.main`
  background: ${props => props.background};
  ${props => (props.hasNavigation ? "padding-top: 48px;" : null)}
  ${props => (props.hasFooter ? "padding-bottom: 56px;" : null)}
`;

/**
 * @param {React.Node} children
 * @param {String} background
 * @param {Boolean} hasFooter
 * @return {React.Node}
 */

const LayoutBody = React.memo(function LayoutBody({
  children,
  background,
  hasFooter,
  hasNavigation
}) {
  return (
    <StyledMain
      background={background}
      hasFooter={hasFooter}
      hasNavigation={!hasNavigation}
    >
      {children}
    </StyledMain>
  );
});

/**
 * @param {React.Node} children
 * @param {String} background
 * @param {React.Node} navigation
 * @param {React.Node} footer
 * @return {React.Node}
 */

function Layout({ children, background, navigation, footer }) {
  return (
    <React.Fragment>
      {navigation && navigation.component}
      <LayoutBody
        background={background}
        hasFooter={!!footer}
        hasNavigation={!!navigation}
      >
        {children}
      </LayoutBody>
      {footer && footer.component}
    </React.Fragment>
  );
}

export default React.memo(Layout);
