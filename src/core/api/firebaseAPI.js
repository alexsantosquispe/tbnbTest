import firestore from '@react-native-firebase/firestore'

export const fetchItems = (collection, callback, orderBy) => {
  const orderByDefault = orderBy || ['uid', 'asc']

  return firestore()
    .collection(collection)
    .orderBy(...orderByDefault)
    .onSnapshot((querySnapshot) => {
      const result = querySnapshot.docs.map((document) => {
        return {
          uid: document.uid,
          ...document.data()
        }
      })
      callback(result)
    })
}

export const getItemById = (collection, itemId) => {
  return firestore().collection(collection).doc(itemId)
}

export const addItem = async (collection, item) => {
  try {
    // Complete this funtion to add an item
    await firestore().collection(collection).add(item)
  } catch (error) {
    console.log(error)
  }
}
