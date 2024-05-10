import type { DeepPartial, Theme } from '@chakra-ui/react';

type ExtraShades = {
  0: string;
  1000: string;
};

/** extend additional color here */
const extendedColors: DeepPartial<
  Record<string, Theme['colors']['blackAlpha'] & ExtraShades>
> = {
  primary: {
    0: '#F2F9F5',
    100: '#E7F4ED',
    200: '#CCE8DA',
    300: '#ACDCC4',
    400: '#86CEAD',
    500: '#10B981',
    600: '#0FB07B',
    700: '#0E9E6E',
    800: '#0C895F',
    900: '#0A704E',
  },
  secondary: {
    0: '#F7FAFF',
    100: '#EEF3FF',
    200: '#D7E0FF',
    300: '#BFCBFF',
    400: '#A3B3FF',
    500: '#6C84FF',
    600: '#667DF5',
    700: '#566CCF',
    800: '#4658A5',
    900: '#36477A',
    1000: '#273256',
  },
  pink: {
    0: '#FFF4F8',
    100: '#FEEBF1',
    200: '#FED5E3',
    300: '#FDBDD4',
    400: '#FDA1C3',
    500: '#FC6AA7',
    600: '#F0659F',
    700: '#D75A8E',
    800: '#BA4E7B',
    900: '#984065',
    1000: '#6C2D47',
  },
  yellow: {
    0: '#FFFAF7',
    100: '#FFF7F0',
    200: '#FFEEE0',
    300: '#FFE5CE',
    400: '#FFDCBC',
    500: '#FFCD9B',
    600: '#F3C494',
    700: '#DAAF84',
    800: '#BC9773',
    900: '#9A7C5E',
    1000: '#6D5742',
  },
  gray: {
    0: '#F7F7F8',
    100: '#EFEFF0',
    200: '#CCCDD1',
    300: '#A1A5AE',
    400: '#737A8A',
    500: '#525868',
    600: '#3F4553',
    700: '#2F3442',
    800: '#1F232D',
    900: '#15171D',
    1000: '#0F1014',
  },
  black: {
    400: '#737A8A',
    800: '#1F232D',
  },
  green: {
    100: '#F2F9F5',
    200: '#E7F4ED',
    300: '#CCE8DA',
    400: '#ACDCC4',
    500: '#86CEAD',
    600: '#10B981',
    700: '#0FB07B',
    800: '#0E9E6E',
    900: '#0C895F',
    1000: '#0A704E',
  },
  red: {
    100: '#FCE8E8',
    200: '#F9CFCF',
    300: '#F6B3B3',
    400: '#F39191',
    500: '#EF4444',
    600: '#E44141',
    700: '#CC3A3A',
    800: '#B13232',
    900: '#902929',
    1000: '#661D1D',
  },
};

export const gradients = {
  blackAlpha:
    'linear-gradient(94deg, rgba(0, 0, 0, 0.56) 31.69%, rgba(0, 0, 0, 0.00) 97.25%)',
  blackOverlay:
    'linear-gradient(90deg, #0F1014 0%, #0F1014 48.45%, rgba(15, 16, 20, 0.46) 100%)',
};

/** override chakra colors here */
const overridenChakraColors: DeepPartial<Theme['colors']> = {};

export const colors = {
  deepBlack: '#4B5563',
  ...overridenChakraColors,
  ...extendedColors,
};
