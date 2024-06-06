import { StyleSheet, Text, View, Button, TextInput } from 'react-native'
import React,{ useState } from 'react'

const AddNote = () => {
  const [enteredText, setEnteredText] = useState("");
  const handleChange = (val) => {
    setEnteredText(val);
  }
  const handleClick = () => {
    console.log(enteredText);
  }
  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Add Note</Text>
        <View>
          <TextInput onChangeText={handleChange} styles={styles.input}  />
        </View>
        <Button onPress={handleClick} title="Add" />
      </View>
    </View>
  )
}

export default AddNote

const styles = StyleSheet.create({
  input: {
    marginVertical: 20,
    width: '100%',
    borderBottomWidth: 2,
    fontSize: 16,
    padding: 10,

  },
  title: {
    fontSize: 20,
    fontWeight: "bold"
  },
  container:{
    flex: 1,
  },
  formContainer: {
    backgroundColor: "#f5f5f5",
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 10,
  }
})