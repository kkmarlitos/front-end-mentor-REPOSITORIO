const submit = document.getElementById('enviar_mensagem')
      const section_comentario = document.getElementById('embrulho_section')
      let mensagem = document.getElementById('mensage')
      

      const criando_comentarios = {
          
          like: Array.from(document.getElementsByClassName('like')),
          dislike: Array.from(document.getElementsByClassName('dislike')),
          numbers_like: Array.from(document.getElementsByClassName('numbers_like')),


          responder: Array.from(document.getElementsByClassName('responder')),
          respondendo_div: Array.from(document.getElementsByClassName('todas_respostas')),

          contador_responder: null,
        
          primeiros_numeros_like: [12, 5, 4, 2],

          mensagem_deletar: document.getElementById('mensagem_deletar'),
          confirmar_delete: document.getElementById('confirmar_delete'),
          cancelar_delete: document.getElementById('cancelar_delete'),

          likes: function(){
             for(let c = 0; c < this.primeiros_numeros_like.length; c++){ //add os numeros no documento (que ja existem)
               this.numbers_like[c].innerHTML = this.primeiros_numeros_like[c]
             }
             for(let c = 0; c < this.like.length; c++){
              let contador_like = 0
              this.like[c].addEventListener('click', function(){
                if (contador_like < 1){
                contador_like ++
                criando_comentarios.numbers_like[c].innerHTML ++}
              })
              this.dislike[c].addEventListener('click', function(){
                if (contador_like === 1){
                  contador_like --
                  criando_comentarios.numbers_like[c].innerHTML --
                }
              })
             } 
          },
          deletar_coment: function(){
            const minha_resposta = document.getElementsByClassName('resposta')[1]
            const deletar_botao = document.getElementsByClassName('delete')[0]
            const confirmar_delete = document.getElementById('confirmar_delete')
            const cancelar_delete = document.getElementById('cancelar_delete')            

            deletar_botao.addEventListener('click', ()=>{
              criando_comentarios.mensagem_deletar.style.display = 'block'
              confirmar_delete.addEventListener('click', function(){
                minha_resposta.style.display = 'none'
                criando_comentarios.mensagem_deletar.style.display = 'none'
              })
              cancelar_delete.addEventListener('click', () =>{
                criando_comentarios.mensagem_deletar.style.display = 'none'
              })
            })
          },
          editar_coment:function(){
            const editar = document.getElementsByClassName('edit')[0]
            const minha_resposta = document.getElementsByClassName('minha_resposta')[0]
            const coment_editado = null
            let contador_editar = 1
            let editando = document.createElement('input')
              editando.setAttribute('type', 'text')
              editando.classList.add('editando_input')

            editar.addEventListener('click', () =>{
              contador_editar ++
              if(contador_editar % 2 === 0){
              editando.value = minha_resposta.textContent
              minha_resposta.parentNode.replaceChild(editando, minha_resposta)
              editar.textContent = 'Update'
              }
              else{
                editar.innerHTML = `
                <img src="images/icon-edit.svg" alt="edit">
                Edit
                `
                minha_resposta.textContent = editando.value
                editando.parentNode.replaceChild(minha_resposta, editando)
              }


            })
            
          },

          criar_div_comentario: function(){
            const div_comentario = document.createElement('div')
          div_comentario.classList.add('comentario')
          div_comentario.innerHTML = `<div class="header_coment">
                  <img src="images/avatars/image-juliusomo.webp" alt="avatar">
                  <a href="#" class="you_name">juliusomo</a>
                  <span class="you">You</span>
                  <span>2 days ago</span>
                </div>
                <div class="main_coment">
                  <p>${mensagem.value}</p>
                </div>
                <div class="like_css">   
                  <div class="likes">
                    <div class="like">+</div>
                    <p class="numbers_like"> 0 </p>
                    <div class="dislike">-</div>
                  </div>
                </div>
                  <div class="delete_edit_css">
                    <div class="delete_edit">
                      <span class="delete">
                      <img src="images/icon-delete.svg" alt="delete">
                      Delete
                      </span>
                      <span class="edit">
                      <img src="images/icon-edit.svg" alt="edit">
                      Edit
                      </span>
                    </div>
                  </div>
                    `
                    section_comentario.appendChild(div_comentario)

                    //likes e dislikes
                    let like_dinamico = Array.from(div_comentario.getElementsByClassName('like'))
                    let dislike_dinamico = Array.from(div_comentario.getElementsByClassName('dislike'))
                    let numbers_like_dinamico = Array.from(div_comentario.getElementsByClassName('numbers_like'))

                    for(let c = 0; c < like_dinamico.length; c++){
                      let contador_like = 0
                      like_dinamico[c].addEventListener('click', function(){
                        if (contador_like === 0){
                          contador_like ++
                          numbers_like_dinamico[c].innerHTML ++
                        }
                      dislike_dinamico[c].addEventListener('click', function(){
                        if (contador_like === 1){
                          contador_like --
                          numbers_like_dinamico[c].innerHTML --
                        }})
                      })
                      mensagem.value = ''
                    }

                  //deletar coments
                  const embrulho_section = document.getElementById('embrulho_section')
                  const botao_deletar_dinamico = div_comentario.getElementsByClassName('delete')
                  for(let c = 0; c < botao_deletar_dinamico.length; c ++){
                    botao_deletar_dinamico[c].addEventListener('click', function(){
                      criando_comentarios.mensagem_deletar.style.display = 'block'
                      embrulho_section.style.filter = 'blur(0.5px)';
                      criando_comentarios.confirmar_delete.addEventListener('click', () =>{
                        criando_comentarios.mensagem_deletar.style.display = 'none'
                        div_comentario.style.display = 'none'
                        embrulho_section.style.filter = 'none'
                      })
                      criando_comentarios.cancelar_delete.addEventListener('click', ()=>{
                        criando_comentarios.mensagem_deletar.style.display = 'none'
                        embrulho_section.style.filter = 'none'
                      })
                    })
                  }

                //Editando coments
                const botao_editar_dinamico = div_comentario.getElementsByClassName('edit')
                const ser_editado = div_comentario.querySelector('.main_coment p')
                const editando = document.createElement('input')
                  editando.setAttribute('type', 'text')
                let contador_editar = 1


                for(let c = 0; c < botao_editar_dinamico.length; c ++){
                  botao_editar_dinamico[c].addEventListener('click', function(){
                    contador_editar ++
                    if(contador_editar % 2 === 0){
                      botao_editar_dinamico[c].textContent = 'Update'
                     editando.value = ser_editado.textContent
                     ser_editado.parentNode.replaceChild(editando, ser_editado)
                  }else{
                    botao_editar_dinamico[c].innerHTML = ` <img src="images/icon-edit.svg" alt="edit"> Edit`
                    ser_editado.textContent = editando.value
                    editando.parentNode.replaceChild(ser_editado, editando)
                  }
                  })
                } 

        },
          clicou_responder: function(){
          for (let c = 0; c < criando_comentarios.responder.length; c ++){
            this.responder[c].addEventListener('click', function(){
              criando_comentarios.contador_responder = c
              if (criando_comentarios.contador_responder === 0){
                mensagem.value = '@amyrobson '
              } else if (criando_comentarios.contador_responder === 1){
                mensagem.value = '@maxblagun '
              }else if (criando_comentarios.contador_responder === 2){
                mensagem.value = '@ramsesmiron '
              }
              mensagem.focus()
            })
          }
        },

          criar_div_resposta: function(){
                  
              const div_resposta = document.createElement('div') 
              div_resposta.classList.add('resposta')

                div_resposta.innerHTML = ` <div class="header_coment">
                    <img src="images/avatars/image-juliusomo.webp" alt="avatar">
                    <a href="#" class="you_name">juliusomo</a>
                    <span class="you">You</span>
                    <span>2 days ago</span>
                  </div>
                  <div class="main_coment">
                    <p>${mensagem.value}</p>
                  </div>
                  <div class="like_css"> 
                    <div class="likes">
                        <div class="like">+</div>
                        <p class="numbers_like">0</p>
                        <div class="dislike">-</div>
                      </div>
                  </div>
                  <div class="delete_edit_css">
                    <div class="delete_edit">
                        <span class="delete">
                        <img src="images/icon-delete.svg" alt="delete">
                        Delete
                        </span>
                        <span class="edit">
                        <img src="images/icon-edit.svg" alt="edit">Edit
                        </span>
                    </div>
                  </div>
                  `              
                  
                criando_comentarios.respondendo_div[this.contador_responder].appendChild(div_resposta)

                //likes e dislikes
                let like_dinamico = Array.from(div_resposta.getElementsByClassName('like'))
                let dislike_dinamico = Array.from(div_resposta.getElementsByClassName('dislike'))
                let numbers_like_dinamico = Array.from(div_resposta.getElementsByClassName('numbers_like'))

                for(let c = 0; c < like_dinamico.length; c++){
                      let contador_like = 0
                      like_dinamico[c].addEventListener('click', function(){
                        if (contador_like === 0){
                          contador_like ++
                          numbers_like_dinamico[c].innerHTML ++
                        }
                      dislike_dinamico[c].addEventListener('click', function(){
                        if (contador_like === 1){
                          contador_like --
                          numbers_like_dinamico[c].innerHTML --
                        }})
                      })   
                      mensagem.value = ''
            }

            //deletar coments
            const embrulho_section = document.getElementById('embrulho_section')
            const botao_deletar_dinamico = div_resposta.getElementsByClassName('delete')
            for(let c = 0; c < botao_deletar_dinamico.length; c ++){
              botao_deletar_dinamico[c].addEventListener('click', () =>{
                embrulho_section.style.filter = 'blur(0.5px)';
                criando_comentarios.mensagem_deletar.style.display = 'block'
                criando_comentarios.confirmar_delete.addEventListener('click', ()=>{
                  criando_comentarios.mensagem_deletar.style.display = 'none'
                  div_resposta.style.display = 'none'
                  embrulho_section.style.filter = 'none';
                })
                criando_comentarios.cancelar_delete.addEventListener('click', ()=>{
                  criando_comentarios.mensagem_deletar.style.display = 'none'
                  embrulho_section.style.filter = 'none';
                })
              })
            }
            //Editar coments
            const botao_editar_dinamico = div_resposta.getElementsByClassName('edit')
            const ser_editado = div_resposta.querySelector('.main_coment p')
            const editando = document.createElement('input')
             editando.setAttribute('type', 'text')
            contador_editar = 1
            for(let c = 0; c < botao_editar_dinamico.length; c++){
              botao_editar_dinamico[c].addEventListener('click', () =>{
                contador_editar = contador_editar + 1
                if (contador_editar % 2 === 0){
                  botao_editar_dinamico[c].textContent = 'Update'
                  editando.value = ser_editado.textContent
                  ser_editado.parentNode.replaceChild(editando, ser_editado)
                }
                else{
                  botao_editar_dinamico[c].innerHTML = ` <img src="images/icon-edit.svg" alt="edit"> Edit` 
                  ser_editado.textContent = editando.value
                  editando.parentNode.replaceChild(ser_editado, editando)
                }
              })
            }
            

          },

      }


      criando_comentarios.likes()
      criando_comentarios.clicou_responder()
      criando_comentarios.deletar_coment()
      criando_comentarios.editar_coment()
      

      function submetendo(){
        if(mensagem.value.startsWith('@amyrobson') || mensagem.value.startsWith('@maxblagun') || mensagem.value.startsWith('@ramsesmiron')){
          criando_comentarios.criar_div_resposta()
        }else{criando_comentarios.criar_div_comentario()}
      }