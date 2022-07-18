

function Sidebar(){
    function Sugestao(props){
        console.log(props);
        return(
            <div class="sugestao">
            <div class="usuario">
            <img src={props.img} />
            <div class="texto">
                <div class="nome">{props.nome}</div>
                <div class="razao">{props.razao}</div>
            </div>
            </div>
    
            <div class="seguir">Seguir</div>
        </div>
        )
    }
    function Usuario(props){
        return(
            <div class="usuario">
                <img src="/img/catanacomics.svg" alt = '' />
                <div class="texto">
                    <strong>catanacomics</strong>
                    Catana
                </div>
            </div>
        )
    }

    const objSugestao = [
        {foto:"/img/bad.vibes.memes.svg",nome:"bad.vibes.memes",razao:"Segue você"},
        {foto:"/img/chibirdart.svg",nome:"chibirdart",razao:"Segue você"},
        {foto:"/img/razoesparaacreditar.svg",nome:"razoesparaacreditar",razao:"Novo no Instagram"},
        {foto:"/img/adorable_animals.svg",nome:"adorable_animals",razao:"Segue você"},
        {foto:"/img/smallcutecats.svg",nome:"smallcutecats",razao:"Segue você"},
    ]

    return(
        <div class="sidebar">
            <Usuario img = "/img/catanacomics.svg" nome = "catanacomics" texto="Catana"/>
            <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>

            {objSugestao.map(sugestao =><Sugestao img= {sugestao.foto} nome = {sugestao.nome} razao = {sugestao.razao}/>)}
        
            </div>

            <div class="links">
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>

            <div class="copyright">
            © 2021 INSTAGRAM DO FACEBOOK
            </div>
      </div>

    )
}
export default Sidebar;