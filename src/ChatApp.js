// src/ChatApp.js
import React, { useState } from 'react';
import { Input, Button, List } from 'antd';
import { OpenAI } from 'openai';

const ChatApp = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = async () => {
    const openai = new OpenAI('API KEY');

    const response = await openai.Completions.create({
      model: 'text-davinci-002',
      prompt: input,
      maxTokens: 150,
    });

    setMessages([...messages, { user: input, bot: response.choices[0].text }]);
    setInput('');
  };

  return (
    <div>
      <List
        dataSource={messages}
        renderItem={(message) => (
          <List.Item>
            <List.Item.Meta
              title="User"
              description={message.user}
            />
            <div>{message.bot}</div>
          </List.Item>
        )}
      />
      <Input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask a question..."
      />
      <Button onClick={handleSend} type="primary">
        Send
      </Button>
    </div>
  );
};

export default ChatApp;
