import React from 'react';
import DaumPostcode from "react-daum-postcode";
import styled from 'styled-components';

const Wrapper = styled.div`
  button{
  background: ${(props) => props.theme.colors.white};;
  position:fixed;
  width:100%;
  height:50px;
  bottom:0;
  right:0;
  left:0;
  z-index:9;
  }
`;

function FindAddress(props) {
    const handlePostCode = (data) => {
        let fullAddress = data.jibunAddress;
        let extraAddress = ''; 
        let bcode = data.bcode
        console.log(data)
        
        if (data.addressType === 'R') {
          if (data.bname !== '') {
            extraAddress += data.bname;
          }
          if (data.buildingName !== '') {
            extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
          }
          fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
        }
        props.onClose(fullAddress,bcode);
    }
 
    const postCodeStyle = {
        display: "block",
        position: "fixed",
        top: "0",
        left: '0',
        width: "50%",
        height: "50%",
      };
 
    return(
        <Wrapper>
            <DaumPostcode style={postCodeStyle} onComplete={handlePostCode} />
            <button type='button' onClick={() => {props.onClose()}} className='postCode_btn'>닫기</button>
        </Wrapper>
    )
}

export default FindAddress;