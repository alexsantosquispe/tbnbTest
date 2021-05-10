import firestore from '@react-native-firebase/firestore'
import * as Utils from '../../utils'

export const fetchItems = (
  collection,
  callback,
  orderBy = ['uid', 'asc'],
  includeDocId = false
) => {
  return firestore()
    .collection(collection)
    .orderBy(...orderBy)
    .onSnapshot(
      (querySnapshot) => {
        // TODO: Complete this part to check what items have been changed
        // const docsChanged = querySnapshot.docChanges().map((document) => {
        //   return { uid: document.doc.data().uid, status: document.type }
        // })
        let result = null
        if (includeDocId) {
          result = querySnapshot.docs.map((document) => {
            return {
              _docId: document.id,
              uid: document.uid,
              ...document.data()
            }
          })
        } else {
          result = querySnapshot.docs.map((document) => {
            return {
              uid: document.uid,
              ...document.data()
            }
          })
        }
        callback({ success: true, data: result })
      },
      (error) => {
        callback({ success: false, error })
      }
    )
}

export const getItemById = (collection, itemUid, callback) => {
  return firestore()
    .collection(collection)
    .where('uid', '==', itemUid)
    .onSnapshot(
      (querySnapshot) => {
        const result = querySnapshot.docs[0].data()
        callback({ success: true, data: result })
      },
      (error) => {
        callback({ success: true, error })
      }
    )
}

export const getDocumentReference = (collection, docId) => {
  if (!collection || !docId) return
  return firestore().collection(collection).doc(docId)
}

export const addItem = async (collection, item) => {
  try {
    const currentDate = Utils.getCurrentDate()
    const response = await firestore()
      .collection(collection)
      .add({ ...item, createdAt: currentDate, modifiedAt: currentDate })
    return { success: true, data: response }
  } catch (error) {
    return { success: false, error }
  }
}

export const updateItem = async (collection, item, data) => {
  try {
    const currentDate = Utils.getCurrentDate()
    const documentReference = getDocumentReference(collection, item._docId)
    await documentReference.update({
      quantity: item.quantity + data.quantity,
      modifiedAt: currentDate
    })
    return { success: true }
  } catch (error) {
    return { success: false, error }
  }
}

export const addArrayOfItems = async (collection, items) => {
  try {
    if (items && items.length > 0) {
      for (let index = 0; index < items.length; index++) {
        const item = items[index]
        await addItem(collection, item)
      }
      return { success: true }
    }
    return { success: false }
  } catch (error) {
    return { success: false, error }
  }
}

export const setArrayOfItems = async (
  collection,
  currentItems,
  attachedItems
) => {
  try {
    if (collection && attachedItems && attachedItems.length > 0) {
      for (let index = 0; index < attachedItems.length; index++) {
        const item = attachedItems[index]
        const productItemIndex = currentItems.findIndex(
          (productItem) =>
            productItem.name === item.name && productItem.price === item.price
        )
        if (productItemIndex != -1) {
          const resultItem = currentItems[productItemIndex]
          await updateItem(collection, resultItem, item)
        } else {
          await addItem(collection, item)
        }
      }
      return { success: true }
    }
    return { success: false }
  } catch (error) {
    return { success: false, error }
  }
}
