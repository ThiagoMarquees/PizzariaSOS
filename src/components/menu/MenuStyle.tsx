import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "white",
    width: "100%",
    height: "100%",
    paddingTop: 40,
    paddingBottom: 40,
    gap: 15,
  },
  text: {
    width: "90%",
    backgroundColor: "#a8792d",
    color: "white",
    textAlign: "center",
    borderRadius: 20,
    fontSize: 20,
    fontWeight: "bold",
    padding: 5,
  },
  pizza: {
    width: 150,
    height: 150,
    borderRadius: 10,
    margin: 5,
  },
  title: {
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: 190,
    height: 190,
  },
  logo: {
    backgroundColor: "#a8792d",
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
    padding: 15,
    paddingRight: 25,
    borderBottomEndRadius: 100,
    borderTopRightRadius: 100,
  },
  header: {
    flexDirection: "row",
  },
  formu: {
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
    gap: 4,
  },
  formuText: {
    borderRightWidth: 1,
    borderTopWidth: 1,
    width: "80%",
  },
  saborContainer: {
    width: "100%",
    height: 300,
    gap: 15,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  tamContainer: {
    width: "100%",
    alignItems: "center",
    gap: 15,
  },
  descContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    gap: 10,
  },
  desc: {
    maxWidth: "100%",
    width: "80%",
    minHeight: 60,
    height: "auto",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 17,
  },
  btnPedido: {
    backgroundColor: "#a8792d",
    color: "white",
    fontWeight: "bold",
    padding: 10,
    borderRadius: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Fundo transparente escuro
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: "80%",
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
