import "../productprice.css"
function ProductPrices() {
    
    
    const productsPricesArr = [

        { productName: "product_1", price:120 },
        { productName: "product_2", price:100 },
        { productName: "product_3", price:150 },
        { productName: "product_4", price:250 },
        { productName: "product_5", price:260 },
        { productName: "product_6", price:300 },
    ];
    

    console.log(productsPricesArr[3]);
    let sum_product_price = 0;
    for (let indx in productsPricesArr) {


    console.log("indx:", indx);
    sum_product_price += productsPricesArr[indx].price;
                    
    }
    
    
    return (
        <div className={"product_price_wrap"}>
            <h1>Total product Price</h1>
          <p className={"desc"}>
        The standard chunk of Lorem Ipsum used since the 1500s is 
        reproduced below for those interested.Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum"
        by Cicero are also reproduced in their exact original form</p>
        <h3>Total Price: <span className={"total_price"}>{sum_product_price}</span></h3>
        <div className={"circle"}>
            <div className={"loader"}>
            <div className={"loader_inner"}></div>
           
            </div>
            
            </div> 
           
            <ul className={"custom_list"}>

                <li>list item 1</li>
                <li>list item 2</li>
                <li>list item 3</li>
                <li>list item 4</li>
                <li>list item 5</li>
                <li>list item 6</li>
            </ul>


        </div>


      
    );
}

export default ProductPrices;