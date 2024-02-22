
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <section className=""></section>
      <h1 className="">Latest Products
        <Link to="/search" className='findmore'>More</Link></h1>
      <main className=""></main>
    </div>
  )
}

export default Home