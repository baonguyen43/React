import React from "react";
import { AiFillHeart } from "react-icons/ai";
function LoveButton() {
  const [love, setLove] = React.useState(false);
  const onClick = (e) => {
    e.preventDefault();
    setLove(!love);
  };
  return (
    <div>
      <AiFillHeart
        onClick={onClick}
        style={{ color: love ? "red" : "white", cursor: 'pointer' }  }

      />
    </div>
  );
}

export default LoveButton;
