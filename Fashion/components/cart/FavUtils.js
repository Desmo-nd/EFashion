import AsyncStorage from "@react-native-async-storage/async-storage";

export const addToFav = async (favItem) => {
  try {
    // Retrieve the user ID from AsyncStorage
    const userId = await AsyncStorage.getItem('id');
   
console.log('user', userId);

    // Make a POST request to the server's /api/cart/add/:id endpoint
    const response = await fetch(`https://jirani-bebe9d207799.herokuapp.com/api/favourite/add/${userId.replace(/"/g, '')}`, {
      method: 'POST',
      
      headers: {
        'Content-Type': 'application/json',
      },
      
      body: JSON.stringify({
        favItem,
      }),
    });

    console.log('favItem', favItem);



    if (!response.ok) {
      console.log('Server returned an error with status:', response.status);
      return { ok: false }; // Return a simple object indicating failure
    }

    const data = await response.json();
    console.log('Server response:', data);

    return { ok: true, data }; // Return a simple object indicating success along with data

  } catch (error) {
    console.error('Error adding product to favorite:', error);
    return { ok: false, error: 'There was a network error or an unexpected issue.' }
  }
};

