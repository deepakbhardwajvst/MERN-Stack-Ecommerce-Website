import { FaPlus } from "react-icons/fa";

FaPlus
type ProductsProps = {
  productId: string;
  photo: string;
  name: string;
  price: number;
  stock: number;
  handler: () => void;
}
const server = "fhdg"
const ProductCard = ({ productId, photo, name, price, stock, handler }: ProductsProps) => {
  return (
    <div className="product-card">
      <img src={`${photo}`} alt={name} className="" />
      <p className="name">{name}</p>
      <span className="price">₹{price}</span>
      <div className=""><button onClick={() => handler()}><FaPlus /></button></div>
    </div>
  )
}

export default ProductCard