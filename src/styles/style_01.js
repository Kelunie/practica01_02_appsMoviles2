import { StyleSheet } from "react-native";

// Paleta de colores
const principal = "#1B2E66";
const blanco = "#FFFFFF";
const gris_1 = "#B2BDD5";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: blanco,
    padding: 0,
  },
  body: {
    margin: 7,
    padding: 5,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: principal,
  },
  listTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    marginTop: 16,
    color: principal,
  },
  itemCeleste: {
    backgroundColor: "#B3E5FC",
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
  },
  itemVerde: {
    backgroundColor: "#C8E6C9",
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
  },
  itemText: {
    fontSize: 16,
    color: principal,
  },
  resumen: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 16,
    color: principal,
  },
  header: {
    backgroundColor: principal,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  headerLogo: {
    width: 40,
    height: 40,
    resizeMode: "contain",
  },
  headerTitleContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginLeft: -40, // para compensar el espacio del logo y centrar el texto
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: blanco,
    textAlign: "center",
  },
});
