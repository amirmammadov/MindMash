export const questions = [
  {
    id: 1,
    question:
      "What is the command to create a new React application using Create React App?",
    answers: [
      {
        title: "react-create-app my-app",
        isCorrect: false,
      },
      {
        title: "npx create-react-app my-app",
        isCorrect: true,
      },
      {
        title: "npm new-react-app my-app",
        isCorrect: false,
      },
      {
        title: "create-react-app my-app",
        isCorrect: false,
      },
    ],
  },
  {
    id: 2,
    question: "What is the purpose of the useState hook in React?",
    answers: [
      {
        title: "To manage component lifecycle events",
        isCorrect: false,
      },
      {
        title: "To handle HTTP requests",
        isCorrect: false,
      },
      {
        title: "To add state to functional components",
        isCorrect: true,
      },
      {
        title: "To apply styles to components",
        isCorrect: false,
      },
    ],
  },
  {
    id: 3,
    question: "Which method is used to update the state in a class component?",
    answers: [
      {
        title: "this.changeState()",
        isCorrect: false,
      },
      {
        title: "this.updateState()",
        isCorrect: false,
      },
      {
        title: "this.setState()",
        isCorrect: true,
      },
      {
        title: "this.modifyState()",
        isCorrect: false,
      },
    ],
  },
  {
    id: 4,
    question:
      "How can you pass data from a parent component to a child component in React?",
    answers: [
      {
        title: "Using states",
        isCorrect: false,
      },
      {
        title: "Using refs",
        isCorrect: false,
      },
      {
        title: "Using props",
        isCorrect: true,
      },
      {
        title: "Using context",
        isCorrect: false,
      },
    ],
  },
  {
    id: 5,
    question: "What is the correct syntax to import React in a component?",
    answers: [
      {
        title: "import React from 'React'",
        isCorrect: false,
      },
      {
        title: "import { React } from 'react'",
        isCorrect: false,
      },
      {
        title: "import React from 'react'",
        isCorrect: true,
      },
      {
        title: "import { react } from 'React'",
        isCorrect: false,
      },
    ],
  },
  {
    id: 6,
    question:
      "Which lifecycle method is invoked immediately after a component is mounted?",
    answers: [
      {
        title: "componentDidMount",
        isCorrect: true,
      },
      {
        title: "componentWillMount",
        isCorrect: false,
      },
      {
        title: "componentDidUpdate",
        isCorrect: false,
      },
      {
        title: "componentWillUpdate",
        isCorrect: false,
      },
    ],
  },
  {
    id: 7,
    question: "What does the useEffect hook do in React?",
    answers: [
      {
        title: "It manages the state in functional components",
        isCorrect: false,
      },
      {
        title: "It adds lifecycle methods to functional components",
        isCorrect: true,
      },
      {
        title: "It fetches data from an API",
        isCorrect: false,
      },
      {
        title: "It adds event listeners to components",
        isCorrect: false,
      },
    ],
  },
  {
    id: 8,
    question: "How do you conditionally render a component in React?",
    answers: [
      {
        title: "Using if-else statements directly in JSX",
        isCorrect: false,
      },
      {
        title: "Using ternary operators",
        isCorrect: true,
      },
      {
        title: "Using switch statements directly in JSX",
        isCorrect: false,
      },
      {
        title: "Using for loops",
        isCorrect: false,
      },
    ],
  },
  {
    id: 9,
    question: "What is the correct way to handle events in React?",
    answers: [
      {
        title: "Inline JavaScript",
        isCorrect: false,
      },
      {
        title: "Adding event listeners directly in the DOM",
        isCorrect: false,
      },
      {
        title: "Using camelCase syntax and passing functions",
        isCorrect: true,
      },
      {
        title: "Using kebab-case syntax and passing functions",
        isCorrect: false,
      },
    ],
  },
  {
    id: 10,
    question: "How can you optimize performance in a large React application?",
    answers: [
      {
        title: "By adding more components",
        isCorrect: false,
      },
      {
        title: "By using context API everywhere",
        isCorrect: false,
      },
      {
        title: "By using React.memo and useCallback hooks",
        isCorrect: true,
      },
      {
        title: "By removing state from all components",
        isCorrect: false,
      },
    ],
  },
];
