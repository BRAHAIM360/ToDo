import AsyncStorage from '@react-native-async-storage/async-storage'
import shortid from 'shortid'

export interface ToDoItemtype {
  id: string
  subject: string
  done: boolean
}

export const useStorage = () => {
  const StoreUser = async (key: string, value: string) => {
    try {
      await AsyncStorage.setItem(key, value)
    } catch (error) {
      console.log(error)
    }
  }

  const ReadUser = async (key: string) => {
    try {
      const jsonValue = await AsyncStorage.getItem(key)
      return jsonValue != null ? JSON.parse(jsonValue) : null
    } catch (e) {
      // error reading value
    }
  }
  const StoreToDo = async (data: ToDoItemtype[]) => {
    try {
      try {
        await AsyncStorage.setItem('ToDo', JSON.stringify(data))
      } catch (error) {
        console.log(error)
      }
    } catch (error) {}
  }

  const ReadToDo = async (setToDo: any) => {
    try {
      const data = await AsyncStorage.getItem('ToDo')
      if (data != null) {
        setToDo(JSON.parse(data))
      } else {
        setToDo([
          {
            id: shortid.generate(),
            subject: 'Regarder un match de Foot ',
            done: false
          },
          {
            id: shortid.generate(),
            subject: 'Lire un livre chaque semaine',
            done: false
          }
        ])
      }
    } catch (e) {
      // error reading value
    }
  }
  const UpdateToDo = async (value: string) => {
    try {
      await AsyncStorage.setItem('ToDo', value)
    } catch (error) {
      console.log(error)
    }
  }
  const DeleteToDo = async (value: string) => {
    try {
      await AsyncStorage.setItem('ToDo', value)
    } catch (error) {
      console.log(error)
    }
  }
  const ClearToDo = async () => {
    try {
      await AsyncStorage.removeItem('ToDo')
      console.log('item cleared')
    } catch (error) {
      console.log(error)
    }
  }

  return { StoreUser, ReadUser, StoreToDo, ReadToDo, ClearToDo }
}
