import { StyleSheet } from 'react-native';
import { scale, verticalScale } from '../ScaleUtil';

export default StyleSheet.create({
    container: {
        height: verticalScale(55),
        width: scale(380),
        justifyContent: 'center',
        //backgroundColor: 'skyblue',
    },
    header: {
        marginLeft: scale(70),
        fontFamily: 'Bebas Neue',
        fontSize: scale(36),
        lineHeight: scale(43.2),
        color: '#BADA55',
    },
    union: {
        position: 'absolute',
        left: scale(30),
    },
    settingsContainer: {
        position: 'absolute',
        left: scale(325),
        width: scale(30),
        height: scale(30),
        //backgroundColor: 'green',
    },
    settings: {
        width: scale(30),
        height: scale(30),
    }
});