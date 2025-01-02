export default interface Orders{
    client: string,
    products:{product:{quantity:number , productId:{name:string} , price:number}}[]
    status:string,
    date:string
}