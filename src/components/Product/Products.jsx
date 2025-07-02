 import { assets } from "../../assets/assets";
import Product from "./Product"
const products = [
  {id:1,
    title: "Black Rotary Phone",
    description: "Description 1",
    price: 33,
    img: assets.phoneOld,
  },
  { id:2,
    title: "Gray Lantern",
    description: "Description 2",
    price: 44,
    img: assets.grayLantern,
  },
  { id:3,
    title: "Chair and Vintage Metal Furniture",
    description: "Description 3",
    price: 55,
    img: assets.oldChair,
  },
  { id:4,
    title: "Old Chevrolet 3100",
    description: "Description 4",
    price: 66,
    img: assets.chevrolet,
  },
  {  id:5,
    title: "Vintage Record Player",
    description: "Description 3",
    price: 55,
    img: assets.recordPlayer,
  },
  {  id:6,
    title: "Vintage TV",
    description: "Description 4",
    price: 66,
    img:  assets.oldTv,
  },
];


const buttonData = [
  {
    name: "All",
    img2: "https://images.pexels.com/photos/32766647/pexels-photo-32766647.jpeg",
    onClick: () => console.log("All clicked"),
  },
  {
    name: "Cars",
    img2: assets.yellowCar,
    onClick: () => console.log("Cars clicked"),
  },
  {
    name: "Furniture",
    img2: assets.oldTv,
    onClick: () => console.log("Furniture clicked"),
  },
  {
    name: "Clothing",
    img2: assets.clothing,
    onClick: () => console.log("Clothing clicked"),
  },
  {
    name: "Random",
    img2: "https://images.pexels.com/photos/2911521/pexels-photo-2911521.jpeg",
    onClick: () => console.log("Random clicked"),
  },
  {
    name: "Free",
    img2: "https://images.pexels.com/photos/7957755/pexels-photo-7957755.jpeg",
    onClick: () => console.log("Free clicked"),
  },
  {
    name: "Art",
    img2: assets.art,
    onClick: () => console.log("Art clicked"),
  },
  {
    name: "Books",
    img2: assets.books,
    onClick: () => console.log("Books clicked"),
  },
];




function Btn ({name ,onClick,img2}) {
  return(
 <div className='flex flex-col items-center '> <div   
 
 style={{    backgroundImage: `url(${img2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',boxShadow: '3px 3px 7px rgba(0, 0, 0, 0.6)' }} className=" h-[60px] flex items-center justify-center w-[60px] cursor-pointer hover:text-[white]  rounded-full   font-sans font-semibold   text-[white] bg-[#bd3a3a]  "   onClick={onClick}> </div>
<div className="text-black font-bold mt-[10px]">{name}</div>

</div>
)
  }
export default function Products({sectionRef}) {

  return (
    <div ref={sectionRef}   className="    ">
      <div className="flex flex-wrap  gap-4 px-[3%] mb-6">


{buttonData.map((btn, index) => (
  <Btn
    key={index}
    name={btn.name}
    img2={btn.img2}
    onClick={btn.onClick}
  />
))}
</div>


<div className=" flex items-center justify-center flex-wrap gap-4 mb-4">
{products.map((product) => (
        <Product 
          key={product.id}
          title={product.title}
          description={product.description}
          price={product.price}
          img={product.img}
        />
      ))}

</div>
    </div>
  )
}
