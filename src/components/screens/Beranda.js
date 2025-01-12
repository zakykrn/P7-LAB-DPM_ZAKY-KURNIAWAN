import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function BerandaScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Welcome Back!</Text>
        <Text style={styles.subText}>What would you like to do today?</Text>
      </View>

      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <Icon name="list" size={40} color="#2464EC" />
          <Text style={styles.cardTitle}>My Tasks</Text>
          <Text style={styles.cardDescription}>
            Manage and track your daily tasks
          </Text>
        </View>

        <View style={styles.card}>
          <Icon name="stats-chart" size={40} color="#2464EC" />
          <Text style={styles.cardTitle}>Progress</Text>
          <Text style={styles.cardDescription}>
            Track your task completion rate
          </Text>
        </View>

        <View style={styles.card}>
          <Icon name="calendar" size={40} color="#2464EC" />
          <Text style={styles.cardTitle}>Calendar</Text>
          <Text style={styles.cardDescription}>
            View upcoming tasks and events
          </Text>
        </View>

        <View style={styles.card}>
          <Icon name="settings" size={40} color="#2464EC" />
          <Text style={styles.cardTitle}>Settings</Text>
          <Text style={styles.cardDescription}>
            Customize your app preferences
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    padding: 20,
    backgroundColor: '#2464EC',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  subText: {
    fontSize: 16,
    color: '#fff',
    opacity: 0.9,
  },
  cardContainer: {
    padding: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    width: '47%',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 10,
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
});