import { useEffect, useState } from 'react'

const useAccount = () => {
    const [address, setAddress] = useState('')
    const getAddress = async () => {
        const [address] = (await window.ethereum!.request({
            method: 'eth_requestAccounts',
        })) as string[]

        setAddress(address)
    }

    useEffect(() => {
        getAddress()
    }, [])

    return { address }
}

export default useAccount
