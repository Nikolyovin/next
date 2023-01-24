interface IButton {
    title: string
    icon: string
    href: string
}

export const arrButtons: IButton[] = [
    {
        href: 'portfolio',
        icon: 'ImageIcon',
        title: 'Моё портфолио'
    },
    {
        href: 'contactMeTop',
        icon: 'CreateIcon',
        title: 'Что нужно для записи?'
    },
    {
        href: 'beforeTattoo',
        icon: 'CreateIcon',
        title: 'Как подготовиться к сеансу?'
    },
    {
        href: 'answersOnQuestions',
        icon: 'CreateIcon',
        title: 'Ответы на вопросы'
    },
    {
        href: 'reminder',
        icon: 'CreateIcon',
        title: 'Памятка по уходу за татуировкой'
    },
    {
        href: 'contactMeBottom',
        icon: 'MailIcon',
        title: 'Как со мной связаться?'
    }
]