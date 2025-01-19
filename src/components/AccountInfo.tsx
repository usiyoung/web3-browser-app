import { useAccount } from '@metamask/sdk-react-ui'

const AccountInfo = () => {
    const { address, connector, status } = useAccount()

    return (
        <>
            <h2>AccountInfo</h2>
            <p>Address: {address}</p>
            <p>
                Connector: {connector?.id} / {status.toLocaleUpperCase()}
            </p>
        </>
    )
}

export default AccountInfo
