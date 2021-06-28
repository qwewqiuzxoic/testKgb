const user = JSON.parse(localStorage.getItem('user'));       


export const UrlBody = (type, data) => {
    switch(type){
        case "goods_list":   // 자재주문 리스트
            return{
                url:"/BM/API/seller/goods_list.asp",
                body:{
                    "brand" : user.brand
                }
            }
        case "goos_view":
            return{
                url: "/BM/API/seller/goods_view.asp",
                body:{
                    "brand" : user.brand,
                    "goodsname" : data.good_name,
                    "photo_sn" : data.photo_sn
                }
            }
        case "goods_basket_add":
            return{
                url: "/BM/API/seller/goods_basket_add.asp",
                body:{
                    "brand" : user.brand,
                    "goodsname" : data.good_name,
                    "photo_sn" : data.photo_sn,
                    "man_info_sn" : user.man_info_sn,
                    "userid" : user.userid,
                    "manname" : user.name,
                    "biz_sn" : user.biz_sn,
                    "teamname" : user.teamname,
                    "gs_idx" : data.gs_idx,
                    "optionname" : data.optionname,
                    "price" : data.price,
                    "cnt" : data.cnt,
                }
            }
        case "goods_basket_list":
            return{
                url: "/BM/API/seller/goods_list.asp",
                body:{
                    "brand" : user.brand,
                    "man_info_sn" : user.man_info_sn,
                    "biz_sn" : user.biz_sn,
                }
            }
        case "goods_del" :
            return {
                url: "/BM/API/seller/goods_del_proc.asp",
                body:{
                    "gb_idx":data.gb_idx
                }
            }
        case "goods_order":
            return{
                url: "/BM/API/seller/goods_order_proc.asp",
                body:{
                    "man_info_sn" : user.man_info_sn,
                    "userid" : user.userid,
                    "manname" : user.name,
                    "biz_sn" : user.biz_sn,
                    "teamname" : user.teamname,
                    "str_gb_idx" : "",
                    "tot_price" : ""
                }
            }
        case "realtime_list":   //실시간 화상교육
            return{
                url: "/BM/API/edu/edu_realtime_list.asp",
                body:{
                    code_brand : user.brand,
                    page : data.page,
                    pagesize : data.pageSize
                }
            }
        case "order_list":
            return{
                url:"/BM/API/seller/get_order_list.asp",
                body:{
                    "biz_sn":user.biz_sn,
                    "brand":user.brand
                }
            }
        case "set_contract":
            return{
                url:"/BM/API/seller/set_contract_new.asp",
                body:{
                    "biz_sn": user.biz_sn,
                    "brand": user.brand,
                    "order_info_sn": data.order_info_sn
                }
            }
        case "add_option":
            return{
                url:"/BM/API/seller/get_add_option.asp",
                body:{
                    "brand":user.brand
                }
            }
        case "item_detail_list":
            return{
                url: "/BM/API/seller/item_detail_list.asp",
                body:{
                    "brand":user.brand,
                    "prod_name":data.prod_name
                }
            }
        case "get_movepay":
            return {
                url: "/BM/API/seller/get_movepay_info.asp",
                body:{
                    "CboContractBrand" : user.brand,    //필
                    "ExecType" : data.ExecType,                 //필
                    "StAddr1" : data.StAddr1,
                    "StAddr2" : data.StAddr2,
                    "StAddr3" : data.StAddr3,
                    "EdAddr1" : data.EdAddr1,
                    "EdAddr2" : data.EdAddr2,
                    "EdAddr3" : data.EdAddr3,
                    "StBcode" : data.StBcode,
                    "EdBcode" : data.EdBcode,
                    "DayMove" : data.DayMove,                  //필
                    "CODE_MOVEDAY" : data.CODE_MOVEDAY,        //필
                    "WorkTeamCode" : user.biz_sn,       //필
                    "St_floor" : data.StFloor,
                    "St_Sadari":  data.StSadari,
                    "St_EL":  data.StEL,
                    "St_TrDist":  data.StTrdist,
                    "St_Step":  data.StStep,
                    "Ed_floor":  data.EdFloor,
                    "Ed_Sadari":  data.EdSadari,
                    "Ed_EL":  data.EdEL,
                    "Ed_TrDist":  data.EdTrdist,
                    "Ed_Step":  data.EdStep,
                    "cboMoveOptionVal":"",
                    "MoveCBM":data.MoveCBM
                }
            }
        case "goods_order_list":  //자재 주문 리스트
            return{
                url:"/BM/API/seller/goods_order_list.asp",
                body:{
                    "brand":user.brand,
                    "man_info_sn":user.man_info_sn,
                    "userid":user.userid,
                    "manname":user.name,
                    "biz_sn":user.biz_sn,
                    "teamname":user.teamname
                }
                    
            }
        case "basket_list":   //장바구니 리스트
            return{
                url:"/BM/API/seller/goods_basket_list.asp",
                body:{
                    "brand":user.brand,
                    "man_info_sn":user.man_info_sn,
                    "biz_sn":user.biz_sn,
                }
                    
            }
        case "order_proc":    //장바구니 주문
            return{
                url:"/BM/API/seller/goods_order_proc.asp",
                body:{
                    "brand":user.brand,
                    "man_info_sn":user.man_info_sn,
                    "userid":user.userid,
                    "manname":user.name,
                    "biz_sn":user.biz_sn,
                    "teamname":user.teamname,
                    "str_gb_idx":data.str_gb_idx,
                    "tot_price":data.tot_price
                }
            }
       
        default: return null;
    }
}

