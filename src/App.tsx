import './App.css'
import { useAccount } from '@metamask/sdk-react-ui'
import SendEthereumTransaction from './components/SendEthereumTransaction.tsx'
import RequestSignMessage from './components/RequestSignMessage.tsx'
import MetaMaskConnect from './components/MetaMaskConnect.tsx'

function App() {
    const { isConnected } = useAccount()

    return (
        <>
            <MetaMaskConnect />
            {isConnected && <RequestSignMessage />}
            {isConnected && <SendEthereumTransaction />}
        </>
    )
}

export default App
