import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { LAMPORTS_PER_SOL } from "@solana/web3.js";

export function AirDrop (){

    //const wallet = useWallet() // hooks in react to 'provides' the wallet variable inside the AirDrop component
    // wrapping the AirDrop component inside the WalletProvider
    //alert(wallet.publicKey.toString())

    const wallet = useWallet()
    const {connection} = useConnection()

    async function sendAirdropToUser() {
        let amount = document.getElementById("amount").value;
        await connection.requestAirdrop(wallet.publicKey, amount * LAMPORTS_PER_SOL) // 10 lamports
        alert("Airdropped in sol to user ")
    }


    
    return (
        <div>
            <br/><br/>
            <input id="amount" type="text" placeholder="Amount" />
            <button onClick={sendAirdropToUser}>Send AirDrop</button>
        </div>
    )
}