import React from 'react';
import {
  TouchableOpacity,
  Text,
  ImageBackground,
  View,
  StyleSheet,
} from 'react-native';

export const MealItem = ({data}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={{height: '85%'}}>
        <ImageBackground source={{uri: data.imageUrl}} style={styles.image}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{data.title}</Text>
          </View>
        </ImageBackground>
      </View>

      <View style={styles.mealDetail}>
        <Text>{data.duration}</Text>
        <Text>{data.complexity.toUpperCase()}</Text>
        <Text>{data.affordability.toUpperCase()}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: '100%',
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    overflow: 'hidden',
    marginVertical: 5,
  },
  mealDetail: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '15%',
    paddingHorizontal: 10,
  },
  title: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
  titleContainer: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingVertical: 5,
    paddingHorizontal: 12,
  },
  image: {
    height: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
});
