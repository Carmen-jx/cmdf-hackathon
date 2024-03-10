import React, { useState, useEffect } from 'react';
import { CohereClient } from 'cohere-ai';
import ScrollToBottom from 'react-scroll-to-bottom';



const cohere = new CohereClient({
  token: "PtvUworNph8G3qs4Ha3y6NrKaoRkrJrNcrC9sI4J", // This is your trial API key
});


const Chatbox = () => {
    const [inputValue, setInputValue] = useState('');
    const [chatLog, setChatLog] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
  
    const chatWithCohere = async (message) => {
        try {
            const stream = await cohere.chatStream({
                model: "command-nightly",
                message: message,
                chatHistory: [],
                promptTruncation: 'AUTO',
                citationQuality: "accurate",
                connectors: [{"id":"web-search"}],
                documents: [],
                preambleOverride: "You are barbie, a LLM here to help individuals to advance their career life coaching in conversational chats."

              });
              let currentMessage =''
             // console.log("This is the message", message )
              
              for await (const chat of stream) {

               // console.log("chat is: ", chat)
                
                  if (chat.eventType === "text-generation") {
                    currentMessage += chat.text
                    
                  }else if(chat.eventType === "stream-end"){
                        const finalMsg = currentMessage
                        setChatLog(prevChatLog => [...prevChatLog, { type: 'cohere', message: finalMsg }]); 
                      //  console.log("this is the chatLog", chatLog)
                      //  console.log("this is curMsg", currentMessage)
                        currentMessage =''
                    }
                        
                    }
               
        } catch (error) {
          console.error('Error with Cohere:', error);
        } finally {
          setIsLoading(false); // Set loading to false when chat is complete
        }
      };

    useEffect(() => {
      chatWithCohere("hello");
    }, []); 
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Add user's message to chat log
      setChatLog(prevChatLog => [...prevChatLog, { type: 'user', message: inputValue }]);
      chatWithCohere(inputValue)
      setInputValue('')
      
    };

    

  return (
    
    <div className='chatbox'>
        <div className = "chatbox-header">
            <h3>Hey Barbie!</h3>
        </div>
        
        {isLoading ? (
      <p>Loading...</p>
    ) : (
      <div className='chatbox-area' >
        <ScrollToBottom className='chatbox-message'>
        {chatLog.map((message, index) => (
              <div key={index} className={message.type === 'user' ? 'user-message' : 'cohere-message'}>
                {message.type === 'user' ? <strong>You: </strong> : <strong>Barbie: </strong>}
                {message.message}
              </div>
            ))}
        </ScrollToBottom>
        
      </div>
    )}
    <form onSubmit={handleSubmit} className='input-area'>
      <input type="text" placeholder="Type your prompt..." value={inputValue} onChange={(e) => setInputValue(e.target.value)} /> 
      
      <button type="submit" onClick={handleSubmit} className="send-button">Send</button>

    </form>
  </div>
);
  
};

export default Chatbox;


