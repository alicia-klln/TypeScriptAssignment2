// rollup.config.js
import typescript from "rollup-plugin-typescript2";

export default {
    input: "index.ts",
    output: {
        format: "iife",
        file: "./build/index.js"
    },
    plugins: [
        typescript({
            tsconfig: "./tsconfig.json"
        })
    ]
};