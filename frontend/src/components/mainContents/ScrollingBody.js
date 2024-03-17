import { Context } from '../../context/SharedState';
import React, { useContext } from 'react'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import Footer from '../Footer'
import SkillsAndAcheivements from './SkillsAndAcheivements'
import Alerts from '../Alerts';

export default function ScrollingBody() {
    const states = useContext(Context);
    return (
        <>
            <div className={states.mode === 'dark'?'bg-dark text-light':'text-dark'} style={{ marginTop: '100vh', width:'100%', position: 'absolute', background: 'white', overflow:'hidden'}}>
                <Alerts alert={states.alert} />
                <About mode={states.mode} />
                <Projects mode={states.mode} showAlert={states.showAlert}/>
                <SkillsAndAcheivements mode={states.mode}/>
                <Contact mode={states.mode} showAlert={states.showAlert}/>
                <Footer mode={states.mode}/>
            </div>
        </>
    )
}
