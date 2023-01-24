import React from 'react'
import NeedEntry from './NeedEntry/NeedEntry'
import Portfolio from './Potfolio/Portfolio'
import Profile from './Profile/Profile'

const Main = () => {
  return (
    <main className='w-full '>
      <Profile />
      <Portfolio />
      <NeedEntry />
      {/*<BeforeTattoo />
            <AnswersOnQuestions />
            <Reminder />
            <ContactMeBottom /> */}
    </main>
  )
}

export default Main
