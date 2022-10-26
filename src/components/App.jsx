import { Component } from "react";
import { Statistics } from "components/Statistics/Statistics";
import { FeedbackOptions } from "components/FeedbackOptions/FeedbackOptions";
import { Section } from "components/Section/Section";
import { Notification } from "./Notification/Notification";
import { Container } from "./App.styled";

const INITIAL_FORM_DATA = {
  good: 0,
  neutral: 0,
  bad: 0,
};

export class App extends Component {
  state = { ...INITIAL_FORM_DATA };

  handleClick = (evt) => {
    const { name } = evt.target;

      this.setState((prevState) => ({
        [name]: prevState[name] + 1,
      }))
  }
  
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
        return good + neutral + bad;
  }
  
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
      if (good) {
        return Math.ceil(good / this.countTotalFeedback() * 100);
      }

      return;
  }

  render() {
     const { good, neutral, bad } = this.state;

        return (
          <Container>
            <Section title="Please leave feedback">
              <FeedbackOptions
                  options={this.state}
                  onLeaveFeedback={this.handleClick}
              />
            </Section>
            {good || neutral || bad
              ? <Section title="Statistics">
                  <Statistics
                      good={good}
                      neutral={neutral}
                      bad={bad}
                      total={this.countTotalFeedback()}
                      positivePercentage={this.countPositiveFeedbackPercentage}
                  />    
                </Section>    
              : <Notification message="There is no feedback" />}            
          </Container>        
        )
  }
};
