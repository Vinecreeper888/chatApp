import './App.css';
import ChatComponent from './components/ChatComponent';
import Homepage from './components/Homepage';
import { Routes, Route } from 'react-router-dom';
import { NewInstanceContextProvider } from './context/NewInstanceProvider';

function App() {
  return (
    <NewInstanceContextProvider>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/chat' element={<ChatComponent/>}/>
      </Routes>
    </NewInstanceContextProvider>
  );
}

export default App;
