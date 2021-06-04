import React from 'react';
import Option from './mComponent/Option';
import Question from './mComponent/Question';
import Title from './mComponent/Title';

function QuestionBox({title, subTitle, question, option, updateData, qIndex,page,pageIndex}) {
    const upDate = updateData;
  if(page === qIndex){}
  return (
    
    <div>
      {
      page === pageIndex?
      <div>
        <Title title={title} subTitle={subTitle}/>
        <Question question={question}/>
        <Option option={option} updateData={upDate} qIndex={qIndex}/>
      </div>:
      null
      }
        
    </div>
  );
}

export default QuestionBox;