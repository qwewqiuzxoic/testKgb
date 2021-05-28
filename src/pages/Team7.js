import React, {useState}from 'react';
import Head from '../components/commonStyle/Head';
import { FlexBox, Gutter, BottomBox, ChangeFont } from '../components/commonStyle';
import styled from 'styled-components';


const Wrapper = styled.div`
    background: #FAFAFA;
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

`;
const TableHead = styled.div`
      display: flex;
      background-color: #F3F7FB;
      border-top: 1px solid #82898E;
      div{
        flex: 1;
        padding: 10px 0.4em;
      }

`;
const TableRow = styled.div`
      display: flex;
      background-color: #fff;
      ${ChangeFont(true)}
      div{
        flex: 1;
        padding: 10px 0.4em;
        border-bottom: 1px solid #DFE5EA;

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
    <div>{call}</div>  
  </TableRow>
);


function Team7() {
  const [tableData, setTableData] = useState(data);
  const rows = tableData.map( (rowData) => <Row {...rowData} />);

  return (
    <>
      <Wrapper>
        <Head title="긴급연락망" subtit="KGB의 긴급연락망입니다" pb="90px"/>
        <ContentArea>
        <Table>
          <TableHead className="header">
            <div>번호</div>
            <div>이름</div>
            <div>전화번호</div>
          </TableHead>
          <TableBody className="body">
            {rows}
          </TableBody>
        </Table>
        </ContentArea>      
      </Wrapper>
    </>
  );
}

export default Team7;