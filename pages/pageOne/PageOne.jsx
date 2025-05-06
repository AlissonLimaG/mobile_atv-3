import React from 'react';
import Header from './components/header/Header';
import Categories from './components/categories/Categories';
import BestDoctors from './components/bestDoctors/BestDoctors';
import NavBar from '../../common/navBar/NavBar';
import { ScrollView } from 'react-native';
import { View } from 'react-native-web';

export default function PageOne() {
    

    const navIcons = [
        { icon: 'ambulance', name: 'Emergency', background:'#1E325C', color:'white', boxShadow:false },
        { icon: 'tooth', name: 'Dentist', background:'#1E325C', color:'white', boxShadow:false },
        { icon: 'heartbeat', name: 'Cardiologist', background:'#1E325C', color:'white', boxShadow:false },
        { icon: 'hospital', name: 'Hospital', background:'#1E325C', color:'white', boxShadow:false },
    ]

    return (

        <View style={{ display: 'flex', maxHeight: '100%' }}>
            <Header />
            <ScrollView>
                <Categories />
                <BestDoctors />
            </ScrollView>
            <NavBar data={navIcons}/>
        </View>

    );
}
