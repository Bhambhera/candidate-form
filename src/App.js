import './App.css';
import Modal from './Components/Modal';
import CandidateFormControler from './Components/Pages/CandidateFormControler';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FormSubmitUi from './Components/Pages/FormSubmitUi';
import React from 'react';

function App() {
  return (
    <>
    <Modal />
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<CandidateFormControler />}></Route>
        <Route path='/submitted' element={<FormSubmitUi/>}></Route>
        <Route path='/:token' element={<CandidateFormControler/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
