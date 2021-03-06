import styled from 'styled-components';

export const LeftNav = styled.nav`
    height: 100%;
    width: 33%;
    z-index: 1;
    background: ${({ theme }) => theme.leftNavBackgroundColor};
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
    position: relative;
`;

export const SiteHeadContent = styled.div`
    height: 100%;
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
`;

export const TagContent = styled.div`
    margin: 0 auto;
    display: flex;
    height: 100%;
    padding: 0 10%;
    width: 66%;
    align-items: center;
`;

export const PreviewButton = styled.div`
    width: 75%;

    position: absolute;
    bottom: 10%;
    left: 50%;
    transform: translateX(-50%);

    cursor: pointer;

    display: flex;
    background: ${({ theme }) => theme.secondaryBackgroundColor};

    align-items: center;
    text-align: center;
    justify-content: center;

    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);

    margin: 0 auto;
    border-radius: 5px;
    padding: 10px;

    border: 1px solid rgba(0, 0, 0, .1);

    font-size: 17px;
    font-weight: 900;
`;

/// COMMON COMPONENTS

export const Section = styled.section`
    margin: 30px 0;
`;

export const Heading = styled.h1`
    font-size: 30px;
    font-weight: 900;
    margin: 0;
`;

export const Description = styled.p`
    font-size: 15px;
    font-weight: 700;
    margin: 5px 0 2px 0;
`;

export const TextInput = styled.input`
    width: 100%;
    background: ${({ theme }) => theme.secondaryBackgroundColor};

    border-radius: 5px;
    border: 1px solid rgb(204, 204, 204);

    // box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
    padding: 15px 0 15px 15px;
    font-size: 15px;
    margin-top: 10px;

    outline: none;

    &:focus {
        border-color: #2684FF;
    }
`;

export const TextArea = styled.textarea`
    width: 100%;
    background: ${({ theme }) => theme.secondaryBackgroundColor};

    border-radius: 5px;
    // box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
    padding: 15px 0 15px 15px;

    font-size: 15px;
    margin-top: 10px;

    height: 60px;

    outline: none;
    border: 1px solid rgb(204, 204, 204);
    resize: none;

    &:focus {
        border-color: #2684FF;
    }
`;
