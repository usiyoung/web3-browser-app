import useContract from '../hooks/useContract.ts'

const Counter = () => {
    const { sendTransaction, value: count } = useContract()

    const increment = async () => {
        await sendTransaction('increment')
    }

    const decrement = async () => {
        await sendTransaction('decrement')
    }

    return (
        <>
            <h2>SmartContract</h2>

            <p>카운터: {count}</p>
            <button onClick={increment}>➕</button>
            <button onClick={decrement}>➖</button>
        </>
    )
}

export default Counter
