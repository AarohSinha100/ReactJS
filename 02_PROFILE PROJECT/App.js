import './App.css';
import Image from './PROFILE_PROJECT/image';
import Contact from './PROFILE_PROJECT/contact';
import About from './PROFILE_PROJECT/about';
import SocialMedia from './PROFILE_PROJECT/socialmedia';


function App(){
  return(
    <div className='app-div'>
        <Image />
        <Contact />
        <About />
        <SocialMedia />
    </div>
  )
}

export default App;
