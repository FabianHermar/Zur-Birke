import Image from 'next/image'

export default function Payments() {
  return (
    <section className='mt-24' id='payments'>
      <h2 className='text-5xl font-[PlayFair] text-center mb-10'>
        Available payment methods
      </h2>
      <ul>
        <li className='flex items-center justify-center mb-10'>
          <Image
            src='/cash-icon.svg'
            alt='Cash-icon'
            width={100}
            height={100}
          />
        </li>
      </ul>
    </section>
  )
}
