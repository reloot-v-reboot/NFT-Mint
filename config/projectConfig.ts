const projectConfig = {
  nftName: '我的NFT',

  nftSymbol: '我的NFT SYMBOL',

  maxSupply: 10000,

  maxMintAmountPerTxn: 10,

  mintCost: process.env.NODE_ENV === 'production' ? 100 : 0.02,

  networkName:
  process.env.NODE_ENV === 'production'
    ?  'Ethereum Mainnet'
    :  'Rinkeby Testnet',

  chainName: 'ETH',

  chainId: process.env.NODE_ENV === 'production' ? 1 : 4, // Ethereum (1), Rinkeby (4)

  siteDomain: 'www.yourdomain.com',

  siteUrl:
    process.env.NODE_ENV === 'production'
      ? `https://your_site_domain`
      : 'http://localhost:3000',

  twitterUsername: '@your_twitter_handle',

  twitterUrl: 'https://twitter.com/your_twitter_handle',

  discordUrl: 'https://discord.gg/your_discord_invite_code',

  openseaCollectionUrl:
    process.env.NODE_ENV === 'production'
      ? 'https://opensea.io/collection/your_opensea_collection_name'
      : 'https://testnets.opensea.io/collection/your_opensea_collection_name',

  contractAddress:
    process.env.NODE_ENV === 'production'
      ? 'your_mainnet_contract_address'
      : '0xe30461961adc37543b580fbbd5b68528fd0207c0',

  scanUrl:
    process.env.NODE_ENV === 'production'
      ? 'https://etherscan.io/address/your_ethereum_contract_address'
      : 'https://rinkeby.etherscan.io/address/your_rinkeby_contract_address',
};

export default projectConfig;
