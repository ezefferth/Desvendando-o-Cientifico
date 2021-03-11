import React, { useState } from 'react'
import { Container, Nav, Row, Col, Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal'
import CardColumns from 'react-bootstrap/CardColumns'
import Navbar from 'react-bootstrap/Navbar'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Card from 'react-bootstrap/Card'
import { FiInstagram } from "react-icons/fi";
import { AiOutlineMail, AiFillGithub } from "react-icons/ai";

import './Home.css'
//https://www.digitalocean.com/community/tutorials/how-to-implement-smooth-scrolling-in-react-pt

import dezpassos from '../images/dezpassos.jpg'
import jhe from '../images/jhe.jpeg'
import zef from '../images/zef.jpeg'
import entretextos from '../images/entretextos.jpg'
import entretextos2 from '../images/entretextos2.jpg'
import meninalivros from '../images/meninalivros.jpg'


function Home() {

    const [showJ, setShowJ] = useState(false);
    const handleCloseJ = () => setShowJ(false);
    const handleShowJ = () => setShowJ(true);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const menuItens = document.querySelectorAll('.Nav a[href^="#"')

    menuItens.forEach(item => {
        item.addEventListener('click', scrollToRef)
    })
    function scrollToRef(e) {
        e.preventDefault();
        const element = e.target;
        const id = element.getAttribute('href')
        const to = document.querySelector(id).offsetTop;
        window.scroll({
            top: to - 80,
            behavior: "smooth"
        })
    }
    return (
        <body>
            <Navbar expand='lg' className='Nav' fixed='top' bg='dark' variant='dark'>
                <Navbar.Brand eventKey={0} href="#home">DESVENDANDO O CIENTÍFICO</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className='responsive-navbar-nav'>
                    <Nav className="mr-auto" color='white'>
                        <Nav.Link eventKey={1} href="#IC">O que é IC</Nav.Link>
                        <Nav.Link eventKey={2} href="#PQIC">Por que IC</Nav.Link>
                        <Nav.Link eventKey={3} href="#DPIC">Dez passos para IC</Nav.Link>
                        <Nav.Link eventKey={4} href="#QS">Quem Somos</Nav.Link>
                        <Nav.Link eventKey={5} href="#LIVROS">Livros</Nav.Link>
                        <Nav.Link eventKey={6} href="#HELP">Ajude-nos a melhorar</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            {
                //sobre oque é ic <img className='img-artemaior' src={artemaior} />
            }

            <Jumbotron className='Jumbotron' id='home'>
                <div className='Jumbotron-img'>

                </div>

            </Jumbotron>
            <div >
                <Modal show={showJ} onHide={handleCloseJ}>
                    <Modal.Header closeButton>
                        <Modal.Title>Email</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>jhemillyfernandes1@gmail.com</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseJ}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Email</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>ezefferth96@gmail.com</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                    </Button>
                    </Modal.Footer>
                </Modal>
                <Container id='IC' className='IC'>
                    <br />
                    <Row>
                        <Col>
                            <h1>O QUE É INICIAÇÃO CIENTÍFICA?</h1>
                            <br />
                            <p className='Text'>
                                Dentro das universidades, existem departamentos que permitem a
                                inscrição de projetos em programas de Iniciação Científica, que podem ser
                                acompanhados de auxílios financeiros, sejam da própria universidade, do
                                CNPq (Conselho Nacional de Desenvolvimento Científico e Tecnológico), de
                                outras instituições ou fundações.
                        </p>
                            <p className='Text'>
                                O sistema de bolsa foi estruturado por meio CNPq, que criou e
                                desenvolveu o PIBIC (Programa Institucional de Bolsas de Iniciação Científica).
                        </p>

                            <p className='Text'>
                                Além disso, a concessão de bolsas por meio do CNPq depende da
                                disponibilidade orçamentária e financeira do Programa Institucional de Bolsas
                                de Iniciação Científica que providencia anualmente os editais nos primeiros
                                trimestres. O processo de seleção de bolsistas se encerra no mês de julho para
                                que as bolsas sejam ativas já em agosto.
                        </p>
                            <img src={entretextos} className='Img-Entretextos' />
                        </Col>
                        <Col>
                            <iframe width="540" height="310" src="https://www.youtube.com/embed/FYMrsimeYjY" frameborder="0" className="Video1-OQIC"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen>

                            </iframe>
                            <p className='Text-abaixo-video1 Text'>
                                Para concorrer ao programa de Bolsas de Iniciação Científica, basta ser
                                aluno regularmente matriculado em qualquer curso de graduação de Instituição
                                de ensino superior privada ou pública, reconhecida pelo MEC (Ministério da
                                Educação), e ter um orientador com vínculo comprovado com a Fiocruz em
                                regime de tempo integral (40 horas).
                        </p>
                            <p className='Text'>
                                É preciso preencher vários requisitos. Aqui
                                você encontra mais informações:
                            <a
                                    href='https://www.gov.br/pt-br/servicos/candidatar-se-a-bolsa-de-iniciacao-cientifica-em-pesquisa-pibic'
                                    target='_blank'
                                > Acesso para mais informações</a>
                            . Aconselho, também, você
                            procurar o núcleo de Pesquisa de sua universidade para obter informações.
                            Além disso, ler os editais em vigência ou os que já passaram é ótimo para se
                            ter mais conhecimento de como usualmente ocorre a inscrição de projetos em
                            sua universidade.
                        </p>
                            <p className='Text'>
                                Existem universidades que desenvolvem o PVIC (Programa Voluntário
                                de Iniciação Científica), caso o aluno não consiga preencher os requisitos do
                                PIBIC, mas que ainda deseja realizar o projeto de Iniciação Científica sem
                                contemplação de bolsas.
                        </p>
                            <p className='Text'>
                                E uma dica, durante todo esse tempo de interesse sobre Iniciação
                                Científica, já procure realizar, ou se já tiver, atualizar o seu Currículo Lattes,
                                pois, ele é de fundamental importância para os programas e projetos de
                                Iniciação Cientifica.
                        </p>
                        </Col>
                    </Row>


                </Container>
                <Container id='PQIC' className='PQIC' fluid='md'>
                    <br /><br />
                    <Row>
                        <Col>

                            <h1>POR QUE FAZER INICIAÇÃO CIENTÍFICA?</h1>
                            <br />
                            <p className='Text'>
                                A Iniciação Científica é uma experiência, que só pode ser mais bem
                                descrita quando nós mesmos fazemos, pois, embora seja no geral uma
                                experiência que aumenta os nossos horizontes, as individualidades que cada
                                um vivenciará são muito valiosas e peculiares. Mas para conceitualizar, poderia
                                dizer que a Iniciação Científica é uma porta para o campo de pesquisa
                                acadêmica.
                        </p>
                            <p className='Text'>
                                Além de fazer contatos com pessoas de diversas áreas e,
                                especialmente, de assuntos de sua pesquisa, os projetos te permitem
                                aprofundar no conhecimento, te desafiam em diversas situações e fazem de
                                sua vida acadêmica e pessoal mais rica em experiências e habilidades.
                        </p>
                            <iframe width="540" height="315" src="https://www.youtube.com/embed/3HE8Rvof9_Y"
                                className='Video-PQIC'
                                frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen>

                            </iframe>
                        </Col>
                        <Col>

                            <img src={entretextos2} className='Img-Entretexto2' />
                            <p className='Text Text-PQFIC'>
                                Não poderia deixar de citar que as pesquisas auxiliam em muito no
                                desenvolvimento do país e de todo o mundo. Sem elas, nenhuma tecnologia ou
                                descoberta poderia acontecer. Os projetos de Iniciação Científica fazem parte
                                desse mundo de pesquisa, e ao fazê-lo você participa ativamente em
                                mudanças e melhorias em diversas áreas, como tecnologias, saúde,
                                educação...
                        </p>
                            <p className='Text'>
                                E o mais legal, o mundo da pesquisa é muito amplo. Poderia dizer que
                                para criar um projeto, o céu é o limite. Você tem uma gama de assuntos que
                                podem e precisam ser estudados. Pense em um assunto que te interessa, você
                                gosta ou que acha muito interessante. E por aí, você consegue pensar mais
                                detalhadamente no projeto. E seja feliz nesse mundo, que como eu disse, só
                                experimentando para conseguir melhor entendê-lo.
                        </p>

                        </Col>
                    </Row>



                </Container>
                {
                    //Dez passos para ic
                }
                <Container id='DPIC' className='DPIC'>
                    <br />
                    <br />
                    <br />
                    <br />
                    <div className='Img'>
                        <img src={dezpassos} className='Img-dezpassos' />
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                </Container>
                {
                    //INICIO DE QUEM SOMOS
                }
                <Container id='QS' className='QS'>
                    <CardColumns className-='Card ' as='QS'>
                        {
                            //CARD JHEMILLY
                        }
                        <Card className='Card-und' bg='dark'>
                            <Card.Body>
                                <Card.Img variant="top" src={jhe} />
                                <Card.Title className='Card-text-title'>
                                    Jhemilly S. A. Fernandes
                            </Card.Title>
                                <Card.Text className='Card-text'>
                                    Fundadora do Projeto Desvendando o Científico e estudante de Medicina da UniCesumar.
                                    Pesquisadora e Bolsista CNPq/PIBIC Unicesumar. Apaixonada por viagens e aventuras.
                                    Amante de séries e leituras nas horas vagas.
                        </Card.Text>
                            </Card.Body>
                        </Card>
                        {
                            //CARD EZEFFERTH
                        }
                        <Card className='Card-und' bg='dark' >
                            <Card.Body>
                                <Card.Img variant="top" src={zef} />
                                <Card.Title className='Card-text-title'>
                                    Ezéfferth C. A Fernandes
                                </Card.Title>
                                <Card.Text className='Card-text'>
                                    Cofundador do Projeto
                                    Desvendando o Científico e desenvolvedor do site do Projeto Desvendando o
                                    Científico. Estudante de Engenharia da Computação pela Universidade Federal de Mato Grosso,
                                    desenvolvedor Web e Mobile nas horas vagas, esposo e pai da Isabella!
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className='Card-und' bg='dark' >
                            <Card.Body>
                                <iframe width="400" height="300" src="https://www.youtube.com/embed/h63ONVaxxkA"
                                    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen>

                                </iframe>
                                <Card.Title className='Card-text-title'>Redes Sociais</Card.Title>
                                <Card.Text className='Card-text'>
                                    @jhemillyfernandes <a href="https://www.instagram.com/jhemillyfernandes" className="Links"
                                        target='_blank'><FiInstagram size={20} type="button" className="Icon" />
                                    </a><AiOutlineMail size={23} className="Icon" type="button" onClick={handleShowJ} />

                                </Card.Text>
                                <Card.Text className='Card-text1'>
                                    @ezefferth <a href="https://www.instagram.com/ezefferth" className="Links"
                                        target='_blank'><FiInstagram size={20} type="button" className="Icon" />
                                    </a> <AiOutlineMail size={23} className="Icon" type="button" onClick={handleShow} />
                                    <a href="https://github.com/ezefferth" className="Links"
                                        target='_blank'><AiFillGithub className="Icon" size={20} type="button" /></a>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </CardColumns>
                </Container>
                <br />
                <br />
                <br />
                <br />
                <br />
                <Container id='LIVROS'>
                    <Row>
                        <Col>
                            <h1>Vamos começar o projeto?</h1>
                            <br />
                            <p className='Text'>
                                Para iniciar o projeto, muitas vezes você se sente meio perdido, não
                                sabe nem como delimitar um tema, como construir um problema ou hipóteses,
                                o livro de Antonio Carlos Gil - Como Elaborar Projetos de Pesquisa, te ajuda
                                em muito nessa etapa inicial. Alias, o livro é super completo sobre
                                metodologias, para quem tiver mais interesse.
                                Não poderia faltar nessa etapa inicial o livro de Lakatos e Marconi -
                                Fundamentos de Metodologia Científica. Esse livro é um dos mais completos,
                                eu diria, contempla desde metodologias a todo o processo da pesquisa. Ele vai
                                ser seu guia para todo o seu projeto, sempre deixe ele perto de você.
                            </p>
                            <p className='Text'>
                                Não poderia faltar nessa etapa inicial o livro de Lakatos e Marconi -
                                Fundamentos de Metodologia Científica. Esse livro é um dos mais completos,
                                eu diria, contempla desde metodologias a todo o processo da pesquisa. Ele vai
                                ser seu guia para todo o seu projeto, sempre deixe ele perto de você.
                            </p>
                            <img src={meninalivros} className='Img-Menina' />
                            <iframe width="540" height="310" src="https://www.youtube.com/embed/j_QL9jFtlgA" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen>

                            </iframe>
                            <br />
                        </Col>
                        <Col>
                            <h1>Como começar a escrever?</h1>
                            <br />
                            <p className='Text'>
                                O livro de Antônio Joaquim Severino – Metodologia do Trabalho
                                Científico, especificamente no capítulo IV, ensina o processo de levantamentos
                                de dados e documentos, a construção do parágrafo e aspectos técnicos do
                                texto, ou seja, tudo que você vai precisar no desenrolar do seu projeto. O livro
                                conta ainda com um capítulo sobre modalidades de trabalhos científicos, como
                                o TCC, para quem tem curiosidade ou precisa saber mais sobre esse tipo de
                                trabalho.
                            </p>
                            <p className='Text'>
                                Além do mais, o livro de Elisabete Matallo Marchesini de Pádua –
                                Metodologia de Pesquisa é outro livro ótimo e descreve o processo de
                                pesquisa em apenas 4 etapas, ensinando como planejar a pesquisa, coletar
                                dados, analisar dados e elaborar a escrita.
                            </p>
                            <p className='Text'>
                                O livro de Marília Freitas de Campos Tozoni – Metodologia de Pesquisa
                                é uma boa opção também para compreender mais sobre técnicas e temas de
                                pesquisa. Seu penúltimo capítulo traz diversas informações sobre cuidados que
                                o pesquisador iniciante deve tomar. Também, seu último capítulo aborda sobre
                                pesquisa com temas sobre educação, para quem for da área ou tiver interesse
                                de pesquisar.
                            </p>
                            <p className='Text'>
                                Novamente, o livro de Lakatos e Marconi - Fundamentos de Metodologia
                                Científica irá te auxiliar para o projeto e o relatório de pesquisa,

                                especificamente no capítulo 10. Esse grande livro irá te orientar desde a
                                introdução à conclusão de seu projeto.
                            </p>
                            <p className='Text'>
                                Depois desses livros que vão te nortear, vamos começar um projeto?
                                Lembre-se que com determinação, foco, e persistência, podemos conseguir
                                muito mais do que imaginamos.
                            </p>
                            <br />
                            <br />
                            <h1>E a ABNT? O que fazer agora?</h1>
                            <br />
                            <p className='Text'>
                                Calma! Primeira coisa: para um envio de projeto para o programa de
                                Iniciação Científica ou de TCC, é preciso analisar se a sua universidade tem
                                modelo próprio ou orientações específicas.
                            </p>
                            <p className='Text'>
                                Mas mesmo com modelos ou orientações, algumas normas da ABNT
                                (Associação Brasileira de Normas Técnicas) são solicitadas, como é o exemplo
                                das referências. O mais interessante é que com a prática você acaba
                                aprendendo de vez as normas.
                            </p>
                            <p className='Text'>
                                Não precisa ter medo da ABNT. As normas parecem difíceis, mas com o
                                tempo você consegue pegar o jeito. Além disso, a ABNT existe para te ajudar.
                                Por conta dela é possível formalizar as normas técnicas de apresentações e
                                formatações de trabalhos científicos.
                            </p>
                            <p className='Text'>
                                Mas, muito cuidado com os livros, geralmente podem estar com normas
                                desatualizadas. A ABNT constantemente modifica suas normas, fica sempre
                                atento durante o ano. Fica de olho no site <a
                                    href='http://www.abnt.org.br/'
                                    target='_blank'
                                > http://www.abnt.org.br/</a>, lá você
                                consegue estar mais atento as mudanças das normas ABNT.
                            </p>
                            <p className='Text'>
                                Além do mais, existem algumas faculdades públicas e privadas que
                                publicam manuais que auxiliam na elaboração dos trabalhos acadêmicos
                                baseados na ABNT. É só dar uma pesquisada e uma olhada. Podem te ajudar
                                bastante.
                            </p>
                            <br />
                        </Col>

                    </Row>
                </Container>
                <br />
                <br />
                <br />
                <br />
                <br />
                <Container id='HELP'>
                    <h1>Ajude-nos a melhorar</h1>
                    <h5>
                        <br />

                    Ajude o nosso projeto respondendo esse breve questionário: acesse <a href='https://forms.gle/cGqeu25YzzM6LT3m8' className='form'
                            target='_blank'
                        >aqui</a>
                    </h5>
                </Container>
                <br />
                <br />
                <br />
                <br />
                <footer class="footer">
                    <div class="container-fluid">
                        <span class="text-muted">Developed by @ezefferth  in React&#169; {new Date().getFullYear()}</span>
                    </div>
                </footer>
            </div>
        </body>


    )
}

export default Home;