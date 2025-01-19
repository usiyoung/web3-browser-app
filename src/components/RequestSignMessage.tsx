import { useSignMessage } from '@metamask/sdk-react-ui'

const RequestSignMessage = () => {
    const { data, signMessage, isSuccess, isError, isLoading } = useSignMessage(
        {
            message: '서명합니다.',
        },
    )
    return (
        <>
            <SignButton isLoading={isLoading} onClick={() => signMessage()} />

            <div>
                {isSuccess && <p>Signature: {data}</p>}
                {isError && <p>다시 시도해보세요.</p>}
            </div>
        </>
    )
}

const SignButton = ({
    isLoading,
    onClick,
}: {
    isLoading: boolean
    onClick: () => void
}) => {
    return (
        <button onClick={onClick} disabled={isLoading}>
            서명 요청
        </button>
    )
}

export default RequestSignMessage
