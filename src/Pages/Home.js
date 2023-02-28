import { useEffect, useState } from "react";
import Layout from "../Components/Layout";
export default function Home() {
    
     /* spread operator */    
    
     const [Userlist, setUserlist] = useState([
        {Name: "Mr Ali", Age: 20 },
        {Name: "Mr yonus", Age:19  },
        {Name: "Irfan khan", Age: 21 },
        {Name: "Asghar Khan", Age: 22 },

    ]);


useEffect (() => {

    const Newuserlist =[
        ...Userlist,
        {Name: "Mr Akram", Age: 20 },
        {Name: "Mr Kamran", Age:21 },
        {Name: "Mr Ali Asghar", Age: 19 },

    ];
    setUserlist(Newuserlist);


    const mencategories = ["shoes", "shirts", "caps", "trousers"]
    const kidscategories = ["walkers", "toys", "books", "stationary" ]

    const mergecategories = mencategories.concat(kidscategories)
    const reverseArray = [...mergecategories].reverse();


    console.log("00013 concats mencategories:", mencategories)
    console.log("00013 concats kidscategories:", kidscategories)
    console.log("00013 concats mergecategories:", mergecategories)
    console.log("00013 concats reverseArray:", reverseArray)
    
      
    const productPricesArr = [
        { ProductName: "Product_1", price:120 },
        { ProductName: "Product_2", price:110 },
        { ProductName: "Product_3", price:130 },
        { ProductName: "Product_4", price:100 },
        { ProductName: "Product_5", price:200 },

    ]
     console.log("00013 index 4:: ",productPricesArr[2]);
     let total_prize = 0
    for (let index in productPricesArr) {
        console.log("00014 index price:: ", productPricesArr[index].price);
        total_prize += productPricesArr [index].price;
    }
    console.log("00014 index total_price::::", total_prize);


}, []);

    console.log("00011 Userlist:", Userlist)
    console.log("00012 Newuserlist:", Userlist)
    return (
        <div>
            <Layout>
            <h2>hello</h2>
            {Userlist.map((user) => {
                return (
                    <div>
                     {user.Name} - Age {user.Age}
                    </div>
                )
            })}
            </Layout>

            <p>
                
            Contrary to popular belief, Lorem Ipsum is not simply random text. 
            It has roots in a piece of classical Latin literature from 45 BC, 
            making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College 
            in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going 
            through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", 
            comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced 
            below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also

            </p>
        </div>
    )
}