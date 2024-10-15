import Image from 'next/image'
function Gallery (){
    return (
        <section className='w-full'>
            <h3 className='text-center text-3xl '>Our Gallery</h3>
            <p className='text-center text-medium px-8 mt-10 md:w-[45%] md:text-lg mx-auto'>This is the beautiful yogi and yoginis that have shared their journey and growth with
            us. Take a look!</p>
            <div className="grid grid-cols-2 w-full mt-10 w-full md:grid-cols-3 lg:grid-cols-4 ">
            <Image src='/gallery1.png' width={360} height={255} alt='Gallery 1 image'/>
            <Image src='/gallery-2.jpg.webp' width={360} height={255} alt='Gallery 1 image'/>
            <Image src='/gallery-3.jpg.webp' width={360} height={255} alt='Gallery 1 image'/>
            <Image src='/gallery-4.webp' width={360} height={255} alt='Gallery 1 image'/>
            <Image src='/gallery-5.jpg.webp' width={360} height={255} alt='Gallery 1 image'/>
            <Image src='/gallery-6.jpg.webp' width={360} height={255} alt='Gallery 1 image'/>
            <Image src='/gallery-7.webp' width={360} height={255} alt='Gallery 1 image'/>
            <Image src='/gallery-8.jpg.webp' width={360} height={255} alt='Gallery 1 image'/>
           
            </div>
        </section>

    )
}
export default Gallery;