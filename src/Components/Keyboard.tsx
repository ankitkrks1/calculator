import React from "react";
import Key from "./Key";

interface prop  {
  handleVal:(e:string|number)=>void
}

const Keyboard :React.FC<prop> = ({ handleVal }) => {
  let num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className="keyboard">
      <div>
        {num.map((v) => {
          if (v < 4) {
            return <Key num={v} handleVal={handleVal} />;
          }
        })}
      </div>
      <div>
        {num.map((v) => {
          if (v >= 4 && v < 8) {
            return <Key num={v} handleVal={handleVal} />;
          }
        })}
      </div>
      <div>
        {num.map((v) => {
          if (v >= 8) {
            return <Key num={v} handleVal={handleVal} />;
          }
        })}
        <Key num="+" handleVal={handleVal} />
        <Key num="-" handleVal={handleVal} />
      </div>
      <div>
        
        <Key num="*" handleVal={handleVal} />
        <Key num="/" handleVal={handleVal} />
        <Key num="C" handleVal={handleVal} />
        <Key num="X" handleVal={handleVal} />
      </div>
        <Key num="." handleVal={handleVal} />
      <div></div>
    </div>
  );
};

export default Keyboard;
