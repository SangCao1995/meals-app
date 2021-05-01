import React, {useState, useCallback} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Header} from '../../components';
import {FilterSwitch} from './components';
import {mealsAction} from '../../store/actions';
import {useDispatch} from 'react-redux';

export const FiltersScreen = props => {
  const [isGlutenFree, setGlutenFree] = useState(false);
  const [isLactoseFree, setLactoseFree] = useState(false);
  const [isVegan, setVegan] = useState(false);
  const [isVegetarian, setVegetarian] = useState(false);
  const dispatch = useDispatch();

  const saveFilter = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      lactoseFree: isLactoseFree,
      vegan: isVegan,
      vegetarian: isVegetarian,
    };

    dispatch(mealsAction.setFilters(appliedFilters));
  }, [isVegetarian, isGlutenFree, isVegan, isLactoseFree, dispatch]);

  return (
    <View style={{flex: 1}}>
      <Header
        isHeaderRight
        title={'Filters'}
        onMenuCLick={() => props.navigation.toggleDrawer()}
        onSaveClick={() => {
          saveFilter();
        }}
      />
      <View style={styles.container}>
        <Text style={styles.title}>Available Filters / Restrictions</Text>
        <FilterSwitch
          label={'Gluten-free'}
          state={isGlutenFree}
          onValueChange={newValue => setGlutenFree(newValue)}
        />
        <FilterSwitch
          label={'Lactose-free'}
          state={isLactoseFree}
          onValueChange={newValue => setLactoseFree(newValue)}
        />
        <FilterSwitch
          label={'Vegan'}
          state={isVegan}
          onValueChange={newValue => setVegan(newValue)}
        />
        <FilterSwitch
          label={'Vegetarian'}
          state={isVegetarian}
          onValueChange={newValue => setVegetarian(newValue)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  title: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 22,
    textAlign: 'center',
    margin: 20,
  },
});
