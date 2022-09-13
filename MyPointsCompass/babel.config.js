module.exports = function (api) {
	api.cache(true);
	return {
		presets: ["babel-preset-expo", "@babel/preset-typescript"],
		plugins: [
			// [
			// 	"module-resolver",
			// 	{
			// 		root: ["./app"],
			// 		extensions: [".js", ".ios.js", ".android.js"],
			// 	},
			// ],
			// [
			"@babel/plugin-syntax-class-properties",
			[
				"@babel/plugin-proposal-private-methods",
				{
					loose: true,
				},
			],
			// ],
		],
	};
};
