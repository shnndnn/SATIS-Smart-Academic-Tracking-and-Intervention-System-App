// src/screens/ConnectionStatusScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, ActivityIndicator } from 'react-native';
import { checkBackendConnection } from '../services/connectionService';

const ConnectionStatusScreen = () => {
  const [isConnected, setIsConnected] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const checkConnection = async () => {
    setIsLoading(true);
    const status = await checkBackendConnection();
    setIsConnected(status);
    setIsLoading(false);
  };

  useEffect(() => {
    checkConnection();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Backend Connection Status</Text>
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <Text style={isConnected ? styles.success : styles.error}>
          {isConnected ? 'Successfully connected to the backend.' : 'Failed to connect to the backend.'}
        </Text>
      )}
      <Button title="Re-check Connection" onPress={checkConnection} disabled={isLoading} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  success: {
    fontSize: 18,
    color: 'green',
    marginBottom: 20,
  },
  error: {
    fontSize: 18,
    color: 'red',
    marginBottom: 20,
  },
});

export default ConnectionStatusScreen;
