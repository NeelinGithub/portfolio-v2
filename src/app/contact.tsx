import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSuccess = () => {
    setSuccess(true);
    setName('');
    setEmail('');
    setMessage('');
    
    setTimeout(() => setSuccess(false), 5000);
  };

  return (
    <div className="border rounded-lg shadow-lg p-6 max-w-md mx-auto bg-white dark:bg-gray-800">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Contact Me</h2>
      
      {success && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
          <p>Message sent successfully! I will get back to you soon.</p>
        </div>
      )}
      
      <iframe name="hiddenFrame" className="hidden" onLoad={handleSuccess} title="Form submission"></iframe>
      
      <form
        action="https://formspree.io/f/YOUR_FORMSPREE_FORM_ID"
        method="POST"
        target="hiddenFrame"
      >
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="border rounded-lg w-full p-2 text-gray-800 bg-white dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Your name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="border rounded-lg w-full p-2 text-gray-800 bg-white dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="your.email@example.com"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="border rounded-lg w-full p-2 text-gray-800 bg-white dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            rows={4}
            placeholder="Your message here..."
          />
        </div>
        <button 
          type="submit" 
          className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-4 py-2 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;