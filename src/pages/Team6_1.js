import React, { useEffect, useState } from 'react';
import Head from '../components/commonStyle/Head';
import { FlexBox, Gutter, ChangeFont } from '../components/commonStyle';
import Modal2 from '../components/team6_1/Modal2'
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { getWorkingDayChange, getWorkingDayDetailChange } from '../redux/thunkFn/workingDay.thunk';
import Modal from '../components/base/Modal';
import FloatingBtn from '../components/commonStyle/FloatingBtn';
import { Link } from 'react-router-dom';
import Team6_3 from './Team6_3';
import Loading from '../components/commonStyle/Loading';



const Wrapper = styled.div`
    background: #FAFAFA;
    padding-bottom:50px;
`;
const ContentArea = styled.div`
    position:relative;
    ${Gutter()};
    margin-top:-60px;
`;

const Box = styled.div`
    position:relative;
    background: #FFFFFF;
    box-shadow: 4px 4px 10px #33333314;
    margin-bottom:15px;
    border-radius: 4px;
    ${Gutter('15px')};
    cursor: pointer;
`
const Row = styled.div`
    ${FlexBox()};
    align-items: center;
    margin-bottom:4px;
    
`
const Title = styled.div`
    font-weight: bold;
    margin-bottom:6px;
    font-size:15px;
`
const State = styled.div`
    font-size: ${(props) => props.theme.fontSizes.xs};
    color:#fff;
    background: ${(props) => props.color};
    padding:3px 10px;
    font-weight: bold;
    border-radius: 3px;
`
const Name = styled.div`
    font-weight: bold;
    margin-bottom:6px;
    color: #82898E;
`
const Weight = styled.div`
    ${ChangeFont(true)};
`
const Dt = styled.div`
    font-weight: bold;
    color:  ${(props) => props.theme.colors.grey2};
`
const Dd = styled.div`
    ${ChangeFont(true, 200)};
`
const Section = styled.div`
    border-bottom : 1px solid #DFE5EA;
    padding-bottom:12px;
    margin-bottom:12px;
    &:last-child{
        border: 0 none;
    }
`
const ModalTit = styled.div`
  font-size :  13px;
  font-weight: bold;
  margin-bottom: 8px;
`;

function Team6_1() {
    const [ modalAddOpen, setModalAddOpen ] = useState(false);

    const [ modalOpen, setModalOpen ] = useState(false);
    const dispatch = useDispatch();

    const openModal = (sn) => {
        setModalOpen(true);
        dispatch(getWorkingDayDetailChange(sn));
    }
    const closeModal = () => {
        setModalOpen(false);
        document.body.style.overflow = 'unset';

    }
    const {loading,workingDayList} = useSelector(state => state.workingDayReducer);
    useEffect(() => {
        dispatch(getWorkingDayChange())
        return () => {
        }
    }, [])
    return (
        <>
      
        <Wrapper>
            <Head title="지원대기/요청" subtit="KGB의 지원대기/요청입니다" pb="90px"/>
            {
            loading?
            <Loading/> :
             <ContentArea>
             {workingDayList.map((list, index)=> (
                 <Box key={index} onClick={ ()=>openModal(list.sn) }>
                     <Row>
                         <Title>{list.teamname}</Title>
                         <State color={list.code_worksupport==="요청"?"#009944":"#92dcff"}>{list.code_worksupport}</State>
                     </Row>
                     <Row>
                         <Name>{list.manname}</Name>
                         <Weight color="#009944">{list.code_ton}</Weight>
                     </Row>
                     <Row>
                         <Dt>이사날짜</Dt>
                         <Dd>{list.daymove}</Dd>
                     </Row>
                     <Row>
                         <Dt>연락처</Dt>
                         <Dd>{list.phone}</Dd>
                     </Row>
                     <Row>
                         <Dt>대상지역</Dt>
                         <Dd>{list.arrivearea}</Dd>
                     </Row>
                     <Row>
                         <Dt>등록일</Dt>
                         <Dd>{list.regdate}</Dd>
                     </Row>
                 </Box>
             ))}
             </ContentArea>
        }
        <Modal2 modalOpen={modalOpen} closeModal={closeModal}/>
        <Link to={"/Team6_3"}>
            <FloatingBtn bg="#009B90" icon="ico_add" />
        </Link>
        </Wrapper>
        </>
    );
}

export default Team6_1;