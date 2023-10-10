import Modal from 'react-modal'
import { FormContainer } from './styles'

interface PropsModal {
    modalVisible: boolean;
    fecharModal: () => void;
}

export function CustomModal(props: PropsModal) {
    return (
        <Modal
            isOpen={true}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button
                type='button'
                className='react-modal-close'
            >
                X
            </button>

            <FormContainer>
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
