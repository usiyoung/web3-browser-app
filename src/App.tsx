import './App.css'
import { MetaMaskButton, useAccount } from '@metamask/sdk-react-ui'
import SendEthereumTransaction from './components/SendEthereumTransaction.tsx'
import RequestSignMessage from './components/RequestSignMessage.tsx'
import MetaMaskConnect from './components/AccountInfo.tsx'
import Counter from './components/Counter.tsx'

function App() {
    const { isConnected } = useAccount()

    return (
        <>
            <MetaMaskButton />

            {isConnected && <MetaMaskConnect />}

            {isConnected && <RequestSignMessage />}

            {isConnected && <SendEthereumTransaction />}

            {isConnected && <Counter />}
        </>
    )
}

export default App
