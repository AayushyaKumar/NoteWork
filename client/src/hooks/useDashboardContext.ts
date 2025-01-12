'use client'

import { useContext } from 'react';
import { DashboardContext } from './../context/analytics';

export const useDashboardContext = () => {
  const context = useContext(DashboardContext);
  if (context === undefined) {
    throw new Error('useDashboardContext must be used within a DashboardProvider');
  }
  return context;
};

