import { StyleSheet } from 'react-native';
import { scale, verticalScale } from '../ScaleUtil';

export default StyleSheet.create({
    container: {
        width: scale(327),
        height: verticalScale(120),
        marginTop: verticalScale(16),
        borderRadius: scale(12),
        backgroundColor: '#BADA55',
    },
    title: {
        left: scale(25),
        top: verticalScale(10),
        fontFamily: 'bebas neue',
        fontWeight: '800',
        fontSize: scale(22),
        lineHeight: scale(27.2),
        color: '#696969',
    },
    desc: {
        left: scale(25),
        top: verticalScale(10),
        width: scale(275),
        fontWeight: '600',
        fontSize: scale(14),
    },
    date: {
        left: scale(25),
        top: verticalScale(35),
        fontWeight: '500',
        fontSize: scale(14),
    }
})