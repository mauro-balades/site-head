
import styled from 'styled-components';

export const LeftNav = styled.nav`
    height: 100%;
    width: 33%;
    z-index: 1;
    background: ${({ theme }) => theme.leftNavBackgroundColor};
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
`

export const SiteHeadContent = styled.div`
    height: 100%;
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
`

export const TagContent = styled.div`
    margin: 0 auto;
    display: flex;
    height: 100%;
    padding: 0 10%;
    width: 66%;
    align-items: center;
`

/// COMMON COMPONENTS

export const Section = styled.section`
    margin: 10px 0;
`

export const Heading = styled.h1`
    font-size: 30px;
    font-weight: 900;
    margin: 0;
`

export const Description = styled.p`
    font-size: 15px;
    font-weight: 700;
    margin: 5px 0 2px 0;
`

export const TextInput = styled.input`
    width: 100%;
    background: #E7E7E7;
    border-radius: 10px;
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
    padding: 15px;
    font-size: 15px;
    margin-top: 10px;

    outline: none;
    border: none;
`

