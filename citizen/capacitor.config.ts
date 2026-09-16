import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'in.jansetu.citizen',
  appName: 'JanSetu Citizen',
  webDir: 'dist',
  bundledWebRuntime: false,
  server: {
    url: 'https://jansetu-h177.onrender.com/citizen',
    cleartext: false
  }
};

export default config;
