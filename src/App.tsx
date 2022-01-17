import React, { useEffect, useState } from 'react';
import { getWeapon } from './drops';
import './App.css';

// checks if date1 is before date2 in terms of day, month, and year
const dateIsBeforeOtherDate = ({date1, date2}: {date1: {
  day: number,
  month: number,
  year: number
}; date2: {
  day: number,
  month: number,
  year: number
}}) => {
  if (date1.year < date2.year) {
    return true;
  }

  if (date1.year === date2.year && date1.month < date2.month) {
    return true;
  }

  if (date1.year === date2.year && date1.month === date2.month && date1.day < date2.day) {
    return true;
  }

  return false;
}

function App() {
  const [weapon, setWeapon] = useState('');
  // let weapon: string | undefined;
  const now = new Date();

  useEffect(() => {
    console.log('a')
    if (window.localStorage.getItem('last-drop-timestamp')) {
      console.log('b')
      const lastDropTimestamp = new Date(window.localStorage.getItem('last-drop-timestamp')!);
      const year = lastDropTimestamp.getFullYear();
      const month = lastDropTimestamp.getMonth();
      const day = lastDropTimestamp.getDate();
  
      if (dateIsBeforeOtherDate({
        date1: {
          year,
          month,
          day
        },
        date2: {
          year: now.getFullYear(),
          month: now.getMonth(),
          day: now.getDate()
        }
      }) || Math.abs(lastDropTimestamp.getTime() - now.getTime()) < 100 ) {
        console.log('c')
        setWeapon(getWeapon());
        window.localStorage.setItem('last-drop-timestamp', `${now}`);  
      }
    } else {
      console.log('d')
      setWeapon(getWeapon());
      window.localStorage.setItem('last-drop-timestamp', `${now}`); 
    }
  }, [])

  let content: JSX.Element = (
    <>
      <div>
        In the first life beneath the sun, they were so skewed and squint-eyed in their minds. Their extavagance mocked all reason.
      </div>
      <div style={{ paddingTop: '16px' }}>
        A whisper in the darkness tells you to come back tomorrow for a chance at great riches.
      </div>
    </>
  );

  console.log(weapon)

  if (weapon) {
    console.log('got content')
    content = (
      <>
        <div>
          You enter a dark and empty room. As you stare through the blackness, an item resting against the corner catches your eye.
        </div>
        <div style={{ paddingTop: '8px' }}>
          You approach it, and pick up
        </div>
        <div style={{ paddingTop: '16px' }}>
          <h2>{weapon}</h2>
        </div>
        <div style={{ paddingTop: '16px' }}>
          A whisper in the darkness tells you to come back tomorrow for a chance at even greater riches.
        </div>
      </>
    );
  }

  return (
    <div style={{ height: '100%', width: '100%' }}>
      <div className="container">
        {content}
      </div>
    </div>
  );
}

export default App;