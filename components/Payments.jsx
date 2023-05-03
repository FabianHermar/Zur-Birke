import Image from 'next/image'

export default function Payments() {
  return (
    <section className='mt-24' id='payments'>
      <h2 className='text-5xl font-[PlayFair] text-center mb-10'>
        Available payment methods
      </h2>
      <ul className='flex items-center justify-center mb-10 select-none opacity-80'>
        <li className='flex justify-center items-center flex-col'>
          <Image src='/cash-icon.svg' alt='Cash' width={70} height={70} />
          <p className='font-[SegoeBold] text-gray-800 text-xl'>Cash</p>
        </li>
        <li className='ml-16 flex justify-center items-center flex-col'>
          <Image src='/mc_ec.png' alt='EC card' width={70} height={70} />
          <p className='font-[SegoeBold] text-gray-800 text-xl'>EC card</p>
        </li>
      </ul>
    </section>
  )
}
