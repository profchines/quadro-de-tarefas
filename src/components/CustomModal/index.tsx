import { FormEvent } from 'react'
import Modal from 'react-modal'
import { FormContainer } from './styles'

interface PropsModal {
    modalVisible: boolean;
    fecharModal: () => void;
}

export function CustomModal(props: PropsModal) {

    function criarTarefa(event: FormEvent) {

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

                />
                <textarea
                    placeholder='Descriçao'

                />

                <button type='submit'>
                    Cadastrar
                </button>
            </FormContainer>

        </Modal>
    )
}
