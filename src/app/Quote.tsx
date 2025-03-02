import React, { useEffect, useState } from 'react';

interface Quote {
  text: string;
  author: string;
}

const quotes: Quote[] = [
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
  { text: "The best way to predict the future is to invent it.", author: "Alan Kay" },
  { text: "Success is not the key to happiness. Happiness is the key to success.", author: "Albert Schweitzer" },
  { text: "You miss 100% of the shots you do not take.", author: "Wayne Gretzky" },
  { text: "The only limit to our realization of tomorrow will be our doubts of today.", author: "Franklin D. Roosevelt" },
  { text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", author: "Ralph Waldo Emerson" },
];

const Quote: React.FC = () => {
  const [randomQuote, setRandomQuote] = useState<Quote | null>(null);

  useEffect(() => {
    const getRandomQuote = () => {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      setRandomQuote(quotes[randomIndex]);
    };

    getRandomQuote();
  }, []);

  return (
    <div className="border rounded-lg shadow-lg p-4 text-center">
      {randomQuote ? (
        <>
          <p className="italic text-gray-400">{randomQuote.text}</p>
          <p className="text-right italic text-pretty font-mono text-highlight">- {randomQuote.author}</p>
        </>
      ) : (
        <p>Loading quote...</p>
      )}
    </div>
  );
};

export default Quote;