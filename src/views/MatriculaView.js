import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "../styles/style_01";
import ListaCursos from "../components/ListaCursos";
import { useSelector, useDispatch } from "react-redux";
import { agregarCurso, quitarCurso } from "../components/actions/TaskAction";

export default function MatriculaView() {
  const disponibles = useSelector((state) => state.task.disponibles);
  const seleccionados = useSelector((state) => state.task.seleccionados);
  const dispatch = useDispatch();

  const seleccionarCurso = (curso) => {
    dispatch(agregarCurso(curso));
  };

  const quitarCursoSel = (curso) => {
    dispatch(quitarCurso(curso));
  };

  const totalCreditos = seleccionados.reduce((sum, c) => sum + c.creditos, 0);
  const costo = totalCreditos * 12000;

  return (
    <View style={styles.container}>
      {/* Header con logo y título */}
      <View style={styles.header}>
        <Image
          source={require("../imgs/logos/logo_universidad.png")}
          style={styles.headerLogo}
        />
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle}>matricula</Text>
        </View>
      </View>

      <View style={styles.body}>
        <Text style={styles.listTitle}>Cursos disponibles</Text>
        <ListaCursos
          data={disponibles}
          onPress={seleccionarCurso}
          tipo="celeste"
        />

        <Text style={styles.listTitle}>Cursos a matricular</Text>
        <ListaCursos
          data={seleccionados}
          onPress={quitarCursoSel}
          tipo="verde"
        />

        <Text style={styles.resumen}>
          Total de créditos: {totalCreditos} {"\n"}
          Costo matrícula: ₡{costo.toLocaleString("es-CR")}
        </Text>
      </View>
    </View>
  );
}
