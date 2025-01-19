import { useState } from 'react'
import { ethers } from 'ethers'
import useAccount from './useAccount'
import abi from '../abi/counter.json'

const useContract = () => {
    const [value, setValue] = useState<number>(0)

    const contractInterface = new ethers.utils.Interface(abi)
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const contractAddress = '0xd8b934580fcE35a11B58C6D73aDeE468a2833fa8'
    const contract = new ethers.Contract(contractAddress, abi, provider)
    const { address } = useAccount()

    console.log('contractInterface:::', contractInterface)

    const encodeFunctionData = (type: string) => {
        const data = contractInterface.encodeFunctionData(type)
        return data
    }

    const view = async () => {
        const value = await contract.getValue()
        return value.toString()
    }

    const sendTransaction = async (type: string) => {
        const data = encodeFunctionData(type)

        const tx = {
            from: address,
            to: contractAddress,
            data,
        }

        const signer = provider.getSigner()
        const txResponse = await signer.sendTransaction(tx)
        console.log('txResponse: ', txResponse)

        const value = await view()
        console.log('value:: ', value)
        setValue(value)
    }

    return { sendTransaction, view, value }
}

export default useContract
