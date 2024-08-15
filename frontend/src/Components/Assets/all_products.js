import item2 from './Phones/iphone3.png'
import item3 from './Phones/iphone1.png'
import item4 from './Phones/iphone2.png'
import item5 from './Phones/iphone4.png'
import item6 from './Phones/ipad1.png'
import item7 from './Phones/pad1.png'
import item8 from './Phones/pad2.png'
import item9 from './Phones/pad3.png'
import item10 from './Phones/flip1.png'
import item11 from './Phones/phone1.png'
import item12 from './Phones/phone2.png'
import item13 from './Phones/phone3.png'
import item14 from './Phones/phone4.png'
import item15 from './Phones/phone5.png'
import lap3 from './Laptop/mac2.png';
import lap4 from './Laptop/mac3.png';
import lap5 from './Laptop/mac4.png';
import lap6 from './Laptop/mac5.png';
import lap8 from './Laptop/asus2.png';
import lap9 from './Laptop/lap1.png';
import lap10 from './Laptop/lap2.png';
import lap11 from './Laptop/lap3.png';
import lap12 from './Laptop/lap4.png';
import lap13 from './Laptop/lap5.png';
import lap14 from './Laptop/lap6.png';
import lap15 from './Laptop/lap7.png';
import lap16 from './Laptop/lap8.png';
import lap17 from './Laptop/lap9.png';
import lap18 from './Laptop/lap10.png';
import lap19 from './Laptop/lap11.png';
import lap20 from './Laptop/lap12.png';
import oth1 from './accessories/airpods.png'
import oth2 from './accessories/ear1.png'
import oth3 from './accessories/ear2.png'
import oth4 from './accessories/ear3.png'
import oth5 from './accessories/ear4.png'
import oth6 from './accessories/key1.png'
import oth7 from './accessories/key2.png'
import oth8 from './accessories/key3.png'
import oth9 from './accessories/pen1.png'
import oth10 from './accessories/ps5.png'


