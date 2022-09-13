export interface goodsInit {
  id: number,
  introduce: string,
  title: string,
  userId: number
}
interface selectDataInit{
  title:string,
  page:number,
  count:number,
  pageSize:number
}
export class goodListData {
  selectInit:selectDataInit={
    title:'',
    page:1,//当前页
    count:0,//总页数
    pageSize:10,//每页多少条
  };
  listData:goodsInit[]=[]
}