import { FormEvent, useContext, useEffect, useState } from 'react'
import Modal from 'react-modal'
import { FormContainer } from './styles'
import { TarefaContext } from '../../contexts/tarefaContext';

interface PropsModal {
    modalVisible: boolean;
    fecharModal: () => void;
}

export function CustomModal(props: PropsModal) {

    const {
        createTarefa,
        editarTarefa,
        funSetTarefaDefault,
        updateTarefa
    } = useContext(TarefaContext);

    const [titulo, setTitulo] = useState('')
    const [descricao, setDescricao] = useState('')

    useEffect(() => {
        if (editarTarefa.editar) {

            setTitulo(editarTarefa.tarefa?.titulo ? editarTarefa.tarefa.titulo : '')
            setDescricao(editarTarefa.tarefa?.descricao ? editarTarefa.tarefa.descricao : '')
        }
        console.log('Todos')

    }, [editarTarefa.editar])

    function limparCamposEFecharModal() {
        setTitulo('')
        setDescricao('')
        funSetTarefaDefault();
        props.fecharModal()
    }

    // onSubmitModal
    function criarTarefa(event: FormEvent) {
        event.preventDefault()

        if (editarTarefa.editar && editarTarefa.tarefa) {

            let objTarefa = {
                ...editarTarefa.tarefa,
                titulo,
                descricao
            }
            updateTarefa(objTarefa)


        } else {
            createTarefa({
                titulo: titulo,
                descricao
            })
        }

        limparCamposEFecharModal()

    }

    return (
        <Modal
            isOpen={props.modalVisible}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
            onRequestClose={limparCamposEFecharModal}
        >
            <button
                type='button'
                className='react-modal-close'
                onClick={limparCamposEFecharModal}
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
