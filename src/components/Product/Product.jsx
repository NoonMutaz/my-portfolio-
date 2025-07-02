 
export default function Product({title,description,price,img}) {
  return (
    <div  className="px-[2.5%]">
      <div  className=" card bg-base-110 w-[350px] shadow-sm">
  <figure>
    <img className="h-[200px] w-full object-cover rounded-t-[20px]"
      src={img}
      alt="product" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{description}</p>
    <div className="flex card-actions justify-between">
          <div className="mt-5 text-black text-[28px]">{price}$</div>   
              <button style={{  boxShadow: "rgba(0, 0, 0, 0.5) 0px -40px 36px -28px inset" }}   className=" h-[40px] hover:text-[white]  cursor-pointer p-2  font-sans font-semibold rounded-[30px] text-[white] bg-[#bd3a3a]  ">
          Buy Now
        </button>
   
    </div>
  </div>
</div>
    </div>
  )
}
