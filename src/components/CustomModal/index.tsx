import { FormEvent, useContext, useState } from 'react'
import Modal from 'react-modal'
import { FormContainer } from './styles'
import { TarefaContext } from '../../contexts/tarefaContext';

interface PropsModal {
    modalVisible: boolean;
    fecharModal: () => void;
}

export function CustomModal(props: PropsModal) {

    const { createTarefa } = useContext(TarefaContext);

    const [titulo, setTitulo] = useState('')
    const [descricao, setDescricao] = useState('')

    function criarTarefa(event: FormEvent) {
        event.preventDefault()

        createTarefa({
            titulo: titulo,
            descricao
        })

        setTitulo('')
        setDescricao('')
        props.fecharModal()

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
                    required
                    value={titulo}
                    onChange={(event) => setTitulo(event.target.value)}

                />
                <textarea
                    placeholder='Descriçao'
                    required
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
