import { Component } from "react";
import FeedbackOptions from "./FeedbackOptions";
import Statistics from "./Statistics";
import Notification from "./Notification";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = (option) => {
    this.setState({
      [option]: this.state[option] + 1,
    });
  };

  getTotal = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  getPositivePercentage = () => {
    const total = this.getTotal();

    if (total === 0) {
      return 0;
    }

    return Math.round((this.state.good / total) * 100);
  };

  render() {
    const total = this.getTotal();
    const positivePercentage = this.getPositivePercentage();

    return (
      <div>
        <h2>Please leave feedback</h2>

        <FeedbackOptions
          options={["good", "neutral", "bad"]}
          onLeaveFeedback={this.addFeedback}
        />

        <h2>Statistics</h2>

        {total === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        )}
      </div>
    );
  }
}

export default App;
