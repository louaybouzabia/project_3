import logoo from './imgi.jpg';
import './App.css';
import Profile from './profile/Profile';

function App() {

  const handleName = (x) => alert(x);
  return (
    <>
      <Profile objectt={{
        fullName:"louay",
         bio:"learner",
          profession:"learner",
           fct:handleName 
      }} 
      >{logoo}</Profile>

    </>
  );
}

export default App;