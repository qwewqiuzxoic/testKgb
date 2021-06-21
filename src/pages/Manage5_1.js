import React, {useEffect, useState}from 'react';
import Head from '../components/commonStyle/Head';
import Score from '../components/commonStyle/Score';
import PopUp from '../components/base/PopUp'
import PopUpDesc from '../components/Manage5_1/PopUpDesc'

import { FlexBox, Gutter, BottomBox, ChangeFont } from '../components/commonStyle';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { getPictureCheckDetail, getPictureCheckList } from '../redux/thunkFn/pictureCheck.thunk';
import Loading from '../components/commonStyle/Loading';


const Wrapper = styled.div`
    background: #FAFAFA;
`;
const Tabs = styled.div`
    position:absolute;
    ${Gutter()};
    ${FlexBox('')};
    margin-top:-102px;
`;
const TabName = styled.div`
    ${ChangeFont(true)};
    color : rgba(255, 255, 255, .7);
    padding: 12px 18px;
    width:50%;
    border-radius: 20px;
    cursor:pointer;
    &.selected{
      background : rgba(255, 255, 255, .3);
      color: #FFFFFF;
      font-weight: bold;
      cursor: auto;
  }
`;
const ContentArea = styled.div`
    position:relative;
    margin-top:-45px;
    ${Gutter()};   
`;
const Box = styled.div`
    position:relative;
    background: #FFFFFF;
    box-shadow: 4px 4px 10px #33333314;
    margin-bottom:15px;
    border-radius: 4px;
    ${Gutter('15px')};
    cursor:pointer;
`
const Row = styled.div`
    ${FlexBox()};
    align-items: center;
    margin-bottom:4px;   
`
const RowTitle = styled.div`
    ${FlexBox()};
    align-items: center;
    border-bottom:1px solid #DFE5EA;
    margin-bottom:10px;
    padding-bottom:10px;
    
`
const Title = styled.div`
    font-weight: bold;
    margin-bottom:3px;
    font-size:14px;
`
const Date = styled.div`
    ${ChangeFont(true)};

`
const Dt = styled.div`
    font-weight: bold;
    color:  ${(props) => props.theme.colors.grey2};
`
const Dd = styled.div`
    ${ChangeFont(true)};
`

const ListManage2_1 = [
  {team:'서울1팀', name1: '이지현', name2: '홍길동', date: '2020 .02 .28', score:'44', region:'지역이 노출됩니다', addr1: '서울 노원구 하계동 한신 동성아파트 1동 1201호', addr2:'서울 노원구 하계동 한신 동성아파트 1동 1202호'}, 
  {team:'서울1팀', name1: '이지현1', name2: '홍길동', date: '2020 .02 .28', score:'55', region:'지역이 노출됩니다', addr1: '서울 노원구 하계동 한신 동성아파트 1동 1201호', addr2:'서울 노원구 하계동 한신 동성아파트 1동 1202호'}, 
  {team:'서울1팀', name1: '이지현2', name2: '홍길동', date: '2020 .02 .28', score:'66', region:'지역이 노출됩니다', addr1: '서울 노원구 하계동 한신 동성아파트 1동 1201호', addr2:'서울 노원구 하계동 한신 동성아파트 1동 1202호'}, 
  {team:'서울1팀', name1: '이지현3', name2: '홍길동', date: '2020 .02 .28', score:'20', region:'지역이 노출됩니다', addr1: '서울 노원구 하계동 한신 동성아파트 1동 1201호', addr2:'서울 노원구 하계동 한신 동성아파트 1동 1202호'}, 
]

function Manage5_1({match}) {
  const page = match.params.page;
  const [title,subtit] =  page === "1" ? ["현장실사체크 리스트","현장실사체크 리스트 입니다."] : ["대리점실사체크 리스트","대리점실사체크 리스트입니다"];  
  const [tab,setTab]= useState(0);
  const [ modalOpen, setModalOpen ] = useState(false);

  const openModal = (sn) => {
      console.log(sn)
      setModalOpen(true);
      dispatch(getPictureCheckDetail(page,sn));
      document.body.style.overflow = 'hidden';
  }
  const closeModal = () => {
      setModalOpen(false);
      document.body.style.overflow = 'unset';
  }
  const teamChange = (num,team) => {
    setTab(num)
    dispatch(getPictureCheckList(page,team))
  }
  const dispatch = useDispatch();
  const {list,loading} = useSelector(state => state.pictureCheckReducer);
  useEffect(() => {
      dispatch(getPictureCheckList(page,"Y"))
      return () => {
      }
  }, [])

  return (
    <>
      <Wrapper>
        <Head title={title} subtit={subtit} pb="120px"/>
        <Tabs>
          <TabName className={tab === 0 ? "selected": ""} onClick={()=>teamChange(0,"Y")}>우리팀</TabName>
          <TabName className={tab === 1 ? "selected": ""} onClick={()=>teamChange(1,"N")}>다른팀</TabName>
        </Tabs>
        <ContentArea>
            {list.map((item, index)=> (
                <Box key={index} onClick={()=>openModal(item.sn)}>
          
                    <RowTitle>
                        <Title>{item.teamname}</Title>
                        <Date>{item.daymove}</Date>
                    </RowTitle>
                    {
                        page === "1" ?
                        <Row>
                            <Dt>고객명</Dt>
                            <Dd>{item.custname}</Dd>
                        </Row>
                        :null
                    }
                    
                    <Row>
                        <Dt>실사자</Dt>
                        <Dd>{item.namechecker}</Dd>
                    </Row>
                    <Row>
                        <Score score={item.pointtotal}></Score>
                    </Row>
                </Box>
            ))}
        </ContentArea>
        {loading && <Loading></Loading>}
        <PopUp open={ modalOpen } close={ closeModal } btnX={true}>
            <PopUpDesc data={ListManage2_1}/>
        </PopUp>      
      </Wrapper>
    </>
  );
}

export default Manage5_1;