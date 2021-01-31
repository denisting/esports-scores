import React from 'react';

function Card(props) {
  return (
    <div className='card-container'>
      <div className='teams-container'>
        <div className='match-team' id='match-team-one'>
          <img
            className='team-logo'
            id='team-logo-one'
            src={props.teamOneLogo}
            alt=''
          />
          <span className='team-name'>{props.teamOneName}</span>
        </div>
        <div className='match-team' id='match-team-two'>
          <img
            className='team-logo'
            id='team-logo-two'
            src={props.teamTwoLogo}
            alt=''
          />
          <span className='team-name'>{props.teamTwoName}</span>
        </div>
      </div>
      <div className='match-attr-container'>
        <span className='match-attr' id='match-attr-time'>
          7:30 PM
        </span>
        <span className='match-attr' id='match-attr-bo'>
          BO3
        </span>
        <span className='match-attr' id='match-attr-odds'>
          TL -4.5
        </span>
      </div>
    </div>
  );
}

export default Card;
