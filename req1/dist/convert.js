"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bs58_1 = __importDefault(require("bs58"));
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
function base58ToWallet() {
    console.log("Enter your Base58 string:");
    const base58 = prompt();
    try {
        const wallet = bs58_1.default.decode(base58);
        console.log("Wallet (byte array):", wallet);
    }
    catch (error) {
        console.error("Invalid Base58 string:", error);
    }
}
function walletToBase58() {
    // Example wallet byte array, replace with your actual wallet bytes
    const wallet = [
        34, 46, 55, 124, 141, 190, 24, 204, 134, 91, 70, 184, 161, 181, 44, 122, 15, 172, 63, 62,
        153, 150, 99, 255, 202, 89, 105, 77, 41, 89, 253, 130, 27, 195, 134, 14, 66, 75, 242, 7,
        132, 234, 160, 203, 109, 195, 116, 251, 144, 44, 28, 56, 231, 114, 50, 131, 185, 168, 138,
        61, 35, 98, 78, 53
    ];
    const base58 = bs58_1.default.encode(Uint8Array.from(wallet));
    console.log("Base58 string:", base58);
}
function main() {
    console.log("Choose an option:");
    console.log("1. Convert Base58 to Wallet");
    console.log("2. Convert Wallet to Base58");
    const choice = prompt();
    if (choice === '1') {
        base58ToWallet();
    }
    else if (choice === '2') {
        walletToBase58();
    }
    else {
        console.log("Invalid choice.");
    }
}
main();
