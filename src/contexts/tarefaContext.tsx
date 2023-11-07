import axios from "axios";
import {
    ReactNode,
    createContext,
    useState,
    useEffect
} from "react";

interface Tarefas {
    titulo: string;
    descricao: string;
}
interface TarefasWithID {
    id: string;
    titulo: string;
    descricao: string;
}

// exemplo de type para omitir atributo
// type TarefaExample = Omit<TarefasWithID, 'id' | `titulo`>

interface DataEditarTarefa {
    editar: boolean;
    tarefa: TarefasWithID | null;
}

interface PropsTarefaContext {
    tarefas: Array<TarefasWithID>;
    createTarefa: (tarefas: Tarefas) => Promise<void>;
    updateTarefa: (tarefas: TarefasWithID) => Promise<void>;
    funEditarTarefa: (tarefas: DataEditarTarefa) => void;
    funSetTarefaDefault: () => void;
    editarTarefa: DataEditarTarefa;
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

    const [editarTarefa, setEditarTarefas] = useState<DataEditarTarefa>({editar: false, tarefa: null})

    useEffect(() => {
        axios.get('/api/tarefas')
            .then((res) => {
                console.log(res.data)
                setTarefas(res.data.tarefas)
            })
    }, [])

    async function createTarefa(data: Tarefas) {

        const resposta = await axios.post('/api/tarefas', data)

        axios.get('/api/tarefas')//5min
            .then((res) => {
                setTarefas(res.data.tarefas)
            })


    }

    async function updateTarefa(data: TarefasWithID) {

        const resposta = await axios.put('/api/tarefas', data)

        axios.get('/api/tarefas')//5min
            .then((res) => {
                setTarefas(res.data.tarefas)
            })


    }

    function funSetTarefaDefault() {
        setEditarTarefas({editar: false, tarefa: null})
    }

    function funEditarTarefa(data: DataEditarTarefa) {
        setEditarTarefas(data)
    }


    return (
        <TarefaContext.Provider value={{
            tarefas,
            createTarefa,
            editarTarefa,
            funEditarTarefa,
            funSetTarefaDefault,
            updateTarefa
        }}>
            {children}
        </TarefaContext.Provider>
    )
}
