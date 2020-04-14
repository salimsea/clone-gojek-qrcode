import React, {Component} from 'react';
import {ScrollView, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SearchFeature from '../../../components/molecules/SearchFeature';
import GoNews from '../../../components/molecules/GoNews';
import GoInfo from '../../../components/molecules/GoInfo';
import GoBanner from '../../../components/molecules/GoBanner';
import ScrollableProducts from '../../../containers/organisms/ScrollableProducts';
import NavBar from '../../../containers/organisms/NavBar';
import HomeMainFeature from '../../../containers/organisms/HomeMainFeature';
import HomeGopay from '../../../containers/organisms/HomeGoPay';

class Home extends Component {
    render(){
        return(
                <View style={{flex:1}}>
                <SearchFeature />
                <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1, backgroundColor: 'white'}}>
                    <HomeGopay />
                    <HomeMainFeature />
                    <View style={{height: 17, backgroundColor: '#F2F2F4', marginTop: 20}}></View>
                    <GoNews/>
                    <GoInfo />
                    <GoBanner />
                    <ScrollableProducts />
                </ScrollView>
                <NavBar />
                </View>
        )
    }
}

export default Home;