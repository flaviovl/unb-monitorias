import styles from "../styles/Monitoria.module.css"

export default function Monitor(props){
    return (
        <div className={styles.monitor}>
            <span>{props.monitor.nome} - {props.monitor.matricula}, horário: {props.monitor.horario}</span>
            <span className={styles.spacer}></span>
            {props.isProfessor ? <button className={styles.btnApagar}>Excluir</button> : <></>}
        </div>
    )
}