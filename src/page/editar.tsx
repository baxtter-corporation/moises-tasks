import { Link, useParams } from 'react-router-dom'
import style from '../components/form.module.css'
import { useUpdateTelephone } from '../hooks/useEditTelephoneData';

export function Edit() {

    const {id} = useParams();
    const {handleChange, handleSubmit, data} = useUpdateTelephone(id)

    return(
        <>
            <form className={style.container} method='POST' onSubmit={handleSubmit}>
                <div className={style.camposContainer}>
                    <h1>Editar</h1>
                    <div className={style.campos}>
                        <input type="text" placeholder='Digite o seu primeiro nome' onChange={handleChange} value={data.name} name='name'/>
                    </div>
                    <div className={style.campos}>
                        <input type="text" placeholder='Digite seu sobrenome' onChange={handleChange} value={data.nickname} name='nickname'/>
                    </div>
                    <div className={style.campos}>
                        <input type="text" placeholder='Digite seu phone' onChange={handleChange} value={data.phone} name='phone'/>
                    </div>
                    <div className={style.campos}>
                        <input type="email" placeholder='Digite o seu email' onChange={handleChange} value={data.email} name='email'/>
                    </div>
                    <div className={style.campos}>
                        <input type="date" placeholder='' onChange={handleChange} value={data.birthday} name='birthday'/>
                    </div>
                    <div className={style.campos}>
                        <input type="text" placeholder='Digite o seu endereco' onChange={handleChange} value={data.adress} name='adress'/>
                    </div>
                    <div className={style.campos}>
                        <input type="text" placeholder='Digite o nome da sua cidade' onChange={handleChange} value={data.city} name='city'/>
                    </div>
                    <div className={style.campos}>
                        <input type="text" placeholder='Digite o nome da sua empresa' onChange={handleChange} value={data.company} name='company'/>
                    </div>
                    <div>
                        <textarea placeholder='Deixe uma nota' onChange={handleChange} value={data.note} name='note'> 
                        </textarea>
                    </div>
                    <button className={style.btn} type='submit'>Submit</button>
                </div>
            </form>

            <Link to="/list">Voltar para a Lista</Link>
        </>
    )
}