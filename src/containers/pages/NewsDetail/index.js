import React from 'react';
import {Text} from 'react-native';
import GoNews from '../../../components/molecules/GoNews';
import { ScrollView } from 'react-native-gesture-handler';

const NewsDetail = () => {
    return (
        <>
        <ScrollView>
        <GoNews />
        <GoNews />
        <GoNews />
        <GoNews />
        <GoNews />
        <GoNews />
        <GoNews />
        </ScrollView>
        
        </>
    )
}

export default NewsDetail;