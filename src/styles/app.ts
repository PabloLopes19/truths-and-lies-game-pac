import Styled from "styled-components";

const colors = {
  background: "#0B2447",
  questionBackground: "#19376D",
  buttonColor: "#576CBC",
};

export const Container = Styled.div`
    background: ${colors.background};
    display: flex;
    flex-direction: column;
    flex: 1; 
    height: 100vh;
    gap: 3rem;
    font-weight: bold;
    justify-content: center;
    align-items: center;
    padding: 6rem;

    & > * {
        outline: none;
    }

    & > div {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50%;
        gap: 1rem;
        background: #333;   
    }
`;

export const Question = Styled.h1`
    color: #fff;
    background: ${colors.questionBackground};
    padding: 2rem;
    border-radius: 1rem 1rem 0 0;
    max-width: 800px;
    user-select: none;  
    font-size: 24px;

    outline: none;

    display: flex;
    align-items: start;
    flex-direction: column;

    gap: 24px;

    span{
        font-size: 14px;
        opacity: 80%;
    }

    .header{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`;

export const Alternative = Styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    border: none;
    font-size: 18px;
    padding: 1rem;
    background: ${colors.buttonColor};
    cursor: pointer;
    color: #fff;
    font-weight: bold;

    flex: 1;

    transition: all 0.2s;

    &:hover{
        filter: brightness(1.2);
    }
`;

export const ControlPanel = Styled.button`
    background: transparent;
    border: none;

    & > div {
        display: flex;
    }
`;
