import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { Navbar } from './src/Navbar'
import { AddTodo } from './src/AddTodo'
import { Todo } from './src/Todo'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function App() {

  const [todos, setTodos] = useState([])
  const [value, setValue] = useState('')

  const addTodo = (title) => {
    // const newTodo = {
    //   id: Date.now().toString(),
    //   title: title
    // }
    // setTodos(todos.concat([ newTodo]))
    // setTodos((prevTodos) => {
    //   return [
    //     ...prevTodos, 
    //     newTodo
    //   ]
    // })

    const saveItems = async (list) => {
      try {
        await AsyncStorage.setItem('tasksList', JSON.stringify(list));
      } catch (err) {
        alert(err);
      }
    }

    setTodos((prev) => {
      const newList = [...prev, {
        id: Date.now().toString(),
        title
      }]
      saveItems(newList)
      return newList
    })
    setValue('');
  }

  const removeTodo = id => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }

  const getData = async () => {
    try {
      const savedList = await (AsyncStorage.getItem('tasksList'));
      if (savedList !== null) {
        setTodos(JSON.parse(savedList));
      }
    } catch (err) {
      alert(err);
    }
  }

  useEffect(() => {
    getData();
  }, [])


  return (
    <View>
      <Navbar title="Todo App" />
      <View style={styles.container}>
        <AddTodo onSubmit={addTodo}
          value={value}
          setValue={setValue} />
        <FlatList
          keyExtractor={item => item.id.toString()}
          data={todos}
          renderItem={({ item }) => (
            <Todo todo={item} onRemove={removeTodo} />
          )}
        />
        {/* <View>
        {todos.map(todo => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </View> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 40,
  },
  // page: {
  //   backgroundColor: '#ECF0F3',
  // }
});
