// // import { defineConfig } from 'vite'
// // import react from '@vitejs/plugin-react'

// // // https://vitejs.dev/config/
// // export default defineConfig({
// //   plugins: [react()],
// // })

// // import { defineConfig } from 'vite';
// // import react from '@vitejs/plugin-react';

// // export default defineConfig({
// //   plugins: [react()],
// //   build: {
// //     rollupOptions: {
// //       external: ['react-router-dom']
// //     }
// //   }
// // });

// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [react()],
//   build: {
//     rollupOptions: {
//       // Remove the external configuration to ensure react-router-dom is bundled
//       // external: ['react-router-dom']
//       external: ['react-icons/fa'],

//     }
//   }
// });

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'react-icons': 'react-icons',
    },
  },
  build: {
    rollupOptions: {
      external: ['react-icons/fa'],
    },
  },
});
