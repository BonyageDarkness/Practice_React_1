// src/components/Alert.jsx

import clsx from 'clsx'
import css from './Alert.module.css'
import { HiUser } from 'react-icons/hi'

const UserMenu = ({ name }) => {
    return (
        <div>
            <p>
                <HiUser /> {name}
            </p>
        </div>
    )
}
const Alert = ({ variant, outlined, elevated, children }) => {
    return (
        <p
            className={clsx(
                css[variant],
                outlined && css.isOutlined,
                elevated && css.isElevated
            )}
        >
            {children}{' '}
        </p>
    )
}

export { Alert }
