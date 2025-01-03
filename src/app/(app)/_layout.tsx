/* eslint-disable react/no-unstable-nested-components */
import { Redirect, SplashScreen } from 'expo-router';
import React, { useCallback, useEffect } from 'react';

export default function TabLayout() {
  // const [isFirstTime] = useIsFirstTime();
  const hideSplash = useCallback(async () => {
    await SplashScreen.hideAsync();
  }, []);
  useEffect(() => {
    setTimeout(() => {
      hideSplash();
    }, 1000);
  }, [hideSplash]);

  return <Redirect href="/entry" />;
}
