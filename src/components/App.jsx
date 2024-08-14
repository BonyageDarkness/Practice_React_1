// src/components/App.jsx

import { Alert } from './Alert'
import { HiUser } from 'react-icons/hi'

const App = ({ name }) => {
    return (
        <>
            <Alert variant="info">
                <span>
                    <HiUser className="my-icon" size="24" /> {name}
                </span>
                Would you like to browse our recommended products?
            </Alert>
            <Alert variant="error">
                There was an error during your last transaction
            </Alert>
            <Alert variant="success">
                Payment received, thank you for your purchase
            </Alert>
            <Alert variant="warning">
                Please update your profile contact information
            </Alert>
        </>
    )
}
export default App
