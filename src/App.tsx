import './App.css';
import ballKnower from './assets/ball-knower.jpg';
import twoSwords from './assets/two-swords.jpg';

function App() {

  return (
    <>
      <div className="headContainer">
        <h1>Dominick Dickerson</h1>
      </div>
      <div className='bar'></div>
      <div className="bodyContainer">
        <h1>Showcased Projects</h1>
        <div className="projectPictureContainer">
          <img src={ballKnower}></img>
          <img src={twoSwords}></img>
        </div>
        <p>Hi there, I am <b>Dominick Dickerson</b>! This website is made to be handed out to employers to show off my handywork! I don't have a ton of huge projects but I do have some great real world experience! Feel free to look around to try and get a feel for who I am!</p>
      </div>
    </>
  )
}

export default App
