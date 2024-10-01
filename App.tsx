import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker'

const MenuForm = () => {
  // State variables for each field
  const [dishName, setDishName] = useState('');
  const [description, setDescription] = useState('');
  const [course, setCourse] = useState('Starters');
  const [price, setPrice] = useState('');

  // Predefined list of courses
  const courses = ['Starters', 'Main', 'Main or Dessert'];

  // Function to handle form submission
  const handleSubmit = () => {
    if (!dishName || !description || !price) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }
    // You can handle the collected data here (e.g., sending it to a server or displaying it)
    Alert.alert(
      'Menu Item Submitted',
      `Dish: ${dishName}\nDescription: ${description}\nCourse: ${course}\nPrice: $${price}`
    );
    // Reset form (optional)
    setDishName('');
    setDescription('');
    setCourse('Starters');
    setPrice('');
  };

  return (
    <View style={styles.container}>
      {/* Dish Name Input */}
      <Text style={styles.label}>Dish Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Dish Name"
        value={dishName}
        onChangeText={setDishName}
      />

      {/* Description Input */}
      <Text style={styles.label}>Description</Text>
      <TextInput
        style={styles.textArea}
        placeholder="Enter Description"
        value={description}
        onChangeText={setDescription}
        multiline
        numberOfLines={4}
      />

      {/* Predefined Course Selection */}
      <Text style={styles.label}>Select Course</Text>
      <Picker
        selectedValue={course}
        style={styles.picker}
        onValueChange={(itemValue: React.SetStateAction<string>) => setCourse(itemValue)}
      >
        {courses.map((courseOption, index) => (
          <Picker.Item key={index} label={courseOption} value={courseOption} />
        ))}
      </Picker>

      {/* Price Input */}
      <Text style={styles.label}>Price ($)</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Price"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric" // Allows numeric input
      />

      {/* Submit Button */}
      <Button title="Submit Menu Item" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    fontSize: 16,
  },
  textArea: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    fontSize: 16,
    height: 100,
    textAlignVertical: 'top', // For better alignment in multiline
  },
  picker: {
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 20,
  },
});

export default MenuForm;
