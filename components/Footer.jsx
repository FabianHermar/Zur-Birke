import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className='bg-black/95 border-t border-gray-100/10'>
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
            href='https://www.google.com/search?q=Zur%20Birke%20Magdeburg%20Birkenweiler%204.Gartenweg%2019'
            className='opacity-70 hover:opacity-100 transition'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Image
              src='/google-my-business.svg'
              alt='Facebook'
              width={25}
              height={25}
            />
          </Link>
          <Link
            href='https://fabianhmz.dev/'
            className='text-[12px] text-gray-100/80 underline decoration-[#deb887]/80 decoration-[2px] duration-200 hover:decoration-blue-600/80 hover:text-white'
            target='_blank'
            rel='noopener noreferrer'
          >
            Made with ❤️ by Fabian Herrera
          </Link>
          <span className='text-[12px] text-gray-100/80 sm:text-center'>
            © Zur Birke <span id='year'>2023</span>
          </span>
        </div>
      </div>
    </footer>
  )
}
