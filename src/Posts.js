import React from 'react';

function Posts(){
    const classPost = 'post';
	const [valor, setValor] = React.useState('post'); 

    function vermelinha () {
        if(valor==='post curtido'){
            setValor('post')
        }else{
         setValor('post curtido')
        }
        return valor;
    }


    function Post(props){
        return(
            <div class={valor} onClick={() => vermelinha()}>
                        <div class="topo">
                        <div class="usuario">
                            <img src={props.usuarioImg} />
                            {props.usuario}
                        </div>
                        <div class="acoes">
                            <ion-icon name="ellipsis-horizontal"></ion-icon>
                        </div>
                        </div>
    
                        <div class="conteudo">
                        <img src={props.postImg} />
                        </div>
    
                        <div class="fundo">
                        <div class="acoes">
                            <div>
                            <ion-icon name="heart"></ion-icon>
                            <ion-icon name="chatbubble-outline"></ion-icon>
                            <ion-icon name="paper-plane-outline"></ion-icon>
                            </div>
                            <div>
                            <ion-icon name="bookmark-outline"></ion-icon>
                            </div>
                        </div>
    
                        <div class="curtidas">
                            <img src={props.curtidaImg} />
                            <div class="texto">
                            {props.texto}
                            </div>
                        </div>
                        </div>
                    </div>
        )
    }

    const objPost = [
        {usuarioImg:"/img/meowed.svg",usuario:"meowed",postImg:"/img/gato-telefone.svg",curtidaImg:"/img/respondeai.svg",texto:'Curtido por <strong>respondeai</strong> e <strong>outras 101.523 pessoas</strong>'},
        {usuarioImg:"/img/barked.svg",usuario:"barked",postImg:"/img/dog.svg",curtidaImg:"/img/adorable_animals.svg",texto:'Curtido por <strong>adorable_animals</strong> e <strong>outras 99.159 pessoas</strong>'}
    ]

    return(

        <div class="posts">
            {objPost.map(post =>(<Post usuarioImg= {post.usuarioImg} usuario= {post.usuario} postImg={post.postImg} curtidaImg= {post.curtidaImg} texto={post.texto} />))}
        </div>
    )
}
export default Posts;