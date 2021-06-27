import React, {useEffect, useState}  from 'react';
import H1 from '../components/commonStyle/H1'
import Button from '../components/commonStyle/Button'
import GroupTitle from '../components/commonStyle/GroupTitle'
import DaumPostcode from "react-daum-postcode";
import styled from 'styled-components';
import { FlexBox, Gutter, BottomBox, ChangeFont } from '../components/commonStyle';
import OrderAddress from '../components/order/OrderAddress';
import OrderDate from '../components/order/OrderDate';
import Customer from '../components/order/Customer';
import OrderAddressOption from '../components/order/OrderAddressOption';
import OrderDistance from '../components/order/OrderDistance';
import OrderOptionCost from '../components/order/OrderOptionCost';
import Ordercontract1 from '../components/order/Ordercontract1';
import OrderCar from '../components/order/OrderCar';
import TotalPriceInfo from '../components/order/TotalPriceInfo';
import { useDispatch, useSelector } from 'react-redux';
import { totalAnDataThunck, totalDataThunk, totalListThunk } from '../redux/thunkFn/total.thunk';
import Team3_1_1 from './Team3_1_1';
import Loading from '../components/commonStyle/Loading';


const Wrapper = styled.div`
    background: #FAFAFA;
`;
const TopBg = styled.div`
    position:relative;
    top:0;
    left:0;
    right:0;
    background: ${(props) => props.theme.colors.primary};
    border-radius: 0 0 0 30px;
    padding-bottom: 56px;

`;
const Section = styled.div`
    ${Gutter()};
`;
const ContentArea = styled.div`
    position: relative;
    ${Gutter()};
`

const Box = styled.div`
`

const selectOptions = ['이사형태1', '이사형태2']
const init = {
  man_info_sn:"",
  userid:"",
  manname:"",
  brand:"",
  biz_sn:"",
  order_info_sn:"",
  DayReceipt:"",
  BrandInput:"",
  BrandContract:"",
  OrderMethod:"",
  ReceiptName:"",
  CustName:"",
  StPhone:"",
  mobile:"",
  CustType:"",
  CustState:"",
  Motive:"",
  Email:"" ,
  DayMove:"",
  CODE_MOVEDAY:"",
  DayBox:"",
  CODE_BOXDAY:"",
  StAddr1:"",
  StAddr2:"",
  StAddr3:"",
  StAddr4:"",
  StBcode:"",
  EdAddr1:"",
  EdAddr2:"",
  EdAddr3:"",
  EdAddr4:"",
  EdBcode:"",
  MoveDistKm:"",
  CboMoveRange:"",
  KMIDEN:"",
  StFloor:"",
  StSadari:"",
  StEL:"",
  Stgondora:"",
  StLoop:"",
  StTrdist:"",   //이송거리
  StStep:"" ,
  EdFloor:"",
  EdSadari:"",
  EdEL:"",
  EdGondora:"",
  EdLoop:"",
  EdTrdist:"",
  EdStep:"" ,
  CboContractBrand:"",
  CboOrderStatus:"",
  CostMove:"",
  CostOption:"",
  MoneyDiscount:"",
  CostTotal:"",
  MoneyPromise:"",
  MoneyRemain:"",
  CarTon10:"",
  CarTon25:"",
  CarTon50:"",
  MoveCBM:"",
  MoveDetCBM:"" ,
  WeightCar:"",
  CarCount:"" ,
  ItemDetailStr:"",
  AddOptmoneyStr:"",
  BasicOptmoneyStr:"",
  IsWorkAssign:"",
  WorkTeamCode:"",
  WorkTeamMemberCode:"",
  WorkTeamName:"",
  WorkOwnerCode:"",
  WorkOwnerName:"",
  WorkOwnerHp:"" ,
  TosBrand:"",
  TosTeamCode:"",
  TosTeamMemberCode:"",
  TosTeamName:"",
  AirconchkVal:"",
  CleanchkVal:"",
  St_floor: "",
  St_Sadari:  "",
  St_EL:  "",
  St_TrDist:  "",
  St_Step:  "",
  Ed_floor:  "",
  Ed_Sadari:  "",
  Ed_EL:  "",
  Ed_TrDist:  "",
  Ed_Step:  "",
  ExecType: "211111000"
}

