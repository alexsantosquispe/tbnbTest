import { StyleSheet } from "react-native"
import { Colors } from "./Colors"

export const GlobalStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: Colors.background,
  },
  centeredContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    color: Colors.textTitle,
    fontSize: 28,
    fontWeight: "bold",
    paddingTop: 12,
    paddingBottom: 16,
  },
  itemContainer: {
    flexDirection: "row",
    marginVertical: 10,
    alignItems: "center",
    borderRadius: 12,
  },
  defaultImage: {
    backgroundColor: Colors.primary,
    width: 70,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
  },
  itemCatalog: {
    width: 78,
    height: 78,
    alignSelf: "center",
    padding: 4,
    marginRight: 8,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
  },
  floatButton: {
    width: 56,
    height: 56,
    backgroundColor: Colors.primary,
    borderRadius: 30,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    elevation: 8,
    bottom: 16,
    right: 16,
  },
  searchBarContainer: {
    flexDirection: "row",
    marginTop: 4,
    marginBottom: 12,
    backgroundColor: Colors.inputBackground,
    borderRadius: 8,
    alignItems: "center",
  },
  searchIcon: {
    paddingHorizontal: 6,
  },
  inputSymbol: {
    paddingHorizontal: 8,
  },
  searchInput: {
    paddingVertical: 10,
    fontSize: 17,
    flex: 1,
  },
  clearSearchBarButton: {
    backgroundColor: Colors.ligthGray,
    padding: 2,
    borderRadius: 20,
    marginRight: 8,
  },
  separatorLine: {
    marginVertical: 4,
    width: "100%",
    height: 0.8,
    backgroundColor: Colors.xligthGray,
  },
})
