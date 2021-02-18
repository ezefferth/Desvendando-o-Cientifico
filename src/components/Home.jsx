import React from 'react'
import { Container, Nav, Row, Col } from 'react-bootstrap';
import CardColumns from 'react-bootstrap/CardColumns'
import Navbar from 'react-bootstrap/Navbar'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Card from 'react-bootstrap/Card'
import './Home.css'
//https://www.digitalocean.com/community/tutorials/how-to-implement-smooth-scrolling-in-react-pt

import dezpassos from '../images/dezpassos.jpg'
import jhe from '../images/jhe.jpeg'
import zef from '../images/zef.jpeg'

function Home() {

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
                        </Col>
                        <Col>
                            <iframe width="560" height="315" className='Video1-OQIC'
                                src="https://www.youtube.com/embed/psgAt5wdgxY" frameborder="0"
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

                        </Col>
                        <Col>
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
                    <CardColumns className-='Card '>
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

                    </CardColumns>
                </Container>
                <br />
                <br />
                <br />
                <br />
                <br />
            </div>
        </body>


    )
}

export default Home;