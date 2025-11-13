import React from 'react';
import { 
  View, 
  StyleSheet, 
  StatusBar,
  SafeAreaView 
} from 'react-native';
import ProductScreen from './src/screens/ProductScreen';
import ProductDetailsScreen from './src/screens/ProductDetailScreen';
import ShoppingCart from './src/screens/ShoppingCart';

const App = () => {
  return (
   
      <View style={styles.container}>
        <ShoppingCart/>
        
      </View>
   
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  container: {
    flex: 1,
  },
});

export default App;