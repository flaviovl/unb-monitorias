import Navbar from './Navbar'
import Footer from './Footer'
import styles from '../styles/Layout.module.css'

export default function Layout(props){
    return(
        <>
            <Navbar></Navbar>
            <div className={styles.conteudo}>
                {props.children}
            </div>
            <Footer></Footer>
        </>
    )
}