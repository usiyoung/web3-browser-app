import useAccount from './useAccount'

const useTransaction = () => {
    const { address } = useAccount()

    const sendTransaction = async ({
        recevied,
        balance,
    }: {
        recevied: string
        balance: number
    }) => {
        try {
            await window.ethereum!.request({
                method: 'eth_sendTransaction',
                params: [
                    {
                        from: address,
                        to: recevied,
                        value: balance,

                        gasLimit: '0x5028',
                        maxPriorityFeePerGas: '0x3b9aca00',
                        maxFeePerGas: '0x2540be400',
                    },
                ],
            })
        } catch (error) {
            console.log(error)
        }
    }

    return { sendTransaction }
}

export default useTransaction
