import Image from "../Props/Image"
import Titulo from "../Props/Titulo"
import Paragrafo from '../Props/Paragrafo';
import './card.css'

function Cards() {


    return (
      <>
      <div className="card">

        <div className="cont">
          <Titulo Titulo="UX-UI"/>
          <Image  Image="https://c.tenor.com/9YWXr3LsNLwAAAAd/boc%C3%A3o-gato.gif"/>
          <Paragrafo Paragrafo="Design de interface de utilizador ou engenharia de interface de utilizador é o desenvolvimento de computadores, aplicações,  máquinas, dispositivos de comunicação móveis, softwares e sítios web com o foco na experiência do utilizadores e interação" />
        </div>

        <div className="cont">
          <Titulo Titulo="GIT"/>
          <Image  Image="https://cref1.org.br/wp-content/uploads/2022/02/02-melhor-gif-da-semana-um-gato-muito-seduzente.gif"/>
          <Paragrafo Paragrafo="É um sistema de controle de versões distribuído, usado principalmente no desenvolvimento de software, mas pode ser usado para registrar o histórico de edições de qualquer tipo de arquivo." /> 
        </div>

      </div>

      <div className="card">

        <div className="cont">
          <Titulo Titulo="HTML" />
          <Image Image="https://mega.ibxk.com.br/2013/8/materias/2678613322091333.gif?ims=610x" />
          <Paragrafo Paragrafo="HTML é uma linguagem de marcação utilizada na construção de páginas na Web. Documentos HTML podem ser interpretados por navegadores. A tecnologia é fruto da junção entre os padrões HyTime e SGML. HyTime é um padrão para a representação estruturada de hipermídia e conteúdo baseado em tempo" />
        </div>

        <div className="cont-2">
          <Titulo Titulo="CSS" />
          <Image Image="https://i.pinimg.com/originals/fa/b0/90/fab0904c068659f771bc5e752ca0a7c7.gif" />
          <Paragrafo Paragrafo="Cascading Style Sheets é um mecanismo para adicionar estilo a um documento web. O código CSS pode ser aplicado diretamente nas tags ou ficar contido dentro das tags <style>. Também é possível, em vez de colocar a formatação dentro do documento, criar um link para um arquivo CSS que contém os estilos." />
        </div>

      </div>

      <div className="card">
        
        <div className="cont">
          <Titulo Titulo="JavaScript" />
          <Image Image="http://www.d2mcomunicacao.com.br/wp-content/uploads/2018/10/produzir-conteudo.gif" />
          <Paragrafo Paragrafo="JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web." />
        </div>

        <div className="cont-2">
          <Titulo Titulo="REACT" />
          <Image Image="https://i.gifer.com/QOeB.gif" />
          <Paragrafo Paragrafo="O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web. É mantido pelo Facebook, Instagram, outras empresas e uma comunidade de desenvolvedores individuais. É utilizado nos sites da Netflix, Imgur, Feedly, Airbnb, SeatGeek, HelloSign, Walmart e outros." />
        </div>

      </div>

    
 
  
      </>
   
    )
  }
  
  export default Cards