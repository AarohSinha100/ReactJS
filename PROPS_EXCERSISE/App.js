import './App.css';
import Section from './components/Section';
import content from './content';
import mountfuji from "C:\\Users\\PROGRAMMING\\Desktop\\Mini Desktop\\REACTPROPSPROJECT\\propsapp\\src\\images\\mountfuji.jpg";


function App() {
  return (
     <div className='main'>
      {content.map((e)=>{
        return(
          <Section image={e.image} country={e.country} place={e.place} about={e.about} />
        )
      })}
     </div>
   
  );
}

export default App;
