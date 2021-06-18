import React, {useState}from 'react';
import Head from '../components/commonStyle/Head';
import { FlexBox, Gutter, BottomBox, ChangeFont } from '../components/commonStyle';
import styled from 'styled-components';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPhoneList } from '../redux/thunkFn/phoneList.thunk';


const Wrapper = styled.div`
    background: #FAFAFA;
`;
const Tabs = styled.div`
    position:absolute;
    ${Gutter()};
    ${FlexBox('')};
    margin-top:-72px;
`;
const TabName = styled.div`
    ${ChangeFont(true)};
    color : rgba(255, 255, 255, .7);
    padding: 12px 18px;
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
    margin-top:30px;
    ${Gutter()};
      
`;
const Table = styled.div`
    display: flex;
    flex-direction: column;
    text-align:center;
    margin-top: 8px;
    box-shadow: 4px 4px 40px rgba(51, 51, 51, .1);
`;
const TableHead = styled.div`
      display: flex;
      background-color: #F3F7FB;
      border-top: 1px solid #82898E;
      div{
        flex: 1;
        height:41px;
        line-height: 41px;
      }

`;
const TableRow = styled.div`
      display: flex;
      background-color: #fff;
      align-items: center;
      ${ChangeFont(true)}
      div{
        flex: 1;
        height:41px;
        line-height: 41px;
        border-bottom: 1px solid #DFE5EA;

      }
      img{
        display: inline-block;
        width:22px;
        height:auto;
        vertical-align: middle;
        margin-left: 6px;
        cursor: pointer;
      }
`;
const TableBody = styled.div`
`;



const data = [
  {region: '서울동부(권역장)', agent:'KGB 강남대리점', name: '박정구', call: '010-1234-4561'}, 
  {region: '서울동부(권역장)', agent:'KGB 강남대리점', name: '박정구2', call: '010-1234-4562'}, 
  {region: '서울동부(권역장)', agent:'KGB 강남대리점', name: '박정구3', call: '010-1234-4543'}, 
  {region: '서울서부(권역장)', agent:'KGB 강남대리점', name: '박정구4', call: '010-1234-4564'}, 
  {region: '서울남부(권역장)', agent:'KGB 강남대리점', name: '박정구5', call: '010-1234-4565'}, 
  {region: '서울동부(권역장)', agent:'KGB 강남대리점', name: '박정구6', call: '010-1234-4566'}, 
]
const Row = ({region,agent, name, call,head}) => (
  <TableRow className="row">
    <div>{region}</div>
    <div>{agent}</div>
    <div>{name}{head === "Y"?"(권역장)":null}</div>
    <div>{call}</div>  
  </TableRow>
);


function Team9() {
  const [tableData, setTableData] = useState(data);
  const [tab,setTab]= useState(0);
  const rows = tableData.map( (rowData) => <Row {...rowData} />);
  const dispatch = useDispatch();
  const list = useSelector(state=>state.phoneListReducer.list)
  const user = JSON.parse(localStorage.getItem('user'));       
  const tabChange = (num,text) =>{
    dispatch(getPhoneList(1,text));
    setTab(num)
  } 
  useEffect(() => {
    dispatch(getPhoneList(2,user.brand))
    return () => {
    }
  }, [])
  return (
    <>
      <Wrapper>
        <Head title="권역 및 대표" subtit="KGB의 권역 및 대표입니다" pb="90px"/>
        <Tabs>
          <TabName className={tab === 0 ? "selected": ""} onClick={()=>tabChange(0,"YCAP")}>YCAP</TabName>
          <TabName className={tab === 1 ? "selected": ""} onClick={()=>tabChange(1,"KGB이사")}>KGB이사</TabName>
          <TabName className={tab === 2 ? "selected": ""} onClick={()=>tabChange(2,"YES2404")}>YES2404</TabName>
          <TabName className={tab === 3 ? "selected": ""} onClick={()=>tabChange(3,"YES2404")}>YES2404</TabName>
        </Tabs>
        <ContentArea>
          <Table>
            <TableHead>
              <div>권역</div>
              <div>대리점명</div>
              <div>대표자</div>
              <div>전화번호</div>
            </TableHead>
            <TableBody>
              {
                list && list.map((item,index)=>
                  <Row region={item.code_areaname} agent={item.code_area} head={item.chk_head} name={item.manname} call={item.tel}></Row>
                )
              }
            </TableBody>
          </Table>
        </ContentArea>      
      </Wrapper>
    </>
  );
}

export default Team9;