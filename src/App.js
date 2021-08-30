import './App.css';
import axios from 'axios';
import Chuck from './chuck.png';

function App() {
  return (
    <div className='App'>
      <h1>Chuck Norris Jokes</h1>
      <div className='main'>
        <img src={Chuck} alt='' />
        <div className='content'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
          unde explicabo, ex earum debitis excepturi perferendis! Magnam quaerat
          repudiandae quidem, soluta sint ab recusandae maiores, provident
          voluptate, exercitationem quas consequatur!
        </div>
      </div>
    </div>
  );
}

export default App;
