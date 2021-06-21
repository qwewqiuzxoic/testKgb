import React, {useState} from 'react';
import styled, { css } from 'styled-components';
import Button from '../commonStyle/Button';
import { Gutter, FlexBox, ChangeFont } from '../commonStyle';
import { useSelector } from 'react-redux';

const Wrapper = styled.div`
    margin-top: 25px;
`;
const Title = styled.div`
    font-weight: bold;
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
    color:#82898E;
`;

const data = [
    {no: '10', edu_type:'정기교육1', date: '2021 .01 .01', round: '123'}, 
    {no: '9', type:'정기교육2', date: '2021 .01 .01', round: '123'}, 
    {no: '8', type:'정기교육3', date: '2021 .01 .01', round: '123'}, 
    {no: '7', type:'정기교육4', date: '2021 .01 .01', round: '123'}, 
  ]
  const Row2 = ({num, edu_type, edu_date, count}) => (
    <TableRow className="row">
      <div>{num}</div>
      <div>{edu_type}</div>
      <div>{edu_date}</div>
      <div>{count}</div>  
    </TableRow>
  );
  const Row1 = ({num, use_date, point_type, point}) => (
    <TableRow className="row">
      <div>{num}</div>
      <div>{use_date}</div>
      <div>{point_type}</div>
      <div>{point}</div>  
    </TableRow>
  );
const TopBox = () => {
    const [tableData, setTableData] = useState(data);
    const {loading,list1,list2} = useSelector(state => state.eduAttendListReducer)
    const rows1 = list1.map( (rowData) => <Row2 {...rowData} />);
    const rows2 = list2.map( (rowData) => <Row1 {...rowData} />);
    if(loading){
      return (
        <div>
          로딩중
        </div>
      )
    }else{
      return (
        <Wrapper>
            <Title>교육이수 내역</Title>
            <Table>
                <TableHead>
                <div>번호</div>
                <div>교육종류</div>
                <div>교육일자</div>
                <div>회차</div>
                </TableHead>
                <TableBody>
                {rows1}
                </TableBody>
            </Table>
            <Title>점수 획득/사용내역</Title>
            <Table>
                <TableHead>
                <div>번호</div>
                <div>사용일자</div>
                <div>획득/사용내역</div>
                <div>획득/사용점수</div>
                </TableHead>
                <TableBody>
                {rows2}
                </TableBody>
            </Table>
        </Wrapper>
      );
    }

  };

export default TopBox;
