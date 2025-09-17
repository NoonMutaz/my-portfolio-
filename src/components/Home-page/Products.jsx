
// import React, { useState } from "react";
// import { Container, Row, Col, Button, Card } from "react-bootstrap";
// import styled, { keyframes } from "styled-components";
// import burger from "../../assets/burger.png";
// import tomato from "../../assets/tomato.png";

// // Entrance animation with stagger
// const fadeInUpStagger = keyframes`
//   from {
//     opacity: 0;
//     transform: translateY(30px);
//   } to {
//     opacity: 1;
//     transform: translateY(0);
//   }
// `;

// const ProductsSection = styled.section`
//   padding: 5rem 0;
//   /* background: linear-gradient(135deg, #fff8e1, #ffe0b2); */
//   border-radius: 30px;
//   /* box-shadow: 0 10px 30px rgba(255, 183, 77, 0.3); */
//   margin: 3rem auto;
//   max-width: 1100px;
//   color: #4a2c00;
  

// `;

// const Title = styled.h2`
//   text-align: center;
//   color: #ff6f00;
//   margin-bottom: 3rem;
//   font-weight: 900;
//   font-size: 2.5rem;
//   font-family: 'Baloo 2', cursive;
// `;

// const ProductCard = styled(Card)`
//   /* background: #e6e6e6; */
//   background-color: #f9f9f9;
//   border: none;
//   border-radius: 25px;
//   overflow: hidden;
//   text-align: center;
//   box-shadow: 0 8px 5px gray;
//   transition: transform 0.4s ease, box-shadow 0.4s ease;
//   cursor: pointer;
//   animation: ${fadeInUpStagger} 0.6s ease forwards;
//   animation-delay: ${(props) => props.delay}s;
//   opacity: 0;

//   &:hover {
//     transform: translateY(-15px) rotate(1deg) scale(1.05);
//     box-shadow: 0 10px 10px black;
//   }
// `;

// const ProductImage = styled(Card.Img)`
//   height: 220px;
//   object-fit: contain;
//   background: #fff;
//   padding: 1.5rem;
//   border-radius: 25px 25px 0 0;
//   transition: transform 0.4s ease;

//   ${ProductCard}:hover & {
//     transform: scale(1.1) rotate(-2deg);
//   }
// `;

// const ProductBody = styled(Card.Body)`
//   padding: 1.8rem 1.5rem 2rem;

// `;

// const ProductTitle = styled(Card.Title)`
//   color: #ff6f00;
//   font-size: 1.6rem;
//   font-weight: 900;
//   margin-bottom: 0.5rem;
//   font-family: 'Baloo 2', cursive;
  
// `;

// const ProductText = styled(Card.Text)`
//   font-size: 1.1rem;
//   color: #6d4c00;
//   margin-bottom: 1rem;
//   min-height: 60px;
// `;

// const Price = styled.p`
//   font-size: 1.4rem;
//   font-weight: 900;
//   color: #bf360c;
//   margin-bottom: 1.5rem;
// `;

// const AddButton = styled(Button)`
//   background: linear-gradient(45deg, #ff6f00, #ff8f00);
//   border: none;
//   font-weight: 900;
//   padding: 0.8rem 3rem;
//   border-radius: 50px;
//   box-shadow: 0 6px 20px rgba(255, 143, 0, 0.6);
//   transition: all 0.3s ease;
//   font-size: 1.2rem;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   gap: 0.6rem;

//   &:hover,
//   &:focus {
//     background: linear-gradient(45deg, #ff8f00, #ff6f00);
//     box-shadow: 0 8px 30px rgba(255, 143, 0, 0.8);
//     transform: scale(1.1);
//   }
// `;

// const Badge = styled.div`
//   position: absolute;
//   top: 15px;
//   right: 15px;
//   background: #ff6f00;
//   color: white;
//   font-weight: 900;
//   font-size: 0.9rem;
//   padding: 0.3rem 0.8rem;
//   border-radius: 20px;
//   box-shadow: 0 0 10px #ff6f00;
//   user-select: none;
// `;

// const QuantityControls = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   gap: 1rem;
//   margin-top: 1rem;
// `;

// const QtyButton = styled.button`
//   background: #ff6f00;
//   border: none;
//   color: white;
//   font-weight: 900;
//   font-size: 1.3rem;
//   width: 2.8rem;
//   height: 2.8rem;
//   border-radius: 50%;
//   cursor: pointer;
//   box-shadow: 0 4px 10px rgba(255, 111, 0, 0.7);
//   transition: background 0.3s ease;

//   &:hover {
//     background: #ff8f00;
//   }

