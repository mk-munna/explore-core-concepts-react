import './App.css'
import Counter from './Counter';
import Counter2 from './Counter2';
import Users from './Users';
import Friends from './friends';

function App() {
  function handleClick() {
    alert('Click');
  }
  function handleClick2(num) {
    alert(5+num);
  } 
  return (
    <>
      <h3>Core concepts 2</h3>
      <Friends></Friends>
      {/* <Users></Users> */}
      <Counter2></Counter2>
      <Counter></Counter>
      <button onClick={handleClick}>click me</button>
      <button onClick={() => { alert('2 clicked') }}>second</button>
      <button onClick={()=>handleClick2(3)}>sum</button>
      <button onClick={function handleClick() {
        alert('3 clicked')
      }}>third</button>
    </>
  )
}

export default App
