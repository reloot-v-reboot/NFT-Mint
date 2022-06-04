// For Ethereum, use the Infura endpoints
export default function rpcConfig(infuraKey?: string) {
  return process.env.NODE_ENV === 'production'
    ? 'https://mainnet.infura.io/v3/feb6dc344527497cb3e4a5a04f598e75'
    : 'https://rinkeby.infura.io/v3/feb6dc344527497cb3e4a5a04f598e75'
}
