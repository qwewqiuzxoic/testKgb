import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Loading from '../components/commonStyle/Loading';
import { totalListThunk } from '../redux/thunkFn/total.thunk';


const Wrapper = styled.div`
margin-top:10px;
`;
function Team3_1_1() {
    const state = useSelector(state => state.totalListReducer);
    const dispatch = useDispatch();
    const {loading, list} = state;
    const onclick = (text) =>{
        dispatch(totalListThunk("item_detail_list",{prod_name:text}));
    }
  return (
    <Wrapper>
        <div>
            <span onClick={()=>onclick("가구")}>가구</span>
            <span onClick={()=>onclick("전자제품")}>전자제품</span>
            <span onClick={()=>onclick("주방용품")}>주방용품</span>
            <span onClick={()=>onclick("기타")}>기타</span>
        </div>
        <div>
            {loading && <Loading></Loading>}
            {list && list.map((item,index)=>
                <div key={index}>
                    {item.itemType}
                    {item.itemNum}
                    {item.itemName}
                    {item.itemCBM}
                </div>
            )}
        </div>
    </Wrapper>
  );
}


export default Team3_1_1;