function Team3_1({match}) {


  const [orderSave, setOrderSave] = useState(init);
  const setInit = (data) =>{
    console.log(data)
    setOrderSave({
      ...orderSave,
      ...data
    })
  }
  const getMovePay = () => {
    console.log(orderSave);
  }

  const setAdd = (data,becode,type) =>{
    let arr = data.split(" ");
    if(type === "St"){
      setOrderSave({
        ...orderSave,
        StAddr1:arr[0],
        StAddr2:arr[1],
        StAddr3:arr[2],
        // StBcode:becode,
        ExecType: "211111000"
      })

    }else if(type === "Ed"){
      setOrderSave({
        ...orderSave,
        EdAddr1:arr[0],
        EdAddr2:arr[1],
        EdAddr3:arr[2],
        // EdBcode:becode,
        ExecType: "211111000"
      })
    }
  }

  const radioChangeSt = (e) =>{
    setOrderSave({
      ...orderSave,
      StSadari:"",
      StEL:"",
      Stgondora:"",
      StLoop:"",
      [e.target.value]:"1",

    })
  }
  const radioChangeEd = (e) =>{
    setOrderSave({
      ...orderSave,
      EdSadari:"",
      EdEL:"",
      EdGondora:"",
      EdLoop:"",
      [e.target.value]:"1",
    })
  }

  const inputChange = (e) =>{
    setOrderSave({
      ...orderSave,
      [e.target.name]:e.target.value
    })
  }
    
  
  const setExecType = (type) =>{
    setOrderSave({
      ...orderSave,
      ExecType:type
    })
  }

  const onSaveSubmot = ()=>{
    console.log(orderSave)
  }
  const sn = match.params.sn;
  const [open,setOpen] = useState(false);
  const onclick = () =>{
    setOpen(true);
    disaptch(totalListThunk("item_detail_list",{prod_name:"가구"}));
  }
  const disaptch = useDispatch();
  const state = useSelector(state => state.totalDataReducer.data);
  const loading = useSelector(state => state.totalDataReducer.loading);
  const anState = useSelector(state => state.totalDataAnReducer.data);
  
  useEffect(() => {
    if(sn !==undefined){
      disaptch(totalDataThunk("set_contract",{order_info_sn:sn}));
    }else{
      disaptch(totalDataThunk("set_contract",{order_info_sn:""}));
    }
    return () => {
    }
  }, [])

  useEffect(() => {
    if(orderSave.BrandContract === ""){
       setInit({
          ...orderSave,
          ...state
        });
    }
       

    return () => {
    }
  }, [state])

  // 견적내용 출력 시ㅣ 
  useEffect(() => {
    if(sn === undefined) {
      setInit(anState);
    }
    if(!anState.result){
      console.log(anState);
    }
    return () => {
    }
  }, [anState])
  //비용계산get_movepay
  useEffect(() => {
    console.log(orderSave)
    if(orderSave.EdAddr1 !== "" && orderSave.StAddr1 !== ""){
      //disaptch(totalAnDataThunck("get_movepay",orderSave));
    }
    return () => {
    }
  }, [orderSave && orderSave.StAddr1 && orderSave.EdAddr1])
  return (
    <>
      
      <Wrapper>
        <TopBg>
            <H1 title="개인오더" subtit="KGB의 방문견적서 내역입니다"></H1>
        </TopBg>
          <Section>
            <GroupTitle title="고객정보"/>
            <Customer CustName={state.CustName} MoveType={state.MoveType} StPhone={state.StPhone} mobile={state.mobile}/>
          </Section>
          <Section>
            <GroupTitle title="이사정보"/>
            <OrderDate DayMove={state.DayMove} DayBox={state.DayBox} />
          </Section>
          <Section>
            <GroupTitle title="정보입력"/>
            <OrderAddress 
              StAddr1={state.StAddr1}
              StAddr2={state.StAddr2}
              StAddr3={state.StAddr3}
              StAddr4={state.StAddr4}
              EdAddr1={state.EdAddr1}
              EdAddr2={state.EdAddr2}
              EdAddr3={state.EdAddr3}
              EdAddr4={state.EdAddr4}
              setOrder={setAdd}
              />
          </Section>
          <Section>
           <GroupTitle title="운송거리 (km)"/>
            <OrderDistance MoveDistKm={orderSave.MoveDistKM}/>
          </Section>
          <Section>
           <GroupTitle title="작업정보 입력"/>
            <OrderAddressOption title="출발지" 
            EL={orderSave.StEL}              
            Floor={orderSave.StFloor}
            Loop={orderSave.StLoop}
            Sadari={orderSave.StSadari}
            Step={orderSave.StStep}
            gondora={orderSave.Stgondora}
            Trdist={orderSave.StTrdist}
            radioChange={radioChangeSt}
            inputChange={inputChange}
            name="StAdd"
            />
            <br/>
            <OrderAddressOption title="도착지"
            EL={orderSave.EdEL}              
            Floor={orderSave.EdFloor}
            Loop={orderSave.EdLoop}
            Sadari={orderSave.EdSadari}
            Step={orderSave.EdStep}
            gondora={orderSave.Edgondora}
            Trdist={orderSave.EdTrdist}
            radioChange={radioChangeEd}
            inputChange={inputChange}
            name="EdAdd"
            />
          </Section>
          <Section>
            <GroupTitle title="옵션 비용"/>
            <OrderOptionCost AddOptmoneyStr={state.AddOptmoneyStr}/>
          </Section>
          <Section>
           <GroupTitle title="계약 정보"/>
            <Ordercontract1 CboOrderStatus={state.CboOrderStatus}/>
          </Section>
          <Section>
           <GroupTitle title="차량정보"/>
            <OrderCar CarTon10={orderSave.CarTon10}
            CarTon25={orderSave.CarTon25}
            CarTon50={orderSave.CarTon50}
            CarCount={orderSave.CarCount}
            MoveCBM={orderSave.MoveCBM}
            MoveDetCBM={orderSave.MoveDetCBM}
            onclick={onclick}
            />
          </Section>
          <Section>
           <GroupTitle title="총 금액정보"/>
            <TotalPriceInfo CostMove={state.CostMove} 
            CostOption={state.CostOption} 
            MoneyDiscount={state.MoneyDiscount} 
            CostTotal={state.CostTotal} 
            MoneyPromise={state.MoneyPromise} 
            MoneyRemain={state.MoneyRemain} 
            Comment01_txt={state.Comment01_txt}
            />
          </Section>
          <Section>
            <Button onclick={onSaveSubmot} bg="#3397B9" color="#ffffff" text="저장" height="44px" fontSize="12px" mgt="40px"/>
          </Section>
          {open && <Team3_1_1></Team3_1_1>}
          {
        loading && <Loading></Loading>
      }
      </Wrapper>
    </>
  );
}

export default Team3_1;