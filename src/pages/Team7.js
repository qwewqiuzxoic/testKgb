import React, {useState}from 'react';
import Head from '../components/commonStyle/Head';
import TableTitle from '../components/table/TableTitle';
import { FlexBox, Gutter, BottomBox, ChangeFont } from '../components/commonStyle';
import styled from 'styled-components';


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
  {num: '1소장', name: '박정구', call: '010-1234-4561'}, 
  {num: '2소장', name: '박정구2', call: '010-1234-4562'}, 
  {num: '3소장', name: '박정구3', call: '010-1234-4543'}, 
  {num: '4소장', name: '박정구4', call: '010-1234-4564'}, 
  {num: '5소장', name: '박정구5', call: '010-1234-4565'}, 
  {num: '6소장', name: '박정구6', call: '010-1234-4566'}, 
]
const Row = ({num, name, call}) => (
  <TableRow className="row">
    <div>{num}</div>
    <div>{name}</div>
    <div>{call}<img src={process.env.PUBLIC_URL + '/images/ico_btn_call.svg'} alt="call"/></div>  
  </TableRow>
);


function Team7() {
  const [tableData, setTableData] = useState(data);
  const rows = tableData.map( (rowData) => <Row {...rowData} />);

  return (
    <>
      <Wrapper>
        <Head title="긴급연락망" subtit="KGB의 긴급연락망입니다" pb="90px"/>
        <Tabs>
          <TabName className="selected">YCAP</TabName>
          <TabName>KGB이사</TabName>
          <TabName>YES2404</TabName>
          <TabName>YES2404</TabName>
        </Tabs>
        <ContentArea>
          <TableTitle title="가맹차주 (서울)" color = "#009B90"/>
          <Table>
            <TableHead>
              <div>번호</div>
              <div>이름</div>
              <div>전화번호</div>
            </TableHead>
            <TableBody>
              {rows}
            </TableBody>
          </Table>
        </ContentArea>      
      </Wrapper>
    </>
  );
}

export default Team7;