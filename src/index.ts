import { startBot } from "./bot/index.js";
import { createGitHubRepo } from "./bot/github.js";
import { logger } from "./lib/logger.js";

logger.info("Starting Discord Roblox Lua Bot...");

startBot();

(async () => {
  const repoUrl = await createGitHubRepo();
  if (repoUrl) {
    logger.info({ repoUrl }, "GitHub repo ready");
  }
})();
