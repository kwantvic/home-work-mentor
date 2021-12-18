import React from 'react';
import EmptyBlock from './components/EmptyBlock';

import './App.css';
import Phrase from './components/Phrase';

const adjectivesArr = [
  'абсолютный',
  'адский',
  'азартный',
  'активный',
  'ангельский',
  'астрономический',
  'баснословный',
  'безбожный',
  'безбрежный',
  'безвозвратный',
  'безграничный',
  'бездонный',
  'бездушный',
  'безжалостный',
  'замечательно',
  'замечательный',
  'записной',
  'запредельный',
  'заядлый',
  'звериный',
  'зверский',
  'зеленый',
  'злой',
  'злостный',
  'значительный',
  'неоспоримый',
  'неотразимый',
  'неоценимый',
  'непередаваемый',
];

const nounsArr = [
  'лгун',
  'день',
  'конь',
  'олень',
  'человек',
  'программист',
  'ребёнок',
  'конец',
  'город',
  'дурак',
];

function App() {
  const [start, setStart] = React.useState(true);
  const [arrPhrases, setArrPhrases] = React.useState([]);

  function shuffle(arr, quality) {
    let newArr = [];
    for (let i = 0; i < quality; ++i) {
      let random = arr[Math.floor(Math.random() * arr.length)];

      if (!newArr.includes(random)) {
        newArr.push(random);
      } else {
        --i;
      }
    }
    return newArr;
  }

  function clear() {
    setStart(true);
    setArrPhrases([]);
  }

  function generate() {
    setStart(false);
    let phrase = [];
    phrase.push(shuffle(adjectivesArr, 2).concat(shuffle(nounsArr, 1)));
    // console.log(phrase, '🩸myTest🧩phrase');
    // console.log(phrase.join('-'), '🩸myTest🧩[]');
    setArrPhrases([...arrPhrases, phrase]);
    // console.log(arrPhrases, '🩸myTest🧩state');
  }

  return (
    <div className="wrapper">
      {start ? <EmptyBlock /> : <Phrase arrPhrases={arrPhrases} />}
      <button onClick={generate} className="btn btn_generate">
        Сгенерировать
      </button>
      <button onClick={clear} className="btn btn_clear">
        Очистить
      </button>
    </div>
  );
}

export default App;
