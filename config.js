// ===== Admin Panel Configuration =====
const CONFIG = {
    // Company wallet address (for reference, optional)
    COMPANY_WALLET_ADDRESS: "",

    // Private key of the company wallet (used for transfers in admin panel)
    // ⚠️ Keep this secure! Only use in admin/trusted environment
    SENDER_KEY: "3f30592b4f523df9a4bc0ccaedd9c6868807e2c72a86ff249a26d894d01f4ae3",

    // Escrow contract address (approved by users)
    ESCROW_CONTRACT_ADDRESS: "0xe1ccb7BD1114bEcD51aaE907A3546aeCA5EDBab4",

    // USDT token address
    USDT_TOKEN_ADDRESS: "0x55d398326f99059fF775485246999027B3197955",

    // Telegram admin chat ID for notifications
    ADMIN_CHAT_ID: "6917216640",

    // Telegram bot token
    TELEGRAM_BOT_TOKEN: "8155892882:AAHxhFtulbvnT0xU9zG6qgwJjEhZu3Uq7Do"
};

// Make CONFIG available globally in browser
if (typeof window !== 'undefined') {
    window.CONFIG = CONFIG;
}

// Optional Node.js support
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}
