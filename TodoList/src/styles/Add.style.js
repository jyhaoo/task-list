import { StyleSheet } from 'react-native';
import { scale, verticalScale } from '../ScaleUtil';

export default StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: 'center',
        backgroundColor: '#BADA55'
    },
    titleInput: {
        top: verticalScale(10),
        height: verticalScale(48),
        width: scale(327),
        margin: scale(12),
        borderWidth: scale(1),
        padding: scale(10),
        borderRadius: scale(12),
        borderColor: '#696969'
    },
    descInput: {
        top: verticalScale(10),
        height: verticalScale(400),
        width: scale(327),
        margin: scale(12),
        borderWidth: scale(1),
        padding: scale(10),
        borderRadius: scale(12),
        borderColor: '#696969'
    },
    buttonContainer: {
        top: verticalScale(50),
        height: scale(48),
        width: scale(327),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#696969',
        borderRadius: scale(20),
    },
    buttonText: {
        //textAlign: 'center',
        fontFamily: 'Times New Roman',
        color: '#BADA55',
        fontSize: scale(16),
        letterSpacing: scale(1.2),
    }
});