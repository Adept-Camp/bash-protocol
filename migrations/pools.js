const INITIAL_BAC_FOR_POOLS = 50000;
const INITIAL_BAS_FOR_DAI_BAC = 750000;
const INITIAL_BAS_FOR_DAI_BAS = 250000;

const POOL_START_DATE = Date.parse('2020-11-30T00:00:00Z') / 1000;

const bacPools = [
  { contractName: 'JAMAMPLPool', token: 'AMPL' },
  { contractName: 'JAMBACPool', token: 'BAS' },
  { contractName: 'JAMDSDPool', token: 'DSD' },
  { contractName: 'JAMESDPool', token: 'ESD' },
  { contractName: 'JAMUSDCPool', token: 'USDC' },
];

const basPools = {
  DAIBAC: { contractName: 'DAIBACLPTokenSharePool', token: 'DAI_BAC-LPv2' },
  DAIBAS: { contractName: 'DAIBASLPTokenSharePool', token: 'DAI_BAS-LPv2' },
};

module.exports = {
  POOL_START_DATE,
  INITIAL_BAC_FOR_POOLS,
  INITIAL_BAS_FOR_DAI_BAC,
  INITIAL_BAS_FOR_DAI_BAS,
  bacPools,
  basPools,
};
