import { Text, View, StyleSheet } from 'react-native';
import { Avatar, Rating } from 'react-native-elements';


export default DoctorInfoCard = ({data}) => {

    return (

        <View style={styles.cardContainer}>
            
            <Avatar
                size={56}
                rounded
                source={{uri:data.image}}
            />

            <View style={styles.infoContainer}>
                <Text style={styles.infoName}>{data.name}</Text>
                <Text style={styles.infoSpecialty}>{data.specialty}</Text>
                <Rating imageSize={20} startingValue={data.stars} style={{ alignSelf: 'flex-start' }}/>
            </View>

        </View>

    );

}

const styles = StyleSheet.create({

    cardContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems:'center',
        backgroundColor: 'white',
        borderRadius:8,
        padding: 8,
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px'
    },
    infoContainer: {
        marginLeft: 8,
        display: 'flex'
    },
    infoName: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    infoSpecialty: {
        fontSize: 12,
        color:'gray'
    }


});