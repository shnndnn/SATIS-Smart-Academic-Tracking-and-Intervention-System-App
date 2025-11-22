import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground,
  Animated,
  Dimensions,
} from "react-native";
import school from '../../assets/school.jpg';
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function Home() {
  const router = useRouter();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerMounted, setDrawerMounted] = useState(false);
  const width = Dimensions.get('window').width;
  const translateX = useRef(new Animated.Value(-width * 0.8)).current;

  useEffect(() => {
    if (drawerOpen) {
      setDrawerMounted(true);
      Animated.timing(translateX, {
        toValue: 0,
        duration: 260,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(translateX, {
        toValue: -width * 0.8,
        duration: 220,
        useNativeDriver: true,
      }).start(() => setDrawerMounted(false));
    }
  }, [drawerOpen, translateX, width]);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => setDrawerOpen(true)}>
            <Ionicons name="menu" size={28} color="#1f2937" />
          </TouchableOpacity>
          <View style={styles.profileSection}>
            <View style={styles.profileImage}>
              <Image
                source={{ uri: "https://via.placeholder.com/48" }}
                style={styles.avatar}
              />
            </View>
            <View >
              <Text style={styles.grade}>Grade 12</Text>
              <Text style={styles.stream}>STEM</Text>
            </View>
          </View>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Ionicons
            name="search"
            size={20}
            color="#9ca3af"
            style={styles.searchIcon}
          />
          <TextInput
            placeholder="Search"
            placeholderTextColor="#9ca3af"
            style={styles.searchInput}
          />
          <TouchableOpacity style={styles.bellIcon}>
            <Ionicons name="notifications-outline" size={24} color="#1f2937" />
          </TouchableOpacity>
        </View>

        {/* Welcome Card */}
        <ImageBackground source={require('../../assets/school.jpg')} style={styles.welcomeCard}>
          <View style={styles.welcomeOverlay}>
            <Text style={styles.welcomeTitle}>Welcome Back, Sheena!</Text>
            <Text style={styles.welcomeSubtitle}>Lorem Ipsum</Text>
          </View>
        </ImageBackground>

        {/* Drawer overlay */}
        {drawerMounted && (
          <>
            <TouchableOpacity style={styles.drawerBackdrop} onPress={() => setDrawerOpen(false)} />
            <Animated.View style={[styles.drawer, { transform: [{ translateX }] }] }>
              <Text style={styles.drawerTitle}>Menu</Text>
              <TouchableOpacity
                style={styles.drawerItem}
                onPress={() => {
                  setDrawerOpen(false);
                  router.push('/Screens/Aboutscreen');
                }}
              >
                <Text style={styles.drawerItemText}>About Us</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.drawerItem}
                onPress={() => {
                  setDrawerOpen(false);
                  router.push('/Screens/Settings');
                }}
              >
                <Text style={styles.drawerItemText}>Settings</Text>
              </TouchableOpacity>
            </Animated.View>
          </>
        )}
        {/* Stats Grid */}
        <View style={styles.statsGrid}>
          <View style={styles.statCard}>
            <Text style={styles.statLabel}>GPA</Text>
            <Text style={styles.statValue}>3.5</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statLabel}>Subject at Risk</Text>
            <Text style={styles.statValue}>3</Text>
          </View>
        </View>

        <View style={styles.statsGrid}>
          <View style={styles.statCard}>
            <Text style={styles.statLabel}>Attendance</Text>
            <Text style={styles.statValue}>85%</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statLabel}>Subject at Risk</Text>
            <Text style={styles.statValue}>3</Text>
          </View>
        </View>

        {/* Performance Metrics */}
        <View style={styles.metricsCard}>
          <Text style={styles.metricsTitle}>Performance Metrics:</Text>

          <View style={styles.metricItem}>
            <Text style={styles.metricLabel}>Academic Performance:</Text>
            <View style={styles.progressBarContainer}>
              <View style={[styles.progressBar, { width: "45%" }]} />
            </View>
            <View style={styles.progressLabels}>
              <Text style={styles.progressLabel}>0</Text>
              <Text style={styles.progressLabel}>25</Text>
              <Text style={styles.progressLabel}>50</Text>
              <Text style={styles.progressLabel}>75</Text>
              <Text style={styles.progressLabel}>100</Text>
            </View>
          </View>

          <View style={styles.metricItem}>
            <Text style={styles.metricLabel}>Attendance Rate:</Text>
            <View style={styles.progressBarContainer}>
              <View style={[styles.progressBar, { width: "50%" }]} />
            </View>
            <View style={styles.progressLabels}>
              <Text style={styles.progressLabel}>0</Text>
              <Text style={styles.progressLabel}>25</Text>
              <Text style={styles.progressLabel}>50</Text>
              <Text style={styles.progressLabel}>75</Text>
              <Text style={styles.progressLabel}>100</Text>
            </View>
          </View>

          <View style={styles.metricItem}>
            <Text style={styles.metricLabel}>Task Completion:</Text>
            <View style={styles.progressBarContainer}>
              <View style={[styles.progressBar, { width: "50%" }]} />
            </View>
            <View style={styles.progressLabels}>
              <Text style={styles.progressLabel}>0</Text>
              <Text style={styles.progressLabel}>25</Text>
              <Text style={styles.progressLabel}>50</Text>
              <Text style={styles.progressLabel}>75</Text>
              <Text style={styles.progressLabel}>100</Text>
            </View>
          </View>

          <View style={styles.metricItem}>
            <Text style={styles.metricLabel}>Overall Health:</Text>
            <View style={styles.progressBarContainer}>
              <View style={[styles.progressBar, { width: "70%" }]} />
            </View>
            <View style={styles.progressLabels}>
              <Text style={styles.progressLabel}>0</Text>
              <Text style={styles.progressLabel}>25</Text>
              <Text style={styles.progressLabel}>50</Text>
              <Text style={styles.progressLabel}>75</Text>
              <Text style={styles.progressLabel}>100</Text>
            </View>
          </View>
        </View>

        {/* Bottom Stats */}
        <View style={styles.bottomStatsCard}>
          <View style={styles.bottomStatsRow}>
            <View style={styles.bottomStat}>
              <Text style={styles.bottomStatValue}>71.7%</Text>
              <Text style={styles.bottomStatLabel}>Average Grade</Text>
            </View>
            <View style={styles.bottomStat}>
              <Text style={styles.bottomStatValue}>85%</Text>
              <Text style={styles.bottomStatLabel}>Attendance</Text>
            </View>
          </View>
          <View style={styles.bottomStatsRow}>
            <View style={styles.bottomStat}>
              <Text style={styles.bottomStatValue}>3/3</Text>
              <Text style={styles.bottomStatLabel}>Subject Tracked</Text>
            </View>
            <View style={styles.bottomStat}>
              <Text style={styles.bottomStatValue}>70%</Text>
              <Text style={styles.bottomStatLabel}>Task Complete</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF0F5",
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 13,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 16,
  },
  profileSection: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  
  },
  profileImage: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 10,
    backgroundColor: "#374151",
    overflow: "hidden",
  },
  avatar: {
    width: "100%",
    height: "100%",
  },
  
  grade: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#1f2937",
  },
  stream: {
    fontSize: 10,
    color: "#374151",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 25,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 16,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#1f2937",
  },
    drawerBackdrop: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.7)',
      zIndex: 40,
    },
    drawer: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      width: '80%',
      backgroundColor: '#f3f4f6',
      paddingTop: 60,
      paddingHorizontal: 16,
      elevation: 12,
      zIndex: 50,
      shadowColor: '#000',
      shadowOpacity: 0.3,
      shadowOffset: { width: 2, height: 0 },
      shadowRadius: 8,
    },
    drawerTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 12,
    },
    drawerItem: {
      paddingVertical: 12,
    },
    drawerItemText: {
      fontSize: 16,
    },
  bellIcon: {
    marginLeft: 8,
  },
  welcomeCard: {
    borderRadius: 24,
    padding: 10,
    marginBottom: 16,
    overflow: 'hidden',
    minHeight: 100,
  },
  welcomeOverlay: {
    padding: 16,
    borderRadius: 12,
  }, 
  welcomeTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#000000ff",
    marginBottom: 8,
  },
  welcomeSubtitle: {
    fontSize: 16,
    color: "#000000ff",
  },
  statsGrid: {
    flexDirection: "row",
    gap: 16,
    marginBottom: 16,
  },
  statCard: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 24,
    padding: 24,
    alignItems: "center",
  },
  statLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: "#6b7280",
    marginBottom: 8,
    textAlign: "center",
  },
  statValue: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#1f2937",
  },
  metricsCard: {
    backgroundColor: "white",
    borderRadius: 24,
    padding: 24,
    marginBottom: 16,
  },
  metricsTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1f2937",
    marginBottom: 24,
  },
  metricItem: {
    marginBottom: 24,
  },
  metricLabel: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1f2937",
    marginBottom: 8,
  },
  progressBarContainer: {
    height: 32,
    backgroundColor: "#e5e7eb",
    borderRadius: 16,
    overflow: "hidden",
  },
  progressBar: {
    height: "100%",
    backgroundColor: "#f9a8d4",
    borderRadius: 16,
  },
  progressLabels: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 4,
  },
  progressLabel: {
    fontSize: 12,
    color: "#6b7280",
  },
  bottomStatsCard: {
    backgroundColor: "white",
    borderRadius: 24,
    padding: 24,
    marginBottom: 32,
  },
  bottomStatsRow: {
    flexDirection: "row",
    gap: 24,
    marginBottom: 24,
  },
  bottomStat: {
    flex: 1,
    alignItems: "center",
  },
  bottomStatValue: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#1f2937",
    marginBottom: 8,
  },
  bottomStatLabel: {
    fontSize: 14,
    color: "#6b7280",
    textAlign: "center",
  },
});
