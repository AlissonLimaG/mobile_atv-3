import { Text, View, StyleSheet, ImageBackground } from 'react-native';
import { Icon } from 'react-native-elements';


export default Header = () => {

    return (

        <View style={styles.container}>

            <View style={styles.titleContainer}>
                <View style={styles.iconContainer}>
                    <Icon
                        name='envelope'
                        type='font-awesome-5'
                        size={28}
                        color={'#8DAB7F'}
                    />
                </View>
                <Text style={styles.title}>
                    Messages & Chat
                </Text>
            </View>

        </View>
    );

}

const styles = StyleSheet.create({

    container: {
        minHeight: 90,
        backgroundColor: '#8DAB7F',
        paddingHorizontal: 16,
        justifyContent: 'center'
    },
    titleContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    iconContainer:{
        width:'auto',
        padding:12,
        backgroundColor:'whitesmoke',
        aspectRatio:1,
        borderRadius:'50%',
    },
    title: {
        color: 'whitesmoke',
        fontSize: 24,
        fontWeight: '600',
        borderBottomColor: 'whitesmoke',
        borderBottomWidth: 2,
        paddingBottom: 8
    }

});