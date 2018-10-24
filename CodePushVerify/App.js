import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import codePush from "react-native-code-push";


let codePushOptions = { checkFrequency: codePush.CheckFrequency.MANUAL };

class App extends Component {
 
  codePushStatusDidChange(status) {
    switch(status) {
        case codePush.SyncStatus.CHECKING_FOR_UPDATE:
            console.log("Checking for updates.");
            break;
        case codePush.SyncStatus.DOWNLOADING_PACKAGE:
            console.log("Downloading package.");
            break;
        case codePush.SyncStatus.INSTALLING_UPDATE:
            console.log("Installing update.");
            break;
        case codePush.SyncStatus.UP_TO_DATE:
            console.log("Up-to-date.");
            break;
        case codePush.SyncStatus.UPDATE_INSTALLED:
            console.log("Update installed.");
            break;
    }
}

codePushDownloadDidProgress(progress) {
    console.log(progress.receivedBytes + " of " + progress.totalBytes + " received.");
}

  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Code Push Test !</Text>
      </View>
    );
  }
}
App = codePush(codePushOptions)(App);
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
