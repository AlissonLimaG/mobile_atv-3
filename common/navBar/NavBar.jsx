import { View, StyleSheet } from 'react-native';
import CardIcon from '../CardIcon/CardIcon';

export default NavBar = ({data}) => {

    return (
        
        <View style={[styles.navbarContainer, {backgroundColor:data.background}]}>
            {data.map( (navIcon, index) => (
                <CardIcon key={index} data ={navIcon}/>
            ))}
        </View>

    );

}

const styles = StyleSheet.create({

    navbarContainer:{
        maxHeight:75,
        display:'flex',
        flexDirection:'row',
        gap:8,
    }

});