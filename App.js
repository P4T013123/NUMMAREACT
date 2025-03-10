import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Alert, StyleSheet } from "react-native";

export default function NumberGame() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    generateNumbers();
  }, []);

  function generateNumbers() {
    const n1 = Math.floor(Math.random() * 100);
    const n2 = Math.floor(Math.random() * 100);
    setNum1(n1);
    setNum2(n2);
  }

  function checkAnswer(selected, other) {
    if (selected > other) {
      setScore(prevScore => prevScore + 1);
      generateNumbers();
    } else {
      Alert.alert("Juego terminado!", `Puntuación: ${score}`);
      setScore(0);
      generateNumbers();
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Juego de Números</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#3498db" }]}
          onPress={() => checkAnswer(num1, num2)}
        >
          <Text style={styles.buttonText}>{num1}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#e74c3c" }]}
          onPress={() => checkAnswer(num2, num1)}
        >
          <Text style={styles.buttonText}>{num2}</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.score}>Puntuación: {score}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f4f4f4",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
  },
  button: {
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
  },
  score: {
    marginTop: 20,
    fontSize: 18,
  },
});