//   &:disabled {
//     background: #ffa726;
//     cursor: not-allowed;
//   }
// `;

// const QuantityDisplay = styled.span`
//   font-size: 1.4rem;
//   font-weight: 900;
//   color: #bf360c;
//   min-width: 2rem;
//   text-align: center;
// `;

// function Products() {
//   const initialItems = [
//     {
//       id: 1,
//       name: "برجر السعادة 🍔",
//       desc: "برجر طازج مع الجبن والخضار.",
//       price: "25 ريال",
//       image: burger,
//       badge: "الأكثر مبيعاً",
//     },
//     {
//       id: 2,
//       name: "بيتزا الفرح 🍕",
//       desc: "بيتزا لذيذة بمكونات طازجة.",
//       price: "30 ريال",
//       image: tomato,
//     },
//     {
//       id: 3,
//       name: "مشروب منعش 🥤",
//       desc: "عصائر طبيعية كوكتيل.",
//       price: "12 ريال",
//       image: burger,
//     },
//     {
//       id: 4,
//       name: "سلطة السعادة 🥗",
//       desc: "سلطة طازجة مع صلصة خاصة.",
//       price: "18 ريال",
//        image: burger,
//     },
//     {
//       id: 5,
//       name: "بطاطس مقلية 🍟",
//       desc: "بطاطس مقرمشة مع توابل مميزة.",
//       price: "15 ريال",
//        image: burger,
//     },
//     {
//       id: 6,
//       name: "كيك الشوكولاتة 🍰",
//       desc: "كيك غني بالشوكولاتة مع كريمة.",
//       price: "20 ريال",
//       image: burger,
//     },

//     {
//       id: 7,
//       name: "برجر الدجاج 🍔",
//       desc: "برجر دجاج مقرمش مع صلصة خاصة.",
//       price: "28 ريال",
//       image: burger,
//     },
//     {
//       id: 8,
//       name: "مشروب الطاقة 🥤",
//       desc: "مشروب منعش مع مكونات طبيعية.",
//       price: "15 ريال",
//       image: burger,
//     },
//     {
//       id: 9,
//       name: "سلطة الفواكه 🍉",
//       desc: "سلطة منعشة مع مزيج من الفواكه.",
//       price: "20 ريال",
//       image: burger,
//     }

//   ];

//   // State: كميات المنتجات حسب id
//   const [quantities, setQuantities] = useState(
//     initialItems.reduce((acc, item) => {
//       acc[item.id] = 0;
//       return acc;
//     }, {})
//   );

//   // زيادة الكمية
//   const increment = (id) => {
//     setQuantities((prev) => ({
//       ...prev,
//       [id]: prev[id] + 1,
//     }));
//   };

//   // نقصان الكمية (لا تقل عن 0)
//   const decrement = (id) => {
//     setQuantities((prev) => ({
//       ...prev,
//       [id]: prev[id] > 0 ? prev[id] - 1 : 0,
//     }));
//   };

//   return (
//     <ProductsSection id="products">
//       <Container>
//         <Title>قائمة منتجاتنا 😋</Title>
//         <Row className="g-4">
//           {initialItems.map((item, index) => (
//             <Col md={4} key={item.id}>
//               <ProductCard delay={index * 0.2}>
//                 {item.badge && <Badge>{item.badge}</Badge>}
//                 <ProductImage variant="top" src={item.image} alt={item.name} />
//                 <ProductBody>
//                   <ProductTitle>{item.name}</ProductTitle>
//                   <ProductText>{item.desc}</ProductText>
//                   <Price>{item.price}</Price>

//                   <QuantityControls>
//                     <QtyButton
//                       aria-label={`نقص كمية ${item.name}`}
//                       onClick={() => decrement(item.id)}
//                       disabled={quantities[item.id] === 0}
//                     >
//                       −
//                     </QtyButton>
//                     <QuantityDisplay>{quantities[item.id]}</QuantityDisplay>
//                     <QtyButton
//                       aria-label={`زيادة كمية ${item.name}`}
//                       onClick={() => increment(item.id)}
//                     >
//                       +
//                     </QtyButton>
//                   </QuantityControls>

//                   <AddButton
//                     disabled={quantities[item.id] === 0}
//                     onClick={() => alert(`تم إضافة ${quantities[item.id]} من ${item.name} إلى السلة!`)}
//                   >
//                     أضف للسلة 🛒
//                   </AddButton>
//                 </ProductBody>
//               </ProductCard>
//             </Col>
//           ))}
//         </Row>
//       </Container>
//     </ProductsSection>
//   );
// }

// export default Products;