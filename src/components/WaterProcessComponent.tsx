import { Dimensions, StyleSheet, View } from 'react-native';
import React from 'react';
import { Circle, Svg, Text as SVGText } from 'react-native-svg';
import { metrics } from '../utils/metrics';

const WaterProcessComponent = () => {
    const size = metrics.screenWidth- 70;
    const strokeWidth = 10;
    const progressPercent = 40;
    const text = "DRİNK WATER BİTCH"
    const radius =  (size - strokeWidth ) / 2
    const circum = radius * 2 * Math.PI;
    const svgProgress = 100 - progressPercent;


    return (

        <View style={styles.container}>
            <Svg  width={size} height={size}>
            {/* Background Circle */}
            <Circle 
                stroke={"#f2f2f2"}
                fill="none"
                cx={size / 2}
                cy={size / 2}
                r={radius}
                {...{strokeWidth}}
            />
                   {/* Progress Circle */}
            <Circle 
                stroke={"#3b5998"}
                fill="none"
                cx={size / 2}
                cy={size / 2}
                r={radius}
                strokeDasharray={`${circum} ${circum}`}
                strokeDashoffset={radius * Math.PI * 2 * (svgProgress/100)}
                strokeLinecap="round"
                transform={`rotate(-90, ${size/2}, ${size/2})`}
                {...{strokeWidth}}
            />
             {/* Text */}
            <SVGText
                fontSize={"10"}
                x={size / 2}
                y={size / 2 + ( 5)}
                textAnchor="middle"
                fill={"#333333"}
                >
                {text}  
            </SVGText>
            </Svg>
        </View>
  );
};

export default WaterProcessComponent;

const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'red',
        alignItems:'center', 
    }
});