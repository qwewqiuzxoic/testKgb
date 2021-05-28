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
    .header, .row {
      display: flex;
      
      div {
        flex: 1;
        padding: 0.2rem 0.4em;
        border: 1px solid rgb(238, 238, 238);
      }
    }
    
    .header {
      background-color: rgb(238, 238, 238);
      div { 
        cursor: pointer;
      }
    }
  }
`;
const Table = styled.div`
    display: flex;
    flex-direction: column;
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
  <div className="row">
    <div>{num}</div>
    <div>{name}</div>
    <div>{call}</div>  
  </div>
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
          <div className="header">
            <div>번호</div>
            <div>이름</div>
            <div>전화번호</div>
          </div>
          <div className="body">
            {rows}
          </div>
        </Table>
        </ContentArea>      
      </Wrapper>
    </>
  );
}

export default Team7;