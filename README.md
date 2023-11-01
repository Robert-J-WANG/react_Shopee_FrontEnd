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

    tailwind.config.js文件中设置，如下。 组件中直接使用即可

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

#### 3. Zustand bug问题

+ 最新版本的zustand(4.4.5)使用中间件时，ts类型报错

    ```ts
    import { create } from "zustand";
    import { immer } from "zustand/middleware/immer";
    import { devtools, persist, subscribeWithSelector } from "zustand/middleware";
    
    const initState = {
      cartItems: [] as TNavMen[],
      active: false,
    };
    
    export const useNavMenuStore = create<typeof initState>()(
      immer(
        devtools(
          subscribeWithSelector(
            persist(() => initState, {
              name: "navMenu state",
            })
          ),
          {
            name: "cnavMenu state",
          }
        )
      )
    );
    ```

    ts类型报错如下，没有找到解决方案

    ```ts
    Argument of type 'StateCreator<{ cartItems: TNavMen[]; active: boolean; }, [], [["zustand/immer", never], ["zustand/devtools", never], ["zustand/subscribeWithSelector", never], ["zustand/persist", { ...; }]]>' is not assignable to parameter of type 'StateCreator<{ cartItems: TNavMen[]; active: boolean; }, [], [never, unknown][]>'.ts(2345)
    Argument of type 'StateCreator<{ cartItems: TNavMen[]; active: boolean; }, [], [["zustand/immer", never], ["zustand/devtools", never], ["zustand/subscribeWithSelector", never], ["zustand/persist", { ...; }]]>' is not assignable to parameter of type 'StateCreator<{ cartItems: TNavMen[]; active: boolean; }, [], [never, unknown][]>'.
      Type 'StateCreator<{ cartItems: TNavMen[]; active: boolean; }, [], [["zustand/immer", never], ["zustand/devtools", never], ["zustand/subscribeWithSelector", never], ["zustand/persist", { ...; }]]>' is not assignable to type '{ $$storeMutators?: [never, unknown][] | undefined; }'.
        Types of property '$$storeMutators' are incompatible.
          Type '[["zustand/immer", never], ["zustand/devtools", never], ["zustand/subscribeWithSelector", never], ["zustand/persist", { cartItems: TNavMen[]; active: boolean; }]] | undefined' is not assignable to type '[never, unknown][] | undefined'.
            Type '[["zustand/immer", never], ["zustand/devtools", never], ["zustand/subscribeWithSelector", never], ["zustand/persist", { cartItems: TNavMen[]; active: boolean; }]]' is not assignable to type '[never, unknown][]'.
              Type '["zustand/devtools", never] | ["zustand/immer", never] | ["zustand/subscribeWithSelector", never] | ["zustand/persist", { cartItems: TNavMen[]; active: boolean; }]' is not assignable to type '[never, unknown]'.
                Type '["zustand/devtools", never]' is not assignable to type '[never, unknown]'.
                  Type at position 0 in source is not compatible with type at position 0 in target.
                    Type 'string' is not assignable to type 'never'.ts(2345)
    ```

+ 重新安装低版本的Zustand（4.4.4），没有ts类型错误

    ```bash
    yarn add zustand@4.4.4
    ```

    
