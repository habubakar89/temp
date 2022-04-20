import React, {useState,useContext,useEffect} from "react";
import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  FlatList,
  TextInput,
} from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import shortid from 'shortid';
import styles from './updateRoadmapStyle';
import DraggableFlatList, {ScaleDecorator} from 'react-native-draggable-flatlist'
import {AuthContext} from '../../context';
import axios from 'axios'

MaterialIcons.loadFont().then();
Ionicons.loadFont().then();

export function updateRoadmap({route, navigation}) {

  const {roadmapLabel, levels, tags, roadmap} = route.params;

  const [label, setLabel] = useState("");
  const [url, setUrl] = useState("");
  var i = 1;
  const l1= []; const l2 = []; const l3 = [];

  roadmap.levels["1"].filter((category) => {
    if(category){
      l1.push( {
        "key": idx,
        "label": category.title,
        "link": category.link,
        "level": '1'
      });
      i++;
    }
  });
  roadmap.levels["2"].filter((category) => {
    if(category){
      l2.push( {
        "key": idx,
        "label": category.title,
        "link": category.link,
        "level": '2'
      });
      i++;
    }
  });
  roadmap.levels["3"].filter((category) => {
    if(category){
      l3.push( {
        "key": idx,
        "label": category.title,
        "link": category.link,
        "level": '3'
      });
      i++;
    }
  });

  var existingArray = [...l1, ...l2, ...l3];

  const [initialElements, changeEl]  = useState(existingArray);
  const [exampleState, setExampleState] = useState(initialElements);
  const [idx, incr] = useState(i);
  const {state, dispatch} = useContext(AuthContext);
  const [data, setData] = useState({
    tabs: ['1', '2', '3'],
    activeTab: '1',
    tabIndex: 0,
    displayedCategories: exampleState,
  });

  const addElement = () => {
    var newArray = [...initialElements , {key : idx, label: (label), link: url, level: data?.activeTab}];
    incr(idx + 1);
    setExampleState(newArray);
    changeEl(newArray);
  }

  const removeElement = (key) => {
    var newArray = [...exampleState];
    var i = exampleState.findIndex(item => item.key === key)
    newArray.splice(i, 1);
    setExampleState(newArray);
    changeEl(newArray);
  }

  useEffect(() => { 
       //console.log('Updated State', exampleState);
       handleTabPress(data?.activeTab, data?.tabIndex);
       setLabel("");
       setUrl("");
    }, [exampleState])

  const handleTabPress = (tab, index) => {
    let {activeTab, tabIndex, displayedCategories} = data;
    activeTab = tab;
    tabIndex = index;
    if (index === 0) {
        displayedCategories = exampleState?.filter(
          (category) => category.level === "1");
      } else if (index === 1) {
      displayedCategories = exampleState?.filter((category) => category.level === "2");
    } else if (index === 2) {
      displayedCategories = exampleState?.filter((category) => category.level === "3");
    } 
    
    setData({...data, activeTab, tabIndex, displayedCategories});
  };

  const handleBackButton = () => {
    navigation?.goBack();
  };

  const filterPapers = (level) => {
    const levelList= [];
    exampleState?.filter((category) => {
      if(category.level === level){
        levelList.push( {
          "title": category.label,
          "link": category.link
        });
      }
    });
    return levelList;
  }
  const createRequest = async () => {
    const level1List = filterPapers("1");
    const level2List = filterPapers("2");
    const level3List = filterPapers("3");
    //console.log(level1List);

    const postData = {
  "name": roadmapLabel,
  "rating": 4,
  "author": "Tanuja",
  "tags": tags,
  "levels": {
    "1": level1List,
    "2": level2List,
    "3": level3List
  }
};
var id = roadmap.id;
console.log(id);
    const response = await axios.put(`http://project700-backend.herokuapp.com/roadmap`+id, postData);
    try{
    if (response.status === 200) {
      console.log(` You have updated: ${JSON.stringify(response.data)}`);
    } else {
      throw new Error("An error has occurred");
    }
  } catch (error) {
   console.log("An error has occurred");
  }
  navigation?.navigate('DrawerStack', {screen: 'MyRoadmaps'});
  }

  const renderItem = ({ item, drag, isActive }) => {
    return (
      <ScaleDecorator>
        <TouchableOpacity
          onLongPress={drag}
          disabled={isActive}
          style={[
            styles.rowItem, styles.paperBodyContainer     
          ]}
        >
             <View style={[styles.singleCourse, { backgroundColor: isActive ? "#F3EEEF" : "white" },]}>
              {/* <ImageBackground
                source={{
                  uri: 'https://www.kindpng.com/picc/m/160-1608792_circle-document-icon-png-transparent-png.png',
                }}
                style={[styles.courseImage]}
                imageStyle={[styles.courseBackgroundStyle]}>
              </ImageBackground> */}

              <View style={styles.courseRightContainer}>
              <TouchableOpacity onPress={() => removeElement(item.key)}>
              <MaterialIcons
                name="cancel"
                size={20}
                color="#292929"
                style={styles.bookmarkIcon} />           
          </TouchableOpacity>
  
                <Text numberOfLines={2} ellipsizeMode="tail" style={styles.courseInfo}>
                  {item.label}
                </Text>
                <Text numberOfLines={2} ellipsizeMode="tail" style={styles.courseLink}>
                  {item.link}
                </Text>
              </View>
              </View>
        </TouchableOpacity>
      </ScaleDecorator>
    );
  };

  return (   
    <View style={styles.coursesListContainer}>
      <View style={[styles.bgContainer]}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => handleBackButton()}>
            <MaterialIcons name="keyboard-arrow-left" size={25} color="#000" />
          </TouchableOpacity>
          <Text style={styles.coursesListTitle}>
          Update Roadmap
        </Text>
      </View>   
      <View style={styles.coursesListContent}>

        <View style={styles.tabHeaderContainer}>
      {data?.tabs?.map((tab, index) => (
        <TouchableOpacity
          key={shortid.generate()}
          style={styles.singleTab}
          onPress={() => handleTabPress(tab, index)}>
          <Text
            style={[
              styles.tabText,
              data?.activeTab === tab
                ? styles.activeTabText
                : styles.inActiveTabText,
            ]}>
            Level {tab}
          </Text>
          {data?.activeTab === tab ? (
            <View style={styles.activeTabBottom}></View>
          ) : null}
        </TouchableOpacity>
      ))}
    </View>
     <ScrollView
          style={styles.scrollViewContent}
          showsVerticalScrollIndicator={false}>
           <View style={[styles.tabBodyContainer]}>
        <DraggableFlatList
      data={data?.displayedCategories}
      onDragEnd={({ data }) => setExampleState(data)}
      keyExtractor={(item) => item.key}
      renderItem={renderItem}/>
</View>

    <View style={styles.searchContainer}>
    <View style={styles.seContainer}>
    <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{x: 1, y: 1 }}
        colors={[ '#545352', '#737271', '#B3B1AF']}
        style={{
          borderRadius: 15,
        }}
      >
           <TextInput
           placeholder="Title for the paper"
           style={styles.searchInput}
           onChangeText={(value) => setLabel(value)}
           value={label}/>
           </LinearGradient>
           </View>
           <View style={styles.seContainer}>
       <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{x: 1, y: 1 }}
        colors={['#545352', '#737271', '#B3B1AF']}
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 15,
        }}
      >
           <TextInput
           placeholder="Link to the paper"
           style={styles.searchInput}
           onChangeText={(value) => setUrl(value)}
           value = {url}/>
       </LinearGradient>
      </View>
</View>
   <TouchableOpacity
     onPress={() => addElement()} >
       <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{x: 1, y: 1 }}
          colors={['#545352', '#737271', '#B3B1AF']}
          style={styles.addButton}
          >
          <Text style={styles.addButtontext}>
            Add Paper
          </Text>
        </LinearGradient>
        </TouchableOpacity>
        </ScrollView> 
        {data?.activeTab === "3" ? (
        <View style={styles.createButton}><TouchableOpacity onPress={() => createRequest()} >
        <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{x: 1, y: 1 }}
        colors={['#7F36C2','#935DC5', '#AA91C0']}
        style={styles.gradBox}>
          <Text style= {styles.createText}>Update</Text>  
          <MaterialIcons style = {styles.icon1} name="arrow-forward" size={15} color="white"/>
          </LinearGradient>         
          </TouchableOpacity >
                </View>
        ) : null}
    </View>
    
    </View>
  );
}
