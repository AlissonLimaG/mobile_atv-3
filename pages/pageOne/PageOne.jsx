import React from 'react';
import Header from './components/header/Header';
import Categories from './components/categories/Categories';
import BestDoctors from './components/bestDoctors/BestDoctors';
import NavBar from '../../common/navBar/NavBar';
import { ScrollView } from 'react-native';
import { View } from 'react-native-web';

export default function PageOne() {
    return (

        <View style={{ display: 'flex', maxHeight: '100%' }}>
            <Header />
            <ScrollView>
                <Categories />
                <BestDoctors />
            </ScrollView>
            <NavBar />
        </View>

    );
}
