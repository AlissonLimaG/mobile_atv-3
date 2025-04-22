import { Text, View, StyleSheet } from 'react-native';
import SearchBarComp from '../../../common/searchBar/SearchBarComp';
import { Icon } from 'react-native-elements';
import PersonItemComp from '../../../common/personItem/PersonItemComp';


export default Header = () => {

    return (

        <View style={styles.container}>

            <View style={styles.searchSection}>
                <Icon
                    name={'plane-departure'}
                    type='font-awesome-5'
                    size={28}
                    color={'white'}
                />
                <SearchBarComp data={{ width: 'auto', borderR: 8 }} />
            </View>

            <View style={styles.userContainer}>
                <PersonItemComp
                    data={{
                        avatarSize: 48,
                        title: 'Bem vindo',
                        name: 'Alisson Lima'
                    }}
                />
                <View style={styles.iconNotificationContainer}>
                    <Icon
                        name='bell'
                        size={24}
                        type='font-awesome-5'

                    />
                </View>
            </View>


        </View>

    );

}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 24,
        paddingHorizontal: 16
    },
    searchSection: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 12
    },
    userContainer: {
        marginTop: 16,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    iconNotificationContainer:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        height:35,
        width:35,
        backgroundColor:'white', 
        borderRadius:'50%', 
        aspectRatio:'1/1', 
        alignContent:'center'
    }
});