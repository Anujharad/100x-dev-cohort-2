



import { useEffect, useMemo, useState } from 'react';

  const [counter, setCounter] = useState(0);
  const [input, setInput] = useState(1);

// 1. using normal for loop
  // let count = 0;
  // for (let i = 1; i <= input; i++) {
  //   count += i;
  // }


// 2. using useEffect()
  // const [count, setCount] = useState(0);
  // useEffect(() => {
  //   let finalCount = 0;
  //   for(let i=1; i<=input; i++){  
  //     finalCount += i;
  //   }
  //   setCount(finalCount);
  // }, [input]);


// 3. Using useMemo()
  const count = useMemo(() => {
    // console.log('useMemo called');
    let finalCount = 0;
    for(let i=0; i<=input; i++){
      finalCount += i;
    }
    return finalCount;
  }, [input]);




  return <div>

      <input onChange={(e) => setInput(e.target.value)} type="text" placeholder='enter the vlue' ></input>
      <p>Sum from 1 to {input} is: {count} </p>

      <button onClick={() => {setCounter(counter + 1)}}>Counter ({counter})</button>
    </div>
  





export default App