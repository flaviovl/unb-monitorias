import Layout from '../components/Layout'
import styles from '../styles/Monitorias.module.css'
import Monitoria from '../components/Monitoria'
import Link from 'next/link'
import { supabase } from '../utils/supabaseClient';
import React, { useEffect, useState } from "react";
import { useContext } from 'react'
import { AuthContext } from "../contexts/AuthContext";

// async function getTipoUsuario() {
//     if(user){
//         const usuario = await supabase.from('usuario').select('*').eq('idAuth', user.id)
//         console.log(usuario)
//         return true
//     } else return false
// }

export default function Monitorias(){
    const[ monitorias, setMonitorias] = useState([])
    const { user } = useContext(AuthContext)
    const isProfessor = true

    useEffect(() => {
        supabase
            .from('monitoria')
            .select('*')
            .then(response => setMonitorias(response.body))

    }, [])


    return (
            <Layout>
                <div className={styles.main} id="modal-root">
                    {isProfessor ?
                        <div className={styles.header}>
                            <span className={styles.spacer}></span>
                            <Link href="/AdicionarMonitoria"><button className={styles.btnAdicionar}>Adicionar Monitoria</button></Link>
                        </div>
                        : null }
                    <div className={styles.cards}>
                        {
                            monitorias.map((monitoria, index) => {
                                return <Monitoria key={index} monitoria={monitoria} isProfessor={isProfessor}></Monitoria>
                            })
                        }
                    </div>
                </div>
            </Layout>
    )
}