import Image from 'next/image'

export default function Info() {
  return (
    <section className='relative min-h-[500px]'>
      <div className='pt-4 pb-4 overflow-hidden z-10'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6'>
          <div className='lg:grid lg:grid-cols-12 mx-auto lg:gap-16 justify-center'>
            <div className='relative z-10 px-4 sm:px-6 sm:text-center lg:mb-0 lg:px-0 lg:text-left lg:flex col-span-6'>
              <div className='lg:py-24 italic'>
                <p className='mt-3 font-sans sm:mx-auto lg:mx-0 max-w-lg text-center lg:text-left lg:text-base sm:text-xl text-black sm:mt-5'>
                  <h4 className='text-center text-lg font-bold mb-2'>
                    On the sunny terrace or in the guest room.
                  </h4>{' '}
                  Fancy a cozy evening with German food in our beautiful
                  restaurant? Our attractive outdoor area is particularly
                  inviting when the weather is nice.
                </p>
                <p className='mt-3 font-sans sm:mx-auto lg:mx-0 max-w-lg text-center lg:text-left lg:text-base sm:text-xl text-black sm:mt-5'>
                  <h4 className='text-center text-lg font-bold mb-2'>
                    An excellent lunchtime restaurant.
                  </h4>{' '}
                  Our German cuisine will spoil you with particularly authentic
                  dishes. Let yourself be spoiled by our delicious dishes and a
                  comprehensive selection of cool drinks. Enjoy your lunch or
                  dinner at our location!
                </p>
                <p className='mt-3 font-sans sm:mx-auto lg:mx-0 max-w-lg text-center lg:text-left lg:text-base sm:text-xl text-black sm:mt-5'>
                  Homemade cakes await you every Sunday. What could be more
                  appropriate than a cup of hot coffee.
                </p>
                <p className='mt-3 font-sans sm:mx-auto lg:mx-0 max-w-lg text-center lg:text-left lg:text-base sm:text-xl text-black sm:mt-5'>
                  Your events and celebrations are very important to us, just
                  ask us, we look forward to it.
                </p>
                <p className='mt-3 font-sans sm:mx-auto lg:mx-0 max-w-lg text-center lg:text-left lg:text-base sm:text-xl text-black sm:mt-5'>
                  We wish you bon appetit: Ihre Birke
                </p>
              </div>
            </div>
            <div className='mx-auto flex items-center justify-center lg:justify-start'>
              <div className=' relative md:absolute -z-20'>
                <div className='flex image-tech justify-center items-center relative flex-col px-6 sm:px-12 pt-8 w-96 lg:w-[700px] select-none z-20  md:hidden lg:block'>
                  <Image
                    src='/shrimp.webp'
                    alt='PC'
                    loading='lazy'
                    width={600}
                    height={600}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
