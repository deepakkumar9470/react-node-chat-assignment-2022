import React,{useState} from 'react';

import './App.css'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import ChatForm from './components/ChatForm';
import ChatRoom from './components/ChatRoom';

const App = () => {
 

 

  return (

    <div className="container-fluid text-dark d-flex align-items-center justify-content-center" style={{height: "100vh"}}>
			<Router>
				<Routes>
					<Route index element={<ChatForm/>} />
					<Route path="chat/:roomId" element={<ChatRoom />} />
					<Route path="*" element={<h1>404 Error</h1>} />
				</Routes>
			</Router>
		</div>
   
  );
}

export default App;
