import {StyleSheet} from 'react-native';
import {ms, ScaledSheet} from 'react-native-size-matters';

const styles = ScaledSheet.create({
  homeContainer: {
    flex: "1@ms",
    backgroundColor: '#FFFFFF',
  },
  homeContent: {
    height: '100%',
    padding: "16@ms",
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: "40@ms",
    alignItems: 'center',
  },
  profilePhotoImage: {
    height: "40@vs",
    width: "40@ms",
    borderRadius: 5,
  },
  nameContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: "3@ms",
  },
  nameText: {
    fontSize: "20@ms",
    fontWeight: 'bold',
  },
  usernameText: {
    fontSize: "20@ms",
    fontWeight: 'bold',
    opacity: 0.7,
    marginLeft: "5@ms",
  },
  learnText: {
    fontSize: "16@ms",
    marginBottom: "30@ms",
    opacity: 0.6,
  },
  searchContainer: {
    borderColor: '#ddd',
    borderWidth: "1@ms",
    marginBottom: "30@ms",
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: "5@ms",
  },
  searchInput: {
    height: "40@vs",
    fontSize: "15@ms",
    marginLeft: "5@ms",
    width: '80%',
  },
  dropdownContainer: {
    borderLeftColor: '#ddd',
    borderLeftWidth: "1@ms",
    height: "40@vs",
    width: "40@ms",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabHeaderContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: "20@ms",
  },
  scrollViewContent:{
    paddingTop: "10@ms",
    paddingBottom: "40@ms"
  },
  singleTab: {
    marginRight: "20@ms",
    display: 'flex',
    alignItems: 'center',
  },
  tabText: {
    fontSize: "18@ms",
    fontWeight: 'bold',
  },
  activeTabText: {
    opacity: 0.9,
  },
  inActiveTabText: {
    opacity: 0.3,
  },
  activeTabBottom: {
    height: "10@vs",
    width: "10@ms",
    backgroundColor: '#B79069',
    borderRadius: 50,
  },
  tabBodyContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  categoryContainer: {
    width: '43%',
    borderRadius: 12,
    marginBottom: "30@ms",
  },
  categoryShortHeight: {
    height: "160@vs",
  },
  categoryLongHeight: {
    height: "200@vs",
  },
  categoryTitletext: {
    fontWeight: 'bold',
    fontSize: "16@ms",
    opacity: 0.9,
  },
  categoryNumbertext: {
    fontSize: "13@ms",
  },
  illustrationImage: {
    flex: "1@ms",
    position: 'relative',
    borderRadius: 10,
    width: '100%',
  },
  backgroundStyle: {
    resizeMode: 'cover',
    position: 'absolute',
    top: "55@vs",
  },
  transparentBg: {
    paddingTop: "10@ms",
    paddingHorizontal: "10@ms",
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
});

export default styles;
