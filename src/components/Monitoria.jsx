import styles from "../styles/Monitoria.module.css"
import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import Monitor from "../components/Monitor"


export default function Monitoria(props){
    const [showModal, setShowModal] = useState(false)
    const isProfessor = props.isProfessor
    const monitores = [
        // {
        //    nome: 'Henrique',
        //    matricula: '170144488',
        //    horario: '17h-18h', 
        // },
        {
            nome: 'Flávio',
            matricula: '150255882',
            horario: '14h-20h', 
         },
         {
            nome: 'Carla',
            matricula: '170012355',
            horario: '17h-19h', 
         },
         {
            nome: 'Mateus',
            matricula: '180167899',
            horario: '12h-13h', 
         },
         {
            nome: 'Igor',
            matricula: '160199988',
            horario: '15h-16h', 
         },
    ]
    function apagar() {
        //metodo para apagar uma monitoria
    }

    return(
        <div className={styles.card}>
            <div className={styles.topo}>
                <h4 className={styles.codigo}>{props.monitoria.codigo}</h4>
                <span className={styles.spacer}></span>
                <button className={styles.btnDetalhar} onClick={() => {setShowModal(true)}}>Detalhar</button>
                {isProfessor ?  <button className={styles.btnApagar} onClick={apagar}>Apagar</button> : <></>}
            </div>
            <span className={styles.nome}>{props.monitoria.nome}</span>
            <Modal titulo="Detalhe da Monitoria" show={showModal} onClose={() => setShowModal(false)}>
                <div className={styles.content}>
                    <div className={styles.left}>
                        <div className={styles.field}>
                            <h4 className={styles.fieldTitle}>Código: </h4>
                            <span>{props.monitoria.codigo}</span>
                        </div>
                        <div className={styles.field}>
                            <h4 className={styles.fieldTitle}>Disciplina: </h4>
                            <span>{props.monitoria.nome}</span>
                        </div>
                    </div>
                    <div className={styles.right}>
                        <div className={styles.field}>
                            <h4 className={styles.fieldTitle}>Descrição: </h4>
                            <span>{props.monitoria.descricao}</span>
                        </div>
                        <div className={styles.field}>
                            <h4 className={styles.fieldTitle}>Professor: </h4>
                            <span>{props.monitoria.professor}</span>
                        </div>
                    </div>
                </div>
                <div className={styles.listaMonitores}>
                    <h4 className={styles.fieldTitle}>Lista de Monitores</h4>
                    <ul className={styles.monitores}>
                        {
                            monitores.map((monitor, index) => {
                                return <Monitor key={index} monitor={monitor} isProfessor={isProfessor}></Monitor>
                            })
                        }
                    </ul>
                </div>
                {!isProfessor ? 
                    <button className={styles.btnCadastrar}>Inscrever-me</button>
                : <></>}
            </Modal>
        </div>
    )
}