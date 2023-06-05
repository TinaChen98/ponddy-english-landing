const express = require("express");
const path = require("path");

const getTranslatedServer = (lang) => {
    const distFolder = path.join(
        process.cwd(),
        `dist/ai-english-landing/server/${lang}`
    );
    const server = require(`${distFolder}/main.js`);
    return server.app(lang);
};

function run() {
    const port = process.env.PORT || 4000;

    // Start up the Node server
    const appJa = getTranslatedServer("ja");
    const appHans = getTranslatedServer("zh-Hans");
    const appTw = getTranslatedServer("zh-Hant");

    const server = express();
    server.use("/ja", appJa);
    server.use("/zh-Hans", appHans);
    server.use("/zh-Hant", appTw);
    server.use("", appTw);

    server.listen(port, () => {
        console.log(`Node Express server listening on http://localhost:${port}`);
    });
}

run();
