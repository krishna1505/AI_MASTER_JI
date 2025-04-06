// // src/components/CodeOutput.jsx

// import ReactMarkdown from "react-markdown";
// import rehypeHighlight from "rehype-highlight";

// const CodeOutput = ({ review }) => {
//   return (
//     <div className="bg-gray-800 p-4 rounded-md h-full">
//       <h3 className="text-xl mb-4">Code Review</h3>
//       <ReactMarkdown rehypePlugins={[rehypeHighlight]}>{review}</ReactMarkdown>
//     </div>
//   );
// };

// export default CodeOutput;


import React from 'react';
import Markdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/github-dark.css';

const CodeOutput = ({ review }) => {
  return (
    <div className="bg-black-700 rounded-lg shadow-lg p-4 h-full">
      <Markdown rehypePlugins={[rehypeHighlight]}>
        {review}
      </Markdown>
    </div>
  );
};

export default CodeOutput;
