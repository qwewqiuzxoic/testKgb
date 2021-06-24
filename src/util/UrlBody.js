const user = JSON.parse(localStorage.getItem('user'));       


export const UrlBody = (type, data) => {
    console.log(data)
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
                    "sn":""
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
        default: return null;
    }
}

