
import styled from 'styled-components';

export const NavigationWrapper = styled.nav`
    width: 100%;
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
    padding: 20px;
    z-index: 9;
    background: ${({ theme }) => theme.leftNavBackgroundColor};
    position: absolute;
`

export const NavigationHeader = styled.h1`
    margin: 0;
    font-weight: 700;
    font-size: 20px;
`