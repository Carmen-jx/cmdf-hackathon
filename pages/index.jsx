

// import React, { useState, useEffect } from 'react';
// import { CohereClient } from 'cohere-ai';
// import Chatbox from '../components/chatbox';
// import { Card,Button } from 'react-bootstrap';
// import Profile from '../components/profile';


// const cohere = new CohereClient({
//   token: "PtvUworNph8G3qs4Ha3y6NrKaoRkrJrNcrC9sI4J", 
//   // This is your trial API key
// });

// const profilesData = [
//   {
//     name: "John Doe",
//     img: "../pages/img/women.jpg",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
//   },
//   {
//     name: "Jane Smith",
//     img: "",
//     description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
//   },
//   // Add more profiles as needed
// ];

// const Home = () => {
//   const [quote, setQuote] = useState('');
//   const [collapsed, setCollapsed] = useState(true);

//   useEffect(() => {
//     const generateQuote = async () => {
//       try {
//         const response = await cohere.generate({
//           model: "command",
//           prompt: "write one motivational quote\n",
//           maxTokens: 300,
//           temperature: 0.9,
//           k: 0,
//           stopSequences: [],
//           returnLikelihoods: "NONE"
//         });
//         setQuote(response.generations[0].text);
//       } catch (error) {
//         console.error('Error generating quote:', error);
//       }
//     };

//     generateQuote();
//   }, []); 

//   const toggleCollapsed = () => {
//     setCollapsed(!collapsed);
//   };

//   return (
//     <>
//     <div className='welcome-sign'>
//       <h1>  MENTORAS </h1>
//     </div>
//     <br/>
//     <br/>

//       <div className="banner">
//               <h4>
//                 {quote}
//               </h4>
//         </div>
//         <br/>
      
//       <div className="home">
//       <div className="profiles">
//           {profilesData.map((profile, index) => (
//             <Profile
//               key={index}
//               name={profile.name}
//               description={profile.description}
//               onConnect={() => handleConnect(profile.name)}
      
//             />
//           ))}
//         </div>
//         <div className="chatbox-popup">
//           {!collapsed && <Chatbox />}
//         </div>
//         <button className="collapse-button" onClick={toggleCollapsed}>
//           {collapsed ? 'Chat with Barbie' : 'Bye Barbie!'}
//         </button>
//       </div>
// </>
    
//   );
// }

// export default Home;

import React from 'react'
import {useRouter} from 'next/router';

const Home = (props) => {
  const { loggedIn, email } = props
  const router = useRouter();

  const onButtonClick = () => {
    router.push("/login")
  }

  return (
    <div className="mainContainer">
      <div className={'titleContainer'}>
        <div>Welcome!</div>
        
      </div>
      <div><p>"Empowering Minds, Embracing Diversity: Your Inclusive Learning Community."</p></div>
      <div className={'buttonContainer'}>
        <input
          className={'inputButton'}
          type="button"
          onClick={onButtonClick}
          value={loggedIn ? 'Log out' : 'Log in'}
        />
        {loggedIn ? <div>Your email address is {email}</div> : <div />}
      </div>
    </div>
  )
}

export default Home
