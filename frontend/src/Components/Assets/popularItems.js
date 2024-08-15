import item1 from "./accessories/ps5.png";
import item2 from "./Laptop/lap1.png";
import item3 from "./Phones/iphone3.png";
import item4 from "./Phones/phone6.png";

let PopularItems = [
    {
        id:1,
        brandName: "Sony",
        itemName:"PS5 Console & Controller",
        oldPrice:50000,
        newPrice:45000,
        image:item1,
        category:'other',
    },
    {
        id:2,
        brandName: "Lenove",
        itemName:"Ideapad 360",
        oldPrice:250000,
        newPrice:245000,
        image:item2,
        category:'laptop'
    },
    {
        id:3,
        brandName: "Apple",
        itemName:"iPhone13",
        oldPrice:130000,
        newPrice:100000,
        image:item3,
        category:'phone'
    },
    {
        id:4,
        brandName: "Samsung",
        itemName:"Galaxy S24",
        oldPrice:80000,
        newPrice:65000,
        image:item4,
        category:'phone'
    }
]

export default PopularItems;