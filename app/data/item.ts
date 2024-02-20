export const footerLinks = [
    {
        title: "Important Links",
        list: {
           item1:"Helps & FAQs",
           item2:"Rhoncus",
           item3:"Shipping & Delivery",
           item4:"Orders History",
           item5:"Rhoncus"
        }
    },
    {
        title: "About Us",
        list: {
           item1:"About us",
           item2:"Careers",
           item3:"Our Stores",
           item4:"Sales",
           item5:"Rhoncus"
        }
    },
    {
        title: "More information",
        list: {
           item1:"Affilates",
           item2:"My Acoounts",
           item3:"Offer zone",
           item4:"Gift Vouchers",
           item5:"Privacy Policy"
        }
    }
]

import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaStripe } from "react-icons/fa"
import { RiVisaLine } from "react-icons/ri";
import { FaCcPaypal } from "react-icons/fa";
import { SiPaytm } from "react-icons/si";

export const socialLinks = [
    {
        title: "Social Media",
        icons: {
            icon1:  FaFacebookF,
            icon2: FaLinkedinIn,
            icon3:  FaYoutube,
            icon4: FaTwitter,
        }
    },

    {
        title: "Payment Method",
        icons: {
            icon1:  FaStripe,
            icon2: RiVisaLine,
            icon3:  FaCcPaypal,
            icon4: SiPaytm,
        }
    }
]


export const devices = [
    {
        title: "Mobile",
        devices: [
             "Samsung",
             "Nokia",
             "Iphone",
             "LG",
             "Realme"
        ]
    },
    {
        title: "Electronics",
        devices: [
             "Cables & Adapters",
             "Electronic Cigarettes",
             "Batteries",
             "Chargers",
             "Home Electronic"
        ]
    },
    {
        title: "Smart Watch",
        devices: [
             "Samsung",
             "Nokia",
             "Iphone",
             "LG",
             "Realme"
        ]
    },
    {
        title: "Laptop & PC",
        devices: [
            "Acer",
           "HP",
           "Apple",
           "Dell",
           "Lenvo"
        ]
    },
    {
        title: "Gaming",
        devices: [
            "Xbox",
            "PlayStation",
            "Nintendo Switch",
            "Gaming PC",
            "Gaming Laptop"
        ]
    },
    {
        title: "Accessories",
        devices: [
            "Gaming Mouse",
            "Gaming Keyboard",
            "Headset"
        ]
    },
]

import slider1 from '../../public/slider1.png'
import slider2 from '../../public//slider2.jpg'
import slider3 from '../../public//slider3.jpg'

export const Slider = [
    {
        id:1,
        image: slider1
    },
    {
        id:2,
        image: slider2
    },
    {
        id:3,
        image: slider3
    }

]

import apple from '../../public/brands/apple.png'
import dell from '../../public/brands/dell.png'
import lg from '../../public/brands/lg.png'
import mi from '../../public/brands/mi.png'
import realme from '../../public/brands/realme.png'
import samsung from '../../public/brands/samsung.png'
import sony from '../../public/brands/sony.png'

export const brands = [

    {
        id:1,
        image: apple,
    },
    {
        id:2,
        image: dell,
    },
    {
        id:3,
        image: lg,
    },
    {
        id:4,
        image: mi,
    },
    {
        id:5,
        image: realme,
    },
    {
        id:6,
        image: samsung,
    },
    {
        id:7,
        image: sony,
    },
]

import blue from '../../public/products/IphoneBlue.jpg'
import purple from '../../public/products/iPhonePurpule.jpg'
import silver from '../../public/products/iPhoneSilver.jpg'
import { title } from "process";


export const productsData = [
    {
        id: 1,
        title:"Iphone-15 Blue",
        image: blue,
        colour:"blue",
    },
    {
        id: 2,
        title:"Iphone-15 Purple",
        image: purple,
        colour:"purple",
    },
    {
        id: 3,
        title:"Iphone-15 Silver",
        image: silver,
        colour:"silver",
    }
]