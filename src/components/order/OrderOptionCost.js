import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import styled from 'styled-components';
import { totalListThunk } from '../../redux/thunkFn/total.thunk';
import { FlexBox, ChangeFont, InputStyle, LabelStyle, SelectStyle} from '../commonStyle';
import CheckGroup from '../commonStyle/CheckGroup';

const Wrapper = styled.div`
`
const Select = styled.div`
  position:relative;
  margin-top:10px;
  ${SelectStyle()};
`;
const Selected = styled.div`
  color: #3397B9;
  height:40px;
  line-height: 40px;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
  span{
    padding-right:8px;;
  }
`
const IconBox = styled.div`
  position:absolute;
  top:14px;
  right:12px;
  width:10px;
  height:10px;
  background: url(${(props) => props.toggle? process.env.PUBLIC_URL + '/images/ico_up.png' :  process.env.PUBLIC_URL + '/images/ico_down.png'}) no-repeat center right;
  background-size: 10px auto;
`
const OptionBox = styled.div`
  display:${(props)=>props.toggle? 'block' : 'none'};
  max-height:124px;
  padding:0 12px;
  background: #FFFFFF;
  border: 1px solid  ${(props) => props.theme.colors.grey1};
  border-radius: 4px;
  overflow-y:scroll;
  padding-bottom:10px;
`;
const Option = styled.div`
`;

const costOptions=[
  {value : "옵션1" , id: "costOption1", name:"costOption"},
  {value : "옵션2" , id: "costOption2", name:"costOption"},
  {value : "옵션3" , id: "costOption3", name:"costOption"},
  {value : "옵션4" , id: "costOption4", name:"costOption"},
  {value : "옵션5" , id: "costOption5", name:"costOption"},
  {value : "옵션6" , id: "costOption6", name:"costOption"},
]

function OrderOptionCost({AddOptmoneyStr,addOptionPrice, setToggle, toggle,ref}) {
  String.prototype.replaceAll = function(org, dest) {
    return this.split(org).join(dest);
  }
  Array.prototype.replaceAllAr = function(org,dest){
    return this.map(item=>{
      return item.split(org)[0]
    })
  }
  const addOptmoneyStr = AddOptmoneyStr ? AddOptmoneyStr.replaceAll("|",",").split(",").replaceAllAr("-")  : [];
  const [checkedInputs, setCheckedInputs] = useState([]);

  //const [selectedValue,setSelectedValue]= useState("작업정보옵션을 선택해주세요");
  const [DList,setDList] = useState([]);
  const changeHandler = (checked, id) => {
    if (checked) {
      setCheckedInputs([...checkedInputs, id]);
    } else {
      // 체크 해제
      setCheckedInputs(checkedInputs.filter((el) => el !== id));
    }
  };

  const handleClick = (e) => {
    setToggle(!toggle)
    
  }
  const dispatch = useDispatch();
  const state = useSelector(state => state.totalListReducer);
  const {loading} = state;
  useEffect(() => {
    dispatch(totalListThunk("add_option",{},setDList));
    return () => {
    }
  }, [dispatch])
  useEffect(() => {
    if(checkedInputs.length === 0){
      setCheckedInputs(addOptmoneyStr);
    }
    
  }, [AddOptmoneyStr])
 
  return (
    <Wrapper ref={ref}>
      <Select onClick={handleClick} toggle={toggle}>
        <Selected>
          {checkedInputs.map((selected, i) => (
            <span>{selected}</span>
          ))}
          </Selected>
        <IconBox toggle={toggle}>
        </IconBox>
      </Select>
      <OptionBox toggle={toggle}>
      {DList && DList.map((opt, i) => (
        <Option value="옵션" >
          <CheckGroup  name={`opt_${i}`} id={`opt_${i}`} label={opt.opt_text}  onChange={(e)=>{
          changeHandler(e.currentTarget.checked, opt.opt_text)
        }}
        checked={checkedInputs.includes(opt.opt_text) ? true : false}></CheckGroup>
        </Option>
      ))}
      </OptionBox>
  </Wrapper>
  );
}

export default OrderOptionCost;