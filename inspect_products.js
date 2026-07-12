const fs = require('fs');
const ts = require('typescript');

const code = fs.readFileSync('lib/products.ts', 'utf8');
const result = ts.transpileModule(code, {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 }
});

const evalCode = result.outputText;
const exportsObj = {};
const moduleObj = { exports: exportsObj };

const func = new Function('module', 'exports', 'require', evalCode);
func(moduleObj, exportsObj, require);

const products = moduleObj.exports.PRODUCTS;
console.log(`Total products parsed: ${products.length}`);
fs.writeFileSync('parsed_products.json', JSON.stringify(products, null, 2), 'utf8');
console.log('Successfully wrote parsed_products.json');
