import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';



const NavBarIcon = (props) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity style={{flex:1}} onPress={() => props.action != undefined ? navigation.navigate(props.action) : alert('ga ada')}>
        <View style={{flex: 1, alignItems:'center', justifyContent: 'center'}}>
            <Image style={{width: 26, height: 26}} source={props.img} />
            <Text style={{fontSize: 10, color: '#545454', marginTop: 4, color: props.active ? '#45ab4a' : '#545454'}}>{props.title}</Text>
        </View>
        </TouchableOpacity>
    )
}

export default NavBarIcon;