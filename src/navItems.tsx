import PagesModel from './types/PagesModel'

import iconTodo from './images/icon-todo.svg'
import iconCalendar from './images/icon-calendar.svg'
import iconReminders from './images/icon-reminders.svg'
import iconPlanning from './images/icon-planning.svg'

export const pages: Array<PagesModel> = [
    {
        page: 'Features',
        subPages: [
            {
                label: 'Todo List',
                icon: iconTodo,
                url: '/todolist'
            },
            {
                label: 'Calendar',
                icon: iconCalendar,
                url: '/calendar'
            },
            {
                label: 'Reminders',
                icon: iconReminders,
                url: '/reminders'
            },
            {
                label: 'Planning',
                icon: iconPlanning,
                url: '/planning'
            }
        ]
    },
    {
        page: 'Company',
        subPages: [
            {
                label: 'History',
                url: '/history'
            },
            {
                label: 'Our Team',
                url: '/our-team'
            },
            {
                label: 'Blog',
                url: '/blog'
            }
        ]
    },
    {
        page: 'Careers',
    },
    {
        page: 'About',
    }
]
