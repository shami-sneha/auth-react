import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Sidebar from './components/Sidebar'

import Home from './Pages/Home';
import Team from './Pages/Team';
import Tasks from './Pages/Tasks';
import Chats from './Pages/Chats';
import Analytics from './Pages/Analytics';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Header from './components/Header';


const App: React.FunctionComponent = () => {
  return (
    <>
      <Router>
        <Sidebar isOpen={false} toggle={function (): void {
          throw new Error('Function not implemented.');
        } } />
        <Header/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/team' element={<Team />} />            
          <Route path='/tasks' element={<Tasks />} />    
          <Route path='/chats' element={<Chats />} />
          <Route path='/analytics' element={<Analytics />} />
        </Routes>
      </Router> 
    </>
  )
}

export default App
