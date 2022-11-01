module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		"eslint:recommended",
		"plugin:react/recommended",
		"prettier",
		// "eslint:all",
		// "plugin:react/all",
	],
	overrides: [],
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
		ecmaFeatures: {
			jsx: true,
		},
	},
	plugins: ["eslint-plugin-import", "unused-imports", "react", "react-hooks"],
	settings: {
		react: {
			version: "18",
		},
	},
	rules: {
		indent: ["error", "tab"],
		"linebreak-style": ["error", "unix"],
		quotes: ["error", "double"],
		semi: ["error", "always"],
		"no-unused-vars": ["warning"],
	},
};
