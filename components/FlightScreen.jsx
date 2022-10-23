import { Component } from "react";
import { KeyboardAvoidingView, StyleSheet, Text, View } from "react-native";
import Input from "./Input";

export default class FlightScreen extends Component {
  render() {
    return (
      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.heading}>Hiling.id</Text>
        </View>
        <View style={styles.form}>
          <Input
            changeAsal={this.setAsal}
            changeTujuan={this.setTujuan}
            changeTanggal={this.setTanggal}
            navigation={this.props.navigation}
          />
        </View>
        <View>
          <Text style={{ marginTop: 400 }}>
            Revan Fauzi Algifari - 120140049
          </Text>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  header: {
    width: "100%",
    backgroundColor: "#88b454",
    minHeight: 300,
    borderBottomStartRadius: 8,
    borderBottomEndRadius: 8,
  },
  heading: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
  form: {
    position: "absolute",
    backgroundColor: "white",
    top: 100,
    width: "85%",
    borderRadius: 10,
    padding: 15,
    elevation: 10,
    minHeight: 350,
  },
});
