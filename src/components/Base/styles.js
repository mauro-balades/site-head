
import styled from 'styled-components';

export const LeftNav = styled.nav`
    height: 100%;
    width: 30%;
    z-index: 1;
    background: ${({ theme }) => theme.leftNavBackgroundColor};
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
`

export const SiteHeadContent = styled.nav`
    height: 100%;
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
`