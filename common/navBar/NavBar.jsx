import { View, StyleSheet } from 'react-native';
import CardIcon from '../CardIcon/CardIcon';

export default NavBar = () => {

    const navIcons = [
        { icon: 'ambulance', name: 'Emergency', background:'#1E325C', color:'white' },
        { icon: 'tooth', name: 'Dentist', background:'#1E325C', color:'white' },
        { icon: 'heartbeat', name: 'Cardiologist', background:'#1E325C', color:'white' },
        { icon: 'hospital', name: 'Hospital', background:'#1E325C', color:'white' },
    ]


    return (
        
        <View style={styles.navbarContainer}>
            {navIcons.map( (navIcon, index) => (
                <CardIcon key={index} data ={navIcon}/>
            ))}
        </View>

    );

}

const styles = StyleSheet.create({

    navbarContainer:{
        backgroundColor:'#1E325C',
        display:'flex',
        flexDirection:'row',
        gap:8,
    }

});