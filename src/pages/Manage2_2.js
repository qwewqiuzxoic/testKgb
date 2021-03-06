import React, {useEffect, useState}from 'react';
import Head from '../components/commonStyle/Head';
import Search from '../components/manage2_1/Search';
import ScoreBox from '../components/manage2_1/ScoreBox';
import Button from '../components/commonStyle/Button';
import { FlexBox, Gutter, ChangeFont } from '../components/commonStyle';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { getHappyCallDetail } from '../redux/thunkFn/happyCall.thunk';
import Loading from '../components/commonStyle/Loading';
import { useHistory } from 'react-router-dom'

const Wrapper = styled.div`
    background: #FAFAFA;
    padding-bottom:50px;
`;
const Tabs = styled.div`
    position:absolute;
    width:100%;
    ${Gutter()};
    ${FlexBox('left')};
    margin-top:-72px;
`;
const TabName = styled.div`
    width:48%;
    ${ChangeFont(true)};
    color : rgba(255, 255, 255, .7);
    padding: 12px 18px;
    border-radius: 20px;
    cursor:pointer;
    text-align:center;
    &.selected{
      background : rgba(255, 255, 255, .3);
      color: #FFFFFF;
      font-weight: bold;
      cursor: auto;
  }
`;
const ContentArea = styled.div`
    position:relative;
    margin-top:30px;
    ${Gutter()};   
`;
const Box = styled.div`
    position:relative;
    background: #FFFFFF;
    box-shadow: 4px 4px 10px #33333314;
    margin-bottom:15px;
    border-radius: 4px;
    ${Gutter('15px')};
`
const Row = styled.div`
    ${FlexBox()};
    align-items: center;
    margin-bottom:4px;
    
`
const Title = styled.div`
    font-weight: bold;
    margin-bottom:3px;
    font-size:14px;
`
const Total = styled.div`
    font-weight: bold;
    margin-bottom:3px;
    font-size:14px;
    span{
        color:${(props) => props.theme.colors.secondary};
    }
`
const Dt = styled.div`
    font-weight: bold;
    color:  ${(props) => props.theme.colors.grey2};
`
const Dd = styled.div`
    ${ChangeFont(true)};
`
const WhiteWrap = styled.div`
    background: #FFFFFF;
    ${Gutter('0  15px')};

`

function Manage2_2({match}) {
    const page = match.params.page;
    const sn = match.params.sn;
    const history = useHistory();

    const [title,subtit] =  page === "1" ? ["?????? ?????????","KGB??? ?????? ??????????????????"] : ["????????? ?????????","KGB??? ????????? ??????????????????"];  
    const [tab,setTab]= useState(0);
    const dispatch = useDispatch();
    const {data,loading} = useSelector(state=>state.happyCallDetailReducer);
    const {list} = useSelector(state=>state.happyCallDetailReducer.data);
    useEffect(() => {
        dispatch(getHappyCallDetail(page,sn))
        return () => {
            //console.log(list)
        }
    }, [])
    const onclick = ()=>{
        history.goBack()
    }
  return (
    <>
      <Wrapper>    
        <Head title={title} subtit={subtit} pb="56px"/>
        {/* <Tabs>
          <TabName className={tab === 0 ? "selected": ""} onClick={()=>setTab(0)}>?????????</TabName>
          <TabName className={tab === 1 ? "selected": ""} onClick={()=>setTab(1)}>?????????</TabName>
        </Tabs> */}
        <ContentArea>
            {loading && <Loading></Loading>}
            {/* <Search id="search1" ph="?????????/????????? ???????????? ????????????????????????"/> */}
                {/* Manage2_1??? ???????????? ?????? */}
                <Box>
                    <Row>
                        <Title>{data.teamname} ????????????</Title>
                        <Total>??????: <span>{data.totalpoint}</span></Total>
                    </Row>
                    <Row>
                        <Dt>?????????</Dt>
                        <Dd>{data.custname}</Dd>
                    </Row>
                    <Row>
                        <Dt>????????????</Dt>
                        <Dd>{data.daymove}</Dd>
                    </Row>
                </Box>
                <WhiteWrap>
                {
                list && list.map((item,index) =>{
                    const ans = item.answer.split("||");
                    const idx = ans.indexOf(item.point.trim())+1;

                    return(
                    <ScoreBox q={item.question} score={idx} answer={ans} text={item.point.trim()}/>

                    )
                        }
                    )
                }
                </WhiteWrap>
                <Button onclick={onclick} bg="#3397B9" color="#ffffff" text="??????" height="44px" fontSize="12px" mgt="30px"></Button>
                {/* Manage2_1??? ???????????? ?????? */}
        </ContentArea>      
      </Wrapper>
    </>
  );
}

export default Manage2_2;