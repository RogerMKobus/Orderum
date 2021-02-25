import React from 'react'
import { Formik } from 'formik'
import { TextInput } from 'react-native-paper'
import { Button } from 'react-native'
import Header from '../../components/Header'

// import { Container } from './styles';

const EditOrder = () => {

    return (
        <Formik
            initialValues={{ email: '' }}
            onSubmit={values => console.log(values)}
        >
            {({ handleChange, handleSubmit, values }) => (
                <>
                    <Header />
                    <TextInput
                        label="Email"
                        value={values.email}
                        onChangeText={handleChange('email')}
                    />
                    <Button onPress={handleSubmit} title="Submit" />
                </>
            )}
        </Formik>
    )
}

export default EditOrder;