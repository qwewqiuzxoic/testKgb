import React, {useEffect, useState}from 'react';
import Head from '../components/commonStyle/Head';
import Score from '../components/commonStyle/Score';
import Search from '../components/manage2_1/Search';
import { FlexBox, Gutter, ChangeFont } from '../components/commonStyle';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { getHappyCallList } from '../redux/thunkFn/happyCall.thunk';
import { Link, useHistory } from 'react-router-dom';
import Loading from '../components/commonStyle/Loading';
import { useRef } from 'react';
import { pageMemoNum, pageMemoNumChange } from '../redux/actionFn/pageMemo';

const Wrapper = styled.div`
    background: #FAFAFA;
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
    font-size: ${(props) => props.theme.fontSizes.l};
`
const Dt = styled.div`
    font-weight: bold;
    color:  ${(props) => props.theme.colors.grey2};
`
const Dd = styled.div`
    ${ChangeFont(true)};
`

function Manage2_1({match}) {
  const tabD = useSelector(state=>state.pageMemoReducer.pageNum);

  const page = match.params.page;
  const [title,subtit] =  page === "1" ? ["계약 해피콜","KGB의 계약 해피콜입니다"] : ["미계약 해피콜","KGB의 미계약 해피콜입니다"];
  const [tab,setTab]= useState(tabD);
  const pageCount = useRef(1);
  const teamChange = (num,team) => {
    pageCount.current = 1;
    setTab(num);
    dispatch(pageMemoNumChange(num));
    dispatch(getHappyCallList(page,team,1));
  }
  const dispatch = useDispatch();
  const {list,loading} = useSelector(state => state.happyCallListReducer);
  useEffect(() => {
      if(tabD === 0) {
        dispatch(getHappyCallList(page,"Y",1));
      } else {
        dispatch(getHappyCallList(page,"N",1));
      }
      return () => {
      }
  }, [])

    const infiniteScroll = () => {
      let scrollHeight = Math.max(
        document.documentElement.scrollHeight,
        document.body.scrollHeight
      );
      let scrollTop = Math.max(
        document.documentElement.scrollTop,
        document.body.scrollTop
      );
      let clientHeight = document.documentElement.clientHeight;
  
      if (scrollTop + clientHeight >= scrollHeight) {
        pageCount.current += 1;
        dispatch(getHappyCallList(page,tab === "0" ? "Y":"N",pageCount));

      }
    };
  useEffect(() => {
      window.addEventListener('scroll',infiniteScroll);

      return () => window.removeEventListener('scroll', infiniteScroll)
  }, [])

   const history = useHistory();
    useEffect(() => {
      history.listen((location) => { 
        dispatch(pageMemoNum(location.pathname));
      }); 
      return () => {
      }
    }, [])
  return (
    <>
      <Wrapper>
        <Head title={title} subtit={subtit} pb="90px"/>
        <Tabs>
          <TabName className={tabD === 0 ? "selected": ""} onClick={()=>teamChange(0,"Y")}>우리팀</TabName>
          <TabName className={tabD === 1 ? "selected": ""} onClick={()=>teamChange(1,"N")}>다른팀</TabName>
        </Tabs>
        <ContentArea>
          {
            loading && <Loading></Loading>
          }
            {/* <Search id="search1" ph="이사일/입력일 기준으로 월별검색해주세요"/> */}
            {list && list.map((item, index)=> (
                <Link to={`/Manage2_2/${page}/${item.sn}`}>
                <Box key={index}>
                    <Row>
                        <Title>{item.custname}</Title>
                    </Row>
                    <Row>
                        <Dt>이사날짜</Dt>
                        <Dd>{item.daymove}</Dd>
                    </Row>
                    <Row>
                        <Dt>입력날짜</Dt>
                        <Dd>{item.regdate}</Dd>
                    </Row>
                    {
                    page !== "2"  && 
                    <Row>
                        <Score score={item.point}></Score>
                    </Row>
                    }
                    
                </Box>
                </Link>
            ))}
        </ContentArea>      
      </Wrapper>
    </>
  );
}

export default Manage2_1;