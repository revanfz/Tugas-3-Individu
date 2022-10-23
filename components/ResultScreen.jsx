import React, { Component } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Jadwal } from "../src/Data";
import Item from "./Item";

export default class ResultScreen extends Component {
  constructor(props) {
    super(props);
    let { asal, tujuan, tanggal } = this.props.route.params;
    this.state = {
      asal,
      tujuan,
      tanggal,
    };
    this.date = new Date(this.state.tanggal).toDateString() ?? "Invalid Date";
  }

  showFlight() {
    const filteredAsal = Jadwal.filter(
      (val) =>
        val.bandara_kode_keberangkatan === this.state.asal &&
        val.bandara_kode_tujuan === this.state.tujuan
    );
    return (
      <View>
        <FlatList
          data={filteredAsal}
          keyExtractor={(item, index) => index + item}
          renderItem={(itemData) => (
            <Item item={itemData} tanggal={this.date} />
          )}
          ListEmptyComponent={() => (
            <View>
              <Text
                style={{
                  padding: 20,
                  width: 350,
                  textAlign: "center",
                  backgroundColor: "lightgrey",
                  shadowColor: "#171717",
                  borderRadius: 10,
                  elevation: 5,
                }}
              >
                Tidak Ada Jadwal Penerbangan yang Cocok
              </Text>
            </View>
          )}
        />
      </View>
    );
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center" }}>
        <View
          style={{
            backgroundColor: "#88b454",
            width: "100%",
            paddingBottom: 20,
          }}
        >
          <Text style={{ textAlign: "center", fontSize: 18, color: "white" }}>
            Hasil Pencarian Penerbangan
          </Text>
          <Text style={{ textAlign: "center", fontSize: 18, color: "white" }}>
            (Tanggal Keberangkatan)
          </Text>
        </View>
        <View style={styles.container}>
          {this.date !== "Invalid Date" ? (
            this.showFlight()
          ) : (
            <View style={styles.content}>
              <Text style={{ textAlign: "center" }}>
                Invalid Date. Perhatikan format tanggal
              </Text>
            </View>
          )}
        </View>
        <View>
          <Text style={{ marginBottom: 40 }}>
            Revan Fauzi Algifari - 120140049
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 10,
    marginTop: 10,
  },
  content: {
    backgroundColor: "lightgrey",
    width: "90%",
    padding: 50,
    borderRadius: 10,
    shadowColor: "#171717",
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
});
