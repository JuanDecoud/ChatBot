export default class ProductRepository {
    constructor(dao){
        this.dao=dao;
    };
    addProduct = async (product)=> await  this.dao.addProduct(product);
    getProducts = async ()=>await this.dao.getProducts();
    getProductByName=async(productName)=>await this.dao.getProductByName(productName);
}