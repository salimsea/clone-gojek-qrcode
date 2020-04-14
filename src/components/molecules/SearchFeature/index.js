import React from 'react';
import {View, TextInput, Image} from 'react-native';

const SearchFeature = () => {
    return (
        <View style={{marginHorizontal: 17, flexDirection: 'row', paddingTop: 16, paddingBottom: 10}}>
        <View style={{position: 'relative', flex: 1}}>
            <TextInput style={{borderWidth: 1, borderColor: '#E8E8E8', borderRadius: 25, height: 40, fontSize: 13, paddingLeft: 45, paddingRight: 20, backgroundColor: 'white', marginRight: 18}} placeholder="Mau makan apa?" />
            <Image source={require('../../../assets/icon/search.png')} style={{position: 'absolute', top: 5, left: 12}}/>
        </View>
        <View style={{width: 35, alignItems: 'center', justifyContent: 'center'}}>
            <Image source={require('../../../assets/icon/promo.png')} />
        </View>
        </View>
    )
}

export default SearchFeature;