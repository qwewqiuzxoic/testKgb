import styled from 'styled-components';
import {LabelStyle} from '../../commonStyle';

const Wrapper = styled.div`
    margin-bottom:19px;
    textarea{
        display: block;
        border:1px solid #DFE5EA;
        border-radius: 4px;
        width:100%;
        height:120px;
        padding: 10px 14px;
        &::placeholder{
            color:#CED5DB;
        }
    }
`;
const Name = styled.div`
  ${LabelStyle()};
  margin-top:8px;
`;

function TextArea({setText,text}){
    return(
        <Wrapper>
            <Name>의견보내기</Name>
            <textarea value={text} onChange={setText} placeholder="내용을 입력해주세요"/>
        </Wrapper>
    )
}

export default TextArea;