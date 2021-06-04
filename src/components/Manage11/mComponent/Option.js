import React from 'react';

function Option({option, updateData,qIndex}) {
  return (
    <div>
      {option.map((props,index)=>
      <div>
aaaaaaaaaaaa
          <div onClick={()=>updateData(qIndex,index)} key={index}>
              {props}
          </div>
          aaaaaaaaaaaa
          </div>
      )}
    </div>
  );
}

export default Option;