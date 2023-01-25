import { Element } from 'react-scroll'

const BeforeTattoo = () => {
  return (
    <section className='py-[40px] px-[20px] md:h-[50vh]'>
      <Element name='beforeTattoo'>
        <h3 className='title flex-1  pb-[40px]'>Как подготовиться к сеансу?</h3>
        <p className='beforeTattooText'>
          Перед сеансом желательно покушать, на длительные сеансы можно взять
          перекус с собой.
        </p>
        <p className='beforeTattooText'>
          Можно предварительно удалить волосы с участка, где будет татуировка.
        </p>
        <p className='beforeTattooText'>
          Если кожа достаточно сухая, начать ее увлажнять за несколько
          дней/неделю до сеанса (особенно это относится к голени)
        </p>
        <p className='beforeTattooText'>
          Прийти в удобной одежде или взять с собой сменный комплект. Чтобы было
          максимально комфортно сидеть/лежать
        </p>
      </Element>
    </section>
  )
}

export default BeforeTattoo
