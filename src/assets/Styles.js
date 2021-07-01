import {StyleSheet, Dimensions} from 'react-native';
import Theme from './Theme';

export default StyleSheet.create({
  //Start Splash Styles
  splash_container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: Theme.COLORS.BACKGROUND,
    height: '100%',
    width: '100%',
  },
  Sp1: {
    backgroundColor: Theme.COLORS.BG,
    height: '50%',
    borderBottomLeftRadius: 170,
    borderBottomRightRadius: 170,
    width: '100%',
  },
  Sp2: {
    height: '43%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Sp3: {
    width: '100%',
    alignItems: 'center',
  },
  Sp_Img: {
    height: 110,
    width: 110,
    marginTop: 80,
    alignSelf: 'center',
  },
  Sp_Text: {
    alignSelf: 'center',
    marginTop: 30,
    fontWeight: 'bold',
  },
  //End Splash Styles

  // SignUp Styles Start
  SignUp_Container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: Theme.COLORS.BACKGROUND,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
  },
  signup1: {
    height: '30%',
    width: '100%',
    justifyContent: 'center',
  },
  signup_image: {
    height: 90,
    width: 90,
  },
  signup_image_container: {
    height: 100,
    width: 100,
    backgroundColor: 'white',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    shadowOffset: {width: 10, height: 10},
    shadowColor: '#000',
    shadowOpacity: 1,
    elevation: 15,
  },
  signup2: {
    height: '60%',
    width: '100%',
    paddingLeft: 30,
    paddingRight: 50,
    marginBottom: 20,
  },

  //SignUp Styles End

  // Login Styles Start
  Login_Container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: Theme.COLORS.BACKGROUND,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
  },
  Login1: {
    height: '30%',
    justifyContent: 'center',
  },
  Login_image: {
    height: 90,
    width: 90,
  },
  Login_image_container: {
    height: 100,
    width: 100,
    backgroundColor: 'white',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    shadowOffset: {width: 10, height: 10},
    shadowColor: '#000',
    shadowOpacity: 1,
    elevation: 15,
  },
  Login2: {
    height: '50%',
    paddingLeft: 30,
    paddingRight: 50,
    marginBottom: 10,
  },

  //Login Styles End
  //SignupLogin
  tab: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    backgroundColor: '#fff',
  },
  //End SignupLogin
  //Custom Drawer Start
  Drawer_Safe: {
    flex: 1,
    backgroundColor: '#D3D3D3',
  },
  Drawer_Top: {
    height: 150,
    marginTop: 25,
    backgroundColor: '#D3D3D3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Drawer_Top_img: {
    height: 77,
    width: 77,
    // borderRadius: 70,
    marginTop: 10,
  },
  DrawerMenu_main: {
    flexDirection: 'row',
    padding: 5,
    justifyContent: 'flex-start',
    marginBottom: 5,
    backgroundColor: '#C0C0C0',
  },
  DrawerMenu_img: {
    height: 28,
    width: 28,
  },
  DrawerMenu_title: {
    fontSize: 20,
    marginLeft: 5,
  },

  //Custom Drawer End
  //PicsArt Styles Start
  Picsart_container: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
  },
  Picsart_main: {
    flex: 3,
    flexDirection: 'column',
    width: '100%',
    // padding: 5,
    alignItems: 'center',
  },
  Picsart_CircleShapeView: {
    width: 100,
    height: 100,
    borderRadius: 10,
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#D3D3D3',
    shadowColor: '#D3D3D3',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 3,
    margin: 5,
  },
  Picsart_img: {
    height: 70,
    width: 70,
    alignSelf: 'center',
    marginTop: 3,
  },
  Picsart_txt: {
    alignSelf: 'center',
  },
  //PicsArt Styles End
  //Notification Art Styles Start
  notification_badge: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: -7,
    top: -7,
  },
  notification_badge_txt: {
    color: 'white',
  },
  //Notification Art Styles End
  //Charts Styles Start
  chart_txt: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  chart_view: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 230,
    width: Dimensions.get('window').width,
  },
  //Charts Styles End
  //Footer Styles Start
  footer2: {
    flex: 1,
  },
  footer_tab: {
    backgroundColor: Theme.COLORS.SUCCESS,
  },
  footer_text: {
    color: '#fff',
  },
  //Footer Styles End
  //Activities Styles Start
  Activities_container: {
    flex: 1,
    alignItems: 'center',
  },
  Activities_item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  Activities_title: {
    fontSize: 32,
  },
  //Activities Styles End
  Primary_Text: {
    fontSize: 22,
    alignSelf: 'center',
    fontFamily: 'SourceSansPro-Regular',
    color: Theme.COLORS.PRIMARY,
  },
  Secondary_Text: {
    textAlign: 'center',
    fontFamily: 'argon',
    color: Theme.COLORS.SECONDARY,
  },
  Input_Global: {
    padding: 5,
    borderColor: Theme.COLORS.SUCCESS,
  },
  btn_global: {
    alignItems: 'center',
    padding: 10,
    margin: 20,
    backgroundColor: Theme.COLORS.SUCCESS,
    borderRadius: 30,
  },
  btn_global_text: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
