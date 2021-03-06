import React from 'react'
import Alert from 'react-bootstrap/Alert'

const FormAlert = ({
    alertVariant,
    showAlert,
    onCloseEvent,
    message
}) => {
    return (
        <Alert
            variant={alertVariant}
            show={showAlert}
            onClose={onCloseEvent}
            dismissible
        >
            <Alert.Heading>{message}</Alert.Heading>
        </Alert>
    )
}

export default FormAlert