export const THE_GRAPH_URL = "https://api.thegraph.com/subgraphs/name/takertao2/officialtitandao-graph";
export const EPOCH_INTERVAL = 2200;

// NOTE could get this from an outside source since it changes slightly over time
export const BLOCK_RATE_SECONDS = 13.14;

export const TOKEN_DECIMALS = 9;

// TODO (appleseed): verify production graph URL
export const POOL_GRAPH_URLS = {
  4: "https://api.thegraph.com/subgraphs/name/pooltogether/rinkeby-v3_4_3",
  1: "https://api.thegraph.com/subgraphs/name/pooltogether/pooltogether-v3_4_3",
};

interface IAddresses {
  [key: number]: { [key: string]: string };
}

export const addresses: IAddresses = {
  137: {
    DAI_ADDRESS: "0x716bcE7e6807c16E0955a87F0BA1879595D976d8",
    FRAX_ADDRESS: "0x2c1F9dB1Ec3872eCCB0458A8e98f9C6921967Cdd",
    OHM_ADDRESS: "0xF3CcDC6904361bBc19f4aed006552da520BD24bd",
    STAKING_ADDRESS: "0x34e7838eDc23153A66605B5321f9d635f99CC68F",
    STAKING_HELPER_ADDRESS: "0x7fFe8Bd154C1CBcca881Fc22c2225D440CBD3C1C",
    SOHM_ADDRESS: "0xe8996007Bd5Ae851B20b4fb764b7ED4F92393F35",
    WSOHM_ADDRESS: "0x54F2f18771D24149c066ce9Cbc97C0c3BE64E9b1",
    DISTRIBUTOR_ADDRESS: "0x8AD607D677cFe573CeA9089EE860006526D38835",
    BONDINGCALC_ADDRESS: "0xac268f9B84d576909B47C2fF376baFDB98CE6aE4",
//    CIRCULATING_SUPPLY_ADDRESS: "0x???",
    TREASURY_ADDRESS: "0x2486870843B792C1eef698C887C909F3eD66B845",
  },
  //1: {
  //  DAI_ADDRESS: "0x6b175474e89094c44da98b954eedeac495271d0f", // duplicate
  //  OHM_ADDRESS: "0x383518188c0c6d7730d91b2c03a03c837814a899",
  //  STAKING_ADDRESS: "0xfd31c7d00ca47653c6ce64af53c1571f9c36566a", // The new staking contract
  //  STAKING_HELPER_ADDRESS: "0xc8c436271f9a6f10a5b80c8b8ed7d0e8f37a612d", // Helper contract used for Staking only
  //  OLD_STAKING_ADDRESS: "0x0822F3C03dcc24d200AFF33493Dc08d0e1f274A2",
  //  SOHM_ADDRESS: "0x04F2694C8fcee23e8Fd0dfEA1d4f5Bb8c352111F",
  //  OLD_SOHM_ADDRESS: "0x31932E6e45012476ba3A3A4953cbA62AeE77Fbbe",
  //  PRESALE_ADDRESS: "0xcBb60264fe0AC96B0EFa0145A9709A825afa17D8",
  //  AOHM_ADDRESS: "0x24ecfd535675f36ba1ab9c5d39b50dc097b0792e",
  //  MIGRATE_ADDRESS: "0xC7f56EC779cB9e60afA116d73F3708761197dB3d",
  //  DISTRIBUTOR_ADDRESS: "0xbe731507810C8747C3E01E62c676b1cA6F93242f",
  //  BONDINGCALC_ADDRESS: "0xcaaa6a2d4b26067a391e7b7d65c16bb2d5fa571a",
  //  CIRCULATING_SUPPLY_ADDRESS: "0x0efff9199aa1ac3c3e34e957567c1be8bf295034",
  //  TREASURY_ADDRESS: "0x31f8cc382c9898b273eff4e0b7626a6987c846e8",
    // TODO (appleseed-lusd): swap this out
  //  PICKLE_OHM_LUSD_ADDRESS: "0xc3d03e4f041fd4cd388c549ee2a29a9e5075882f",
  //  REDEEM_HELPER_ADDRESS: "0xE1e83825613DE12E8F0502Da939523558f0B819E",
  //  FUSE_6_SOHM: "0x59bd6774c22486d9f4fab2d448dce4f892a9ae25", // Tetranode's Locker
  //  FUSE_18_SOHM: "0x6eDa4b59BaC787933A4A21b65672539ceF6ec97b", // Olympus Pool Party
    // TODO (appleseed-33t): These are currently all rinkeby addresses (change before prod launch)
  //  PT_UNUSED_POOL_ADDRESS: "0xF89e906632b1B1C036A92B56d3409347735C5D4c", // contract to get current prize amount, deposit/withdraw on pool
  //  PT_TOKEN_ADDRESS: "0x0a2d026bacc573a8b5a2b049f956bdf8e5256cfd", // 33T token address, taken from `ticket` function on PRIZE_STRATEGY_ADDRESS
  //  PT_UNUSED_AWARD_ADDRESS: "0x54c18FB75f946424AF15221414B15a814Ca1EFD0", // contract to start/complete award
  //  PT_PRIZE_POOL_ADDRESS: "0xf9081132864ed5e4980CFae83bDB122d86619281", // NEW
  //  PT_PRIZE_STRATEGY_ADDRESS: "0x2Df17EA8D6B68Ec444c9a698315AfB36425dac8b", // NEW
  //},
};
