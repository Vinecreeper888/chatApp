import './App.css';
import ChatComponent from './components/ChatComponent';
import Homepage from './components/Homepage';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/chat' element={<ChatComponent/>}/>
    </Routes>
  );
}

export default App;
