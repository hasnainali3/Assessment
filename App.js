import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Image
} from 'react-native';

const App = () => {
  const data = [
    {
      image: 'https://img.freepik.com/free-vector/modern-copyright-symbol_23-2147872881.jpg?size=338&ext=jpg',
      name: 'Hasnain'
    }, {
      image: 'https://img.freepik.com/free-vector/modern-copyright-symbol_23-2147872881.jpg?size=338&ext=jpg',
      name: 'Hasnain'
    }, {
      image: 'https://img.freepik.com/free-vector/modern-copyright-symbol_23-2147872881.jpg?size=338&ext=jpg',
      name: 'Hasnain'
    }, {
      image: 'https://img.freepik.com/free-vector/modern-copyright-symbol_23-2147872881.jpg?size=338&ext=jpg',
      name: 'Hasnain'
    }, {
      image: 'https://img.freepik.com/free-vector/modern-copyright-symbol_23-2147872881.jpg?size=338&ext=jpg',
      name: 'Hasnain'
    }, {
      image: 'https://img.freepik.com/free-vector/modern-copyright-symbol_23-2147872881.jpg?size=338&ext=jpg',
      name: 'Hasnain'
    }, {
      image: 'https://img.freepik.com/free-vector/modern-copyright-symbol_23-2147872881.jpg?size=338&ext=jpg',
      name: 'Hasnain'
    }, {
      image: 'https://img.freepik.com/free-vector/modern-copyright-symbol_23-2147872881.jpg?size=338&ext=jpg',
      name: 'Hasnain'
    }, {
      image: 'https://img.freepik.com/free-vector/modern-copyright-symbol_23-2147872881.jpg?size=338&ext=jpg',
      name: 'Hasnain'
    }, {
      image: 'https://img.freepik.com/free-vector/modern-copyright-symbol_23-2147872881.jpg?size=338&ext=jpg',
      name: 'Hasnain'
    },
  ]

  return (
    <SafeAreaView>
      <TouchableWithoutFeedback>
        <ScrollView horizontal>
          {
            data.map((item, index) => <View key={index}>
              <Image source={{ uri: item.image }} style={{ height: 50, width: 50 }} />
              <Text>{item.name}</Text>
            </View>
            )
          }
        </ScrollView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default App;
