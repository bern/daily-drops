import React, { useEffect, useState } from 'react';
import { getWeapon } from './utils/drops';
import { breakoutDate, dateIsBeforeOtherDate } from './utils/date';
import './App.css';

function App() {
  const [weapon, setWeapon] = useState('');
  const now = new Date();

  useEffect(() => {
    if (window.localStorage.getItem('last-drop-timestamp')) {
      const lastDropTimestamp = new Date(
        window.localStorage.getItem('last-drop-timestamp')!
      );
      const lastDate = breakoutDate(lastDropTimestamp);
  
      if (dateIsBeforeOtherDate({
        date1: {...lastDate},
        date2: {...breakoutDate(now)}
      })) {
        setWeapon(getWeapon());
        window.localStorage.setItem('last-drop-timestamp', `${now}`);  
      }
    } else {
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

  if (weapon) {
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
