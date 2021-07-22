import React, {useState}from 'react';
import Head from '../components/commonStyle/Head';
import { FlexBox, Gutter, ChangeFont } from '../components/commonStyle';
import styled from 'styled-components';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPhoneList } from '../redux/thunkFn/phoneList.thunk';
import { totalListThunk } from '../redux/thunkFn/total.thunk';


const Wrapper = styled.div`
    background: #FAFAFA;
    
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
const Row = ({region,agent, name, call,head,teamname, index}) => (
  <TableRow className="row" style={index=== 0?{color:"#009b90"}:{color:"black"}}>
    <Cell w='1'>{region}</Cell>
    <Cell w='1.5'>{agent}</Cell>
    <Cell w='2'>{teamname}</Cell>
    <Cell w='1.5'><p>{name}{head === "Y"?"(권역장)":null}</p><a href={`tel:${call}`}>{call}</a></Cell>  
  </TableRow>
);

function Team10() {
  const [tableData, setTableData] = useState(data);
  const rows = tableData.map( (rowData) => <Row {...rowData} />);
  const dispatch = useDispatch();
  const list = useSelector(state=>state.totalListReducer.list)
  const user = JSON.parse(localStorage.getItem('user'));       

  useEffect(() => {
    dispatch(totalListThunk("air_clean_list",{}));

    return () => {
    }
  }, [])
  return (
    <>
      <Wrapper>
        <Head title="담당 외주업체" subtit="KGB의 담당 외주업체입니다" pb="56px"/>
        <ContentArea>
          <Table>
            <TableHead>
              <Cell w='1'>구분</Cell>
              <Cell w='1.5'>지역</Cell>
              <Cell w='2'>업체명</Cell>
              <Cell w='1.5'>이름</Cell>
            </TableHead>
            <TableBody>
              {
                list && list.map((item,index)=>
                  <Row key={index} region={item.code_type} index={index} teamname={item.teamname} agent={item.code_area} head={item.chk_head} name={item.manname} call={item.tel}></Row>
                )
              }
            </TableBody>
          </Table>
        </ContentArea>      
      </Wrapper>
    </>
  );
}

export default Team10;