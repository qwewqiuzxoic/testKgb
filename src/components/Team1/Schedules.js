import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Button from '../commonStyle/Button';
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
    &.colora:before{
        position:absolute;
        content:'';
        width:1.5px;
        height:100%;
        top:0;
        left:0;
        background:#43C9F0;
    }
    &.colorb:before{
        position:absolute;
        content:'';
        width:1.5px;
        height:100%;
        top:0;
        left:0;
        background:#28F173;
    }
    &.colorc:before{
        position:absolute;
        content:'';
        width:1.5px;
        height:100%;
        top:0;
        left:0;
        background:#FFC034;
    }
    &.colord:before{
        position:absolute;
        content:'';
        width:1.5px;
        height:100%;
        top:0;
        left:0;
        background:#EE883E;
    }
    &.colore:before{
        position:absolute;
        content:'';
        width:1.5px;
        height:100%;
        top:0;
        left:0;
        background:#FF4D55;
    }
    &.colorf:before{
        position:absolute;
        content:'';
        width:1.5px;
        height:100%;
        top:0;
        left:0;
        background:#ff4dff;
    }
    &.colorg:before{
        position:absolute;
        content:'';
        width:1.5px;
        height:100%;
        top:0;
        left:0;
        background:#8a2be2;
    }
    &.colorh:before{
        position:absolute;
        content:'';
        width:1.5px;
        height:100%;
        top:0;
        left:0;
        background:#0000ff;
    }
`
const Row = styled.div`
    ${FlexBox()}
    margin-bottom:4px;  
`
const Name = styled.div`
        font-weight: bold;
    span.colora{
        color : #43C9F0;
    }
    span.colorb{
        color : #28F173;
    }
    span.colorc{
        color : #FFC034;
    }
    span.colord{
        color : #EE883E;
    }
    span.colore{
        color : #FF4D55;
    }
    span.colorf{
        color : #ff4dff;
    }
    span.colorg{
        color : #8a2be2;
    }
    span.colorh{
        color : #0000ff;
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
const BtnEdu = styled.div`

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
    const renderSwitch = (param) => {
        switch(param) {
            case '??????':
                return 'colora';
            case '??????':
                return 'colorb';   
            case '??????':
                return 'colorc';
            case '??????':
                return 'colord';
            case '?????????':
                return 'colore'; 
            default:
                return 'colora';
        }
      }
if(page === "1"){
    return (
        <Wrapper>
            {data && data.length === 0 ?<div>??????????????? ????????????.</div>:null}
            {data && data.map((schedule, index)=> (
                <Box key={index} className={`color${schedule.type}`}>
                    <Row>
                        <Name><span className={`color${schedule.type}`}>[{schedule.title}] </span>{schedule.custname}</Name>
                        {/* <Call>{schedule.call}</Call> */}
                        <Call>{schedule.phone}</Call>
                    </Row>
                    <Row>
                        <Dt>?????????</Dt>
                        <Dd>{schedule.daymove}</Dd>
                    </Row>
                    <Row>
                        <Dt>?????????</Dt>
                        <Dd>{schedule.dayReg}</Dd>
                    </Row>
                    <Row>
                        <Dt>?????????</Dt>
                        <Dd>{schedule.pay}</Dd>
                    </Row>
                 </Box>
            ))}
        </Wrapper>
      );
}else {
    return (
        <Wrapper>
            {data && data.length === 0 ?<div>???????????? ????????????.</div>:null}
            {data && data.map((schedule, index)=> (
                <Box key={index} className={renderSwitch(schedule.type)}>
                    <Row>
                        <Name><span className={renderSwitch(schedule.type)}>[{schedule.title}] </span>{schedule.custname}</Name>
                        {/* <Call>{schedule.call}</Call> */}
                        <Call>{schedule.phone}</Call>
                    </Row>
                    <Row>
                        <Dt>???????????? </Dt>
                        <Dd>{schedule.daymove}</Dd>
                    </Row>
                    <Row>
                        <Dt>???????????? </Dt>
                        <Dd>{schedule.edu_hour}</Dd>
                    </Row>
                    <Row>
                        <Dt>????????? </Dt>
                        <Dd>{schedule.title}</Dd>
                    </Row>
                    
                        {schedule.req_check === "1" ? 
                        <Button onclick={()=>{eduCheck("1",schedule.sn)}} bg='#F2F6F8' color='#009B90' text='????????????' w='100%' h='25px' fs='11px'>????????????</Button>
                        :
                        <Button onclick={()=>{eduCheck("0",schedule.sn)}} bg='#009B90' color='#ffffff' text='??????' w='100%' h='25px' fs='11px'>??????</Button> }
                    
                 </Box>
            ))}
            <ConfirmModal open={result === undefined ? false : true}
                text={result ==="failed" || result ===undefined ? "?????????????????????.": "?????????????????????."}
                onsubmit={confirmModal}
            ></ConfirmModal>
        </Wrapper>
      );
}
 
}

export default Schedules;