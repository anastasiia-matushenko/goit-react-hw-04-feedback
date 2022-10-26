import styled from "styled-components";
import goodIcon from "../../images/love.png";
import neutralIcon from '../../images/smile.png';
import badIcon from "../../images/bored.png";

const btnImage = (props) => {
    switch (props.name) {
        case "neutral":
            return neutralIcon;

        case "bad":
            return badIcon;

        default:
            return goodIcon;
    }
}

const FormContainer = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding-left: 10px;
    padding-right: 10px;
    margin-bottom: 50px;
`;

const Button = styled.button`
    flex-basis: calc((100% - 40px) / 3);
    padding: 52px 6px 6px;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    border: none;
    background-color: transparent;
    background: no-repeat top 6px right 50% / 40px url(${btnImage});

    color: #7F8E9D;
    cursor: pointer;
    border-radius: 6px;
    transition: background, box-shadow, color cubic-bezier(0, 0, 0.2, 1);

    &:hover {
        background-color: #DAF5FF;
        box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
        color: #272829;
    }
`;

export { FormContainer, Button };