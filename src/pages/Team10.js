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

function Team10() {
  const [tableData, setTableData] = useState(data);
  const rows = tableData.map( (rowData) => <Row {...rowData} />);
  const dispatch = useDispatch();
  const list = useSelector(state=>state.phoneListReducer.list)
  const user = JSON.parse(localStorage.getItem('user'));       

  useEffect(() => {
    dispatch(getPhoneList(2,user.brand));

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
              <div>구분</div>
              <div>담당자</div>
              <div>업체명</div>
              <div className="tel">전화번호</div>
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

export default Team10;