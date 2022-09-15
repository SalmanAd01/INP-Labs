import {Navbar} from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import List from './components/List'
import Counter from './components/Counter'
import CounterClass from './components/CounterClass'

function App() {
  return (
    <>
    <Navbar></Navbar>
    <Hero></Hero>
    <About></About>
    {[
      {
        current:true,
        name:"Testing"
      },
      {
        current:false,
        name:"Testing 2"
      },
      {
        current:false,
        name:"Testing 3"
      },
      {
        current:false,
        name:"Testing 4"
      }
    ].map((val,pos)=><List current={val.current} name={val.name} key={pos}></List>)
    
    }
    <Counter></Counter>
    <CounterClass></CounterClass>
    </>
  );
}

export default App;