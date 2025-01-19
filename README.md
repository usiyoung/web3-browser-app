# web3-broswer-app

1. 메타마스크 연동
2. 서명 요청 기능 구현
3. 트랜잭션 발생
4. 스마트 컨트랙트

---

### 1. 메타마스크 연동

```shell
npm i @metamask/sdk-react
npm i @metamask/sdk-react-ui
```

```javascript
function App() {
    const { isConnected, address, connector, status } = useAccount()

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
```

### 2. 서명 요청 기능 구현

```javascript

const SignMessage = () => {
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
```