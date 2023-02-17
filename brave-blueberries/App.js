import * as React from "react";
import { Text, View, StyleSheet, Image, ScrollView } from "react-native";

export default function App() {
  return (
    <View style={estilo.container}>
      <View>
        <Text style={estilo.titulo}>Profissões de TI</Text>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <View style={estilo.container}>
          <Text style={estilo.subtitulo}>Programador de Mobile</Text>
          <Image style={estilo.img} source={require("./assets/p1.jpg")} />
          <Text style={estilo.subtitulo}>Programador de Backend</Text>
          <Image style={estilo.img} source={require("./assets/p2.jpg")} />
          <Text style={estilo.subtitulo}>Programador de Frontend</Text>
          <Image style={estilo.img} source={require("./assets/p3.jpg")} />
          <Text style={estilo.subtitulo}>Programador de DevOps</Text>
          <Image style={estilo.img} source={require("./assets/p4.jpg")} />
        </View>
      </ScrollView>
    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000"
  },

  titulo: {
    marginTop: 15,
    marginBottom: 20,
    fontSize: 35,
    color: "#900000"
  },
  img: {
    width: 250,
    height: 200,
    marginBottom: 60,
    borderRadius: 20
  },
  subtitulo: {
    fontSize: 20,
    color: "white",
    marginBottom: 15
  }
});
