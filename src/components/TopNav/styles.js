import styled from 'styled-components';

export const NavigationWrapper = styled.nav`
    width: 100%;
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
    padding: 20px 0;
    z-index: 9;
    background: ${({ theme }) => theme.leftNavBackgroundColor};
    position: absolute;

    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const NavigationHeader = styled.h1`
    margin: 0;
    font-weight: 700;
    font-size: 20px;

    margin-left: 40px;
    display: flex;
    align-items: center;

    & img {
        image-rendering: optimizeSpeed;             /* STOP SMOOTHING, GIVE ME SPEED  */
        image-rendering: -moz-crisp-edges;          /* Firefox                        */
        image-rendering: -o-crisp-edges;            /* Opera                          */
        image-rendering: -webkit-optimize-contrast; /* Chrome (and eventually Safari) */
        image-rendering: pixelated; /* Chrome */
        image-rendering: optimize-contrast;         /* CSS3 Proposed                  */
        -ms-interpolation-mode: nearest-neighbor;   /* IE8+                           */
    }
`;

export const NavigationLinks = styled.div`
    display: flex;
    margin-right: 40px;

    aling-items: center;
`;
