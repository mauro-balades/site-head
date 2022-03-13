
import styled from 'styled-components';

export const TabWrapper = styled.li`
    width: 80%;
    display: flex;
    background: ${({ active }) => active ? '#D9E9F2' : 'transparent'};
    border: 1px solid #CAE1EF;
    align-items: center;
    margin: 20px 0 20px;
    border-radius: 10px;
    padding: 10px;

    font-size: 20px;
    font-weight: 900;
`
export const TabNumber = styled.div`
    width: 40px;
    height: 40px;
    font-size: 20px;
    font-weight: 600;
    border-radius: 5px;
    background: #8FC5E3;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 15px;
`