import { Component } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      asal: "",
      tujuan: "",
      tanggal: "",
    };
  }

  render() {
    return (
      <View style={styles.form}>
        <Text>Lokasi Keberangkatan {this.props.asal}</Text>
        <View style={styles.field}>
          <MaterialCommunityIcons
            size={20}
            name="airplane-takeoff"
            style={{ padding: 10 }}
          />
          <TextInput
            placeholder="Masukkan Lokasi Keberangkatan"
            style={{ padding: 10, fontSize: 12, width: "96%" }}
            value={this.state.asal}
            onChangeText={(value) => this.setState({ asal: value })}
          />
        </View>
        <Text>Lokasi Tujuan</Text>
        <View style={styles.field}>
          <MaterialCommunityIcons
            size={20}
            name="airplane-landing"
            style={{ padding: 10 }}
          />
          <TextInput
            placeholder="Masukkan Lokasi Tujuan"
            style={{ padding: 10, fontSize: 12, width: "96%" }}
            value={this.state.tujuan}
            onChangeText={(value) => this.setState({ tujuan: value })}
          />
        </View>
        <Text>Tanggal Keberangkatan</Text>
        <View style={styles.field}>
          <MaterialCommunityIcons
            size={20}
            name="calendar"
            style={{ padding: 10 }}
          />
          <TextInput
            placeholder="Tanggal Keberangkatan (yyyy-mm-dd)"
            style={{ padding: 10, fontSize: 12, width: "96%" }}
            value={this.state.tanggal}
            onChangeText={(value) => this.setState({ tanggal: value })}
          />
        </View>
        <View style={styles.button}>
          <Button
            disabled={
              this.state.asal === "" ||
              this.state.tanggal === "" ||
              this.state.tujuan === ""
            }
            onPress={() => this.props.navigation.navigate("Result", this.state)}
            title="Cari"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  form: {
    height: "100%",
  },
  field: {
    maxHeight: 65,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#88b454",
    borderRadius: 10,
    marginVertical: 10,
    padding: 5,
  },
  button: {
    paddingVertical: 15,
  },
});
