// import logo from './logo.svg';
import './App.css';
// import Greeting from './components/pure/greeting';
// import GreetingF from './components/pure/greetingF';
import TaskListComponent from './components/container/task_list';
// import Ejemplo1 from './hooks/Ejemplo1';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> */}
        {/*Componente propio greeting.jsx*/}
        {/* <Greeting name="Juan"></Greeting> */}
        {/* <GreetingF name="Juan José"></GreetingF> */}
        <TaskListComponent></TaskListComponent>
        {/* <Ejemplo1></Ejemplo1> */}
      {/* </header> */}
    </div>
  );
}

export default App;
