const solanaJSON = require('../../solanajson/solana-json.js/index.js');

(async() => {
		console.log('deploying...');
		const connection = solanaJSON.setupConnection('https://api.devnet.solana.com');
		const payerAccount = await solanaJSON.createUser();
		await solanaJSON.fundUser(connection,payerAccount);
		const smartContract = {
			pathToProgram: './solana-json.so',
			dataLayout: solanaJSON.setDataStructure(1000),
		}
		const app = await solanaJSON.loadProgram(connection,smartContract,payerAccount);
		console.log('app',app);
		const confirmationTicket = await solanaJSON.pushJSON(connection,app,'{"abc":123}');
		const testJSON = solanaJSON.pullJSON(connection,app.appAccount.publicKey);
		console.log(`Test: ${JSON.parse(testJSON).abc}`);
})().catch( e => { console.error(e) });