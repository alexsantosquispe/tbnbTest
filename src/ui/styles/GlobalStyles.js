import { StyleSheet } from 'react-native'
import { Colors } from './Colors'

export const GlobalStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: Colors.background
  },
  fullContainer: {
    flex: 1
  },
  centeredContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  justifyContentCenter: {
    justifyContent: 'center'
  },
  horizontalEnd: {
    alignItems: 'flex-end'
  },
  modalForm: {
    backgroundColor: Colors.background,
    justifyContent: 'center',
    paddingVertical: 24,
    paddingHorizontal: 16,
    marginHorizontal: 36,
    borderRadius: 12
  },
  emptyLayout: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.background
  },
  loadingContainer: {
    minHeight: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleText: {
    color: Colors.textTitle,
    fontSize: 28,
    fontWeight: 'bold',
    paddingTop: 12,
    paddingBottom: 16
  },
  textSubTitle: {
    color: Colors.textTitle,
    fontSize: 22,
    paddingTop: 8,
    paddingBottom: 4
  },
  itemContainer: {
    flexDirection: 'row',
    marginVertical: 10,
    alignItems: 'center',
    borderRadius: 12
  },
  itemProductContent: {
    flex: 1,
    marginLeft: 16,
    marginRight: 8,
    alignSelf: 'center'
  },
  itemProductName: {
    fontSize: 17,
    fontWeight: '700',
    paddingBottom: 6
  },
  itemProductDate: {
    fontSize: 14,
    color: Colors.darkGray,
    fontStyle: 'italic'
  },
  buttonContainer: {
    backgroundColor: Colors.primary,
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5
  },
  buttonLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.ligth
  },
  defaultImage: {
    backgroundColor: Colors.primary,
    width: 90,
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20
  },
  itemCatalog: {
    width: 78,
    height: 78,
    alignSelf: 'center',
    padding: 4,
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20
  },
  itemSelected: {
    backgroundColor: Colors.primary
  },
  itemNoSelected: {
    backgroundColor: Colors.ligth,
    borderWidth: 2.5,
    borderColor: Colors.primary
  },
  itemCatalogLabel: {
    fontSize: 11,
    fontWeight: '700',
    textAlign: 'center'
  },
  floatButton: {
    width: 56,
    height: 56,
    backgroundColor: Colors.primary,
    borderRadius: 30,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
    bottom: 16,
    right: 16
  },
  searchBarContainer: {
    flexDirection: 'row',
    backgroundColor: Colors.inputBackground,
    marginVertical: 4,
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: Colors.inputBackground,
    paddingLeft: 8
  },
  searchIcon: {
    paddingHorizontal: 6
  },
  inputSymbol: {
    paddingHorizontal: 8
  },
  searchInput: {
    paddingVertical: 10,
    fontSize: 17,
    flex: 1
  },
  clearSearchBarButton: {
    backgroundColor: Colors.ligthGray,
    padding: 2,
    borderRadius: 20,
    marginRight: 8
  },
  separatorLine: {
    alignSelf: 'flex-end',
    marginVertical: 4,
    width: '100%',
    height: 0.4,
    backgroundColor: Colors.xligthGray
  },
  biggerMarginSpace: {
    marginVertical: 16,
    height: 1
  },
  listFooterEmpty: {
    height: 80,
    width: '100%'
  },
  itemAttached: {
    alignItems: 'center',
    width: '48%',
    borderRadius: 20,
    borderColor: Colors.ligthGray,
    borderWidth: 0.8,
    backgroundColor: Colors.cardBackground,
    paddingVertical: 12,
    margin: 4
  },
  itemAttachedLabel: {
    color: Colors.dark,
    fontSize: 13
  },
  description: {
    color: Colors.darkGray,
    fontSize: 12.5
  },
  regularBadgeContainer: {
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 8
  },
  circleBadgeContainer: {
    position: 'absolute',
    paddingHorizontal: 8,
    paddingVertical: 2,
    // borderRadius: 16,
    borderBottomRightRadius: 16,
    borderTopLeftRadius: 8
  },
  circleBadgeText: {
    fontWeight: 'bold',
    fontSize: 14
  },
  circleBadgeIcon: {
    position: 'absolute',
    padding: 3,
    borderRadius: 20
  },
  labelBlack: {
    fontWeight: 'bold',
    fontSize: 17
  },
  counterContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 16,
    borderColor: Colors.ligthGray,
    alignItems: 'center'
  },
  counterValue: {
    paddingHorizontal: 20,
    borderColor: Colors.ligthGray,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    paddingVertical: 8,
    justifyContent: 'center'
  },
  counterLeftButton: {
    paddingRight: 12,
    paddingLeft: 16,
    paddingVertical: 8
  },
  counterRightButton: {
    paddingLeft: 12,
    paddingRight: 16,
    paddingVertical: 8
  },
  labelBlackSmall: {
    color: Colors.dark,
    paddingTop: 4,
    fontSize: 16,
    fontWeight: '700'
  },
  labelSubTitleSmall: {
    fontSize: 14,
    color: Colors.gray
  },
  topRight: {
    right: 8,
    top: 8
  }
})
