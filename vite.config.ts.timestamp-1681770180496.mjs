// vite.config.ts
import { defineConfig } from "file:///C:/Users/podiu/Desktop/%D0%9F%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D1%8B/VSCode/RS/React/rs-school_react/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/podiu/Desktop/%D0%9F%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D1%8B/VSCode/RS/React/rs-school_react/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [
    react()
    /*     istanbul({
      include: 'src/*',
      exclude: ['node_modules', 'coverage/'],
      extension: ['.js', '.jsx', '.ts', '.tsx'],
      cypress: true,
      requireEnv: true,
      forceBuildInstrument: true,
    }), */
  ],
  build: {
    sourcemap: true
  },
  test: {
    globals: true,
    environment: "jsdom",
    coverage: {
      provider: "istanbul"
    }
  },
  envDir: "./"
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxwb2RpdVxcXFxEZXNrdG9wXFxcXFx1MDQxRlx1MDQ0MFx1MDQzRVx1MDQzNVx1MDQzQVx1MDQ0Mlx1MDQ0QlxcXFxWU0NvZGVcXFxcUlNcXFxcUmVhY3RcXFxccnMtc2Nob29sX3JlYWN0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxwb2RpdVxcXFxEZXNrdG9wXFxcXFx1MDQxRlx1MDQ0MFx1MDQzRVx1MDQzNVx1MDQzQVx1MDQ0Mlx1MDQ0QlxcXFxWU0NvZGVcXFxcUlNcXFxcUmVhY3RcXFxccnMtc2Nob29sX3JlYWN0XFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9wb2RpdS9EZXNrdG9wLyVEMCU5RiVEMSU4MCVEMCVCRSVEMCVCNSVEMCVCQSVEMSU4MiVEMSU4Qi9WU0NvZGUvUlMvUmVhY3QvcnMtc2Nob29sX3JlYWN0L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XHJcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XHJcbmltcG9ydCBpc3RhbmJ1bCBmcm9tICd2aXRlLXBsdWdpbi1pc3RhbmJ1bCc7XHJcblxyXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIHBsdWdpbnM6IFtcclxuICAgIHJlYWN0KCksXHJcbiAgICAvKiAgICAgaXN0YW5idWwoe1xyXG4gICAgICBpbmNsdWRlOiAnc3JjLyonLFxyXG4gICAgICBleGNsdWRlOiBbJ25vZGVfbW9kdWxlcycsICdjb3ZlcmFnZS8nXSxcclxuICAgICAgZXh0ZW5zaW9uOiBbJy5qcycsICcuanN4JywgJy50cycsICcudHN4J10sXHJcbiAgICAgIGN5cHJlc3M6IHRydWUsXHJcbiAgICAgIHJlcXVpcmVFbnY6IHRydWUsXHJcbiAgICAgIGZvcmNlQnVpbGRJbnN0cnVtZW50OiB0cnVlLFxyXG4gICAgfSksICovXHJcbiAgXSxcclxuICBidWlsZDoge1xyXG4gICAgc291cmNlbWFwOiB0cnVlLFxyXG4gIH0sXHJcbiAgdGVzdDoge1xyXG4gICAgZ2xvYmFsczogdHJ1ZSxcclxuICAgIGVudmlyb25tZW50OiAnanNkb20nLFxyXG4gICAgY292ZXJhZ2U6IHtcclxuICAgICAgcHJvdmlkZXI6ICdpc3RhbmJ1bCcsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgZW52RGlyOiAnLi8nLFxyXG59KTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFpYSxTQUFTLG9CQUFvQjtBQUM5YixPQUFPLFdBQVc7QUFJbEIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsTUFBTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQVNSO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxXQUFXO0FBQUEsRUFDYjtBQUFBLEVBQ0EsTUFBTTtBQUFBLElBQ0osU0FBUztBQUFBLElBQ1QsYUFBYTtBQUFBLElBQ2IsVUFBVTtBQUFBLE1BQ1IsVUFBVTtBQUFBLElBQ1o7QUFBQSxFQUNGO0FBQUEsRUFDQSxRQUFRO0FBQ1YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
