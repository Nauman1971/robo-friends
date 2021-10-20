import { useEffect, useState } from 'react';
import './App.css';
import CardList from './components/CardList';
import SearchBox from './components/SearchBox';
import Scroll from './components/Scroll';

function App() {
  const [searchField, setsearchField] = useState('');
  const [robots, setRobots] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        return response.json();
      })
      .then(user => {
        setRobots(user)
      });
  }, []);

  const filteredRobots = robots ? robots.filter(robot => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  }) : []

  if (!robots.length) {
    return <h1>Loading...</h1>
  }
  return (
    <div className='tc'>
      <h1 className="f1">RoboFriends</h1>
      <SearchBox setsearchField={setsearchField} />
      <CardList robots={filteredRobots} />
    </div>
  );
}

export default App;
