const nextJest = require("next/jest");

const createJestConfig = nextJest({
	// Provide the path to your Next.js app to load next.config.js and .env files in your test environment
	dir: "./",
});

const customJestConfig = {
	verbose: true,
	setupFilesAfterEnv: ["./src/web/setupTests.tsx"],
	collectCoverageFrom: ["src/**/*.{js,tsx,ts}"],
	coveragePathIgnorePatterns: ["/node_modules/", "./public"],
	coverageDirectory: "coverage",
	transform: {
		"^.+\\.tsx?$": "ts-jest",
	},
	moduleFileExtensions: ["ts", "tsx", "js", "json"],
	modulePathIgnorePatterns: ["./node_modules", "./__tests__/mocks", "./public"],
	moduleDirectories: ["node_modules", "<rootDir>/"],
	testEnvironment: "jest-environment-jsdom",
};

module.exports = createJestConfig(customJestConfig);
export {};
