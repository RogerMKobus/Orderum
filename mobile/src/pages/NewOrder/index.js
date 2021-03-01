import React, { useState } from 'react'
import { useFormik } from 'formik'
import { TextInput, Button } from 'react-native-paper'
import Header from '../../components/Header'
import DateTimePicker from '@react-native-community/datetimepicker';
import api from '../../services/api'
import { useNavigation } from '@react-navigation/native'

const NewOrder = () => {

  const navigation = useNavigation();

  const [show, setShow] = useState(false)

  const newDate = new Date()
  const dateString = (newDate.getDate() + 7) + '/' + (newDate.getMonth() + 1) + '/' + newDate.getFullYear()

  const { handleChange, handleSubmit, values, setFieldValue } = useFormik({
    initialValues: {
      title: '',
      description: '',
      contact: '',
      date: `${dateString}`
    },
    onSubmit: async (values) => {
      try {
        if (values.title && values.date) {
          await api.post('/order', values)
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

  const handleOpen = () => {
    setShow(true)
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
            onPress={handleOpen}
          />
        }
      />
      { show &&
        <DateTimePicker
          testID="dateTimePicker"
          is24Hour={true}
          value={newDate}
          display="default"
          mode="date"
          onChange={onChange}
        />
      }
      <Button
        style={{
          height: 50,
          paddingTop: 5
        }}
        icon="check"
        color='#073596'
        mode="contained"
        onPress={handleSubmit}>
        Enviar
      </Button>
    </>
  )
}

export default NewOrder;