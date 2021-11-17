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
    TREASURY_ADDRESS: "0x2486870843B792C1eef698C887C909F3eD66B845",
  },
};
