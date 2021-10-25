import { StyleSheet } from 'react-native';
import { scale, verticalScale, VerticalScale } from '../ScaleUtil';

export default StyleSheet.create({
    container: {
        width: scale(72),
        height: verticalScale(72),
        top: verticalScale(-50),
        left: scale(130),
        borderRadius: scale(12),
        //backgroundColor: 'skyblue',
    }
})