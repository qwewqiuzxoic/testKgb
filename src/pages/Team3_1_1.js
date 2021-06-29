import React, {useState} from 'react';
import Head from '../components/commonStyle/Head';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { FlexBox, Gutter, SelectStyle, ChangeFont } from '../components/commonStyle';
import Loading from '../components/commonStyle/Loading';
import { totalListThunk } from '../redux/thunkFn/total.thunk';
import Button from '../components/commonStyle/Button'

const Wrapper = styled.div`
    position: absolute;
    top:50px;
    left:0;
    right:0;
    background: #fafafa;
    height:100%;
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
const Title = styled.div`
    font-weight: bold;
    margin-top:20px;
    margin-bottom:8px;
`
const Select = styled.div`
    ${FlexBox('flex-start')};
    flex-wrap:wrap;
`;

const Selected = styled.div`
    display: inline-block;
    padding-bottom:8px;
    color: #3397B9;
    background: #fff;
    padding: 6px 4px;
    margin-bottom:8px;
    margin-right:8px;
    border:1px solid #3397B9;
    border-radius:4px;
    span{
      vertical-align:middle;
    }
`
const OptionBox = styled.div`
  max-height:248px;
  padding:0 12px;
  background: #FFFFFF;
  border: 1px solid  ${(props) => props.theme.colors.grey1};
  border-radius: 4px;
  overflow-y:scroll;
  padding-bottom:10px;
`;
const Option = styled.div`
  padding: 4px 20px 4px 0;
  cursor:pointer;
  background: url(${process.env.PUBLIC_URL + '/images/ico_plus_grey.png'}) no-repeat right center;
  background-size: 12px;

`;
const Delete = styled.span`
  display: inline-block;
  width:16px;
  height:16px;
  background: url(${process.env.PUBLIC_URL + '/images/ico_x.png'}) no-repeat center;
  background-size: 10px;
  margin-left:4px;
  cursor:pointer;
`;


function Team3_1_1({onclick2}) {
    const [tab,setTab]= useState("가구");
    const state = useSelector(state => state.totalListReducer);
    const dispatch = useDispatch();
    const {loading, list} = state;
    const [checkedInputs, setCheckedInputs] = useState([]);

    const onclick = (text) =>{
        dispatch(totalListThunk("item_detail_list",{prod_name:text}));
        setTab(text);
    }
    
    const addCheckedInputs = (item) =>{
      if(checkedInputs.includes(checkedInputs.find(t=>t.itemName === item.itemName))){
        setCheckedInputs(checkedInputs.map((mitem)=>{
          if(mitem.itemName === item.itemName){
            return{
              ...mitem,
              cnt:mitem.cnt+1
            }
          } else {
            return{
              ...mitem
            }
          }
        }
        ))
      }else{
        setCheckedInputs(checkedInputs.concat({...item,cnt:1})) 
      }
    }
     
    const delCheckedInputs = (item) =>{
      setCheckedInputs(checkedInputs.filter(f =>
          f.itemName !== item.itemName
        ))
    }
    // const changeHandler = (checked, id) => {
    //     if (checked) {
    //       setCheckedInputs([...checkedInputs, id]);
    //     } else {
    //       // 체크 해제
    //       setCheckedInputs(checkedInputs.filter((el) => el !== id));
    //     }
    //   }
  return (
    <Wrapper>
        <Head title="견적 및 계약 리스트" subtit="KGB의 견적 및 계약 리스트입니다" pb="90px"/>
        <Tabs>
            <TabName className={tab === "가구" ? "selected": ""} onClick={()=>onclick("가구")}>가구</TabName>
            <TabName className={tab === "전자제품" ? "selected": ""} onClick={()=>onclick("전자제품")}>전자제품</TabName>
            <TabName className={tab === "주방용품" ? "selected": ""} onClick={()=>onclick("주방용품")}>주방용품</TabName>
            <TabName className={tab === "기타" ? "selected": ""} onClick={()=>onclick("기타")}>기타</TabName>
        </Tabs>
        <ContentArea>
        {loading && <Loading></Loading>}
        <OptionBox>
        {list && list.map((item,i) =>
          <Option onClick={()=>addCheckedInputs(item)}>
            {item.itemName}
          </Option>
            // <Option value="옵션" >
            // <CheckGroup  name={`detail_${i}`} id={`detail_${i}`} label={`${item.itemName} (${item.itemCBM}CBM)`} onChange={(e)=>{
            // changeHandler(e.currentTarget.checked, item.itemName)
            // }}
            // checked={checkedInputs.includes(item.itemName) ? true : false}></CheckGroup>
            // </Option>
        )}
        </OptionBox>
        <Title>선택내역</Title>
        <Select>
            {checkedInputs.map((selected, i) => (
                <Selected>
                  <span>{selected.itemName+" "+selected.cnt+"개"}</span>
                  <Delete onClick={()=>delCheckedInputs(selected)}></Delete>
                </Selected>
            ))}
        </Select>
        <Button onclick={()=>onclick2(checkedInputs)} bg="#3397B9" color="#ffffff" text="저장" height="44px" fontSize="12px" mgt="40px"/>
        </ContentArea>
    </Wrapper>
  );
}


export default Team3_1_1;