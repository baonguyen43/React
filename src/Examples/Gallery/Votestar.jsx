import React, { useState } from 'react'
import {AiFillStar,AiOutlineStar } from 'react-icons/ai';
function Votestar() {
    const [like,setLike] = useState (0);
    const array =[1,2,3,4,5];
  return (
    <div>
      {array.map((item) => {
        // console.log(item);
        if (item <= like) {
          return (
            <AiFillStar
              style={{ color: "gold" }}
              onClick={() => {
                setLike(item);
              }}
            />
          );
        }
        return (
          <AiOutlineStar
            style={{ color: "gold" }}
            onClick={() => {
              setLike(item);
            }}
          />
        );
      })}
    </div>
  );
}
export default Votestar