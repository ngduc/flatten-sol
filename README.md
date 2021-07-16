# Flatten-Sol

`flatten-sol` - command-line tool to flatten a solidity contract which uses `import "@openzeppelin/contracts/...`.

- This tool will replace those import statements and flatten (combine) them into one file. The output file can be used for Etherscan's verifyContract.
- [Solidity file example](./example.sol)
- Based on [solidity-flattener](https://github.com/poanetwork/solidity-flattener)

### Installation & Usage:

```
Installation:
$ npm install flatten-sol -g

Usage:
$ npx flatten-sol <filename.sol>
```

Output file is located in "./out" directory.

### Links:

- [Create-web3js-app](https://github.com/coddx-hq/create-web3js-app) CLI - create a new app with Web3js, React, Hardhat, Express, Vercel.
