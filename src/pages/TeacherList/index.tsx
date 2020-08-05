import React from 'react';

import PageHeader from '../../components/PageHeader';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './style.css'


function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponiveis.">
                <form id="search-teachers">
                    <div className="input-block">
                        <label htmlFor="subject">Matéria</label>
                        <input type="text" id="subject" />
                    </div>

                    <div className="input-block">
                        <label htmlFor="week_day">Dia da Semana</label>
                        <input type="text" id="week_day" />
                    </div>

                    <div className="input-block">
                        <label htmlFor="time">Hora</label>
                        <input type="text" id="time" />
                    </div>
                </form>
            </PageHeader>

            <main>
                <article className="teacher-item">
                    <header>
                        <img src="https://avatars2.githubusercontent.com/u/37220913?s=460&u=f3c4d5307e0cb460e8e4ef71e1890ebab884cf20&v=4" alt="David Luna" />
                        <div>
                            <strong>David Luna</strong>
                            <span>Fisica</span>
                        </div>
                    </header>

                    <p>
                        Melhor programador do mundo inteiro
                        <br/>
                        Não tem ninguem melhor que ele.
                    </p>

                    <footer>
                        <p>
                            Preço/hora
                            <strong>R$ 20,00</strong>
                        </p>
                        <button type="button">
                            <img src={whatsappIcon} alt="Whatsapp"/>
                            Entrar em Contato.
                        </button>
                    </footer>
                </article>
            </main>
        </div>
    )
}

export default TeacherList;