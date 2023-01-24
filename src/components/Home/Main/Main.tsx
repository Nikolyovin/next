import React from 'react'
import Portfolio from './Potfolio/Portfolio'
import Profile from './Profile/Profile'

const Main = () => {
  return (
    <main className='w-full '>
      <Profile />
      <Portfolio />
      {/* <ContactMeTop />
            <BeforeTattoo />
            <AnswersOnQuestions />
            <Reminder />
            <ContactMeBottom /> */}
    </main>
  )
}

export default Main
