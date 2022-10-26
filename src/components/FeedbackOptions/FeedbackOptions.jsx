import PropTypes from 'prop-types';
import { FormContainer, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FormContainer>
      {Object.keys(options).map(key => (
        <Button key={key} type="button" name={key} onClick={onLeaveFeedback}>
          {key}
        </Button>
      ))}
    </FormContainer>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
