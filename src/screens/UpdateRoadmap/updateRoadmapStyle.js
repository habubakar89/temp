import {StyleSheet} from 'react-native';
import { scale, verticalScale,   Scale, ScaledSheet } from 'react-native-size-matters';

const styles = StyleSheet.create({
  coursesListContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  bgContainer: {
    width: '100%',
    height: '30%',
  },
  illustrationImage: {
    flex: 1,
    position: 'relative',
    borderRadius: 10,
    width: '100%',
  },
  illustrationBackgroundStyle: {
    resizeMode: 'cover',
    position: 'absolute',
    top: 0,
  },
  backButton: {
    position: 'absolute',
    top: 16,
    left: 16,
    backgroundColor: '#eee',
    height:  32  ,
    width:   32  ,
    borderRadius: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  coursesListContent: {
    top: '8%',
    height: '100%',
    width: '100%',
    position: 'absolute',
    backgroundColor: '#fff',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingTop: 30,
  },
  coursesListTitle: {
    marginLeft:   70  ,
    fontWeight: 'bold',
    fontSize:   16  ,
    marginTop:  23  ,
  },
  scrollViewContent: {
    paddingTop:     15  ,
    flex: 1,
  },
  sectionScrollContainer: {
    paddingHorizontal: 16,
    paddingBottom: 60  
  },
  searchContainer: {
    marginTop: 20,
    marginBottom: 30,
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 15,
  },
  seContainer: {
    paddingBottom: 15,
  },
  searchInput: {
    height: 40,
    fontSize: 15,
    width: 350,
    margin: 1,
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  scrollViewContent:{
    paddingTop:   10  ,
    paddingBottom:   40  
  },
  tabBodyContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    paddingTop:   7  ,
    paddingBottom:   7  ,
    paddingHorizontal:   7  ,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#F2F2F2",
  },
  paperBodyContainer: {
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#F2F2F2",
  },
  categoryContainer: {
    width: '43%',
    borderRadius: 12,
    marginBottom:  30  ,
  },
  
  createButton :{
    marginBottom: 85,
    marginLeft: '30%',
    width: '40%',
    justifyContent: 'center'
  },
  createText: {
    fontSize: 15,
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
  },
  gradBox :{
    margin: 1,
    backgroundColor: 'white',
    borderRadius: 22,
    flexDirection: 'row', justifyContent: 'center', alignItems: 'center',
  },
  icon1 : {
    marginLeft: -5,
    marginRight: 10,
  },
  inputSegment: {
    margin: 1,
    borderRadius: 15,
    backgroundColor: '#B3B1AF'
  },
  inputHeader: {
    marginLeft: '2%',
    marginBottom: '3%',
    fontWeight: 'bold'
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 16,
  },
  header: {
    marginHorizontal: 20,
    marginVertical: 50,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  coursesListContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  bgContainer: {
    width: '100%',
    height: '30%',
  },
  illustrationImage: {
    flex: 1,
    position: 'relative',
    borderRadius: 10,
    width: '100%',
  },
  illustrationBackgroundStyle: {
    resizeMode: 'cover',
    position: 'absolute',
    top: 0,
  },
  backButton: {
    position: 'absolute',
    top: 16,
    left: 16,
    backgroundColor: '#eee',
    height:  32  ,
    width:   32  ,
    borderRadius: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  coursesListContent: {
    top: '8%',
    height: '100%',
    width: '100%',
    position: 'absolute',
    backgroundColor: '#fff',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingTop: 30,
  },
  coursesListTitle: {
    marginLeft:   70  ,
    fontWeight: 'bold',
    fontSize:   16  ,
    marginTop:  23  ,
  },
  scrollViewContent: {
    paddingTop:     15  ,
    flex: 1,
  },
  coursesListWrapper: {
    paddingHorizontal:     16  ,
    paddingBottom:     100  ,
  },
  singleCourse: {
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height:  1  ,
    },
    shadowOpacity:   0.18  ,
    shadowRadius:   1.0  ,
    elevation:   1  ,
    paddingVertical:     7  ,
    borderRadius: 5,
    paddingHorizontal:     7  ,
    display: 'flex',
    flexDirection: 'row',
    overflow: 'hidden',
    marginBottom:  10  ,
    flexDirection: 'row', justifyContent: 'center', alignItems: 'center',
  },
  courseImage: {
    height:  40  ,
    width:   40  ,

  },
  courseBackgroundStyle: {
    resizeMode: 'cover',
    position: 'absolute',
    top: 0,
    borderRadius: 5,
  },
  courseRightContainer: {display: 'flex', width: '100%'},
  bookmarkIcon: {
    marginLeft: '85%',
  },
  courseInfo: { 
    fontWeight: 'bold',
    fontSize: 16,
    color: "#1E3877",
    marginLeft: '2%',
  },
  courseLink: { 
    fontSize: 13,
    color: "#4E4E4E",
    marginLeft: '2%',
  },
  addButton: {
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 20,
    margin: 20,
  },
  addButtontext: {
    textAlign: 'center',
    color: 'white',
  },
  sectionScrollContainer: {
    paddingHorizontal: 16,
    paddingBottom: 60  
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom:  40  ,
    alignItems: 'center',
  },
  learnText: {
    fontSize: 16,
    marginBottom:  30  ,
    opacity: 0.6,
  },
  searchContainer: {
    marginTop: 20,
    marginBottom: 30,
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 15,
  },
  seContainer: {
    paddingBottom: 15,
  },
  searchInput: {
    height: 40,
    fontSize: 15,
    width: 250,
    margin: 1,
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  tabHeaderContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom:  20  ,
    marginLeft:   30  ,
  },
  scrollViewContent:{
    paddingTop:   10  ,
    paddingBottom:   40  
  },
  singleTab: {
    marginRight:   20  ,
    display: 'flex',
    alignItems: 'center',
  },
  tabText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  activeTabText: {
    opacity: 0.9,
  },
  inActiveTabText: {
    opacity: 0.3,
  },
  activeTabBottom: {
    height:  8  ,
    width:   8  ,
    backgroundColor: '#B79069',
    borderRadius: 50,
  },
  tabBodyContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    paddingTop:   7  ,
    paddingBottom:   7  ,
    paddingHorizontal:   7  ,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#F2F2F2",
  },
  paperBodyContainer: {
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#F2F2F2",
  },
  categoryContainer: {
    width: '43%',
    borderRadius: 12,
    marginBottom:  30  ,
  },
  categoryShortHeight: {
    height:  160  ,
  },
  categoryTitletext: {
    fontWeight: 'bold',
    fontSize: 16,
    opacity: 0.9,
  },
  categoryNumbertext: {
    fontSize: 13,
  },
  illustrationImage: {
    flex: 1,
    position: 'relative',
    borderRadius: 10,
    width: '100%',
  },
  backgroundStyle: {
    resizeMode: 'cover',
    position: 'absolute',
    top:  55  ,
  },
  transparentBg: {
    paddingTop:  10  ,
    paddingHorizontal:   10  ,
  },
  bg0: {
    backgroundColor: '#FDAAB0',
  },
  bg1: {
    backgroundColor: '#E296DE',
  },
  bg2: {
    backgroundColor: '#9E7CF4',
  },
  bg3: {
    backgroundColor: '#96D8CA',
  },
}  );

export default styles;
