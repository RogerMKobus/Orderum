import React, { useState } from 'react'
import { useFormik } from 'formik'
import { TextInput, Button } from 'react-native-paper'
import Header from '../../components/Header'
import DateTimePicker from '@react-native-community/datetimepicker';
import api from '../../services/api'
import { useNavigation } from '@react-navigation/native'
import { Picker } from '@react-native-picker/picker';

const EditOrder = (data) => {

    const { title, description, contact, date, _id, lane: orderLane } = data.route.params

    const navigation = useNavigation();

    const [show, setShow] = useState(false)
    const [lane, setLane] = useState(orderLane)

    const { handleChange, handleSubmit, values, setFieldValue } = useFormik({
        initialValues: {
            title,
            description,
            contact,
            date,
            lane
        },
        onSubmit: async (values) => {            
            try {
                if (values.title && values.date) {
                    await api.put(`/${_id}/order`, values)
                    navigation.push('Home')
                }
            }
            catch (err) {
                console.log(err)
            }
        }
    })

    const onChange = (event, selectedDate) => {
        setShow(false)
        if (selectedDate) {
            const selectedDateString = selectedDate.getDate() + '/' + (selectedDate.getMonth() + 1) + '/' + selectedDate.getFullYear()
            setFieldValue("date", selectedDateString)
        }
    }

    return (
        <>
            <Header />
            <TextInput
                label="Título"
                value={values.title}
                onChangeText={handleChange('title')}
            />
            <TextInput
                label="Descrição"
                value={values.description}
                onChangeText={handleChange('description')}
            />
            <TextInput
                label="Contato"
                value={values.contact}
                onChangeText={handleChange('contact')}
            />
            <TextInput
                style={{
                    marginBottom: 20
                }}
                label="Data"
                value={values.date}
                onChangeText={handleChange('date')}
                right={
                    <TextInput.Icon
                        name="calendar"
                        onPress={() => setShow(true)}
                    />
                }
            />
            { show &&
                <DateTimePicker
                    testID="dateTimePicker"
                    is24Hour={true}
                    value={new Date()}
                    display="default"
                    mode="date"
                    onChange={onChange}
                />
            }
            <Picker
                selectedValue={lane}
                onValueChange={(itemValue) => {
                    setFieldValue("lane", itemValue)
                    setLane(itemValue)
                }                    
                }
            >
                <Picker.Item label={data.route.params[0].title} value={data.route.params[0]._id} />
                <Picker.Item label={data.route.params[1].title} value={data.route.params[1]._id} />
                <Picker.Item label={data.route.params[2].title} value={data.route.params[2]._id} />
                <Picker.Item label={data.route.params[3].title} value={data.route.params[3]._id} />
            </Picker>

            <Button
                style={{
                    height: 50,
                    paddingTop: 5
                }}
                icon="check"
                color='#073596'
                mode="contained"
                onPress={handleSubmit}>
                Salvar
            </Button>
        </>
    )
}

export default EditOrder;