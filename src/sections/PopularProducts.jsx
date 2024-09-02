import { products } from '../constants'
import  PopularProductsCard  from '../components/PopularProductsCard'

const PopularProducts = () => {
  return (
    <section id='products' className='max-sm:mt-12'>
      <div className='flex flex-col justify-start gap-5'>
        <h2 className='font-bold font-palanquin text-4xl'>Our <span className="text-coral-red">Popular</span> Products</h2>
        <p className='lg:max-w-lg mt-2 font-montserrat text-slate-gray'>Experience top of the line quality and style,
           with our sought-after selection. 
          Discover a world of comfort, design, and value.</p>
      </div>

      <div className="mt-16 grid lg:grid-cols-4 md:grid-col-3 sm:grid-col-2 grid-col-1 sm:gap-4 gap-14">
        {products.map((product)=>(
          <PopularProductsCard key={product.name} {...product}/>
        ))}
      </div>
    </section>
  )
}

export default PopularProducts