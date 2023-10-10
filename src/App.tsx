import { useState } from 'react'
import Modal from 'react-modal'
import { Header } from "./components/Header"
import { ListTarefas } from "./components/ListTarefas"
import { GlobalStyle } from "./styles/global"
import { CustomModal } from './components/CustomModal'

Modal.setAppElement('#root')

// dontpad.com/profchines
function App() {

    const [isVisibleModal, setIsVisibleModal] = useState(false)

    function abrirModal() {
        setIsVisibleModal(true)
    }

    function fecharModal() {
        setIsVisibleModal(false)
    }

    return (
        <>
            <GlobalStyle />
            <Header
                abrirModal={abrirModal}
            />

            <ListTarefas />

            <CustomModal
                modalVisible={isVisibleModal}
                fecharModal={fecharModal}
            />
        </>
    )
}

export default App
