import './App.css'
import Modal from './components/Modal'

function App() {

  function openDoor() {
    const doors = document.querySelectorAll('.door');
    // const door = side === 'left' ? doors[0] : doors[1];
    doors[0].style.transform = 'rotateY(90deg)';
    doors[1].style.transform = 'rotateY(90deg)';

  }

  return (
    <div>
      <Modal />
      <div className="door-container">
        <div className="door left" onClick={() => { openDoor() }}>
          <div id='knob_1' className="knob">
          </div>
        </div>
        <div className="door right" onClick={() => { openDoor() }}>
          <div id='knob_2' className="knob">
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
