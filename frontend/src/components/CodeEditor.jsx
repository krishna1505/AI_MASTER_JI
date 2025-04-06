
import React from 'react';
import Editor from 'react-simple-code-editor';
import prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css'; // Using a predefined theme
import { useEffect } from 'react';

const CodeEditor = ({ code, setCode, setReview }) => {

  useEffect(() => {
    prism.highlightAll();
  }, []);

  return (
    <div className="h-full w-full bg-gray-800 rounded-lg shadow-lg overflow-hidden">
      <Editor
        value={code}
        onValueChange={setCode}
        highlight={code => prism.highlight(code, prism.languages.javascript, 'javascript')}
        padding={10}
        style={{
          fontFamily: '"Fira code", "Fira Mono", monospace',
          fontSize: 16,
          border: '1px solid #ddd',
          borderRadius: '5px',
          height: '100%',
          width: '100%',
          backgroundColor: 'transparent',
          color: '#f8f8f2', // white text for dark mode
        }}
      />
    </div>
  );
};

export default CodeEditor;
