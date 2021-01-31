import React from 'react';
import Card from './components/Card';
import response from './data';

function createCard(match) {
  return (
    <Card
      key={match.id}
      teamOneLogo={match.opponents[0].opponent.image_url}
      teamOneName={match.opponents[0].opponent.name}
      teamTwoLogo={match.opponents[1].opponent.image_url}
      teamTwoName={match.opponents[1].opponent.name}
    />
  );
}

function App() {
  return (
    <div className='App'>
      <h1>Upcoming Matches</h1>

      {response.map(createCard)}

      {/* <Card
        teamOneName='Team Liquid'
        teamOneLogo='https://www.pngkey.com/png/detail/141-1416950_team-liquid-logo-png.png'
      /> */}
    </div>
  );
}

export default App;