const all_products = [
    {
        id:1,
        brandName:'Apple',
        itemName:'iPhone13',
        oldPrice:130000,
        newPrice:100000,
        image:item2,
        category:"phone"
    },{
        id:2,
        brandName:'Apple',
        itemName:'iPhone14 Pro max',
        oldPrice:120000,
        newPrice:90000,
        image:item3,
        category:"phone"
    },{
        id:3,
        brandName:'Apple',
        itemName:'iPhone14 Pro',
        oldPrice:120000,
        newPrice:75990,
        image:item4,
        category:"phone"
    },{
        id:4,
        brandName:'Apple',
        itemName:'iPhone11 Pro max',
        oldPrice:60000,
        newPrice:45990,
        image:item5,
        category:"phone"
    },{
        id:5,
        brandName:'Apple',
        itemName:'ipad pro',
        oldPrice:200000,
        newPrice:170000,
        image:item6,
        category:"phone"
    },{
        id:6,
        brandName:'Samsung',
        itemName:'Galaxy pad10',
        oldPrice:45000,
        newPrice:35000,
        image:item7,
        category:"phone"
    },{
        id:7,
        brandName:'Lenovo',
        itemName:'LapPad 110 pro max',
        oldPrice:65000,
        newPrice:50000,
        image:item8,
        category:"phone"
    },{
        id:8,
        brandName:'Xiomi',
        itemName:'Xiomi pad 16',
        oldPrice:35000,
        newPrice:30000,
        image:item9,
        category:"phone"
    },{
        id:9,
        brandName:'Redmi',
        itemName:'Redmi 13 pro 5G',
        oldPrice:40000,
        newPrice:35990,
        image:item10,
        category:"phone"
    },{
        id:10,
        brandName:'Xiomi',
        itemName:'Xiomi 14 ultra',
        oldPrice:99000,
        newPrice:88000,
        image:item11,
        category:"phone"
    },{
        id:11,
        brandName:'Xiomi',
        itemName:'xFlip 210 pro',
        oldPrice:67000,
        newPrice:50000,
        image:item12,
        category:"phone"
    },{
        id:12,
        brandName:'Samsung',
        itemName:'Samsung Flip Galaxy',
        oldPrice:115000,
        newPrice:110000,
        image:item13,
        category:"phone"
    },{
        id:13,
        brandName:'Samsung',
        itemName:'Samsung flip3',
        oldPrice:689,
        newPrice:75990,
        image:item14,
        category:"phone"
    },{
        id:14,
        brandName:'Samsung',
        itemName:'Samsung galaxy S23 FE',
        oldPrice:0,
        newPrice:0,
        image:item15,
        category:"phone"
    },
    
    
    {
        id:15,
        brandName:'Apple',
        itemName:'MacBook16 pro',
        oldPrice:245000,
        newPrice:235000,
        image:lap3,
        category:"laptop"
    },{
        id:16,
        brandName:'Apple',
        itemName:'MaxBook Air M3',
        oldPrice:173000,
        newPrice:150000,
        image:lap4,
        category:"laptop"
    },
    {
        id:17,
        brandName:'Apple',
        itemName:'MacBook Air M1',
        oldPrice:95000,
        newPrice:75000,
        image:lap5,
        category:"laptop"
    },{
        id:18,
        brandName:'Xiomi',
        itemName:'XiomiBook 2 pro',
        oldPrice:85000,
        newPrice:75000,
        image:lap6,
        category:"laptop"
    },{
        id:19,
        brandName:'Asus',
        itemName:'Asus gaming Lap10',
        oldPrice:189000,
        newPrice:150000,
        image:lap8,
        category:"laptop"
    },{
        id:20,
        brandName:'Lenovo',
        itemName:'Ideapad 330',
        oldPrice:55000,
        newPrice:50000,
        image:lap9,
        category:"laptop"
    },{
        id:21,
        brandName:'Lenovo',
        itemName:'yoga book13',
        oldPrice:115000,
        newPrice:110000,
        image:lap10,
        category:"laptop"
    },{
        id:22,
        brandName:'Lenovo',
        itemName:'Book14 pro',
        oldPrice:140000,
        newPrice:130000,
        image:lap11,
        category:"laptop"
    },{
        id:23,
        brandName:'HP',
        itemName:'Pavellion 14',
        oldPrice:60000,
        newPrice:57000,
        image:lap12,
        category:"laptop"
    },{
        id:24,
        brandName:'Lenovo',
        itemName:'Legion 13 pro',
        oldPrice:180000,
        newPrice:153000,
        image:lap13,
        category:"laptop"
    },{
        id:25,
        brandName:'Lenovo',
        itemName:'Legion 15 pro',
        oldPrice:199000,
        newPrice:188000,
        image:lap14,
        category:"laptop"
    },{
        id:26,
        brandName:'HP',
        itemName:'Omen pad12',
        oldPrice:231000,
        newPrice:200000,
        image:lap15,
        category:"laptop"
    },{
        id:27,
        brandName:'Asus',
        itemName:'Asus ultra10',
        oldPrice:250000,
        newPrice:220000,
        image:lap16,
        category:"laptop"
    },{
        id:28,
        brandName:'Samsung',
        itemName:'Galaxy S24 ultra',
        oldPrice:124000,
        newPrice:120000,
        image:lap17,
        category:"laptop"
    },{
        id:29,
        brandName:'Asus',
        itemName:'Asus S24 ultra',
        oldPrice:124000,
        newPrice:120000,
        image:lap18,
        category:"laptop"
    },{
        id:30,
        brandName:'Asus',
        itemName:'Asus S23 ultra',
        oldPrice:124000,
        newPrice:120000,
        image:lap19,
        category:"laptop"
    },{
        id:31,
        brandName:'HP',
        itemName:'Pavillion 15',
        oldPrice:85000,
        newPrice:75000,
        image:lap20,
        category:"laptop",
    },{
        id:32,
        brandName:'Apple',
        itemName:'AirPods pro',
        oldPrice:30000,
        newPrice:26000,
        image:oth1,
        category:"other",
    },{
        id:33,
        brandName:'Boult',
        itemName:'UFO buds 10 ',
        oldPrice:2000,
        newPrice:1300,
        image:oth2,
        category:"other",
    },{
        id:34,
        brandName:'Boult',
        itemName:'Buds10',
        oldPrice:2000,
        newPrice:1800,
        image:oth3,
        category:"other",
    },{
        id:35,
        brandName:'JBL',
        itemName:'InEar Buds2',
        oldPrice:5000,
        newPrice:3000,
        image:oth4,
        category:"other",
    },{
        id:36,
        brandName:'Senhizer',
        itemName:'SenBuds 2 pro',
        oldPrice:85000,
        newPrice:75000,
        image:oth5,
        category:"other",
    },{
        id:37,
        brandName:'HP',
        itemName:'reDragon keyBoard',
        oldPrice:3000,
        newPrice:1600,
        image:oth6,
        category:"other",
    },{
        id:38,
        brandName:'Zebronic',
        itemName:'gaming keyBoard',
        oldPrice:5000,
        newPrice:3500,
        image:oth7,
        category:"other",
    },{
        id:39,
        brandName:'HP',
        itemName:'Multitasking keyboard',
        oldPrice:2000,
        newPrice:1500,
        image:oth8,
        category:"other",
    },{
        id:40,
        brandName:'Apple',
        itemName:'Apple pensil pro',
        oldPrice:5000,
        newPrice:3000,
        image:oth9,
        category:"other",
    },{
        id:41,
        brandName:'Sony',
        itemName:'PS5 Console & Controller',
        oldPrice:45000,
        newPrice:35000,
        image:oth10,
        category:"other",
    }
]

export default all_products;
