// Client side config only
export const DEV_SERVER_URL = 'http://localhost:4242';
export const PROD_SERVER_URL = '';
export const CLOUDINARY_API_KEY = '';
export const CLOUDINARY_PRESET = 'nextstore';
export const CLOUDINARY_SECRET = '';
export const STRIPE_API_KEY = '';
export const SALES_TAX_RATE = 0.0925;
export const SHIPPING_COST_PER_ITEM = 1.2;
export const theme = {
  red: '#dc3736',
  redOrange: '#e86c52',
  coral: '#ffc5bc',
  orange: '#ed8e40',
  yellow: '#ffdd52',
  green: '#b2c94c',
  blue: '#497bd3',
  darkBlue: '#47505f',
  purple: '#9083c9',
  pink: '#f498b0',
  brown: '#997151',
  gold: '#e8cc68',
  beige: '#f9f6f4',
  offWhite: '#EDEDED',
  lightGrey: '#cbc9c7',
  grey: '#9A9A9A',
  darkGrey: '#6d6c6c',
  black: '#3d3d3d',
  maxWidth: '1050px',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
  cartShadow: '0 0 10px 3px rgba(0, 0, 0, 0.2)',
  headerShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
};
export const COLORS = [
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'purple',
  'pink',
  'brown',
  'black',
  'white',
  'silver',
  'gold',
  'multi'
];
export const SIZES = [
  'XXS',
  'XS',
  'S',
  'M',
  'L',
  'XL',
  '1X',
  '2X',
  '3X',
  '4X',
  '0',
  '2',
  '4',
  '6',
  '8',
  '10',
  '12',
  '14',
  '16',
  '18'
];
export const DEPARTMENTS = [
  'tops',
  'bottoms',
  'shoes',
  'outwear',
  'accessories',
  'decor',
  'wedding'
];
export const CATEGORIES = {
  'tops': [
    'blouses', 'cartigans', 'casual', 'sweaters', 'sweatshirts'
  ],
  'bottoms': [
    'skirts', 'pants', 'jeans', 'leggings', 'shorts', 'intimates'
  ],
  'shoes': [
    'heels', 'flats', 'sandals', 'wedges', 'boots', 'booties', 'sneakers'
  ],
  'outwear': [
    'jackets', 'blazers', 'coats', 'cartigans'
  ],
  'accessories': [
    'jewelry', 'bags', 'wallets', 'belts', 'sunglasses', 'makeup', 'hair', 'hats'
  ],
  'decor': [
    'home', 'kitchen', 'office', 'lighting'
  ],
  'wedding': [
    'dresses', 'shoes', 'gifts', 'accessories'
  ]
};
export const PERMISSIONS = [
  'ADMIN',
  'USER',
  'PRODUCTCREATE',
  'PRODUCTUPDATE',
  'PRODUCTDELETE',
  'PERMISSIONUPDATE',
];
export const orderByList = {
  'name': 'title_ASC',
  'newest': 'createdAt_DESC',
  'oldest': 'createdAt_ASC',
  'updated': 'updatedAt_DESC',
};
export const showList = [ 6, 12, 30, 60 ];
export const svgs = {
  ex: {
    viewBox: '0 0 21.9 21.9',
    ds: [
      'M14.1,11.3c-0.2-0.2-0.2-0.5,0-0.7l7.5-7.5c0.2-0.2,0.3-0.5,0.3-0.7s-0.1-0.5-0.3-0.7l-1.4-1.4C20,0.1,19.7,0,19.5,0  c-0.3,0-0.5,0.1-0.7,0.3l-7.5,7.5c-0.2,0.2-0.5,0.2-0.7,0L3.1,0.3C2.9,0.1,2.6,0,2.4,0S1.9,0.1,1.7,0.3L0.3,1.7C0.1,1.9,0,2.2,0,2.4  s0.1,0.5,0.3,0.7l7.5,7.5c0.2,0.2,0.2,0.5,0,0.7l-7.5,7.5C0.1,19,0,19.3,0,19.5s0.1,0.5,0.3,0.7l1.4,1.4c0.2,0.2,0.5,0.3,0.7,0.3  s0.5-0.1,0.7-0.3l7.5-7.5c0.2-0.2,0.5-0.2,0.7,0l7.5,7.5c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l1.4-1.4c0.2-0.2,0.3-0.5,0.3-0.7  s-0.1-0.5-0.3-0.7L14.1,11.3z',
    ],
  },
  minus: {
    viewBox: '0 0 24 24',
    ds: [
      'M24,11c0-0.6-0.4-1-1-1H1c-0.6,0-1,0.4-1,1v2c0,0.6,0.4,1,1,1h22c0.6,0,1-0.4,1-1V11z'
    ],
  },
  plus: {
    viewBox: '0 0 24 24',
    ds: [
      'm23,10h-8.5c-0.3,0-0.5-0.2-0.5-0.5v-8.5c0-0.6-0.4-1-1-1h-2c-0.6,0-1,0.4-1,1v8.5c0,0.3-0.2,0.5-0.5,0.5h-8.5c-0.6,0-1,0.4-1,1v2c0,0.6 0.4,1 1,1h8.5c0.3,0 0.5,0.2 0.5,0.5v8.5c0,0.6 0.4,1 1,1h2c0.6,0 1-0.4 1-1v-8.5c0-0.3 0.2-0.5 0.5-0.5h8.5c0.6,0 1-0.4 1-1v-2c0-0.6-0.4-1-1-1z',
    ],
  },
  doubleRightArrow: {
    viewBox: '0 0 284.936 284.936',
    ds: [
      'M277.515,135.9L144.464,2.857C142.565,0.955,140.375,0,137.9,0c-2.472,0-4.659,0.955-6.562,2.857l-14.277,14.275 c-1.903,1.903-2.853,4.089-2.853,6.567c0,2.478,0.95,4.664,2.853,6.567l112.207,112.204L117.062,254.677 c-1.903,1.903-2.853,4.093-2.853,6.564c0,2.477,0.95,4.667,2.853,6.57l14.277,14.271c1.902,1.905,4.089,2.854,6.562,2.854 c2.478,0,4.665-0.951,6.563-2.854l133.051-133.044c1.902-1.902,2.851-4.093,2.851-6.567S279.417,137.807,277.515,135.9z',
      'M170.732,142.471c0-2.474-0.947-4.665-2.857-6.571L34.833,2.857C32.931,0.955,30.741,0,28.267,0s-4.665,0.955-6.567,2.857 L7.426,17.133C5.52,19.036,4.57,21.222,4.57,23.7c0,2.478,0.95,4.664,2.856,6.567L119.63,142.471L7.426,254.677 c-1.906,1.903-2.856,4.093-2.856,6.564c0,2.477,0.95,4.667,2.856,6.57l14.273,14.271c1.903,1.905,4.093,2.854,6.567,2.854 s4.664-0.951,6.567-2.854l133.042-133.044C169.785,147.136,170.732,144.945,170.732,142.471z',
    ],
  },
  doubleLeftArrow: {
    viewBox: '0 0 284.929 284.929',
    ds: [
      'M165.304,142.468L277.517,30.267c1.902-1.903,2.847-4.093,2.847-6.567c0-2.475-0.951-4.665-2.847-6.567L263.239,2.857 C261.337,0.955,259.146,0,256.676,0c-2.478,0-4.665,0.955-6.571,2.857L117.057,135.9c-1.903,1.903-2.853,4.093-2.853,6.567 c0,2.475,0.95,4.664,2.853,6.567l133.048,133.043c1.903,1.906,4.086,2.851,6.564,2.851c2.478,0,4.66-0.947,6.563-2.851 l14.277-14.267c1.902-1.903,2.851-4.094,2.851-6.57c0-2.472-0.948-4.661-2.851-6.564L165.304,142.468z',
      'M55.668,142.468L167.87,30.267c1.903-1.903,2.851-4.093,2.851-6.567c0-2.475-0.947-4.665-2.851-6.567L153.6,2.857 C151.697,0.955,149.507,0,147.036,0c-2.478,0-4.668,0.955-6.57,2.857L7.417,135.9c-1.903,1.903-2.853,4.093-2.853,6.567 c0,2.475,0.95,4.664,2.853,6.567l133.048,133.043c1.902,1.906,4.09,2.851,6.57,2.851c2.471,0,4.661-0.947,6.563-2.851 l14.271-14.267c1.903-1.903,2.851-4.094,2.851-6.57c0-2.472-0.947-4.661-2.851-6.564L55.668,142.468z'
    ],
  },
  rightArrow: {
    viewBox: '0 0 492.004 492.004',
    ds: [
      'M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12 c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028 c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265 c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z'
    ],
  },
  leftArrow: {
    viewBox: '0 0 492 492',
    ds: [
      'M198.608,246.104L382.664,62.04c5.068-5.056,7.856-11.816,7.856-19.024c0-7.212-2.788-13.968-7.856-19.032l-16.128-16.12 C361.476,2.792,354.712,0,347.504,0s-13.964,2.792-19.028,7.864L109.328,227.008c-5.084,5.08-7.868,11.868-7.848,19.084 c-0.02,7.248,2.76,14.028,7.848,19.112l218.944,218.932c5.064,5.072,11.82,7.864,19.032,7.864c7.208,0,13.964-2.792,19.032-7.864 l16.124-16.12c10.492-10.492,10.492-27.572,0-38.06L198.608,246.104z'
    ],
  },
  upArrow: {
    viewBox: '0 0 284.929 284.929',
    ds: [
      'M282.082,195.285L149.028,62.24c-1.901-1.903-4.088-2.856-6.562-2.856s-4.665,0.953-6.567,2.856L2.856,195.285 C0.95,197.191,0,199.378,0,201.853c0,2.474,0.953,4.664,2.856,6.566l14.272,14.271c1.903,1.903,4.093,2.854,6.567,2.854 c2.474,0,4.664-0.951,6.567-2.854l112.204-112.202l112.208,112.209c1.902,1.903,4.093,2.848,6.563,2.848 c2.478,0,4.668-0.951,6.57-2.848l14.274-14.277c1.902-1.902,2.847-4.093,2.847-6.566 C284.929,199.378,283.984,197.188,282.082,195.285z'
    ],
  },
  downArrow: {
    viewBox: '0 0 451.847 451.847',
    ds: [
      'M225.923,354.706c-8.098,0-16.195-3.092-22.369-9.263L9.27,151.157c-12.359-12.359-12.359-32.397,0-44.751 c12.354-12.354,32.388-12.354,44.748,0l171.905,171.915l171.906-171.909c12.359-12.354,32.391-12.354,44.744,0 c12.365,12.354,12.365,32.392,0,44.751L248.292,345.449C242.115,351.621,234.018,354.706,225.923,354.706z'
    ],
  },
  box: {
    viewBox: '0 0 451.847 451.847',
    ds: [
      'M489.658,189.942l-45.205-85.169c-1.534-2.889-4.147-4.877-7.108-5.693c-0.02-0.005-0.032-0.012-0.053-0.018L248.97,48.229  c-1.958-0.527-4.021-0.53-5.98-0.004L53.721,99.058c-0.021,0.006-0.035,0.013-0.057,0.019c-2.966,0.814-5.583,2.804-7.118,5.696  L1.342,189.942c-1.473,2.776-1.746,6.034-0.756,9.016c0.99,2.982,3.158,5.43,5.999,6.772l39.331,18.592v116.344  c0,4.414,2.526,8.439,6.502,10.356l188.557,91.002c1.584,0.765,3.293,1.143,4.997,1.143c1.691,0,3.372-0.389,4.927-1.127  c0.025-0.006,0.049-0.005,0.072-0.017l188.557-91.002c3.976-1.918,6.502-5.942,6.502-10.356V224.332c0-0.15-0.017-0.297-0.022-0.445  l38.408-18.156c2.841-1.343,5.009-3.79,5.999-6.772C491.404,195.975,491.131,192.719,489.658,189.942z M245.965,71.241  l150.587,40.647L245.5,167.87L94.52,111.916L245.965,71.241z M62.144,124.445l167.892,62.223l-36.977,81.771L27.306,190.085  L62.144,124.445z M68.916,333.447v-98.252l124.887,59.035c1.552,0.734,3.232,1.104,4.915,1.104c1.341,0,2.685-0.234,3.968-0.706  c2.895-1.064,5.24-3.246,6.511-6.056l25.276-55.896v180.673L68.916,333.447z M423.029,333.447l-165.557,79.902V234.767  l24.331,53.805c1.271,2.81,3.616,4.991,6.511,6.056c1.283,0.472,2.627,0.706,3.968,0.706c1.684,0,3.363-0.369,4.915-1.104  l125.832-59.482V333.447z M297.941,268.438l-36.978-81.771l167.892-62.223l34.839,65.64L297.941,268.438z'
    ],
  },
  cart: {
    viewBox: '0 0 451.847 451.847',
    ds: [
      'M17,55.231h48.733l69.417,251.033c1.983,7.367,8.783,12.467,16.433,12.467h213.35c6.8,0,12.75-3.967,15.583-10.2    l77.633-178.5c2.267-5.383,1.7-11.333-1.417-16.15c-3.117-4.817-8.5-7.65-14.167-7.65H206.833c-9.35,0-17,7.65-17,17    s7.65,17,17,17H416.5l-62.9,144.5H164.333L94.917,33.698c-1.983-7.367-8.783-12.467-16.433-12.467H17c-9.35,0-17,7.65-17,17    S7.65,55.231,17,55.231z',
      'M135.433,438.298c21.25,0,38.533-17.283,38.533-38.533s-17.283-38.533-38.533-38.533S96.9,378.514,96.9,399.764    S114.183,438.298,135.433,438.298z',
      'M376.267,438.298c0.85,0,1.983,0,2.833,0c10.2-0.85,19.55-5.383,26.35-13.317c6.8-7.65,9.917-17.567,9.35-28.05    c-1.417-20.967-19.833-37.117-41.083-35.7c-21.25,1.417-37.117,20.117-35.7,41.083    C339.433,422.431,356.15,438.298,376.267,438.298z',
    ],
  },
  openBox: {
    viewBox: '0 0 512 512',
    ds: [
      'M506.229,214.521l-64.301-33.188l64.301-33.188c3.521-1.823,5.75-5.438,5.771-9.406c0.021-3.969-2.146-7.615-5.646-9.49 l-160-85.333c-3.104-1.646-6.792-1.667-9.917-0.063L256,85.37l-80.438-41.516c-3.125-1.604-6.854-1.583-9.917,0.063l-160,85.333 c-3.5,1.875-5.667,5.521-5.646,9.49s2.25,7.583,5.771,9.406l64.301,33.188L5.771,214.521c-3.521,1.823-5.75,5.438-5.771,9.406 s2.146,7.615,5.646,9.49l79.688,42.5v97.417c0,3.938,2.167,7.563,5.646,9.417l160,85.333c1.563,0.833,3.292,1.25,5.021,1.25 s3.458-0.417,5.021-1.25l160-85.333c3.479-1.854,5.646-5.479,5.646-9.417v-97.417l79.688-42.5c3.5-1.875,5.667-5.521,5.646-9.49 C511.979,219.959,509.75,216.344,506.229,214.521z M341.25,65.375l137.125,73.135l-59.707,30.818L279.257,97.374L341.25,65.375z  M33.625,138.511L170.75,65.375l61.993,31.999L93.332,169.328L33.625,138.511z M33.625,224.157l59.707-30.818l139.411,71.954 l-61.993,31.999L33.625,224.157z M245.333,440.884l-138.667-73.947v-79.643l58.979,31.456c1.563,0.833,3.292,1.25,5.021,1.25 c1.688,0,3.354-0.396,4.896-1.188l69.771-36.01V440.884z M256,253.289l-139.409-71.956L256,109.378l139.409,71.956L256,253.289z  M405.334,366.938l-138.667,73.947V282.802l69.771,36.01c1.542,0.792,3.208,1.188,4.896,1.188c1.729,0,3.458-0.417,5.021-1.25 l58.979-31.456V366.938z M341.25,297.292l-61.993-31.999l139.411-71.954l59.707,30.818L341.25,297.292z'
    ],
  },
  closedBox: {
    viewBox: '0 0 473.8 473.8',
    ds: [
      'M454.8,111.7c0-1.8-0.4-3.6-1.2-5.3c-1.6-3.4-4.7-5.7-8.1-6.4L241.8,1.2c-3.3-1.6-7.2-1.6-10.5,0L25.6,100.9 c-4,1.9-6.6,5.9-6.8,10.4v0.1c0,0.1,0,0.2,0,0.4V362c0,4.6,2.6,8.8,6.8,10.8l205.7,99.7c0.1,0,0.1,0,0.2,0.1 c0.3,0.1,0.6,0.2,0.9,0.4c0.1,0,0.2,0.1,0.4,0.1c0.3,0.1,0.6,0.2,0.9,0.3c0.1,0,0.2,0.1,0.3,0.1c0.3,0.1,0.7,0.1,1,0.2 c0.1,0,0.2,0,0.3,0c0.4,0,0.9,0.1,1.3,0.1c0.4,0,0.9,0,1.3-0.1c0.1,0,0.2,0,0.3,0c0.3,0,0.7-0.1,1-0.2c0.1,0,0.2-0.1,0.3-0.1 c0.3-0.1,0.6-0.2,0.9-0.3c0.1,0,0.2-0.1,0.4-0.1c0.3-0.1,0.6-0.2,0.9-0.4c0.1,0,0.1,0,0.2-0.1l206.3-100c4.1-2,6.8-6.2,6.8-10.8 V112C454.8,111.9,454.8,111.8,454.8,111.7z M236.5,25.3l178.4,86.5l-65.7,31.9L170.8,57.2L236.5,25.3z M236.5,198.3L58.1,111.8 l85.2-41.3L321.7,157L236.5,198.3z M42.8,131.1l181.7,88.1v223.3L42.8,354.4V131.1z M248.5,442.5V219.2l85.3-41.4v58.4 c0,6.6,5.4,12,12,12s12-5.4,12-12v-70.1l73-35.4V354L248.5,442.5z'
    ],
  },
  search: {
    viewBox: '0 0 32 32',
    ds: [
      'M20.194,3.46c-4.613-4.613-12.121-4.613-16.734,0c-4.612,4.614-4.612,12.121,0,16.735 c4.108,4.107,10.506,4.547,15.116,1.34c0.097,0.459,0.319,0.897,0.676,1.254l6.718,6.718c0.979,0.977,2.561,0.977,3.535,0 c0.978-0.978,0.978-2.56,0-3.535l-6.718-6.72c-0.355-0.354-0.794-0.577-1.253-0.674C24.743,13.967,24.303,7.57,20.194,3.46z M18.073,18.074c-3.444,3.444-9.049,3.444-12.492,0c-3.442-3.444-3.442-9.048,0-12.492c3.443-3.443,9.048-3.443,12.492,0 C21.517,9.026,21.517,14.63,18.073,18.074z'
    ],
  },
  default: {
    viewBox: '0 0 32 32',
    ds: [
      'M 2.56635 12.9241C 0.708307 9.55549 0 6.83983 0 5.00558C 0 3.17134 0.450658 2.64526 0.907953 2.22025C 1.36525 1.79524 3.42732 0.523908 3.77867 0.286808C 4.13002 0.0497085 5.47099 -0.41107 6.31193 0.798636C 7.15287 2.00834 8.73646 4.43718 9.82825 6.05069C 11.5415 8.33611 10.1766 9.33937 9.73572 9.94069C 8.92447 11.0472 8.45734 11.3201 8.45734 12.6788C 8.45734 14.0375 12.2545 17.8976 13.1625 18.8487C 14.0635 19.7926 17.8471 23.1094 19.0195 23.2868C 20.2002 23.4654 21.7807 22.2154 22.1168 21.8985C 23.8263 20.586 24.7912 21.581 25.5787 22.0136C 26.3661 22.4461 29.9239 24.663 31.0264 25.4103C 32.0641 26.1576 31.9992 27.3125 31.9992 27.3125C 31.9992 27.3125 29.859 30.7092 29.5996 31.1168C 29.2753 31.5924 28.4971 32 26.746 32C 24.995 32 23.1241 31.6802 18.6777 29.2349C 15.0396 27.234 11.5714 24.1009 9.75551 22.2666C 7.87475 20.4324 4.68876 16.772 2.56635 12.9241Z'
    ],
  },
}
