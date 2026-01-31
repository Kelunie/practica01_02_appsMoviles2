import React from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { styles } from "../styles/style_01";

// props: data (array), onPress (func), tipo ('celeste' | 'verde')
export default function ListaCursos({ data, onPress, tipo }) {
  const itemStyle = tipo === "celeste" ? styles.itemCeleste : styles.itemVerde;
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.codigo}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => onPress(item)}>
          <View style={itemStyle}>
            <Text style={styles.itemText}>Código: {item.codigo}</Text>
            <Text style={styles.itemText}>Nombre: {item.nombre}</Text>
            <Text style={styles.itemText}>
              Nivel: {item.nivel} | Créditos: {item.creditos}
            </Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
}
