// 3a
import {useState} from 'react';

// 3b
function Bonus(){
  // 3d
  const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  // 3h
  const [letterCount, setLetterCount] = useState(0);

  // 3e
  return(
    <div>
      <h1>{letters[letterCount]}</h1>
      <button onClick={() => (letterCount === letters.length - 1) ? setLetterCount(0) : setLetterCount(letterCount + 1)}>NEXT LETTER</button>
      {/* OR */}
      {/* <button onClick={() => (letterCount < letters.length - 1) ? setLetterCount(nextLetter + 1) : setLetterCount(0)}>NEXT LETTER</button> */}
      {/* OR */}
      {/* <button onClick={() => setLetterCount(letterCount + 1)}>NEXT LETTER</button> */}
    </div>
  );
}

// 3c
export default Bonus;