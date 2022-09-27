import React from "react";
import Kole from "../fonts/kole.otf";
import { Document, Page, Text, View, Font, Image } from "@react-pdf/renderer";

const Documents = ({ data }) => {
  Font.register({
    family: "kole",
    fonts: [
      {
        src: Kole,
        fontWeight: "bold",
      },
    ],
  });
  return (
    <Document>
      <Page
        size="A3"
        style={{
          display: "block",
        }}
      >
        <View
          style={{
            display: "block",
            backgroundColor: "white",
            padding: 10,
            margin: "10",
          }}
        >
          <Text
            style={{
              fontFamily: "Algerian",
              fontSize: "40",
              marginBottom: "15",
              textAlign: "center",
              marginTop: "15",
              borderBottom: "1",
              paddingBottom: "20",
              borderBottomColor: "black",
            }}
          >
            ACTA DE MATRIMONIO{" "}
          </Text>
          <Text
            style={{ lineHeight: "2", marginTop: "15", textAlign: "center" }}
          >
            En este documento, se acredita la credibilidad del turno solicitado
            por el paciente {data.nombre}
          </Text>
          <Text
            style={{ lineHeight: "2", marginTop: "15", textAlign: "center" }}
          >
            Esposo {data.petitioner ? data.petitioner : ""}
          </Text>
          <Text
            style={{ lineHeight: "2", marginTop: "15", textAlign: "center" }}
          >
            Esposa: {data.fiance ? data.fiance : ""}
          </Text>
          <View
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              flexDirection: "row",
            }}
          >
            <Text
              style={{ lineHeight: "2", marginTop: "15", textAlign: "center" }}
            >
              Firmante: Equipo de App Wedding{" "}
            </Text>
            <Text
              style={{ lineHeight: "2", marginTop: "15", textAlign: "center" }}
            >
              Firmante 2: Adrian Martinez, creador
            </Text>
          </View>{" "}
          <View
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
            }}
          ></View>
        </View>
      </Page>
    </Document>
  );
};

export default Documents;
