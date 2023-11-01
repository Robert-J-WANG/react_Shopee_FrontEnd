### React + TypeScript + Vite + Tailwind

#### 1. 自定义@绝对路径

+ Vite.config中添加

    ```ts
    import { defineConfig } from "vite";
    import react from "@vitejs/plugin-react";
    import { join } from "node:path";
    
    // https://vitejs.dev/config/
    export default defineConfig({
      plugins: [react()],
    
      // 配置@路径, 应用组件时使用@代替./src/
      resolve: {
        alias: {
          "@": join(__dirname, "src"),
        },
      },
        
    });
    ```

+ tsconfig.json中添加

    ```ts
    {
      "compilerOptions": {
        // 配置@路径
        "baseUrl": ".",
        "paths": {
          "@/*": ["src/*"]
        },
    
        "target": "ES2020",
        "useDefineForClassFields": true,
        "lib": ["ES2020", "DOM", "DOM.Iterable"],
        "module": "ESNext",
        "skipLibCheck": true,
    
        /* Bundler mode */
            ...
      }
    ```

    

#### 2. tailwind 相关设置

+ ##### 设置全局样式

    index.css文件中设置如下：

    ```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    
    /* ----------------------- 设置基础样式 ----------------------- */
    @layer base {
       /* 设置全局样式 */
       * {
        @apply m-0 p-0 box-border 
      }  
      body{
        @apply min-h-screen w-full bg-gradient-to-br from-white to-stone-500 
      }
    }
    ```

+ ##### 设置自定义样式

    tailwind.config.js文件中设置，如下。 直接走组件中使用即可

    ```js
    /** @type {import('tailwindcss').Config} */
    export default {
      content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
      theme: {
        container: {
          padding: {
            DEFAULT: "1rem",
            sm: "2rem",
            lg: "4rem",
            xl: "5rem",
            "2xl": "6rem",
          },
          center: true,
        },
    
        extend: {
            
            // 自定义屏幕大小
          screens: {
            xs: "480px",
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1536px",
            "3xl": "1920px",
            "4xl": "2400px",
          },
            // 自定义颜色
          colors: {
            textColor: "#c1d3cf",
            bgColor: "#1c1e26",
            bgColorHeader: "rgba(45, 49, 57 .3)",
            mainColor: "#9feaad",
            mainColor20: "rgba(145, 216, 209, .3)",
            subColor: "#82a8d2",
            subColor2: "#8be1e4",
            subBgColor: "rgba(96, 121, 153,.2)",
            subBdColor: "rgba(96, 121, 153,.6)",
          },
        },
      },
      plugins: [require("daisyui")],  // 使用ui组件库
    };
    ```

    
