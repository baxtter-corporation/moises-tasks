import { Link, useParams } from "react-router-dom"
import { useGetTelephone } from "../hooks/useGetTelephone"
import style from '../components/lis.module.css'
import { useDeleteTelephoneData } from "../hooks/useDeleteTelephoneData"

export function TelephoneList() {

    const {id} = useParams();
    const {dataList}= useGetTelephone('telephone')
    const {handleDelete } = useDeleteTelephoneData(id)

    return(
        <>
        <div className={style.container}>
            <h1>Lista de usuarios</h1>
            { <ul>
                {
                    dataList?.map((item: any, index: number) => {
                        return(
                            <ul key={index} className={style.list}>
                            <li><span>Nome: {item.name}</span> <span>Numero: {item.phone}</span> <button className={style.btn} onClick={handleDelete} id={item.id}>del</button>                             <Link to={`/edit/${item?.id}`}>
                            <button>editar</button>
                            </Link></li>
                        </ul>
                        )
                    })
                }
            </ul> }
            <Link to="/" className={style.link}>Formulario</Link>
            <Link to='/'></Link>
        </div>
        </>
    )
}