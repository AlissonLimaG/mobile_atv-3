import { Text, View, StyleSheet, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import { ScrollView } from 'react-native';


export default Destinations = () => {

    const images = [
        { uri: 'https://img.freepik.com/fotos-gratis/cascata-barco-limpo-china-natural-rural_1417-1356.jpg?t=st=1745287625~exp=1745291225~hmac=3b53aa4e06f324529575582fcdbe871a806d1e368a61a7c1ec9ef9325236e5de&w=996' },
        { uri: 'https://img.freepik.com/fotos-gratis/paisagem-de-nevoeiro-matinal-e-montanhas-com-baloes-de-ar-quente-ao-nascer-do-sol_335224-794.jpg?ga=GA1.1.553833801.1744940052&semt=ais_hybrid&w=740' },
        { uri: 'https://img.freepik.com/fotos-gratis/bela-foto-de-colinas-gramadas-cobertas-por-arvores-perto-de-montanhas-nas-dolomitas-italia_181624-24400.jpg?t=st=1745287664~exp=1745291264~hmac=f7c78ca5fee00378b2b518155c2d7e3bb603986030425f1807375c6ccc550c1b&w=996' },
        { uri: 'https://img.freepik.com/fotos-gratis/montanha-fuji-e-lago-kawaguchiko-ao-por-do-sol-estacoes-de-outono-montanha-fuji-em-yamanachi-no-japao_335224-1.jpg?t=st=1745287690~exp=1745291290~hmac=db676dc63d4af9d4818fe5a8eacfcb87655bcbcfb0f4834e35eba51a5615e84e&w=1380' },
        { uri: 'https://img.freepik.com/fotos-gratis/as-montanhas-de-seoraksan-estao-cobertas-pela-nevoa-matinal-e-o-nascer-do-sol-em-seul-na-coreia_335224-313.jpg?t=st=1745287718~exp=1745291318~hmac=3e85ed1ae3562b91cbd46200524b6575408584bc6fed617a82e72594d4f4acf2&w=996' }
    ];

    return (

        <View style={styles.container}>
            <View style={styles.categoriesTitleContainer}>
                <Text>
                    Destinations
                </Text>
                <Icon
                    name='bars'
                    size={32}
                    type='font-awesome-5'
                />
            </View>

            <View style={{ marginTop: 12 }}>
                <ScrollView horizontal>
                    {images.map((image, index) => (
                        <Image
                            key={index}
                            style={styles.imageStyle}
                            source={image.uri}
                        />))}
                </ScrollView>
            </View>
        </View>

    );

}

const styles = StyleSheet.create({

    container: {
        backgroundColor: 'white',
        paddingHorizontal: 16,
        paddingVertical: 8,
        paddingTop: 16
    },
    categoriesTitleContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    imagesContainer: {
        display: 'flex',
        flexDirection: 'row',
    },
    imageStyle: {
        width: 120,
        height: 120,
        borderRadius: 8,
        marginRight: 16
    }
});