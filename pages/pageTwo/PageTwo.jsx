import { Text, View, StyleSheet } from 'react-native';
import Header from './header/Header';
import Categories from './categories/Categories';
import Destinations from './popularDestinations/Destinations';
import RecomendedDest from './recomendedDestinations/RecomendedDest';
import { ScrollView } from 'react-native';
import NavBar from '../../common/navBar/NavBar';

export default PageTwo = () => {

    const navIcons = [
        { icon: 'home', name: 'Home', background: '#D84727', color: 'white', boxShadow: false },
        { icon: 'compass', name: 'Explore', background: '#D84727', color: 'white', boxShadow: false },
        { icon: 'search', name: 'Search', background: '#D84727', color: 'white', boxShadow: false },
        { icon: 'user', name: 'Profile', background: '#D84727', color: 'white', boxShadow: false },
    ]

    return (

        <View style={{ display: 'flex', maxHeight: '100%', backgroundColor: '#D84727' }}>

            <Header />
            <ScrollView>
                <Categories />
                <Destinations />
                <RecomendedDest />
            </ScrollView>
            <NavBar data={navIcons} />
        </View>

    );

}

const styles = StyleSheet.create({

});