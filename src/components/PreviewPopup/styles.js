
import styled from 'styled-components';

export const PopupWrapper = styled.div`
    position: absolute;
    z-index: 999;

    background: rgba(0,0,0,.5);

    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;

    top: 0;
    left: 0;

    overflow: hidden;
`

export const Popup = styled.div`
    background: ${({ theme }) => theme.backgroundColor};

    width: 30%;
    height: 50%;

    border-radius: 10px;
    padding: 20px;

    position: relative;
`

export const CodeWrapper = styled.div`
    width: 100%;
    height: 50%;

    & pre {
        height: 100%;
        border-radius: 10px;
    }
`
