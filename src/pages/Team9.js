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
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        &.tel{
            flex-grow:1.5;
        }
      }
`;
const TableRow = styled.div`
      display: flex;
      background-color: #fff;
      align-items: center;
      div{
        flex: 1;
        height:41px;
        line-height: 41px;
        border-bottom: 1px solid #DFE5EA;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        &.tel{
            flex-grow:1.5;
        }
      }
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
  padding-bottom:50px;
`;

const data = [];
const Row = ({region,agent, name, call,head}) => (
  <TableRow className="row">
    <div>{region}</div>
    <div>{agent}</div>
    <div>{name}{head === "Y"?"(권역장)":null}</div>
    <div className="tel"><a href={`tel:${call}`}>{call}</a></div>  
  </TableRow>
);


function Team9() {
  const [tableData, setTableData] = useState(data);
  const [tab,setTab]= useState("");
  const rows = tableData.map( (rowData) => <Row {...rowData} />);
  const dispatch = useDispatch();
  const list = useSelector(state=>state.phoneListReducer.list)
  const user = JSON.parse(localStorage.getItem('user'));       
  const tabChange = (num,text) =>{
    dispatch(getPhoneList(1,text));
    setTab(text);
  } 
  useEffect(() => {
    dispatch(getPhoneList(2,user.brand));
    setTab(user.brand);

    return () => {
    }
  }, [])
  return (
    <>
      <Wrapper>
        <Head title="권역 및 대표" subtit="KGB의 권역 및 대표입니다" pb="90px"/>
        <Tabs>
        <TabName className={tab === "YCAP" ? "selected": ""} onClick={()=>tabChange(0,"YCAP")}>YCAP</TabName>
          <TabName className={tab === "KGB이사" ? "selected": ""} onClick={()=>tabChange(1,"KGB이사")}>KGB이사</TabName>
          <TabName className={tab === "YES2404" ? "selected": ""} onClick={()=>tabChange(2,"YES2404")}>YES2404</TabName>
          <TabName className={tab === "YES24041" ? "selected": ""} onClick={()=>tabChange(3,"YES24041")}>YES2404</TabName>
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