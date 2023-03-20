import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className='bg-black/95 border-t border-gray-100/10'>
      <div className='grid grid-cols-1 gap-8 px-6 py-8 md:grid-cols-2'>
        <div>
          <h2 className='mb-6 text-[15px] font-medium text-gray-100/80 uppercase font-[SegoeBold] lg:text-center'>
            OUR LOCATION
          </h2>
          <ul className='text-gray-100/80 text-[11px]'>
            <li className='mb-4'>
              <h5 className='text-lg font-sans font-semibold'>Address:</h5>
              <address className='text-base'>
                Birkenweiler 4.Gartenweg 19, 39128 Magdeburg, Germany
              </address>
            </li>
            <li className='mb-4'>
              <h5 className='text-lg font-sans font-semibold'>Phone:</h5>
              <a
                href='tel:+4915256-426-691'
                className='text-base hover:underline decoration-[#deb887]'
              >
                +4915256-426-691
              </a>
            </li>
            <li className='mb-4'>
              <h5 className='text-lg font-sans font-semibold'>Email:</h5>
              <a
                href='mailto:zur.birke.magdeburg@googlemail.com'
                className='text-base hover:underline decoration-[#deb887]'
              >
                zur.birke.magdeburg@googlemail.com
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className='mb-6 text-[15px] font-medium text-gray-100/80 uppercase font-[SegoeBold] lg:text-center'>
            OPENING TIMES
          </h2>
          <ul className='text-gray-100/80 text-[11px]'>
            <li className='mb-4 font-sans font-bold'>
              <p className='flex justify-between items-start text-base'>
                Monday
                <span className='text-base text-white text-right'>Closed</span>
              </p>
            </li>
            <li className='mb-4 font-sans font-bold'>
              <p className='flex justify-between items-start text-base'>
                Tuesday
                <article className='flex flex-col'>
                  <span className='text-base text-white text-right'>
                    11:30 AM – 01:30 PM
                  </span>
                  <span className='text-base text-white text-right'>
                    05:00 PM – 08:00 PM
                  </span>
                </article>
              </p>
            </li>
            <li className='mb-4 font-sans font-bold'>
              <p className='flex justify-between items-start text-base'>
                Wednesday
                <article className='flex flex-col'>
                  <span className='text-base text-white text-right'>
                    11:30 AM – 01:30 PM
                  </span>
                  <span className='text-base text-white text-right'>
                    05:00 PM – 08:00 PM
                  </span>
                </article>
              </p>
            </li>
            <li className='mb-4 font-sans font-bold'>
              <p className='flex justify-between items-start text-base'>
                Thursday
                <article className='flex flex-col'>
                  <span className='text-base text-white text-right'>
                    11:30 AM – 01:30 PM
                  </span>
                  <span className='text-base text-white text-right'>
                    05:00 PM – 08:00 PM
                  </span>
                </article>
              </p>
            </li>
            <li className='mb-4 font-sans font-bold'>
              <p className='flex justify-between items-start text-base'>
                Friday
                <article className='flex flex-col'>
                  <span className='text-base text-white text-right'>
                    11:30 AM – 01:30 PM
                  </span>
                  <span className='text-base text-white text-right'>
                    05:00 PM – 08:00 PM
                  </span>
                </article>
              </p>
            </li>
            <li className='mb-4 font-sans font-bold'>
              <p className='flex justify-between items-start text-base'>
                Saturday
                <span className='text-base text-white text-right'>
                  11:30 AM – 11:00 PM
                </span>
              </p>
            </li>
            <li className='mb-4 font-sans font-bold'>
              <p className='flex justify-between items-start text-base'>
                Sunday
                <span className='text-base text-white text-right'>
                  11:30 AM – 05:00 PM
                </span>
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className='px-5 md:px-6 py-6 bg-black md:flex md:items-center md:justify-between'>
        <Image
          src='/zur-birke.svg'
          alt='Boxode'
          className='w-16'
          width={100}
          height={100}
        />
        <div className='inline-block md:flex mt-4 space-x-3 sm:justify-center md:mt-0 font-sans'>
          <Link
            href='/'
            className='text-[11px] text-gray-100/80 hover:underline'
          >
            Home
          </Link>
          <Link
            href='/about-us'
            className='text-[11px] text-gray-100/80 hover:underline'
          >
            About Us
          </Link>
          <Link
            href='/privacystatement'
            className='text-[11px] text-gray-100/80 hover:underline'
          >
            Privacidad
          </Link>
          <Link
            href='/contact-us'
            className='text-[11px] text-gray-100/80 hover:underline'
          >
            Contact Us
          </Link>
          <span className='text-[11px] text-gray-100/80 sm:text-center'>
            © Zur Birke <span id='year'>2023</span>
          </span>
        </div>
      </div>
    </footer>
  )
}
