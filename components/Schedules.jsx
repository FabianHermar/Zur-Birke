import Image from 'next/image'

export default function Schedules() {
  return (
    <section className='schedules mt-24' id='schedules'>
      <h2 className='text-5xl font-[PlayFair] text-center mb-10'>
        Our opening hours
      </h2>
      <div className='flex items-center justify-center mb-6 flex-col'>
        <Image
          className='w-10 h-10 lg:w-12 lg:h-12'
          src='/location-pin.svg'
          alt='location-pin'
          width={50}
          height={50}
        />
        <span className='font-[Questrial] text-center mt-2 text-lg lg:text-2xl drop-shadow-md'>
          Birkenweiler 4.Gartenweg 19, 39128 Magdeburg, Germany
        </span>
      </div>
      <div className='overflow-x-auto flex items-center justify-center sm:rounded-md'>
        <table className='w-96 text-left text-gray-500'>
          <tbody>
            <tr className='bg-[#deb887]/20 border-b'>
              <th
                scope='row'
                className='px-6 py-4 text-xl font-[SegoeBold] text-gray-900 whitespace-nowrap'
              >
                Monday
              </th>
              <td className='px-6 py-4 font-medium font-[Questrial]'>Closed</td>
            </tr>
            <tr className='border-b bg-[#deb887]/30'>
              <th
                scope='row'
                className='px-6 py-4 text-xl font-[SegoeBold] text-gray-900 whitespace-nowrap'
              >
                Tuesday
              </th>
              <td className='px-6 py-4 font-medium font-[Questrial]'>
                11:30 AM - 01:30 PM <br /> 05:00 PM - 8:00 PM
              </td>
            </tr>
            <tr className='bg-[#deb887]/20 border-b'>
              <th
                scope='row'
                className='px-6 py-4 text-xl font-[SegoeBold] text-gray-900 whitespace-nowrap'
              >
                Wednesday
              </th>
              <td className='px-6 py-4 font-medium font-[Questrial]'>
                11:30 AM - 01:30 PM <br /> 05:00 PM - 8:00 PM
              </td>
            </tr>
            <tr className='border-b bg-[#deb887]/30'>
              <th
                scope='row'
                className='px-6 py-4 text-xl font-[SegoeBold] text-gray-900 whitespace-nowrap'
              >
                Thursday
              </th>
              <td className='px-6 py-4 font-medium font-[Questrial]'>
                11:30 AM - 01:30 PM <br /> 05:00 PM - 8:00 PM
              </td>
            </tr>
            <tr className='border-b bg-[#deb887]/20'>
              <th
                scope='row'
                className='px-6 py-4 text-xl font-[SegoeBold] text-gray-900 whitespace-nowrap'
              >
                Friday
              </th>
              <td className='px-6 py-4 font-medium font-[Questrial]'>
                11:30 AM - 01:30 PM <br /> 05:00 PM - 10:00 PM
              </td>
            </tr>
            <tr className='border-b bg-[#deb887]/30'>
              <th
                scope='row'
                className='px-6 py-4 text-xl font-[SegoeBold] text-gray-900 whitespace-nowrap'
              >
                Saturday
              </th>
              <td className='px-6 py-4 font-medium font-[Questrial]'>
                11:30 AM - 11:00 PM
              </td>
            </tr>
            <tr className='border-b bg-[#deb887]/20'>
              <th
                scope='row'
                className='px-6 py-4 text-xl font-[SegoeBold] text-gray-900 whitespace-nowrap'
              >
                Sunday
              </th>
              <td className='px-6 py-4 font-medium font-[Questrial]'>
                11:00 AM - 05:00 PM
              </td>
            </tr>
          </tbody>
        </table>
        <div className='relative flex items-center lg:items-start justify-center lg:justify-around flex-col'>
          <div className='absolute lg:w-64 lg:h-64 bg-gradient-to-r from-amber-700 to-white rounded-full blur-2xl lg:mt-44 lg:left-32 opacity-20 -z-20'></div>
          <div className='absolute lg:w-72 lg:h-72 bg-gradient-to-r from-amber-700 to-white rounded-full blur-2xl lg:mb-32 lg:right-96 opacity-20 -z-20'></div>
        </div>
      </div>
    </section>
  )
}
