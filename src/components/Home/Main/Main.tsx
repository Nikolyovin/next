import React from 'react'
import AnswersOnQuestions from './AnswersOnQuestions/AnswersOnQuestions'
import BeforeTattoo from './BeforeTattoo/BeforeTattoo'
import ContactMe from './ContactMe/ContactMe'
import NeedEntry from './NeedEntry/NeedEntry'
import Portfolio from './Potfolio/Portfolio'
import Profile from './Profile/Profile'
import Reminder from './Reminder/Reminder'

const Main = () => {
	return (
		<main className="w-full ">
			<Profile />
			<Portfolio />
			<NeedEntry />
			<BeforeTattoo />
			<AnswersOnQuestions />
			<Reminder />
			<ContactMe />
		</main>
	)
}

export default Main
