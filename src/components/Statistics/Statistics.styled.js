import styled from "styled-components";

const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin: 0;
    padding: 0;
`;

const ListItem = styled.li`
    text-align: center;
    padding-top: 19px;
    padding-bottom: 19px;

    &:nth-child(-n + 3) {
        width: calc((100% - 3px) / 3);
        background: #ECF1F3;
        border-right: 1px solid #7F8E9D;
        border-top: 1px solid #7F8E9D;
    }

    &:nth-child(3) {
        border-right: none;
    }

    &:nth-last-child(-n + 2) {
        width: calc((100% - 1px) / 2);
        background: #DFFFDA;
        border-top: 1px solid #7F8E9D;
        border-bottom: 1px solid #7F8E9D;
    }

    &:nth-child(4) {
        background: #DAF5FF;
        border-right: 1px solid #7F8E9D;
    }
`;

const Span = styled.span`
    display: block;
    margin-bottom: 6px;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #7F8E9D;
`;

const Amount = styled.span`
    display: block;
    font-weight: 600;
    font-size: 16px;
    line-height: 18px;

    color: #1F3349;
`;

export { List, ListItem, Span, Amount };