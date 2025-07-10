// import { Connection, clusterApiUrl, PublicKey } from '@solana/web3.js';

// // === CONFIG ===
// const RPC_URL = clusterApiUrl('mainnet-beta'); // or custom RPC endpoint
// const BLY_MINT_ADDRESS = new PublicKey('YOUR_BLY_TOKEN_MINT_ADDRESS_HERE');
// const REFRESH_INTERVAL = 30 * 1000; // 30 seconds

// // === STATE ===
// let cachedHolderCount = 999; // default dummy value
// let lastFetched = 0; // timestamp of last fetch

// const connection = new Connection(RPC_URL, 'confirmed');

// // === CORE FUNCTION ===
// export async function fetchHolderCount() {
// 	try {
// 		// Query all token accounts that hold BLY
// 		const accounts = await connection.getProgramAccounts(
// 			new PublicKey('TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'), // SPL Token program
// 			{
// 				filters: [
// 					{ dataSize: 165 }, // size of SPL token account
// 					{
// 						memcmp: {
// 							offset: 0, // mint address starts at offset 0
// 							bytes: BLY_MINT_ADDRESS.toBase58()
// 						}
// 					}
// 				]
// 			}
// 		);

// 		// Count only accounts with balance > 0
// 		let holderCount = 0;
// 		for (const acc of accounts) {
// 			const amount = acc.account.data[64]; // raw token amount (simplified for dummy, should decode properly)
// 			if (amount > 0) {
// 				holderCount++;
// 			}
// 		}

// 		cachedHolderCount = holderCount;
// 		lastFetched = Date.now();
// 	} catch (err) {
// 		console.error('Failed to fetch holder count:', err);
// 	}
// }

// // === PUBLIC API ===
// export function getLiveHolderCount() {
// 	const now = Date.now();

// 	if (now - lastFetched > REFRESH_INTERVAL) {
// 		fetchHolderCount();
// 	}

// 	return cachedHolderCount;
// }

export function getLiveHolderCount() {
    return 999;
}
