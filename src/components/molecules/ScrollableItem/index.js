import React from 'react';
import {View, Image, Text} from 'react-native';

const ScrollableItem = (props) => {
    return (
        <View style={{marginRight: 16}}>
            <View style={{width: 150, height: 150, borderRadius: 10, backgroundColor: 'pink'}}>
            <Image source={props.img} style={{width: undefined, height: undefined, resizeMode: 'cover', flex: 1, borderRadius: 4}} />
            </View>
            <Text style={{fontSize: 16, fontWeight: 'bold', color: '#1c1c1c', marginTop: 12}}>{props.title}</Text>
        </View>
    )
}

export default ScrollableItem;