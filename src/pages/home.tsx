
import { Link } from 'react-router-dom';
import ProductCard from '../Components/ProductCard.tsx';

const Home = () => {
  const addToCartHandler = () => {

  }
  return (
    <div className="home">
      <section className=""></section>
      <h1 className="">Latest Products
        <Link to="/search" className='findmore'>More</Link></h1>
      <main className=""><ProductCard productId='dfs' name='mac' handler={addToCartHandler} price={4545} stock={435} photo='https://m.media-amazon.com/images/I/316ArzLeJ2L._SY445_SX342_QL70_FMwebp_.jpg' /></main>

    </div>
  )
}

export default Home