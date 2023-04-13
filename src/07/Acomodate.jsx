import React, {useEffect, useState} from "react";
import useCounter from "./useCounter";

const MAX_CAPACITY = 10;

function Acomodate(props) {
    
  const [count, increaseCount, decreaseCount] = useCounter(0);
  const [isFull, setIsFull] = useState(false);

  useEffect(() => {
    console.log('useEffect 호출됨.');
    console.log(`isFull: ${isFull}`);
  });

  useEffect(() => {
    setIsFull(count >= MAX_CAPACITY);
    console.log(`Current count: ${count}`);
  }, [count]);

  return (
    <div style={{padding : 16}}>
      <p>총 {count}명이 수용했습니다.</p>
      <button onClick={increaseCount}>입장</button>
      <button onClick={decreaseCount}>퇴장</button>
      {isFull && <p style={{color : "red"}}>수용인원이 초과되었습니다.</p>}
      </div>
  );
}

export default Acomodate;