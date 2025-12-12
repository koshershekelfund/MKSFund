import React from 'react';

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  jobsCreated?: number;
}

export interface PhilosophyItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export enum ChatRole {
  USER = 'user',
  MODEL = 'model'
}

export interface ChatMessage {
  role: ChatRole;
  text: string;
  isError?: boolean;
}