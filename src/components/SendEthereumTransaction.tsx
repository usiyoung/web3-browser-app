import { ChangeEvent, useState } from 'react'
import useTransaction from '../hooks/useTransaction'

const SendEthereumTransaction = () => {
    const { sendTransaction } = useTransaction()
    const [formData, setFormData] = useState({ recevied: '', balance: 0 })

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData((prevData) => ({ ...prevData, [name]: value }))
    }

    const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        await sendTransaction(formData)
    }

    return (
        <>
            <p>send Transaction</p>
            <form onSubmit={handleSubmit}>
                <input
                    name="recevied"
                    value={formData.recevied}
                    placeholder="받을 계정"
                    onChange={handleChange}
                />
                <input
                    name="balance"
                    value={formData.balance}
                    placeholder="보낼 금액"
                    onChange={handleChange}
                />
                <button type="submit">보내기</button>
            </form>
        </>
    )
}

export default SendEthereumTransaction
