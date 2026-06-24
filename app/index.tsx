import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Dimensions,
} from 'react-native';
import { router } from 'expo-router';

const { width, height } = Dimensions.get('window');

const IndexScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0A3D2E" />

      <View style={styles.circleTopRight} />
      <View style={styles.circleBottomLeft} />

      <View style={styles.content}>
        {/* Logo & Brand */}
        <View style={styles.logoSection}>
          <View style={styles.logoContainer}>
            <Text style={styles.logoEmoji}>🌿</Text>
          </View>
          <Text style={styles.brandName}>AbleCare</Text>
          <Text style={styles.tagline}>Empowering every ability,{'\n'}every step of the way.</Text>
        </View>

        {/* Feature Highlights */}
        <View style={styles.features}>
          <View style={styles.featureItem}>
            <Text style={styles.featureEmoji}>🔒</Text>
            <Text style={styles.featureText}>Secure & Private</Text>
          </View>
          <View style={styles.featureDivider} />
          <View style={styles.featureItem}>
            <Text style={styles.featureEmoji}>🤝</Text>
            <Text style={styles.featureText}>Community Support</Text>
          </View>
          <View style={styles.featureDivider} />
          <View style={styles.featureItem}>
            <Text style={styles.featureEmoji}>💚</Text>
            <Text style={styles.featureText}>Health Tracking</Text>
          </View>
        </View>

        {/* CTA Buttons */}
        <View style={styles.buttonGroup}>
          <TouchableOpacity
            style={styles.primaryButton}
            onPress={() => router.push('/register')}
            activeOpacity={0.85}
          >
            <Text style={styles.primaryButtonText}>🚀  Get Started</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.secondaryButton}
            onPress={() => router.push('/login')}
            activeOpacity={0.85}
          >
            <Text style={styles.secondaryButtonText}>→  Log In</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.footerNote}>
          By continuing, you agree to our{' '}
          <Text style={styles.footerLink}>Terms</Text> &{' '}
          <Text style={styles.footerLink}>Privacy Policy</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A3D2E',
  },
  circleTopRight: {
    position: 'absolute',
    top: -80,
    right: -80,
    width: 260,
    height: 260,
    borderRadius: 130,
    backgroundColor: 'rgba(74, 222, 128, 0.08)',
  },
  circleBottomLeft: {
    position: 'absolute',
    bottom: 60,
    left: -100,
    width: 300,
    height: 300,
    borderRadius: 150,
    backgroundColor: 'rgba(74, 222, 128, 0.05)',
  },
  content: {
    flex: 1,
    paddingHorizontal: 28,
    paddingTop: height * 0.1,
    paddingBottom: 32,
    justifyContent: 'space-between',
  },
  logoSection: {
    alignItems: 'center',
  },
  logoContainer: {
    width: 96,
    height: 96,
    borderRadius: 28,
    backgroundColor: 'rgba(74, 222, 128, 0.12)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    borderWidth: 1,
    borderColor: 'rgba(74, 222, 128, 0.25)',
  },
  logoEmoji: {
    fontSize: 44,
  },
  brandName: {
    fontSize: 42,
    fontWeight: '800',
    color: '#FFFFFF',
    letterSpacing: -1,
    marginBottom: 12,
  },
  tagline: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.6)',
    textAlign: 'center',
    lineHeight: 24,
  },
  features: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(74, 222, 128, 0.06)',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(74, 222, 128, 0.12)',
    paddingVertical: 18,
    paddingHorizontal: 12,
  },
  featureItem: {
    flex: 1,
    alignItems: 'center',
  },
  featureEmoji: {
    fontSize: 22,
    marginBottom: 6,
  },
  featureText: {
    fontSize: 11,
    color: 'rgba(255,255,255,0.65)',
    textAlign: 'center',
    fontWeight: '500',
  },
  featureDivider: {
    width: 1,
    height: 36,
    backgroundColor: 'rgba(74, 222, 128, 0.15)',
  },
  buttonGroup: {
    gap: 14,
  },
  primaryButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4ADE80',
    borderRadius: 16,
    paddingVertical: 17,
    shadowColor: '#4ADE80',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.35,
    shadowRadius: 16,
    elevation: 8,
  },
  primaryButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0A3D2E',
    letterSpacing: 0.3,
  },
  secondaryButton: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    paddingVertical: 17,
    borderWidth: 1.5,
    borderColor: 'rgba(74, 222, 128, 0.4)',
    backgroundColor: 'rgba(74, 222, 128, 0.06)',
  },
  secondaryButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#4ADE80',
    letterSpacing: 0.3,
  },
  footerNote: {
    textAlign: 'center',
    fontSize: 12,
    color: 'rgba(255,255,255,0.3)',
    lineHeight: 18,
  },
  footerLink: {
    color: 'rgba(74, 222, 128, 0.7)',
    fontWeight: '600',
  },
});

export default IndexScreen;