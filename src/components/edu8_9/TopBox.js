import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import Button from '../commonStyle/Button';
import { Gutter, FlexBox, ChangeFont } from '../commonStyle';
import Row from '../bill/Row';
import { useDispatch, useSelector } from 'react-redux';
import { usePointEvnet } from '../../redux/thunkFn/eduAttend.thunk';

const Wrapper = styled.div`
    position:relative;
    background: #FFFFFF;
    box-shadow: 4px 4px 10px #33333314;
    margin-bottom:15px;
    border-radius: 4px;
    ${Gutter('15px')};
    cursor:pointer;
`;
const LineBox = styled.div`
    border:1px solid #DFE5EA;
    border-radius: 4px;
    ${Gutter('16px 15px 10px')};
    >div{
        margin-top:-4px;
}
`;
const UseScoreWrap = styled.div`
    ${FlexBox()};   
    margin:15px 0;
    align-items: center;


`;
const Group = styled.div`
    select{
        border-color:#DFE5EA;
        padding : 5px 10px;
        border-radius: 4px;;
    }

`;
const Label = styled.label`
    color: #ACB6BC; 
    margin-right: 8px;
    font-weight: bold;
`;
const Text = styled.label`
    color: #82898E;
    font-size:10px;
`;
const TopBox = () => {
    const dispatch = useDispatch();
        // 현재점수 //총 점수 총이수시간 총 사용점수
    const {nowPoint,totPoint,totTime,usePoint} = useSelector(state => state.eduAttendListReducer);
    const {result,message,loading} = useSelector(state => state.usePointReducer);
    const [point,setPoint] = useState("");
    const changePoint = (e)=>{
        setPoint(e.target.value)
    }
    const makeArr = () =>{
        const len = Math.round(usePoint/10);
        let arr = [];
        for(let i=0;i<=len;i++){
            let num = i*10;
            arr.push(num);
        }
        return arr;
    }
    const usePointArr = makeArr();
    const usePointFn = ()=>{
        dispatch(usePointEvnet(point,nowPoint));
    }

    return (
        <Wrapper>
            <Row dt="맞춤교육 총 이수시간" dtSize="13px" dd={totPoint !== ""? `${totTime}시간`:0} ddWeight='bold' ddColor='#82898E' ddWeight='bold'/>
            <LineBox>
                <Row dt="총 점수" dtColor="#ACB6BC" dd={totPoint !== ""? `${totPoint}점`:0} ddWeight='bold' ddColor='#82898E' ddWeight='bold'/>
                <Row dt="총 사용점수" dtColor="#ACB6BC" dd={usePoint !== ""? `${usePoint}점`:0} ddWeight='bold' ddColor='#82898E' ddWeight='bold'/>
                <Row dt="현재 점수" dtColor="#ACB6BC" dd={nowPoint !== ""? `${nowPoint}점`:0} ddWeight='bold' ddColor='#82898E' ddWeight='bold'/>
            </LineBox>
            <UseScoreWrap>
                <Group>
                    <Label htmlFor="useScore">점수사용</Label>
                    <select id="useScore" onChange={(e)=>changePoint(e)}>
                        {
                            usePointArr && usePointArr.map(item =>
                                    <option>
                                        {item}
                                    </option>
                                )
                        }
                    </select>
                </Group>
                <Button onclick={usePointFn} bg='#3397B9' color='#ffffff' text='점수 사용하기' w='90px' h='25px' fs='11px'/>
            </UseScoreWrap>
            {message !== "" && result === "fail" ?<div style={{"color":"red"}}>{message}</div>: null}
            {message !== "" && result === "success" ?<div style={{"color":"green"}}>{message}</div>: null}
            {message === "" && result === "" ?<br/>: null}

            <Text>- 점수는 사용한 시점의 분기 교육평가에만 적용되며,<br/>&nbsp;&nbsp;누적된 점수는 연도가 바꿀 시 초기화 됩니다.</Text>
        </Wrapper>
    );
  };

export default TopBox;
