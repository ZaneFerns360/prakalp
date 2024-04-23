"use client";
import { ConnectKitButton } from "connectkit";
import { Wallet } from "lucide-react";

export const ConnectWalletButton = () => {
  return (
    <ConnectKitButton.Custom>
      {({ isConnected, isConnecting, show, hide, address, ensName, chain }) => {
        return (
          <button className="text-black" onClick={show}>
            <Wallet />
          </button>
        );
      }}
    </ConnectKitButton.Custom>
  );
};
