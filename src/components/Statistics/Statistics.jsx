import PropTypes  from "prop-types";
import { List, ListItem, Span, Amount } from "./Statistics.styled";

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <>
            <List>
                <ListItem>
                    <Span>Good</Span>
                    <Amount>{good}</Amount>
                </ListItem>
                <ListItem>
                    <Span>Neutral</Span>
                    <Amount>{neutral}</Amount>
                </ListItem>
                <ListItem>
                    <Span>Bad</Span>
                    <Amount>{bad}</Amount>
                </ListItem>
                <ListItem>
                    <Span>Total</Span>
                    <Amount>{total}</Amount>
                </ListItem>
                <ListItem>
                    <Span>Positive feedback</Span>
                    <Amount>{good ? positivePercentage() : 0}%</Amount>
                </ListItem>
            </List>
        </>
    )
};

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.func.isRequired
};