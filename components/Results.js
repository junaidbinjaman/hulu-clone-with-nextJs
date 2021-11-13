import React from "react";
import FlipMove from "react-flip-move";
import Thumbnail from "./Thumbnail";

const Results = ({ results }) => {
  console.log(results);
  return (
    <FlipMove className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 2xl:flex flex-wrap justify-center">
      {results.map((result) => (
        <Thumbnail key={result.id} result={result} />
      ))}
    </FlipMove>
  );
};

export default Results;
