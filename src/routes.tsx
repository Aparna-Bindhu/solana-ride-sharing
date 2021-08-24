import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React, { useMemo } from "react";
import { WalletProvider } from "@solana/wallet-adapter-react";
// import { ConnectionProvider } from "./contexts/connection";
// import { AccountsProvider } from "./contexts/accounts";
// import { MarketProvider } from "./contexts/market";
// import { AppLayout } from "./components/Layout";

// import { FaucetView, HomeView } from "./views";

import {HelloWorld} from "./components/HelloWorld"
import {
  getLedgerWallet,
  getMathWallet,
  getPhantomWallet,
  getSolflareWallet,
  getSolletWallet,
  getSolongWallet,
  getTorusWallet,
} from "@solana/wallet-adapter-wallets";

export function Routes() {

  return (
    // <HashRouter basename={"/"}>
    //   <ConnectionProvider>
    //     <WalletProvider wallets={wallets} autoConnect>
    //       <AccountsProvider>
    //         <MarketProvider>
    //           <AppLayout>
    //             <Switch>
    //               <Route exact path="/" component={() => <HomeView />} />
    //               <Route exact path="/faucet" children={<FaucetView />} />
    //             </Switch>
    //           </AppLayout>
    //         </MarketProvider>
    //       </AccountsProvider>
    //     </WalletProvider>
    //   </ConnectionProvider>
    // </HashRouter>

              <BrowserRouter>
                <Switch>
                  <Route exact path="/" component={HelloWorld} />
                </Switch>
              </BrowserRouter>
  );
}
