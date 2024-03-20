// Handle clicks

import { useState } from "react";

const Heading = (props) => {
  // console.log("recieved this data:...", props);
  return <h1>{props.text}</h1>;
};

const Button = (props) => {
  // console.log("recieved this data:...", props);
  return <button onClick={props.handleClick}>{props.text}</button>;
};

const Content = (props) => {
  const { text, count } = props;
  return (
    <p>
      {text} {count}
    </p>
  );
};

const Positive = (props) => {
  const { selected, good, neutral, bad } = props;
  const totalFeedback = good + neutral + bad;

  if (totalFeedback === 0) {
    return <p>No Feedack given yet.</p>;
  }

  return selected === "good" ? (
    <p>Good:{((good / totalFeedback) * 100).toFixed(2)} % </p>
  ) : selected === "neutral" ? (
    <p>Neutral: {((neutral / totalFeedback) * 100).toFixed(2)}%</p>
  ) : (
    <p>Bad: {((bad / totalFeedback) * 100).toFixed(2)}%</p>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [positive, setPositive] = useState(false);
  const [selected, setSelected] = useState(null);

  const handleGood = () => {
    setGood((prevGood) => prevGood + 1);
    setTotal((prevTotal) => prevTotal + 1);
    setPositive(true);
    setSelected("good");
  };

  const handleNeutral = () => {
    setNeutral((prevNeutral) => prevNeutral + 1);
    setTotal((prevTotal) => prevTotal + 1);
    setPositive(true);
    setSelected("neutral");
  };

  const handleBad = () => {
    setBad((prevBad) => prevBad + 1);
    setTotal((prevTotal) => prevTotal + 1);
    setPositive(true);
    setSelected("bad");
  };

  // Calculate average and positive

  const average = ((good + neutral + bad) / 3).toFixed(2);

  // setTotal(good + bad + neutral)

  return (
    <>
      <Heading text="give feedback" />
      <Button handleClick={handleGood} text="good" />
      <Button handleClick={handleNeutral} text="neutral" />
      <Button handleClick={handleBad} text="bad" />
      <Heading text="statistics" />
      <table>
        <tbody>
          <tr>
            <td>Good</td>
            <td>
              <Content count={good} />
            </td>
          </tr>
          <tr>
            <td>Neutral</td>
            <td>
              <Content count={neutral} />
            </td>
          </tr>
          <tr>
            <td>Bad</td>
            <td>
              <Content count={bad} />
            </td>
          </tr>
          <tr>
            <td>All</td>
            <td>
              <Content count={total} />
            </td>
          </tr>
          <tr>
            <td>Average</td>
            <td>
              <Content count={average} />
            </td>
          </tr>
          <tr>
            <td>Positive</td>
            <td>
              <Positive
                selected={selected}
                good={good}
                neutral={neutral}
                bad={bad}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

const App2 = () => {
  return <div>Hello</div>
}

export default App;
