import pkg from "./package.json";
import ts from "rollup-plugin-typescript2";
import {
    terser
} from "rollup-plugin-terser";

export default [{
    input: "src/foo.ts",
    output: [{
        file: pkg.module,
        format: "esm"
    }, {
        file: pkg.main,
        format: "commonjs"
    }, {
        name: "main",
        file: pkg.unpkg,
        format: "umd"
    }],
    plugins: [
        /**
         *  babel({
         *  babelrc: false,
         *  presets: [["@babel/env", {modules: false}]] 
         */
        ts(), terser()
    ]
}];