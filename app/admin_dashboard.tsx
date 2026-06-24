// screens/admin_dashboard.tsx
import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  ScrollView,
  Dimensions,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router'; // ← IMPORTANTE ITO!

const { width } = Dimensions.get('window');

const AdminDashboard = () => {
  const [stats] = useState({
    totalPatients: 1247,
    appointmentsToday: 38,
    doctorsAvailable: 12,
    pendingReports: 5,
  });

  const [recentPatients] = useState([
    { id: 1, name: 'Maria Santos', age: 34, status: 'Checked In' },
    { id: 2, name: 'Jose Reyes', age: 56, status: 'In Treatment' },
    { id: 3, name: 'Ana Cruz', age: 28, status: 'Waiting' },
    { id: 4, name: 'Carlos Garcia', age: 45, status: 'Discharged' },
  ]);

  // ✅ ITO NA! GAMIT ANG EXPO ROUTER!
  const handleLogout = () => {
    Alert.alert('Logout', 'Are you sure you want to logout?', [
      { text: 'Cancel' },
      { text: 'Yes', onPress: () => router.replace('/') } // ← PUMUNTA SA LOGIN!
    ]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#061F17" />
      <View style={styles.topArc} />

      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View style={styles.iconBadgeSmall}>
            <Ionicons name="medical" size={24} color="#4ADE80" />
          </View>
          <Text style={styles.headerTitle}>AbleCare</Text>
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.notifBtn} activeOpacity={0.7}>
            <Ionicons name="notifications-outline" size={22} color="#FFFFFF" />
            <View style={styles.notifBadge} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleLogout} activeOpacity={0.7}>
            <Ionicons name="log-out-outline" size={24} color="#4ADE80" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.welcomeSection}>
          <Text style={styles.welcomeText}>Welcome back, Admin!</Text>
          <Text style={styles.welcomeSubtext}>Here's your healthcare overview</Text>
        </View>

        <View style={styles.statsGrid}>
          <View style={[styles.statCard, styles.statCard1]}>
            <View style={styles.statIconContainer}>
              <Ionicons name="people-outline" size={24} color="#4ADE80" />
            </View>
            <Text style={styles.statNumber}>{stats.totalPatients}</Text>
            <Text style={styles.statLabel}>Total Patients</Text>
          </View>

          <View style={[styles.statCard, styles.statCard2]}>
            <View style={styles.statIconContainer}>
              <Ionicons name="calendar-outline" size={24} color="#4ADE80" />
            </View>
            <Text style={styles.statNumber}>{stats.appointmentsToday}</Text>
            <Text style={styles.statLabel}>Appointments Today</Text>
          </View>

          <View style={[styles.statCard, styles.statCard3]}>
            <View style={styles.statIconContainer}>
              <Ionicons name="medkit-outline" size={24} color="#4ADE80" />
            </View>
            <Text style={styles.statNumber}>{stats.doctorsAvailable}</Text>
            <Text style={styles.statLabel}>Doctors Available</Text>
          </View>

          <View style={[styles.statCard, styles.statCard4]}>
            <View style={styles.statIconContainer}>
              <Ionicons name="document-text-outline" size={24} color="#4ADE80" />
            </View>
            <Text style={styles.statNumber}>{stats.pendingReports}</Text>
            <Text style={styles.statLabel}>Pending Reports</Text>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>Recent Patients</Text>
            <TouchableOpacity activeOpacity={0.7}>
              <Text style={styles.viewAllText}>View All</Text>
            </TouchableOpacity>
          </View>

          {recentPatients.map((patient, index) => (
            <View 
              key={patient.id} 
              style={[
                styles.patientItem,
                index === recentPatients.length - 1 && styles.patientItemLast
              ]}
            >
              <View style={styles.patientInfo}>
                <View style={styles.patientAvatar}>
                  <Text style={styles.avatarText}>
                    {patient.name.charAt(0)}
                  </Text>
                </View>
                <View>
                  <Text style={styles.patientName}>{patient.name}</Text>
                  <Text style={styles.patientAge}>Age: {patient.age}</Text>
                </View>
              </View>
              <View style={[
                styles.statusBadge,
                patient.status === 'Checked In' && styles.statusCheckedIn,
                patient.status === 'In Treatment' && styles.statusTreatment,
                patient.status === 'Waiting' && styles.statusWaiting,
                patient.status === 'Discharged' && styles.statusDischarged,
              ]}>
                <Text style={styles.statusText}>{patient.status}</Text>
              </View>
            </View>
          ))}
        </View>

        <View style={[styles.card, styles.lastCard]}>
          <Text style={styles.cardTitle}>Quick Actions</Text>
          <View style={styles.actionsGrid}>
            <TouchableOpacity style={styles.actionCard} activeOpacity={0.8}>
              <View style={styles.actionIconContainer}>
                <Ionicons name="person-add-outline" size={26} color="#4ADE80" />
              </View>
              <Text style={styles.actionText}>Add Patient</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionCard} activeOpacity={0.8}>
              <View style={styles.actionIconContainer}>
                <Ionicons name="calendar-outline" size={26} color="#4ADE80" />
              </View>
              <Text style={styles.actionText}>Schedule</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionCard} activeOpacity={0.8}>
              <View style={styles.actionIconContainer}>
                <Ionicons name="document-text-outline" size={26} color="#4ADE80" />
              </View>
              <Text style={styles.actionText}>Reports</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionCard} activeOpacity={0.8}>
              <View style={styles.actionIconContainer}>
                <Ionicons name="settings-outline" size={26} color="#4ADE80" />
              </View>
              <Text style={styles.actionText}>Settings</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>© 2026 HealthCare+ • All Rights Reserved</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#061F17',
  },
  topArc: {
    position: 'absolute',
    top: -120,
    left: -60,
    width: 320,
    height: 320,
    borderRadius: 160,
    backgroundColor: 'rgba(74, 222, 128, 0.07)',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 20,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconBadgeSmall: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: 'rgba(74, 222, 128, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(74, 222, 128, 0.2)',
    marginRight: 12,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  notifBtn: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: 'rgba(255,255,255,0.05)',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
    position: 'relative',
  },
  notifBadge: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#4ADE80',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingBottom: 40,
  },
  welcomeSection: {
    marginBottom: 24,
  },
  welcomeText: {
    fontSize: 26,
    fontWeight: '800',
    color: '#FFFFFF',
    letterSpacing: -0.5,
    marginBottom: 4,
  },
  welcomeSubtext: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.5)',
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  statCard: {
    width: (width - 60) / 2,
    backgroundColor: 'rgba(255,255,255,0.04)',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
  },
  statCard1: {
    borderTopWidth: 3,
    borderTopColor: '#4ADE80',
  },
  statCard2: {
    borderTopWidth: 3,
    borderTopColor: '#60A5FA',
  },
  statCard3: {
    borderTopWidth: 3,
    borderTopColor: '#34D399',
  },
  statCard4: {
    borderTopWidth: 3,
    borderTopColor: '#FBBF24',
  },
  statIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: 'rgba(74, 222, 128, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 2,
  },
  statLabel: {
    fontSize: 13,
    color: 'rgba(255,255,255,0.5)',
  },
  card: {
    backgroundColor: 'rgba(255,255,255,0.04)',
    borderRadius: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
    marginBottom: 20,
  },
  lastCard: {
    marginBottom: 0,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  viewAllText: {
    fontSize: 14,
    color: '#4ADE80',
    fontWeight: '600',
  },
  patientItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.05)',
  },
  patientItemLast: {
    borderBottomWidth: 0,
  },
  patientInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  patientAvatar: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: 'rgba(74, 222, 128, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
    borderWidth: 1,
    borderColor: 'rgba(74, 222, 128, 0.2)',
  },
  avatarText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#4ADE80',
  },
  patientName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  patientAge: {
    fontSize: 13,
    color: 'rgba(255,255,255,0.4)',
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
    borderWidth: 1,
  },
  statusCheckedIn: {
    backgroundColor: 'rgba(52, 211, 153, 0.15)',
    borderColor: 'rgba(52, 211, 153, 0.3)',
  },
  statusTreatment: {
    backgroundColor: 'rgba(251, 191, 36, 0.15)',
    borderColor: 'rgba(251, 191, 36, 0.3)',
  },
  statusWaiting: {
    backgroundColor: 'rgba(96, 165, 250, 0.15)',
    borderColor: 'rgba(96, 165, 250, 0.3)',
  },
  statusDischarged: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  statusText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  actionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  actionCard: {
    width: (width - 80) / 2,
    backgroundColor: 'rgba(255,255,255,0.03)',
    borderRadius: 14,
    padding: 16,
    alignItems: 'center',
    marginBottom: 12,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.06)',
  },
  actionIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: 'rgba(74, 222, 128, 0.08)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  actionText: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.7)',
    fontWeight: '500',
  },
  footer: {
    marginTop: 30,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.2)',
  },
});

export default AdminDashboard;