import axios from "axios";
import { ReactNode, createContext, useState, useEffect } from "react";

interface Tarefas {
    titulo: string;
    descricao: string;
}

interface PropsTarefaContext {
    tarefas: Array<Tarefas>
}
export const TarefaContext = createContext(
    {} as PropsTarefaContext
)

interface PropsTarefaProvider {
    children: ReactNode
}
// export function TarefasProvider(props: PropsTarefaProvider) {
export function TarefasProvider({ children }: PropsTarefaProvider) {

    const [tarefas, setTarefas] = useState([])

    useEffect(() => {
        axios.get('/api/tarefas')
        .then((res) => {
            console.log('Andressa :D')
            console.log(res.data)
        })
    }, [])


    return (
        <TarefaContext.Provider value={{
            tarefas
        }}>
            {children}
        </TarefaContext.Provider>
    )
}
