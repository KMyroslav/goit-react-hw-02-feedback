import { Component } from "react";
import Section from "./components/Section/Section";
import Statistics from "./components/Statistics/Statistic";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";
import Notification from "./components/Notification/Notification";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onFeedbackBtnClick = (value) => () => {
    this.setState((prevState) => ({
      [value]: prevState[value] + 1,
    }));
  };

  countTotal = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  calculateFeedback = () => {
    return this.state.good ? (this.state.good * 100) / this.countTotal() : 0;
  };

  render() {
    const options = Object.keys(this.state);

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onFeedbackBtnClick={this.onFeedbackBtnClick}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotal() ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              countTotal={this.countTotal}
              calculateFeedback={this.calculateFeedback}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
