import Image from 'next/image';

 type yogaItem = {
    image: string;
    title: string;
    description: string;
};
 
const yoga: yogaItem[] =[
    {
        image: '/yoga1.png',
        title: 'Asana',
        description: 'Grab the opportunity to deepen your own yoga practice, relax, restore and experience india!'
    },
    {
        image: '/yoga2.png',
        title: 'Meditation',
        description: 'Grab the opportunity to deepen your own yoga practice, relax, restore and experience india!'
    },
    {
        image: '/yoga3.png',
        title: 'Mudra',
        description: 'Grab the opportunity to deepen your own yoga practice, relax, restore and experience india!'
    },
    {
        image: '/yoga4.png',
        title: 'Bandhas',
        description: 'Grab the opportunity to deepen your own yoga practice, relax, restore and experience india!'
    },
    {
        image: '/yoga5.png',
        title: 'Philosophy',
        description: 'Grab the opportunity to deepen your own yoga practice, relax, restore and experience india!'
    },
    {
        image: '/yoga6.png',
        title: 'Pranayama',
        description: 'Grab the opportunity to deepen your own yoga practice, relax, restore and experience india!'
    }
]

function YogaAspect (){
   
    return(
        <section className='mt-20 px-6 mb-8'>
            <Image className='mx-auto' src='/zogin.png' width={35} height={35} alt='Zogin logo'/>
            <h3 className='text-center text-3xl mt-8'>Enjoy All Aspects Of Yoga</h3>
            <div className='block md:grid  grid-cols-6 mt-8 gap-x-3 py-3'>
                
            {yoga.map((item, index) => (
                        <div key={index} className="bg-white py-4 rounded-3xl border shadow-xl  mt-4">
                            <Image 
                                src={item.image} 
                                alt={item.title} 
                                width={100} 
                                height={100} 
                                className="w-full h-32 object-contain"
                            />
                            <div className="p-6 ">
                                <h3 className="text-xl text-[#263246] text-center  mb-2">{item.title}</h3>
                                <p className="text-[#6E7580] text-center ">{item.description}</p>
                            </div>
                        </div>
                    ))}         
            </div>
        </section>

    )
}
export default YogaAspect