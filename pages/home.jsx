// import React, { useState, useEffect } from 'react';
// import { CohereClient } from 'cohere-ai';
// import Chatbox from '../components/chatbox';
// import { Card } from 'react-bootstrap';
// import Profile from '../components/profile';
// import Inbox from '../components/inbox';
// import Activity from '../components/activity';

// const cohere = new CohereClient({
//   token: "PtvUworNph8G3qs4Ha3y6NrKaoRkrJrNcrC9sI4J", 
// });

// const profilesData = [
//   {
//     name: "John Doe",
//     imgSrc: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
//   },
//   {
//     name: "Jane Smith",
//     imgSrc: "https://images.unsplash.com/photo-1617077644557-64be144aa306?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdvbWVuJTIwZmFjZXxlbnwwfHwwfHx8MA%3D%3D",
//     description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
//   },
// ];

// const inbox = [
//   {
//     message: "Jane accepted your match!"
//   },
//   {
//     message: "Your weekly matches have refreshed!"
//   },
//   {
//     message: "Reminder: NWPlus closing ceremony 03/10/2024"
//   },
// ];

// const activity = [
//   {
//     message: "Your last event was the cmd-f hackathon at March 9th- March 10th, 2024."
//   },
//   {
//     message: "Your Last match was March 9th, 2024."
//   },
//   {
//     message: "You had a mentorship call with Ella on March 1, 2024."
//   },
// ];


// export default function Dashboard ()  {
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
//       <div className='welcome-sign'>
//         <h1>MENTORAS</h1>
//       </div>
//       <br />
//       <br />
//       <div className="banner">
//         <h4>{quote}</h4>
//       </div>
//       <br />
//       <div className="home">
//         <div className='top-activities'>
//           <div className='activity-box'>
//             <h2>Your Inbox</h2>
//             <div className="inbox">
//               {inbox.map((message, index) => (
//                 <Inbox
//                   key={index}
//                   message={message.message}
//                 />
//               ))}
//             </div>
//           </div>
//           <div className='activity-box'>
//             <h2>Your Recent Activities</h2>
//             <div className="activity">
//               <div className='card-container-1'>
//                 <p>Recent profile visit</p>
//                 <Card>
//                   <Card.Body>
//                     <div className="image-container">
//                       <img src={profilesData[0].imgSrc} className="profile-image" alt={profilesData[0].name} />
//                     </div>
//                     <Card.Title style={{ fontWeight: 'bold' }}>{profilesData[0].name}</Card.Title>
//                   </Card.Body>
//                 </Card>
//               </div>
//               <div className='activity-list'>
//                 {activity.map((message, index) => (
//                   <Activity
//                     key={index}
//                     message={message.message}
//                   />
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//         <br />
//         <br />


//         <div className='bottom-activities'>
//           <h2>Connect with Mentors!</h2>
//           <div className="profiles">
//             {profilesData.map((profile, index) => (
//               <Profile
//                 key={index}
//                 name={profile.name}
//                 description={profile.description}
//                 imgSrc={profile.imgSrc}
//               />
//             ))}
//           </div>
//         </div>

//       <div className="chatbox-popup">
//             {!collapsed && <Chatbox />}
//           </div>
//           <button className="collapse-button" onClick={toggleCollapsed}>
//             {collapsed ? 'Chat with Barbie' : 'Bye Barbie!'}
//           </button>
//       </div>
//     </>
//   );
// }

import React, { useState, useEffect } from 'react';
import { CohereClient } from 'cohere-ai';
import Chatbox from '../components/chatbox';
import { Card } from 'react-bootstrap';
import Profile from '../components/profile';
import Inbox from '../components/inbox';
import Activity from '../components/activity';
import Event from '../components/event'; 

const cohere = new CohereClient({
  token: "PtvUworNph8G3qs4Ha3y6NrKaoRkrJrNcrC9sI4J", 
});

const profilesData = [
  {
    name: "John Doe",
    imgSrc: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    name: "Jane Smith",
    imgSrc: "https://images.unsplash.com/photo-1617077644557-64be144aa306?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdvbWVuJTIwZmFjZXxlbnwwfHwwfHx8MA%3D%3D",
    description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
];

const inbox = [
  {
    message: "Jane accepted your match!"
  },
  {
    message: "Your weekly matches have refreshed!"
  },
  {
    message: "Reminder: NWPlus closing ceremony 03/10/2024"
  },
];

const activity = [
  {
    message: "Your last event was the cmd-f hackathon at March 9th- March 10th, 2024."
  },
  {
    message: "Your Last match was March 9th, 2024."
  },
  {
    message: "You had a mentorship call with Ella on March 1, 2024."
  },
];

const eventsData = [
  {
    title: "Coffee MeetUp",
    description: "Meet your mentors!",
    date: "March 29, 2024",
    location: "Starbucks"
  },
  {
    title: "Speed Coding",
    description: "Write a code in under 2 hours with a mentor!",
    date: "April 32, 2024",
    location: "Park Royal Food Court"
  }
];

export default function Dashboard ()  {
  const [quote, setQuote] = useState('');
  const [collapsed, setCollapsed] = useState(true);

  useEffect(() => {
    const generateQuote = async () => {
      try {
        const response = await cohere.generate({
          model: "command",
          prompt: "write one motivational quote\n",
          maxTokens: 300,
          temperature: 0.9,
          k: 0,
          stopSequences: [],
          returnLikelihoods: "NONE"
        });
        setQuote(response.generations[0].text);
      } catch (error) {
        console.error('Error generating quote:', error);
      }
    };

    generateQuote();
  }, []); 

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  // Define handleConnect function
  const handleConnect = (name) => {
    console.log(`Connecting with ${name}`);
  };

  return (
    <React.Fragment>
      <div className='welcome-sign'>
        <h1>MENTORAS</h1>
      </div>
      <br />
      <br />
      <div className="banner">
        <h4>{quote}</h4>
      </div>
      <br />
      <div className="home">
        <div className='top-activities'>
          <div className='activity-box'>
            <h2>Your Inbox</h2>
            <div className="inbox">
              {inbox.map((message, index) => (
                <Inbox
                  key={index}
                  message={message.message}
                />
              ))}
            </div>
          </div>
          <div className='activity-box'>
            <h2>Your Recent Activities</h2>
            <div className="activity">
              {activity.map((message, index) => (
                <Activity
                  key={index}
                  message={message.message}
                />
              ))}
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className='bottom-activities'>
          <div className='activity-box'>
            <h2>Connect with Mentors!</h2>
            <div className="profiles">
              {profilesData.map((profile, index) => (
                <Profile
                  key={index}
                  name={profile.name}
                  description={profile.description}
                  imgSrc={profile.imgSrc}
                  onConnect={() => handleConnect(profile.name)} // Pass handleConnect as prop
                />
              ))}
            </div>
          </div>
          <div className='activity-event'>
            <h2>Events</h2>
            <div className="event-page">
              {eventsData.map((event, index) => (
                <Event
                  title={event.title}
                  description={event.description}
                  date={event.date}
                  location={event.location}
                  key={index}
                />
              ))}
            </div>
          </div>
          <div className="chatbox-popup">
            {!collapsed && <Chatbox />}
          </div>
          <button className="collapse-button" onClick={toggleCollapsed}>
            {collapsed ? 'Chat with Barbie' : 'Bye Barbie!'}
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}
