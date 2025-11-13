import React from 'react';
import { 
  View, 
  
  Image, 
  FlatList, 
  StyleSheet,
  
} from 'react-native';
import products from '../data/products';

const ProductScreen = () => {
  // Fonction pour rendre chaque élément de la liste
  const renderProductItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image
        source={{ uri: item.image }}
        style={styles.image}
      />
      <View style={styles.infoContainer}>


  
        
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      
        <FlatList
            data={products}
            renderItem={renderProductItem}
            keyExtractor={(item) => item.id}
            
            numColumns={2}
            columnWrapperStyle={styles.row} 
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 16,
    color: '#333',
  },
    itemContainer: {
    
    borderRadius: 12,
    margin: 8,
    flex: 1, 
    maxWidth: '48%', 
    
    },
    row: {
        justifyContent: 'space-between',
    },
    image: {
    width: '100%',
    aspectRatio: 1,
    resizeMode: 'cover',
  },
  infoContainer: {
    padding: 16,
  },
 

  
 
});

export default ProductScreen;