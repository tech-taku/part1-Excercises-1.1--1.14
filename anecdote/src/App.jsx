import { useState } from "react";

const Heading = ({ heading }) => {
  return (
    <div>
      <h1>{heading}</h1>
    </div>
  );
};

// const Button = ({ handleGenerateRandom, handleVote, text }) => {
//   console.log(handleGenerateRandom, text);

//   return (
//     <div>
//       <button onClick={handleGenerateRandom}>{text}</button>
//     </div>
//   );
// };

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));

  // click on the button and randomly retrieve next anecdote
  const handleGenerateRandom = () => {
    // console.log("You will get next anectdote");
    const anecdotePosition = Math.floor(Math.random() * anecdotes.length);
    setSelected(anecdotePosition);
    // console.log(selected);
  };

  const handleVote = () => {
    const newVotes = [...votes];
    newVotes[selected] += 1;
    setVotes(newVotes);
    // console.log(votes);
  };

  const highestVote = Math.max(...votes);

  // console.log(highestVote);


  return (
    <>
      <div>
        <Heading heading="Anecdote of the day" />
        {anecdotes[selected]}
        <div>Selected anecdote has {votes[selected]} votes.</div>
      </div>
      <div>
        <button onClick={handleVote}>vote</button>
        <button onClick={handleGenerateRandom}>next anecdote</button>
      </div>
      <div>
        <Heading heading="Anecdote with most votes" />
        {highestVote > 0
          ? anecdotes[votes.indexOf(highestVote)]
          : "No voting has been done"}
        <div>
          {highestVote > 0 && `The anecdote has ${votes[selected]} votes.`}
        </div>
      </div>
    </>
  );
};

export default App;
