import { View, StyleSheet, ScrollView } from 'react-native';
import Header from './header/Header';
import Messages from './messagesSection/Messages';
import NavBar from '../../common/navBar/NavBar';

export default PageTwo = () => {

    const navIcons = [
        { icon: 'home', name: 'Home', background: '#8DAB7F', color: 'white', boxShadow: false },
        { icon: 'comment', name: 'Chat', background: '#8DAB7F', color: 'white', boxShadow: false },
        { icon: 'bell', name: 'Mail', background: '#8DAB7F', color: 'white', boxShadow: false },
        { icon: 'user', name: 'Profile', background: '#8DAB7F', color: 'white', boxShadow: false },
    ]

    return (

        <View style={{ display: 'flex', maxHeight: '100%', backgroundColor: '#8DAB7F' }}>

            <Header />
            <ScrollView>
                <Messages />
            </ScrollView>
            <NavBar data={navIcons} />
        </View>

    );

}

const styles = StyleSheet.create({

});