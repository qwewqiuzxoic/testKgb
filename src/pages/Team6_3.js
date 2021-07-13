import React, {useEffect, useState}  from 'react';
import H1 from '../components/commonStyle/H1'
import Button from '../components/commonStyle/Button'
import GroupTitle from '../components/commonStyle/GroupTitle'
import DaumPostcode from "react-daum-postcode";
import styled from 'styled-components';
import { FlexBox, Gutter, BottomBox, ChangeFont } from '../components/commonStyle';
import TeamInfo from '../components/team6_3/TeamInfo';
import MovingInfo from '../components/team6_3/MovingInfo';
import { useDispatch, useSelector } from 'react-redux';
import { workingDayFormDataInput, workingDayFormDataLoginIput } from '../redux/actionFn/workingDay';
import { postWorkingDayForm } from '../redux/thunkFn/workingDay.thunk';
import { useHistory } from 'react-router-dom';


const Wrapper = styled.div`
    background: #FAFAFA;
    padding-bottom:30px;
`;
const TopBg = styled.div`
    position:relative;
    top:0;
    left:0;
    right:0;
    background: ${(props) => props.theme.colors.primary};
    border-radius: 0 0 0 30px;
    padding-bottom: 56px;

`;
const Section = styled.div`
    ${Gutter()};
`;
const ContentArea = styled.div`
    position: relative;
    ${Gutter()};
`

const Box = styled.div`
`

function Team6_3() {
  const dispatch = useDispatch();
  const history = useHistory();
  const {data,result} =  useSelector(state =>state.workingDayFormReducer);
  const [checkEm,setCheckEm] = useState(false);
  const isEmptyObject = (obj) =>{
    const objKey = Object.keys(obj);
    const val = objKey.filter(key =>{
      return obj[key]==="";
    })
    return val;
  }
  const onSubmit = () =>{
    const postData = data;
    const len =  isEmptyObject(data).length;
    if(len>0){
      setCheckEm(true);
      return false;
    }
    dispatch(postWorkingDayForm(postData))
  }
  useEffect(() => {
    const user =JSON.parse(localStorage.getItem('user'));
    dispatch(workingDayFormDataLoginIput(user))
    if(result=="저장에 성공 하였습니다."){
      history.push("/Team6_1")
    }
    return () => {
    }

  }, [result])
  return (
    <>
      <Wrapper>
        <TopBg>
            <H1 title="지원대기/요청" subtit="KGB의 지원대기/요청 내역입니다"></H1>
        </TopBg>
          <Section>
            <GroupTitle title="팀정보"/>
            <TeamInfo />
          </Section>
          <Section>
            <GroupTitle title="이사정보"/>
            <MovingInfo/>
          </Section>
          <Section>
            <Button bg="#3397B9" color="#ffffff" onclick={onSubmit} text="저장" height="44px" fontSize="12px" mgt="40px"/>
            {checkEm && <span style={{color:"red"}}>모든 빈칸을 채워주세요</span>}
          </Section>
      </Wrapper>
    </>
  );
}

export default Team6_3;