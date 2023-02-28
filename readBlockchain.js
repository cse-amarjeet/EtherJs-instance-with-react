const { ethers } = require("ethers");
require("dotenv").config();

const provider = new ethers.providers.JsonRpcProvider(process.env.provider);

const queryBlockchain = async () => {
  const block = await provider.getBlockNumber();
  console.log("latest block Number: ", block);

  const balance = await provider.getBalance(
    "0x4Bb328d9753ddc32454F4F91bDEA4a62Db4F4763"
  );
  console.log("Balance is: ", ethers.utils.formatEther(balance));
};
queryBlockchain();
