import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React, { useMemo } from "react";
import { WalletProvider } from "@solana/wallet-adapter-react";
// import { ConnectionProvider } from "./contexts/connection";
// import { AccountsProvider } from "./contexts/accounts";
// import { MarketProvider } from "./contexts/market";
// import { AppLayout } from "./components/Layout";

// import { FaucetView, HomeView } from "./views";
import {HomePage} from "./components/home/HomePage";
import {RideTakerOrGiver} from "./components/innerContent/RideTakerOrGiver"
import {RideTakerDashboard} from "./components/innerContent/RideTakerDashboard"
import {RideGiverDashboard} from "./components/innerContent/RideGiverDashboard"
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
                  <Route exact path="/" component={HomePage} />
                  <Route exact path="/ridetakerorgiver" component={RideTakerOrGiver} />
                  <Route exact path="/ridetaker/dashboard" component={RideTakerDashboard} />
                  <Route exact path="/rideGiver/dashboard" component={RideGiverDashboard} />
                </Switch>
              </BrowserRouter>
  );
}
