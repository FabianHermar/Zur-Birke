import styles from './Home.module.css'

export default function Principal() {
  return (
    <section className={styles.zur}>
      <div className={styles.zurblack}>
        <div className='text-white drop-shadow-lg shadow-black mt-32'>
          <h3 className='font-[Questrial] text-5xl'>Welcome to</h3>
          <h1 className='font-[PlayFair] text-9xl'>Zur Birke</h1>
          <p className='font-[Questrial] text-4xl mt-2'>Magdeburg</p>
          <p className='font-[Questrial] text-2xl pt-4 text-white/70'>
            German cuisine near you.
          </p>
        </div>
      </div>
    </section>
  )
}
