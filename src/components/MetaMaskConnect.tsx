import { MetaMaskButton, useAccount } from '@metamask/sdk-react-ui'

const MetaMaskConnect = () => {
    const { address, connector, status } = useAccount()

    return (
        <>
            <MetaMaskButton />

            <p>Address: {address}</p>
            <p>
                Connector: {connector?.id} / {status.toLocaleUpperCase()}
            </p>
        </>
    )
}

export default MetaMaskConnect
