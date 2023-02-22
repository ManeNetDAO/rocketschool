import { useNavigate } from 'react-router';
import './App.css';
import rocket from './rocket.svg';

function Header(){
  return(
    <header className='App-header'>
      <h1>Welcome to Rocket School!</h1>

    </header>
  );
}

function Start(){

  let navigate = useNavigate();
  const routeChange = () => {
    let path = window.location.pathname +'identifyuser';
    navigate(path);
  }
  return (
    <>
      <img src={rocket} className="App-logo" alt="rocket"></img>
      <div>     
        <button className="button-24" onClick={routeChange}>Get Started!</button>
      </div>   
    </>
  );
}

const userType = [
  "very little staking knowledge - I'm a total noob",
  "some staking knowledge - I know what staking is but not comfortable doing it yet",
  "moderate staking knowledge - I currently stake on a 3rd party platform but want to learn to do it on my own",
  "advanced staking knowledge - I run my own validator node, I'm just here to validate your info"
];
const userObjects = userType.map(
  (user, i) => ({
    id: i,
    description: user
  })
);

export function IdentifyUser(){
  return(
    <div className='App'>
      <h4>How would you describe your staking knowledge?</h4>
      <>     
        {userObjects.map((user) => (
        <><button id={user.id.toString()}>{user.description}</button><br></br></>
        ))}
      </>     
    </div>
  );
}

function Begin(){
  return(
    <div className="App">
        <Header/>
        <Start />
    </div>
  );
}


export function App() {
  return (
    <Begin />
  );
}

