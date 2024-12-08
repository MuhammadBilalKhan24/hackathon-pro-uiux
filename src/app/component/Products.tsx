import Image from "next/image";
// import Bedroom from "../public/bedroom.png"
export default function Products(){

    interface Card{
        name: string,
        age: number,
        description: string,
        image: string,
        price: string,
      }

    const data: Card[] = [
        {
          name: 'Syltherine',
          price: "$200",
          age: 30,
          image: "/Pictures/bedroom.png",
          description: 'Stylish cafe Flowers Bucket',
        },
        {
          name: 'Jane Smith',
          price: "$2500",
          age: 25,
          image: "/Pictures/image 8.png",
          description: 'A creative designer who loves creating stunning visuals.',
        },
        {
          name: 'Sam Wilson',
          price: "$499",
          age: 28,
          image: "/Pictures/images (5).png" ,
          description: 'A software engineer specializing in backend systems.',
        },
        {
          name: 'White Art',
          price: "$800",
          age: 28,
          image: "/Pictures/images.png",
          description: 'A software engineer specializing in backend systems.',
        },
        {
          name: 'Wall Arts',
          price: "$1500",
          age: 28,
          image: "/Pictures/inner.png",
          description: 'A software engineer specializing in backend systems.',
        },
        {
          name: 'Fantastic',
          price: "$735",
          age: 28,
          image: "/Pictures/Sideinner.png",
          description: 'GOOD',
        },
        {
          name: 'Blossom',
          price: "$500",
          age: 28,
          image: "/Pictures/images (4).png",
          description: 'Decent ',
        },
        {
          name: 'Greatest',
          price: "$200",
          age: 28,
          image: "/Pictures/images (3).png",
          description: 'Beautiful Lamp on the Table',
        },
      ];
    
    return (
        <>
        <div  className="product">
            <h2 className="text-center p-2 font-bold text-[3rem]">Our Product</h2>
            </div>
            <div className="cardsContainer">
            {data.map((card, index) => (
              
            <div className="card" key={index} style={{ width: "15rem" }}>
                <img
                  src={card.image}
                  style={{ width: "18rem", height: "18rem" }}
                  className="card-img-top"
                //   alt={card.title}
                />
                <div className="card-body">
                  <h5 className="card-title" style={{ fontWeight: "bold" }}>
                    {card.name}
                  </h5>
                  <p className="card-text">{card.description}</p>
                  <h5 className="card-title" style={{ fontWeight: "bold" }}>
                    {card.price}
                  </h5>
            </div>
            </div>
                    ))}


        </div>
        <div className="flex items-center justify-center mb-12">
       <button className="productBtn text-[#B88E2F] p-2 border-2 border-[#B88E2F]">Show More</button>
        </div>
        </>
    )
}