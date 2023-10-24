import { FormEvent, useState } from 'react'
import Modal from 'react-modal'
import { FormContainer } from './styles'

interface PropsModal {
    modalVisible: boolean;
    fecharModal: () => void;
}

export function CustomModal(props: PropsModal) {

    const [titulo, setTitulo] = useState('')
    const [descricao, setDescricao] = useState('')

    function criarTarefa(event: FormEvent) {
        event.preventDefault()


        console.log('Enviaaaar')
        console.log(titulo)
        console.log(descricao)

    }

    return (
        <Modal
            isOpen={props.modalVisible}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
            onRequestClose={props.fecharModal}
        >
            <button
                type='button'
                className='react-modal-close'
                onClick={props.fecharModal}
            >
                X
            </button>

            <FormContainer
                onSubmit={criarTarefa}
            >
                <h2>Cadastrar Tarefa</h2>

                <input
                    type="text"
                    placeholder='Título'
                    value={titulo}
                    onChange={(event) => setTitulo(event.target.value)}

                />
                <textarea
                    placeholder='Descriçao'
                    value={descricao}
                    onChange={(event) => setDescricao(event.target.value)}
                />

                <button type='submit'>
                    Cadastrar
                </button>
            </FormContainer>

        </Modal>
    )
}
