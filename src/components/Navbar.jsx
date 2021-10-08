import styles from '../styles/Navbar.module.css'
import Link from 'next/link'
import { useContext } from 'react'
import { AuthContext } from "../contexts/AuthContext";
import { supabase } from '../utils/supabaseClient';
import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router'

export default function Navbar(){
    const router = useRouter()
    const { user } = useContext(AuthContext) 
    async function logout() {
        try {
            await supabase.auth.signOut();
            router.push("/Home").then(
                setTimeout(()=>{
                    window.location.reload()
                },500)
            )
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <nav className={styles.navbar}>
            <div className={styles.menuItem}>
                <Link href="/Home">Home</Link>
            </div>
            <div className={styles.menuItem}>
                { user ? <Link href="/Monitorias">Monitorias</Link> : null}
            </div>
            {/* <div className={styles.menuItem}>
                <Link href="/professor">Professor</Link>
            </div>
            <div className={styles.menuItem}>
                <Link href="/aluno">Aluno</Link>
            </div>
            <div className={styles.menuItem}>
                <Link href="/sobre">Sobre</Link>
            </div> */}
            <span className={styles.spacer}></span>
            <div className={styles.menuItem}>
                { user ? <div className={styles.flex}>
                            <span>Olá, {user.email}!</span>
                            <button className={styles.btnLogout} onClick={logout}>Logout</button>
                        </div>
                        : <Link href="/Login">Entrar/Cadastrar</Link> }
            </div>
        </nav>
    )
}