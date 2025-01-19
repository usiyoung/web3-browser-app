import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { MetaMaskUIProvider } from '@metamask/sdk-react-ui'
createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <MetaMaskUIProvider
            sdkOptions={{
                dappMetadata: {
                    name: 'Example React UI Dapp',
                },
            }}
        >
            <App />
        </MetaMaskUIProvider>
    </StrictMode>,
)
