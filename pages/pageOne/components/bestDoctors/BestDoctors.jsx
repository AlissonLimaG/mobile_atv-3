import { Text, View, StyleSheet } from 'react-native';
import DoctorInfoCard from './doctorInfoCard/DoctorInfoCard';
import DoctorService from '../../../../services/DoctorService';
import { useEffect, useState } from 'react';


export default BestDoctors = () => {

    const [doctors, setDoctors] = useState([]);

    const getAllDoctors = async () => {
        const doctorsList = await DoctorService.findAll();
        setDoctors(doctorsList);
    }

    useEffect(() => getAllDoctors(), [])

    // const doctors = [
    //     {
    //         name: 'dr. Olivia Wilson',
    //         specialty: 'Consultant - Physiotherapy',
    //         stars: 4.9,
    //         image: 'https://img.freepik.com/fotos-gratis/bela-jovem-doutora-olhando-a-camera-no-escritorio_1301-7807.jpg?t=st=1744940053~exp=1744943653~hmac=66508a602d1f8ff13a5f2af8f2757473816e10173dc314378324e126d42c0ebf&w=740'
    //     },
    //     {
    //         name: 'dr. Jonathan Patterson',
    //         specialty: 'Consultant - Internal Medicine',
    //         stars: 4.8,
    //         image: 'https://empreendedor.com.br/wp-content/uploads/2021/01/rsw_350h_263i_truecg_trueft_cover.jpg'
    //     },
    //     {
    //         name: 'dr. Sophia Mendes',
    //         specialty: 'Consultant - Pediatrics',
    //         stars: 4.7,
    //         image: 'https://img.freepik.com/fotos-gratis/medica-feminina-positiva-em-um-escritorio-com-estetoscopio_23-2148881607.jpg'
    //     },
    //     {
    //         name: 'dr. Marcos Ribeiro',
    //         specialty: 'Consultant - Cardiology',
    //         stars: 4.9,
    //         image: 'https://img.freepik.com/fotos-premium/retrato-de-um-medico-brasileiro-feliz-sorrindo-no-hospital_259150-57921.jpg'
    //     }
    // ];


    return (

        <View style={styles.bestDoctorsContainer}>
            <Text style={styles.bestDoctorsTitle}>
                Best Doctors
            </Text>
            <View style={styles.doctorsCardContainer}>
                {doctors.map((doctor, index) => (
                    <DoctorInfoCard key={index} data={doctor} />
                ))}
            </View>
        </View>

    );

}

const styles = StyleSheet.create({

    bestDoctorsContainer: {
        padding: 16,
        backgroundColor: '#F2F6FF',
    },
    bestDoctorsTitle: {
        marginLeft: 4,
        fontSize: 16
    },
    doctorsCardContainer: {
        display: 'flex',
        gap: 12,
        marginTop: 8
    }

});