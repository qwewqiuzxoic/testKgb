import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { totalMesInit } from '../../redux/actionFn/total';
import { getDaySc } from '../../redux/thunkFn/schedule.thunk';
import { totalMesThunk } from '../../redux/thunkFn/total.thunk';
import ConfirmModal from '../base/ConfirmModal';
import { FlexBox, Gutter, ChangeFont } from '../commonStyle';

const Wrapper = styled.div`
  margin:20px auto;
`;
const Box = styled.div`
    position:relative;
    background: #FFFFFF;
    box-shadow: 4px 4px 20px #33333314;
    margin-bottom:15px;
    ${Gutter('14px 18px')};
    &.color0:before{
        position:absolute;
        content:'';
        width:1.5px;
        height:100%;
        top:0;
        left:0;
        background:#43C9F0;
    }
    &.color1:before{
        position:absolute;
        content:'';
        width:1.5px;
        height:100%;
        top:0;
        left:0;
        background:#28F173;
    }
    &.color2:before{
        position:absolute;
        content:'';
        width:1.5px;
        height:100%;
        top:0;
        left:0;
        background:#FFC034;
    }
    &.color3:before{
        position:absolute;
        content:'';
        width:1.5px;
        height:100%;
        top:0;
        left:0;
        background:#EE883E;
    }
    &.color4:before{
        position:absolute;
        content:'';
        width:1.5px;
        height:100%;
        top:0;
        left:0;
        background:#FF4D55;
    }
`
const Row = styled.div`
    ${FlexBox()}
    margin-bottom:4px;
    
`
const Name = styled.div`
        font-weight: bold;
    span.color0{
        color : #43C9F0;
    }
    span.color1{
        color : #28F173;
    }
    span.color2{
        color : #FFC034;
    }
    span.color3{
        color : #EE883E;
    }
    span.color4{
        color : #FF4D55;
    }
`
const Call = styled.div`
    ${ChangeFont(true, 200)};
    color: #82898E;


`
const Dt = styled.div`
    font-weight: bold;
    font-size: ${(props) => props.theme.fontSizes.s};
    color:  ${(props) => props.theme.colors.grey2};
`
const Dd = styled.div`
    ${ChangeFont(true, 200)};
`

function Schedules({data, page, selectDay}) {

    const dispatch = useDispatch();
    const {result,message} =  useSelector(state => state.totalMesReducer);
    const confirmModal = () =>{
        dispatch(totalMesInit());
        dispatch(getDaySc(selectDay,page));

    }
    const eduCheck = (check,sn)=>{
        dispatch(totalMesThunk("edu_sch_request",{check:check,sn:sn}))
    }
    useEffect(() => {
        
        return () => {
            
        }
    }, [result])
if(page === 1){
    return (
        <Wrapper>
            {data && data.length === 0 ?<div>작업일정이 없습니다.</div>:null}
            {data && data.map((schedule, index)=> (
                <Box key={index} className={`color${schedule.state}`}>
                    <Row>
                        <Name><span className={`color${schedule.state}`}>[{schedule.title}]</span>{schedule.custname}</Name>
                        {/* <Call>{schedule.call}</Call> */}
                        <Call>{schedule.phone}</Call>
                    </Row>
                    <Row>
                        <Dt>작업일</Dt>
                        <Dd>{schedule.daymove}</Dd>
                    </Row>
                    <Row>
                        <Dt>등록일</Dt>
                        <Dd>{schedule.dayReg}</Dd>
                    </Row>
                    <Row>
                        <Dt>타입</Dt>
                        <Dd>{schedule.type}</Dd>
                    </Row>
                    <Row>
                        <Dt>총금액</Dt>
                        <Dd>{schedule.pay}</Dd>
                    </Row>
                 </Box>
            ))}
        </Wrapper>
      );
}else {
    return (
        <Wrapper>
            {data && data.length === 0 ?<div>교육일정 없습니다.</div>:null}
            {data && data.map((schedule, index)=> (
                <Box key={index} className={`color${schedule.state}`}>
                    <Row>
                        <Name><span className={`color${schedule.state}`}>[{schedule.title}]</span>{schedule.custname}</Name>
                        {/* <Call>{schedule.call}</Call> */}
                        <Call>{schedule.phone}</Call>
                    </Row>
                    <Row>
                        <Dt>교육일정 </Dt>
                        <Dd>{schedule.daymove}</Dd>
                    </Row>
                    <Row>
                        <Dt>교육시간 </Dt>
                        <Dd>{schedule.edu_hour}</Dd>
                    </Row>
                    <Row>
                        <Dt>교육명 </Dt>
                        <Dd>{schedule.title}</Dd>
                    </Row>
                    
                        {schedule.req_check === "1" ? 
                        <div onClick={()=>{eduCheck("1",schedule.sn)}}>신청취소</div>
                        :
                        <div onClick={()=>{eduCheck("0",schedule.sn)}}>신청</div> }
                    
                 </Box>
            ))}
            <ConfirmModal open={result === undefined ? false : true}
                text={result ==="failed" || result ===undefined ? "실패하였습니다.": "성공하였습니다."}
                onsubmit={confirmModal}
            ></ConfirmModal>
        </Wrapper>
      );
}
 
}

export default Schedules;