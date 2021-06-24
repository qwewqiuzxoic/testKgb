import React, {useState} from 'react';
import { composeWithDevTools } from 'redux-devtools-extension';
import styled from 'styled-components';
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

function OrderOptionCost() {
  const [checkedInputs, setCheckedInputs] = useState([""]);
  //const [selectedValue,setSelectedValue]= useState("작업정보옵션을 선택해주세요");
  const [toggle,setToggle]=useState(false);

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

  return (
    <Wrapper>
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
      {costOptions.map((opt, i) => (
        <Option value={opt.value}  >
          <CheckGroup  name={opt.name} id={opt.id} label={opt.value} onChange={(e)=>{
          changeHandler(e.currentTarget.checked, opt.value)
        }}
        checked={checkedInputs.includes(opt.value) ? true : false}></CheckGroup>
        </Option>
      ))}
      </OptionBox>
  </Wrapper>
  );
}

export default OrderOptionCost;