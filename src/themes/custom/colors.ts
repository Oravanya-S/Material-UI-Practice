import { alpha } from '@mui/material';
import { ColorPartial } from '@mui/material/styles/createPalette';

export interface CustomColorPartial extends ColorPartial {
  5?: string;
  10?: string;
  20?: string;
  30?: string;
  40?: string;
}

export const blue: CustomColorPartial = {
  '10': '#F8FAFE', // Default Hover
  '20': '#ECF3FF', // Hover on Hover
  '100': '#B5CBF1',
  '200': '#92B1EA',
  '400': '#4178DA',
  '500': '#1156D1', // Primary
  '600': '#0F4EBE',
  '700': '#0C3D94',
};

export const general: CustomColorPartial = {
  '10': '#F9F9F9', // Table Header BG
  '50': '#F3F3F3', // Disable Button & Field BG
  '100': '#D9D9D9', // Border
  '300': '#A7A7A7', // Placeholder, Disable text and icon
  '500': '#7B7B7B', // Secondary Text
  '900': '#1F1F1F', // Default Text
};

export const green: CustomColorPartial = {
  '10': '#e9f7ef',
  '50': '#e9f7ef',
  '100': '#bce6ce',
  '300': '#6ec994',
  '500': '#27ae60', // Default
};

export const violet: CustomColorPartial = {
  '10': '#F8FDFA',
  '50': '#E9F7EF',
  '100': '#BCE6CE',
  '300': '#6EC994',
  '500': '#27AE60', // Default
};

export const orange: CustomColorPartial = {
  '10': '#FFFCF8',
  '50': '#FFF5E7',
  '100': '#FFE1B4',
  '300': '#FEBE5E ',
  '500': '#FE9E0E', // Default
};

export const red: CustomColorPartial = {
  '10': '#FDF4F4',
  '50': '#FBEFEF',
  '100': '#F4CCCC',
  '300': '#E69292',
  '500': '#DA5C5C', // Default
};

export const overlay = alpha('#1f1f1f', 0.6); // BG for Modal & Preview