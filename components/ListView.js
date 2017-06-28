// @flow

import React, { PureComponent } from 'react';
import { TouchableOpacity, FlatList, Text, StyleSheet, View, TextInput, Platform, NativeModules } from 'react-native';
import pistesData from '../off-pistes.json';

export default class ListView extends PureComponent {

    state = {
        selectedItem: {},
        searchText: '',
        filteredList: pistesData,
    }

    _onSearchSubmit = () => this.setState({
        filteredList: pistesData.filter(item => new RegExp(this.state.searchText, 'i').test(item.name))
    });

    _onItemSelect = item => {
        this.setState({
            selectedItem: item,
        });
        if (item['geo_data']) {
            NativeModules.ActivityStarterModule.showSecondActivity(item['geo_data'].coordinates);
        }
    }

    _onSearchTextChange = text => {
        this.setState({
            searchText: text
        });

        if (text === '') {
            this.setState({
                filteredList: pistesData,
            })
        }
    }

    _renderItem = ({item}) => {
        return (
            <TouchableOpacity style={ styles.item } onPress={ () => this._onItemSelect(item) }>
              <Text style={ styles.itemTitle }>
                { item.name }
              </Text>
              <Text style={ styles.itemSubTitle } numberOfLines={ 2 } ellipsizeMode="tail">
                { item.description }
              </Text>
            </TouchableOpacity>
            );
    }

    render() {
        return (
            <View>
              <TextInput style={ styles.searchBar } onSubmitEditing={ this._onSearchSubmit } placeholder='Search...' onChangeText={ this._onSearchTextChange } value={ this.state.searchText } />
              <FlatList style={ styles.list } data={ this.state.filteredList } keyExtractor={ item => item.id } renderItem={ this._renderItem } />
            </View>
            );
    }
}

const styles = StyleSheet.create({
    list: {
        borderTopWidth: (Platform.OS === 'ios') ? 0.35 : 0,
    },
    searchBar: {
        backgroundColor: 'whitesmoke',
    },
    item: {
        padding: 5,
        borderBottomWidth: 0.35
    },
    itemTitle: {
        fontWeight: 'bold',
        paddingVertical: 5
    },
    itemSubTitle: {
        paddingBottom: 5
    }
});