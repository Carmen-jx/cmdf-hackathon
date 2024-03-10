// import { Card, Form, Button, Alert } from "react-bootstrap";
// import { useState } from 'react';
// import { authenticateUser } from '@/lib/authenticate';
// import { useRouter } from 'next/router';


// export default function Login(props){

//   const [user, setUser] = useState("");
//   const [password, setPassword] = useState("");
//   const [warning, setWarning] = useState('');
//   const router = useRouter();

//   async function handleSubmit(e) {
//     e.preventDefault();
//     router.push('/');

//   }
//   return (

//       <div className="login-container">
//         <Card bg="light" className="login-card">
//           <Card.Body>
//             <h2>Login</h2>
//             <p>Enter your login information below:</p>
//             <Form onSubmit={handleSubmit}>
//               <Form.Group>
//                 <Form.Label>User:</Form.Label>
//                 <Form.Control
//                   type="text"
//                   value={user}
//                   id="userName"
//                   name="userName"
//                   onChange={e => setUser(e.target.value)}
//                 />
//               </Form.Group>
//               <Form.Group>
//                 <Form.Label>Password:</Form.Label>
//                 <Form.Control
//                   type="password"
//                   value={password}
//                   id="password"
//                   name="password"
//                   onChange={e => setPassword(e.target.value)}
//                 />
//               </Form.Group>
//               <Button variant="primary" type="submit">Login</Button>
//             </Form>
//             {warning && <Alert variant="danger" className="mt-3">{warning}</Alert>}
//           </Card.Body>
//         </Card>
//       </div>
//     );
//   }
import React, { useState } from 'react'
import { useRouter } from 'next/router'


const Login = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const router = useRouter();

  const onButtonClick = () => {
    router.push("/home")
  }

  return (
    <div className={'mainContainer'}>
      <div className={'titleContainer'}>
        <div>Login</div>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input
          value={email}
          placeholder="Enter your email here"
          onChange={(ev) => setEmail(ev.target.value)}
          className={'inputBox'}
        />
        <label className="errorLabel">{emailError}</label>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input
          value={password}
          placeholder="Enter your password here"
          onChange={(ev) => setPassword(ev.target.value)}
          className={'inputBox'}
        />
        <label className="errorLabel">{passwordError}</label>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input className={'inputButton'} type="button" onClick={onButtonClick} value={'Log in'} />
      </div>
      <div>
      <a href='/about' className="nav__link">
                                No Account Yet? Sign Up!
                            </a>
      </div>
    </div>
  )
}

export default Login

