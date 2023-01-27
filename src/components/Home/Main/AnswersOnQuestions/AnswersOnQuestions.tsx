import { Element } from 'react-scroll'
import ListQuestions from './ListQuestions'

const AnswersOnQuestions = () => {
    return (
        <section className='bg-slate-400 pt-[40px] pb-[60px] px-4'>
            <Element name='answersOnQuestions'>
                <h3 className='title flex-1 '>Ответы на вопросы</h3>
                <ListQuestions />
            </Element>
        </section>
    )
}

export default AnswersOnQuestions
