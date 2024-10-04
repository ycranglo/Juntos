import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { Image } from "expo-image";
export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.imageBox}>
        <Image
          style={styles.image}
          source={require("../assets/images/manLogin.png")}
          contentFit="cover"
          transition={1000}
        />
      </View>
      <Text style={{ paddingTop: 10, fontSize: 25, fontWeight: "600" }}>
        J U N T O S
      </Text>
      <TouchableOpacity style={styles.buttonContainer}>
        <View style={styles.iconContainer}>
          <Image
            style={styles.icon}
            source={require("../assets/images/google.png")} // Make sure the image path is correct
          />
        </View>
        <Text style={styles.buttonText}>Continue with Google</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    alignItems: "center", // Center the content horizontally
    justifyContent: "center", // Center the content vertically
  },
  image: {
    width: "100%", // Set a fixed width (adjust as needed)
    height: "100%", // Set a fixed height (adjust as needed)
    backgroundColor: "#0553",
    borderRadius: 10,
  },
  imageBox: {
    alignItems: "center",
    justifyContent: "center",
    width: 300, // Adjust width as needed
    height: 400, // Adjust height as needed
    // You can also use flex properties if you want the imageBox to fill space
    borderRadius: 10,
  },
  buttonContainer: {
    marginTop:20,
    flexDirection: "row",
    alignItems: "center", // Center items vertically
    borderWidth: 1,
    borderColor: "#ccc", // Set border color
    borderRadius: 5, // Optional: add border radius for rounded corners
    padding: 10, // Add padding for better touch feedback
    backgroundColor: "#fff", // Optional: background color
  },
  iconContainer: {
    marginRight: 10, // Space between the icon and text
  },
  icon: {
    width: 24, // Set a specific width
    height: 24, // Set a specific height
  },
  buttonText: {
    fontSize: 16, // Set font size for the text
  },
});
