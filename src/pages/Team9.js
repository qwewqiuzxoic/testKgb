import React, {useState}from 'react';
import Head from '../components/commonStyle/Head';
import { FlexBox, Gutter, ChangeFont } from '../components/commonStyle';
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
    align-items: center;
`;
const TabName = styled.div`
    ${ChangeFont(true)};
    color : rgba(255, 255, 255, .7);
    padding: 12px 16px;
    border-radius: 20px;
    cursor:pointer;
    &.selected{
      background : rgba(255, 255, 255, .3);
      color: #FFFFFF;
      font-weight: bold;
      cursor: auto;
  }
`;
const RegionTabs = styled.div`
    ${Gutter()};
    ${FlexBox('flex-start')};
    flex-wrap: wrap;
    align-items: center;
    margin-top:30px;
`;
const RegionTabName = styled.div`
    padding: 4px 12px;
    border-radius: 20px;
    border:1px solid ${(props) => props.theme.colors.grey1};
    margin-left:4px;
    margin-bottom:8px;
    cursor:pointer;
    &.selected{
      background : rgba(255, 255, 255, .3);
      color: ${(props) => props.theme.colors.primary};
      border:1px solid ${(props) => props.theme.colors.primary};
      font-weight: bold;
      cursor: auto;
  }
`;

const ContentArea = styled.div`
    position:relative;
    margin-top:30px;
    margin-bottom:50px;
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
      height:41px;
      align-items: center;
`;
const TableRow = styled.div`
      display: flex;
      background-color: #fff;
      align-items: center;
      min-height:41px;
      img{
        display: inline-block;
        width:22px;
        height:auto;
        vertical-align: middle;
        margin-left: 6px;
        cursor: pointer;
      }
      a{
        ${ChangeFont(true)}
      }
`;
const TableBody = styled.div`
`;
const Cell = styled.div`
  flex: 1;
  flex-grow: ${(props) => props.w ? props.w : '1'};
  padding:4px 0;
`;

const data = [];
const Row = ({region,agent, name, call,head}) => (
  <TableRow className="row">
    <Cell w='1'>{region}</Cell>
    <Cell w='1.5'>{agent}</Cell>
    <Cell w='1.5'>{name}{head === "Y"?"(권역장)":null}</Cell>
    <Cell w='2'><a href={`tel:${call}`}>{call}</a></Cell>  
  </TableRow>
);


function Team9() {
  const [tableData, setTableData] = useState(data);
  const [tab,setTab]= useState("");
  const [areaTab,setAreaTab] = useState("전체");
  const rows = tableData.map( (rowData) => <Row {...rowData} />);
  const dispatch = useDispatch();
  const list = useSelector(state=>state.phoneListReducer.list)
  const user = JSON.parse(localStorage.getItem('user'));       
  const tabChange = (num,text,area) =>{
    dispatch(getPhoneList(2,text,area));
    setTab(text);
  } 
  const areaTabChange = (text,area) =>{
    dispatch(getPhoneList(2,text,area));
    setAreaTab(area);
  }
  useEffect(() => {
    dispatch(getPhoneList(2,user.brand,areaTab));
    setTab(user.brand);

    return () => {
    }
  }, [])
  const areaArr =  ["전체","서울동부","서울서부","서울남부","서울북부","경기동부","경기서부","경기남부","경기북부","인천부천","대전충청","대구경북","부산경남울산","광주전라","강원","제주"]
  return (
    <>
      <Wrapper>
        <Head title="권역 및 대표" subtit="KGB의 권역 및 대표입니다" pb="90px"/>
        <Tabs>
          <TabName className={tab === "KGB이사" ? "selected": ""} onClick={()=>tabChange(1,"KGB이사",areaTab)}>KGB이사</TabName>
          <TabName className={tab === "YES2404" ? "selected": ""} onClick={()=>tabChange(2,"YES2404",areaTab)}>YES2404</TabName>
          <TabName className={tab === "이사이사" ? "selected": ""} onClick={()=>tabChange(3,"이사이사",areaTab)}>YES2424</TabName>
          <TabName className={tab === "용달캡" ? "selected": ""} onClick={()=>tabChange(0,"용달캡",areaTab)}>YCAP</TabName>
        </Tabs>
        <RegionTabs>
          {
            areaArr.map((item,index)=>
            <RegionTabName className={areaTab === item ? "selected": ""} onClick={()=>areaTabChange(tab,item)}>{item}</RegionTabName>
            )
          }
          
        </RegionTabs>
        <ContentArea>
          <Table>
            <TableHead>
              <Cell w='1'>권역</Cell>
              <Cell w='1.5'>대리점명/팀명</Cell>
              <Cell w='1.5'>대표자</Cell>
              <Cell w='2'>전화번호</Cell>
            </TableHead>
            <TableBody>
              {
                list && list.map((item,index)=>
                  <Row region={item.code_areaname} agent={item.teamname} head={item.chk_head} name={item.manname} call={item.tel}></Row>
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