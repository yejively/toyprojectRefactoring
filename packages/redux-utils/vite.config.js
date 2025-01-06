import * as path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig(({ mode }) => {
  const isDevBuild = mode === "development";

  return {
    plugins: [react()],
    build: {
      lib: {
        entry: path.resolve(__dirname, "src/index.js"),
        name: "ReduxUtils",
        formats: ["es", "cjs"],
        fileName: (format) => `index.${format}.js`,
      },
      rollupOptions: {
        external: [
          "react",
          "react-dom",
          "react-redux",
          "redux",
          "@reduxjs/toolkit",
          "redux-logger",
        ],
        output: {
          globals: {
            react: "React",
            "react-dom": "ReactDOM",
            "react-redux": "ReactRedux",
            "@reduxjs/toolkit": "RTK",
            "redux-logger": "ReduxLogger",
          },
        },
        manualChunks: isDevBuild
          ? undefined
          : {
              vendor: ["react", "react-dom"],
            },
      },
      define: {
        "process.env.NODE_ENV": JSON.stringify(
          isDevBuild ? "development" : "production"
        ),
      },
    },
  };
});
