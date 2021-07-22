
let user = JSON.parse(localStorage.getItem('user'))  ;       

String.prototype.replaceAll = function(org, dest) {
    return this.split(org).join(dest);
}

export const UrlBody = (type, data) => {
    if(user===null){
        user = JSON.parse(localStorage.getItem('user'))  ;
    }
    
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
            console.log(data)
            return{
                url:"/BM/API/seller/get_order_list.asp",
                body:{
                    "biz_sn":user.biz_sn,
                    "brand":user.brand,
                    "page":data.page,
                    "pagesize":data.pagesize
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
                    "cboMoveOptionVal":data.cboMoveOptionVal === undefined ? "" : data.cboMoveOptionVal,
                    "MoveCBM":data.MoveCBM
                }
            }
        case "get_moveday_info":
            return{
                url:"/BM/API/seller/get_moveday_info.asp",
                body:{
                    moveday:data.moveday
                }
            }
        case "save_contract":
            return{
                url:"/BM/API/seller/save_contract.asp",
                body:{
                    "man_info_sn":user.man_info_sn
                    ,"userid":user.userid
                    ,"manname":user.name
                    ,"brand": user.brand
                    ,"biz_sn": user.biz_sn
                    ,"order_info_sn": data.order_info_sn
                    ,"DayReceipt": data.DayReceipt
                    ,"BrandInput": data.BrandInput
                    ,"BrandContract": data.BrandContract
                    ,"OrderMethod": data.OrderMethod   
                    ,"ReceiptName": data.ReceiptName  
                    ,"CustName": data.CustName       
                    ,"StPhone": data.StPhone        
                    ,"mobile": data.mobile              
                    ,"CustType": data.CustType 
                    ,"CustState": data.CustState
                    ,"Motive": data.Motive       
                    ,"Email": data.Email     
                    ,"DayMove": data.DayMove
                    ,"CODE_MOVEDAY": data.CODE_MOVEDAY 
                    ,"DayBox": data.DayBox           
                    ,"CODE_BOXDAY": data.CODE_BOXDAY   
                    ,"StAddr1": data.StAddr1
                    ,"StAddr2": data.StAddr2  
                    ,"StAddr3": data.StAddr3  
                    ,"StAddr4": data.StAddr4  
                    ,"StBcode": data.StBcode
                    ,"EdAddr1": data.EdAddr1
                    ,"EdAddr2": data.EdAddr2   
                    ,"EdAddr3": data.EdAddr3   
                    ,"EdAddr4": data.EdAddr4   
                    ,"EdBcode": data.EdBcode   
                    ,"MoveDistKm": data.MoveDistKm      
                    ,"CboMoveRange": data.CboMoveRange
                    ,"KMIDEN": data.KMIDEN
                    ,"StFloor": data.StFloor        
                    ,"StSadari": data.StSadari        
                    ,"StEL": data.StEL                
                    ,"Stgondora": data.Stgondora       
                    ,"StLoop": data.StLoop              
                    ,"StTrdist": data.StTrdist        
                    ,"StStep": data.StStep      
                    ,"EdFloor": data.EdFloor     
                    ,"EdSadari": data.EdSadari        
                    ,"EdEL": data.EdEL
                    ,"EdGondora": data.EdGondora   
                    ,"EdLoop": data.EdLoop           
                    ,"EdTrdist": data.EdTrdist    
                    ,"EdStep": data.EdStep          
                    ,"CboContractBrand": data.CboContractBrand   
                    ,"CboOrderStatus": data.CboOrderStatus     
                    ,"CostMove": data.CostMove         
                    ,"CostOption": data.CostOption      
                    ,"MoneyDiscount": data.MoneyDiscount
                    ,"CostTotal": data.CostTotal  
                    ,"MoneyPromise": data.MoneyPromise   
                    ,"MoneyRemain": data.MoneyRemain   
                    ,"CarTon10": data.CarTon10    
                    ,"CarTon25": data.CarTon25    
                    ,"CarTon50": data.CarTon50    
                    ,"MoveCBM": data.MoveCBM    
                    ,"MoveDetCBM": data.MoveDetCBM   
                    ,"WeightCar": data.WeightCar 
                    ,"CarCount": data.CarCount    
                    ,"ItemDetailStr": data.ItemDetailStr.replaceAll("-","").replaceAll("|","")
                    ,"AddOptmoneyStr": data.AddOptmoneyStr.replaceAll("-","").replaceAll("|","")
                    ,"BasicOptmoneyStr": data.BasicOptmoneyStr.replaceAll("-","").replaceAll("|","")
                    ,"IsWorkAssign": data.IsWorkAssign            
                    ,"WorkTeamCode": data.WorkTeamCode              
                    ,"WorkTeamMemberCode": data.WorkTeamMemberCode  
                    ,"WorkTeamName": data.WorkTeamName             
                    ,"WorkOwnerCode": data.WorkOwnerCode        
                    ,"WorkOwnerName": data.WorkOwnerName         
                    ,"WorkOwnerHp": data.WorkOwnerHp             
                    ,"TosBrand": data.TosBrand              
                    ,"TosTeamCode": data.TosTeamCode      
                    ,"TosTeamMemberCode": data.TosTeamMemberCode    
                    ,"TosTeamName": data.TosTeamName              
                    ,"AirconchkVal": data.AirconchkVal    
                    ,"CleanchkVal": data.CleanchkVal
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
        case "team_photo":  //팀 사진 초기
            return{
                url:"/BM/API/team/team_photo.asp",
                body:{
                    "biz_sn":user.biz_sn 
                }
            }
        case "team_photo_proc":   //팀 사진 저장
            return{
                url:"http://mis.kgb.co.kr/BM/API/team/team_photo_proc.asp",
                body:data
            }
        case "file_save":   //브랜드평가 사진제출 업로드
            return{
                url:"http://mis.kgb.co.kr/BM/API/common/file_save.asp",
                body:data
            }
        case "brand_photo_proc":   //브랜드평가 사진제출 데이터 등록
            return{
                url:"/BM/API/seller/brand_photo_proc.asp",
                body:{
                    "brand":user.brand,
                    "biz_sn":user.biz_sn,
                    "man_info_sn":user.man_info_sn,
                    "sn":data.sn,
                    "img_car01":data.img_car01,
                    "img_car02":data.img_car02,
                    "img_car03":data.img_car03,
                    "img_box01":data.img_box01,
                    "img_box02":data.img_box02,
                    "img_box03":data.img_box03,
                    "img_cloth01":data.img_cloth01,
                    "img_cloth02":data.img_cloth02,
                    "img_cloth03":data.img_cloth03
                }
            }
        case "brand_photo_detail":   //브랜드평가 사진제출 상세
            return{
                url:"/BM/API/seller/brand_photo_desc.asp",
                body:{
                    "brand":user.brand,
                    "biz_sn":user.biz_sn,
                    "man_info_sn":user.man_info_sn,
                    "sn":data.sn
                }
            }
        case "brand_photo_list":   //브랜드평가 사진 리스트
            return{
                url:"/BM/API/seller/brand_photo_list.asp",
                body:{
                    "brand":user.brand,
                    "biz_sn":user.biz_sn,
                    "man_info_sn":user.man_info_sn
                }
            }
        case "clean_team": //담당가맹점
            return{
                url:"/BM/API/team/air_clean_team.asp",
                body:{
                    "biz_sn":user.biz_sn,
                    "brand":user.brand,
                }
            }
        case "clean_area":  //[담당 지역]
            return{
                url:"/BM/API/team/air_clean_area.asp",
                body:{
                }
            }
        case "edu_sch_request":
            return{
                url:"/BM/API/edu/edu_sch_request.asp",
                body:{
                    "mode":data.check === "1"?"CANCEL":"INSERT",
                    "brand":user.brand,
                    "sn":data.sn,
                    "man_info_sn":user.man_info_sn
                }
            }
        case "edu_att_list":
            return{
                url:"/BM/API/edu/edu_att_list.asp",
                body:{
                    "brand":user.brand,
                    "man_info_sn":user.man_info_sn
                }
            }
        case "comment_proc":
            return{
                url:"/BM/API/board/comment_proc_basic.asp",
                body:{
                    "sn":data.sn,
                    "contents":data.contents,
                    "man_info_sn":user.man_info_sn,
                    "userid":user.userid,
                    "manname":user.name
                }
            }
        case "as_comment_proc":
            return{
                url:"/BM/API/team/as_comment_proc.asp",
                body:{
                    "sn":data.sn,
                    "contents":data.contents,
                    "man_info_sn":user.man_info_sn,
                    "userid":user.userid,
                    "name":user.name
                }
            }    
        case "del_board_proc_basic":
            return{
                url:"/BM/API/board/board_proc_basic.asp",
                body:{
                    "mode":"DP",
                    sn:data.sn
                }
            }
        case "air_clean_list":
            return{
                url:"/BM/API/team/air_clean_list.asp",
                body:{
                    "biz_sn":user.biz_sn,
                }
            }
        default: return null;
    }
}

