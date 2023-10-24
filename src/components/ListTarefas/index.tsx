import { useContext } from 'react'
import { Container } from "./styles";
import { TarefaContext } from '../../contexts/tarefaContext';

export function ListTarefas() {

    const { tarefas } = useContext(TarefaContext)

    return (
        <>
            <Container>
                <ul>
                    <h3>
                        Quadro 1
                    </h3>

                    {
                        tarefas.map((tarefa) => {
                            return (
                                <li>
                                    <div>
                                        <h4>
                                            {tarefa.titulo}
                                        </h4>
                                        <p>{tarefa.descricao}</p>
                                    </div>

                                </li>
                            )
                        })
                    }

                </ul>
            </Container>
        </>
    )
}
