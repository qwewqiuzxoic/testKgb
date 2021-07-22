import React, {useEffect, useRef, useState}  from 'react';
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
import { totalAnDataThunck, totalDataThunk, totalListThunk, totalMesThunk } from '../redux/thunkFn/total.thunk';
import Team3_1_1 from './Team3_1_1';
import Loading from '../components/commonStyle/Loading';
import { totalDataAnInit, totalMesInit } from '../redux/actionFn/total';
import ConfirmModal from '../components/base/ConfirmModal';
import { useHistory } from 'react-router-dom';


const Wrapper = styled.div`
    background: #FAFAFA;
    padding-bottom:50px;
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
    display:${(props)=>props.open?'none':'block'};
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
  ExecType: "211111000",
  cboMoveOptionVal:""
}
function getToday(){
  var date = new Date();
  var year = date.getFullYear();
  var month = ("0" + (1 + date.getMonth())).slice(-2);
  var day = ("0" + date.getDate()).slice(-2);

  return year + "-" + month + "-" + day;
}
function Team3_1({match}) {
  const {result,message} =  useSelector(state => state.totalMesReducer);

  //모달띄우기
  const [open,setOpen] =useState(false);
  const setClose = (list) =>{
    const wet = list.reduce((acc, b) =>{
      return acc + parseFloat(b.itemCBM) 
    },0);

    const itemDetailStr = list.map(item=> `${item.itemNum}${item.itemType}${item.itemName}${item.itemCBM}${item.cnt}`).join("");
    setOrderSave({
      ...orderSave,
      MoveDetCBM:wet,
      ItemDetailStr:itemDetailStr
    })
    setOpen(false);
  }


  //정보
  const sn = match.params.sn;
  const {data:firstData,loading:firstLoading} = useSelector(state => state.totalDataReducer);
  const {data:AnData,loading:AnLoading} = useSelector(state => state.totalDataAnReducer);
  const {movedayinfo} = useSelector(state => state.movedayReducer);
  const disaptch = useDispatch();

  const [orderSave, setOrderSave] = useState(firstData);
  const setInit = (data)=>{
    setOrderSave({
      ...orderSave,
      ...data
      
    })
  }
  const orderDayMove = ()=>{
    setOrderSave({
      ...orderSave,
      CODE_MOVEDAY:movedayinfo
    })
  }
  const orderBoxMove = ()=>{
    setOrderSave({
      ...orderSave,
      CODE_BOXDAY:movedayinfo
    })
  }
  //포장일 변경


  /////////////////////////
  //////비용 변경 로직들////
  /////////////////////////

  ////////////////////////*******날짜********/////////////////////////////////
  const setOrderChange = (e)=>{
    setOrderSave({
      ...orderSave,
      [e.target.name]:e.target.value === "0"? 0 : e.target.value
    })
  }
  ////////////////////////*******주소********/////////////////////////////////
  const setAddressChange = (data, type) => {
    let arr = data.split(" ");
    if(type === "St"){
      setOrderSave({
        ...orderSave,
        StAddr1:arr[0] === undefined? "" : arr[0],
        StAddr2:arr[1] === undefined? "" : arr[1],
        StAddr3:arr[2] === undefined? "" : arr[2]
      })
    }else if(type === "Ed"){
      setOrderSave({
        ...orderSave,
        EdAddr1:arr[0] === undefined? "" : arr[0],
        EdAddr2:arr[1] === undefined? "" : arr[1],
        EdAddr3:arr[2] === undefined? "" : arr[2]
      })
    }
  }
  //사다리등등
  const radioChangeSt = (e) =>{
    firstData.StSadari = "0"
    firstData.StEL = "0"
    setOrderSave({
      ...orderSave,
      StSadari:"0",
      StEL:"0",
      Stgondora:"0",
      StLoop:"0",
      [e.target.value]:"1",
    })
  }
  const radioChangeEd = (e) =>{
    firstData.EdSadari = "0"
    firstData.EdEL = "0"
  
    setOrderSave({
      ...orderSave,
      EdSadari:"0",
      EdEL:"0",
      EdGondora:"0",
      EdLoop:"0",
      [e.target.value]:"1",
    })
  }
//옵션 추가 비용
  const addOptionPrice = (list) =>{
    console.log(list)
    setOrderSave({
      ...orderSave,
      cboMoveOptionVal:list.join("^"),
      AirconchkVal:list.includes("에어컨 분리") || list.includes("에어컨 설치") ? "1":"0",
      CleanchkVal:list.includes("청소팀 배정") ? "1":"0",
    })
  }
  //계약종류
  const conOrderSetState = (e) =>{
    console.log(e.target.value)
    setOrderSave({
      ...orderSave,
      CboOrderStatus:e.target.value
    })
  } 




  useEffect(() => {
    //첫 로딩되었을때
      disaptch(totalDataThunk("set_contract",{order_info_sn:sn === undefined? "" : sn}));
  }, [])
  useEffect(() => {
    //첫 로딩되고 firstState가 변경되엇을경우
    setInit(firstData)
  }, [firstData])
  
  //주소지가 변경되었을경우 (출발지,도착지)
  useEffect(() => {
    if(orderSave.StAddr1 !== firstData.StAddr1 || orderSave.EdAddr1 !== firstData.EdAddr1){
      if( orderSave.StAddr1 !== "" && orderSave.EdAddr1 !== "" ){
        //console.log("주소지 변경 ================")
        disaptch(totalAnDataThunck("get_movepay",{...orderSave,ExecType:211111000}));
      }
    }
  }, [orderSave.StAddr1])
  useEffect(() => {
    if(orderSave.StAddr1 !== firstData.StAddr1 || orderSave.EdAddr1 !== firstData.EdAddr1){
      if( orderSave.StAddr1 !== "" && orderSave.EdAddr1 !== "" ){
        //console.log("주소지 변경 ================")
        disaptch(totalAnDataThunck("get_movepay",{...orderSave,ExecType:211111000}));
      }
    }
  }, [orderSave.EdAddr1])


  //이사날짜가 변경되었을경우 
  useEffect(() => {
    if(orderSave.DayMove !== firstData.DayMove){
      //console.log("이사일 변경")
      disaptch(totalAnDataThunck("get_movepay",{...orderSave,ExecType:211111000}));
      orderDayMove();
    }
   
  }, [orderSave.DayMove, movedayinfo])
  useEffect(() => {
    if(orderSave.DayBox !== firstData.DayBox){
      //console.log("이사일 변경")
      orderBoxMove();
    }
   
  }, [orderSave.DayBox, movedayinfo])
  //출발지 정보입력이 변경되었을경우
  useEffect(() => {
    if(orderSave.StTrdist !== undefined && orderSave.StTrdist !== "0" && orderSave.StTrdist !== firstData.StTrdist){
      //console.log("출발지 이송거리 변경")
      firstData.StTrdist = "0";
      disaptch(totalAnDataThunck("get_movepay",{...orderSave,ExecType:200000010}));
    }
  }, [orderSave.StTrdist])
  useEffect(() => {
    if(orderSave.StFloor !== undefined && orderSave.StFloor !== "0" && orderSave.StFloor !== firstData.StFloor){
      //console.log("출발지 StFloor 변경")
      firstData.StFloor = "0";
      disaptch(totalAnDataThunck("get_movepay",{...orderSave,ExecType:200000010}));
    }
  }, [orderSave.StFloor])
  useEffect(() => {
    if(orderSave.StStep !== undefined && orderSave.StStep !== "0" && orderSave.StStep !== firstData.StStep){
      //console.log("출발지 StStep 변경")
      firstData.StStep = "0";
      disaptch(totalAnDataThunck("get_movepay",{...orderSave,ExecType:200000010}));
    }
  }, [orderSave.StStep])
  //////////////////////////////////////////////////////////////
  useEffect(() => {
    if(orderSave.EdTrdist !== undefined && orderSave.EdTrdist !== "0" && orderSave.EdTrdist !== firstData.EdTrdist){
      //console.log("도착지 이송거리 변경")
      firstData.EdTrdist = "0";
      disaptch(totalAnDataThunck("get_movepay",{...orderSave,ExecType:200000010}));
    }
  }, [orderSave.EdTrdist])
  useEffect(() => {
    if(orderSave.EdFloor !== undefined && orderSave.EdFloor !== "0" && orderSave.EdFloor !== firstData.EdFloor){
     // console.log("도착지 EdFloor 변경")
      firstData.StFloor = "0";
      disaptch(totalAnDataThunck("get_movepay",{...orderSave,ExecType:200000010}));
    }
  }, [orderSave.EdFloor])
  useEffect(() => {
    if(orderSave.EdStep !== undefined && orderSave.EdStep !== "0" && orderSave.EdStep !== firstData.EdStep){
      //console.log("도착지 EdStep 변경")
      firstData.EdStep = "0";
      disaptch(totalAnDataThunck("get_movepay",{...orderSave,ExecType:200000010}));
    }
  }, [orderSave.EdStep])
  //El 과 사다리 StSadari:"",StEL:"",
  useEffect(() => {
    if(orderSave.StSadari === "1" && orderSave.StSadari !== firstData.StSadari){
      //console.log("출발지 사다리 변경")
      disaptch(totalAnDataThunck("get_movepay",{...orderSave,ExecType:200000010}));
    }
  }, [orderSave.StSadari])
  useEffect(() => {
    if(orderSave.StEL === "1" && orderSave.StEL !== firstData.StEL){
      //console.log("출발지 StEL 변경")
      disaptch(totalAnDataThunck("get_movepay",{...orderSave,ExecType:200000010}));
    }
  }, [orderSave.StEL])

  useEffect(() => {
    if(orderSave.EdSadari === "1" && orderSave.EdSadari !== firstData.EdSadari){
      //console.log("도착지 사다리 변경")
      disaptch(totalAnDataThunck("get_movepay",{...orderSave,ExecType:200000010}));
    }
  }, [orderSave.EdSadari])
  useEffect(() => {
    if(orderSave.EdEL === "1" && orderSave.EdEL !== firstData.EdEL){
      //console.log("도착지 StEL 변경")
      disaptch(totalAnDataThunck("get_movepay",{...orderSave,ExecType:200000010}));
    }
  }, [orderSave.EdEL])
  //옵션비용변경
  useEffect(() => {
    //console.log(orderSave.cboMoveOptionVal)
    if(orderSave.cboMoveOptionVal !== undefined){
      disaptch(totalAnDataThunck("get_movepay",{...orderSave,ExecType:200000010}));
    }
  }, [orderSave.cboMoveOptionVal])
  useEffect(()=>{
    if(Object.keys(AnData).length !== 0){  
      setInit(AnData);
      //console.log(AnData)
      disaptch(totalDataAnInit());
    }
  },[AnData])

  //합계 계산로직
  useEffect(()=>{
    setOrderSave({
      ...orderSave,
      CostTotal:parseInt(orderSave.CostMove) + parseInt(orderSave.CostOption) + parseInt(orderSave.MoneyDiscount),
      MoneyRemain: parseInt(orderSave.CostMove) + parseInt(orderSave.CostOption) + parseInt(orderSave.MoneyDiscount) - parseInt(orderSave.MoneyPromise) 
    })
  },[orderSave.CostMove, orderSave.CostOption, orderSave.MoneyDiscount, orderSave.MoneyPromise])
  //필수항목 체크
  const [nesCheck1,setNesCheck1]= useState(false);
  const [nesCheck2,setNesCheck2]= useState(false);
  const [nesCheck3,setNesCheck3]= useState(false);
  const [nesCheck4,setNesCheck4]= useState(false);
  const [nesCheck5,setNesCheck5]= useState(false);
  const subMit = () =>{
    console.log(orderSave)

    if(orderSave.CustName === ""){
      setNesCheck1(true);
    } else{
      setNesCheck1(false);
    }
    if(orderSave.StPhone === ""){
      setNesCheck2(true);
    } else{
      setNesCheck2(false);
    }
    if(orderSave.CboOrderStatus === ""){
      setNesCheck3(true);
    } else{
      setNesCheck3(false);
    }
    if(orderSave.EdAddr1 === "" || orderSave.EdAddr4 === ""){
      setNesCheck4(true);
    } else{
      setNesCheck4(false);
    }
   
    if(orderSave.StAddr1 === "" || orderSave.StAddr4 === ""){
      setNesCheck5(true);
    } else{
      setNesCheck5(false);
    }
   
    if(orderSave.CustName === "" ||orderSave.StPhone === "" || orderSave.CboOrderStatus === "" || orderSave.EdAddr1 === "" || orderSave.EdAddr4 === "" || orderSave.StAddr1 === "" || orderSave.StAddr4 === ""){
      return;
    }
   //disaptch(totalMesThunk("save_contract",{...orderSave,order_info_sn:sn !== undefined ?sn:""}));

  }
  let history = useHistory();

  const confirmModal = () =>{
    disaptch(totalMesInit());
    history.push("/Team2_1");

}

const [toggle,setToggle]=useState(false);
const ref22 = useRef();

useEffect(() => {
  const handleClickOutside = (event) => {
    if (ref22.current &&!ref22.current.contains(event.target)) {
      setToggle(false);
    }
  };
  document.addEventListener("mousedown", handleClickOutside);
}, [ref22]);

  return (
    <>
      <Wrapper >
        {
          !open?
            <div>
              <TopBg>
            <H1 title="개인오더" subtit="KGB의 방문견적서 내역입니다"></H1>
        </TopBg>
          <Section open={open}>
            <GroupTitle title="고객정보"/>
            <Customer nesCheck1={nesCheck1} nesCheck2={nesCheck2}CustName={orderSave.CustName} MoveType={orderSave.MoveType} StPhone={orderSave.StPhone} mobile={orderSave.mobile} setOrderChange={setOrderChange}/>
          </Section>
          <Section open={open}>
            <GroupTitle title="이사정보"/>
            <OrderDate DayMove={orderSave.DayMove} DayBox={orderSave.DayBox} DayMoveText={orderSave.CODE_MOVEDAY} DayMoveText2={orderSave.CODE_BOXDAY} DayBoxText={orderSave.CODE_BOXDAY}setOrderChange={setOrderChange}/>
          </Section>
          <Section open={open}>
            <GroupTitle title="정보입력"/>
            <OrderAddress 
              StAddr1={orderSave.StAddr1}
              StAddr2={orderSave.StAddr2}
              StAddr3={orderSave.StAddr3}
              StAddr4={orderSave.StAddr4}
              EdAddr1={orderSave.EdAddr1}
              EdAddr2={orderSave.EdAddr2}
              EdAddr3={orderSave.EdAddr3}
              EdAddr4={orderSave.EdAddr4}
              setAddressChange={setAddressChange}
              setOrderChange={setOrderChange}
              nesCheck5={nesCheck5}
              nesCheck4={nesCheck4}
              />
          </Section>
          <Section open={open}>
           <GroupTitle title="운송거리 (km)"/>
            <OrderDistance MoveDistKm={orderSave.MoveDistKM}/>
          </Section>
          <Section open={open}>
           <GroupTitle title="작업정보 입력"/>
            <OrderAddressOption title="출발지" 
            EL={orderSave.StEL}              
            Floor={orderSave.StFloor}
            Loop={orderSave.StLoop}
            Sadari={orderSave.StSadari}
            Step={orderSave.StStep}
            gondora={orderSave.Stgondora}
            Trdist={orderSave.StTrdist}
            setOrderChange={setOrderChange}
            radioChange={radioChangeSt}
            name="StAdd"
            />
            <br/>
            <OrderAddressOption title="도착지"
            EL={orderSave.EdEL}              
            Floor={orderSave.EdFloor}
            Loop={orderSave.EdLoop}
            Sadari={orderSave.EdSadari}
            Step={orderSave.EdStep}
            gondora={orderSave.EdGondora}
            Trdist={orderSave.EdTrdist}
            setOrderChange={setOrderChange}
            radioChange={radioChangeEd}
            name="EdAdd"
            />
          </Section>
          <Section open={open}>
            <GroupTitle title="옵션 비용"/>
            <div ref={ref22}>
            <OrderOptionCost   toggle={toggle} setToggle={setToggle} AddOptmoneyStr={orderSave.AddOptmoneyStr} addOptionPrice={addOptionPrice}/>
            </div>
            
          </Section>
          <Section open={open}>
           <GroupTitle title="계약 정보"/>
            <Ordercontract1 nesCheck3={nesCheck3 }CboOrderStatus={orderSave.CboOrderStatus} conOrderSetState={conOrderSetState}/>
          </Section>
          <Section open={open}>
           <GroupTitle title="차량정보"/>
            <OrderCar CarTon10={orderSave.CarTon10}
            CarTon25={orderSave.CarTon25}
            CarTon50={orderSave.CarTon50}
            CarCount={orderSave.CarCount}
            MoveCBM={orderSave.MoveCBM}
            MoveDetCBM={orderSave.MoveDetCBM}
            setOrderChange={setOrderChange}
            setOpen={setOpen}
            />
          </Section>
          <Section open={open}>
           <GroupTitle title="총 금액정보"/>
            <TotalPriceInfo CostMove={orderSave.CostMove} 
            CostOption={orderSave.CostOption} 
            MoneyDiscount={orderSave.MoneyDiscount} 
            CostTotal={orderSave.CostTotal} 
            MoneyPromise={orderSave.MoneyPromise} 
            MoneyRemain={orderSave.MoneyRemain} 
            Comment01_txt={orderSave.Comment01_txt}
            setOrderChange={setOrderChange}
            />
          </Section>
          <Section>
            <Button  bg="#3397B9" color="#ffffff" text="저장" height="44px" fontSize="12px" mgt="40px" onclick={subMit}/>
          {/* <Section open={open}>
            <Button onclick={onSaveSubmot} bg="#3397B9" color="#ffffff" text="저장" height="44px" fontSize="12px" mgt="40px"/> */}
          </Section>
            </div>
          
          
          :


          <Team3_1_1 setClose={setClose}></Team3_1_1>
        }
        
          {
        // loading && <Loading></Loading>
      }
      <ConfirmModal open={result === undefined ? false : true}
                text={result ==="failed" || result ===undefined ? "실패하였습니다.": message}
                onsubmit={confirmModal}
            ></ConfirmModal> 
      </Wrapper>
    </>
  );
}

export default Team3_1;