import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {Header} from '../../components';
import {categoryItemData} from '../../constants';
import {SCREEN} from '../../routes/Screen';
import {CategoryItem} from './components';

export const CategoriesScreen = props => {
  return (
    <View style={{flex: 1}}>
      <Header title={'Meal Categories'} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        numColumns={2}
        data={categoryItemData}
        renderItem={({item}) => (
          <CategoryItem
            data={item}
            onPress={() => props.navigation.navigate(SCREEN.CATEGORY_MEALS)}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
