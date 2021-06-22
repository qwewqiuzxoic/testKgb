import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    height:296px;
    overflow-y: scroll;
    border-top: 1.5px solid #404345;
`;
const CheckBox = styled.input`
	display: none;
    &:checked + label {
        background: #F3F7FB;
        color:#404345;
	}
`;
const CheckLabel = styled.label`
    width:100%;
    padding:10px 15px;
	display: inline-block;
	background: #FFFFFF;
	cursor: pointer;
`;

function SelectLists({list, rcvList, addList}) {

  return (
    
      <Wrapper>
        { list && list.map((item,index) => {
          if(rcvList.indexOf(item.MAN_INFO_SN)>0){
            return(
            <div key={index}>
            <CheckBox type="checkbox" name={`addr_${index}`} id={`addr_${index}`} onChange={(e)=>addList(item.UNAME,item.TNAME,item.MAN_INFO_SN,e)} checked={true} value={item.UNAME}/>
            <CheckLabel htmlFor={`addr_${index}`}>
              <span>{item.UNAME}({item.TNAME})</span>
            </CheckLabel>
          </div>
            )
          }else{
            return(
              <div key={index}>
            <CheckBox type="checkbox" name={`addr_${index}`} id={`addr_${index}`} onChange={(e)=>addList(item.UNAME,item.TNAME,item.MAN_INFO_SN,e)} value={item.UNAME}/>
            <CheckLabel htmlFor={`addr_${index}`}>
              <span>{item.UNAME}({item.TNAME})</span>
            </CheckLabel>
          </div>
            )
          }
          
        }
         
          
          )}
        
      
      </Wrapper>
      
  );
}

export default SelectLists;