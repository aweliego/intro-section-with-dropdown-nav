// Types
import PagesModel from './types/PagesModel'

// Assets
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
            },
            {
                label: 'Calendar',
                icon: iconCalendar,
            },
            {
                label: 'Reminders',
                icon: iconReminders,
            },
            {
                label: 'Planning',
                icon: iconPlanning,
            }
        ]
    },
    {
        page: 'Company',
        subPages: [
            {
                label: 'History',
            },
            {
                label: 'Our Team',
            },
            {
                label: 'Blog',
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
