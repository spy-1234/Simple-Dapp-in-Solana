import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL, PublicKey, SystemProgram } from "@solana/web3.js";

export function SendToken() { // gadbad is there in the code
    const {wallet} = useWallet()
    const {connection} = useConnection()

    async function SendToken(){
        let to = document.getElementById("to").value 
        let amount = document.getElementById("amount").value
        const transaction = new Transaction();
        transaction.add(SystemProgram.transfer({
            fromPubkey: wallet.publicKey,
            toPubkey: new PublicKey(to),
            lamports: amount * LAMPORTS_PER_SOL,
        }))

        await wallet.sendTransaction(transaction, connection)
        alert("Sent" + amount + " SOL to " + to)
    }

    return (
        <div>
            <input id="to" type="text" placeholder="To" />
            <input id="amount" type="text" placeholder="Amount" />
            <button onClick={SendToken}>Send Token</button>
        </div>
    )

}