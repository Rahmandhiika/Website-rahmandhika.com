import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "tests/e2e",
  use: { baseURL: "http://localhost:3123" },
  webServer: { command: "npm run start -- -p 3123", url: "http://localhost:3123", reuseExistingServer: false, timeout: 60_000 },
});
