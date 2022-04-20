import React, {useContext, useState, useEffect} from 'react';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './courseDetailStyle';
import {AuthContext} from '../../context';
import { Popable} from 'react-native-popable';

MaterialIcons.loadFont().then();

export function CourseDetail({courseDetail}) {

  const {state, dispatch} = useContext(AuthContext);
  const [typeIcon, setType] = useState("check-circle-outline");
  const [color, setColor] = useState("#292929");
  const [isMarked, setMarked] = useState("Mark as Complete")

  const handleComplete = () => {
    setColor("green");
    setType("check-circle");
    setMarked(" ");
  };
  return (
    <View style={styles.singleCourse}>
        <ImageBackground
          source={{
            uri: 'https://ieeexplore.ieee.org/xploreAssets/images/absImages/01491134.png',
          }}
          style={styles.courseImage}
          imageStyle={styles.courseBackgroundStyle}>
        </ImageBackground>
        <View style={styles.courseRightContainer}>
          <TouchableOpacity onPress={() => handleComplete()}> 
          <Text style={styles.markText}>
              <MaterialIcons
                name={typeIcon}
                size={20}
                color={color}
                style={styles.bookmarkIcon} />{isMarked}</Text>
          </TouchableOpacity>
          <Text numberOfLines={2} ellipsizeMode="tail" style={styles.courseInfo}>
            {courseDetail?.title}
          </Text>
          {/* <View style={styles.progressBarContainer}>
            {courseDetail?.progress < 100 ? (
            { 2 < 100 ? (
              <View
                style={[
                  styles.progressBarItem,
                  { width: `${courseDetail?.progress}%` },
                  { width: `2%` },
                ]}></View>) :
              (
                <View
                  style={[
                    styles.progressBarItemCompleted,
                    { width: `${courseDetail?.progress}%` },
                  ]}></View>
              )}
          </View> */ }
        </View>
      </View>
  );
}
