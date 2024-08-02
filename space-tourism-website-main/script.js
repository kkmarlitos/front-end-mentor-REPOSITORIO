import {menu} from './menu.js'
import { transform_balls } from './functions.js'

menu.menu_functions()

const dinamic_main = {
    //DOM
    main_dom: document.getElementsByTagName('main')[0],
    home: document.getElementById('home'),
    destination: document.getElementById('embrulho_destinos'),
    crew: document.getElementById('embrulho_crew'),
    technology: document.getElementById('embrulho_technology'),

    //dinamic
    modific_main: function(){
        fetch("starter-code/data.json").then(function(response){
            response.json().then(function(dados){
                let main_now = dinamic_main.home

                //home
                menu.p_home.addEventListener('click', function(){

                    menu.close.style.display = 'none'
                    menu.nav_header.style.transform = 'translateX(100vw)'
                    menu.open.style.display = 'block'

                    main_now.style.display = 'none'
                    main_now = dinamic_main.home
                    main_now.style.display = 'block'
                })

                //destination
                menu.p_destination.addEventListener('click', function(){

                    menu.close.style.display = 'none'
                    menu.nav_header.style.transform = 'translateX(100vw)'
                    menu.open.style.display = 'block'

                    main_now.style.display = 'none'
                    main_now = dinamic_main.destination
                    main_now.style.display = 'block'
                    const planets = document.getElementsByClassName('planets')
                    for(let c = 0; c < planets.length; c++){
                        planets[c].addEventListener('click', () =>{
                            const name_planet = document.getElementsByTagName('h4')[0]
                            const img_planet = document.getElementById('planeta_img')
                            const description_planet = document.getElementById('description_planet')
                            const distance_planet = document.getElementById('distancia')
                            const travel_planet = document.getElementById('tempo_estimado')

                            name_planet.textContent = dados.destinations[c].name
                            img_planet.src = dados.destinations[c].images.webp
                            description_planet.textContent = dados.destinations[c].description
                            distance_planet.textContent = dados.destinations[c].distance
                            travel_planet.textContent = dados.destinations[c].travel
                        })
                    }
                })

                //crew
                menu.p_crew.addEventListener('click', function(){

                    if(main_now != dinamic_main.crew){
                        menu.close.style.display = 'none'
                        menu.nav_header.style.transform = 'translateX(100vw)'
                        menu.open.style.display = 'block'

                        main_now.style.display = 'none'
                        main_now = dinamic_main.crew
                        main_now.style.display = 'block'
                        const img_crew = document.querySelector('#img_crew')
                        const bio_crew = document.getElementById('crew_bio')
                        const crew_role = document.getElementById('funcao_crew')
                        const name_crew = document.getElementById('nome_crew')
                        

                        const selections = document.getElementsByClassName('bolinha')
                        let counter = 0
                        for(let c = 0; c < selections.length; c++){
                            selections[c].addEventListener('click', () =>{    
                                //alterando conteudo
                                img_crew.src = dados.crew[c].images.webp
                                //concertando tamanho
                                if(c == 0 || c == 1){
                                    img_crew.style.width = '25vw'
                                }else{
                                    img_crew.style.width = '30vw'
                                }
                                bio_crew.textContent = dados.crew[c].bio
                                crew_role.textContent = dados.crew[c].role
                                name_crew.textContent = dados.crew[c].name

                                counter = c

                                transform_balls(selections, c)
                            })
                        }
                        
                        const interval = setInterval(() =>{
                            if(main_now != dinamic_main.crew){
                                clearInterval(interval)
                                console.log('parou')
                            }
                            if(counter > 3){
                                counter = 0
                            }
                            selections[counter].style = `background-color:rgba(255, 255, 255, 0.800);`
                            for(let c = 0; c < selections.length; c++){
                                if(c != counter){
                                    selections[c].style.backgroundColor = "rgba(255, 255, 255, 0.05)"
                                }
                            }
                            //concertando tamanho
                            if(counter == 0 || counter == 1){
                                img_crew.style.width = '25vw'
                            }else{
                                img_crew.style.width = '30vw'
                            }

                            img_crew.src = dados.crew[counter].images.webp
                            bio_crew.textContent = dados.crew[counter].bio
                            crew_role.textContent = dados.crew[counter].role
                            name_crew.textContent = dados.crew[counter].name    

                            counter++
                            if(counter > 3){
                                counter = 0
                            }    
                        }, 5000)
                        const stoping_interval = setInterval(() =>{
                            if(main_now != dinamic_main.crew){
                                clearInterval(interval)
                                clearInterval(stoping_interval)
                            }
                        }, 1000)
                } else{
                        menu.close.style.display = 'none'
                        menu.nav_header.style.transform = 'translateX(100vw)'
                        menu.open.style.display = 'block'
                }
                })
                
                //technology
                menu.p_technology.addEventListener('click', function(){

                    if(main_now != dinamic_main.technology){
                        menu.close.style.display = 'none'
                        menu.nav_header.style.transform = 'translateX(100vw)'
                        menu.open.style.display = 'block'

                        main_now.style.display = 'none'
                        main_now = dinamic_main.technology
                        main_now.style.display = 'block'

                        const terminology = document.getElementById('terminology')
                        const text_tech = document.getElementsByClassName('texts')[1]
                        const img_tech = document.querySelector('#img_tech')

                        let counter = 0

                        const bolinhas_tech = document.getElementsByClassName('bolinha_tech')
                        for(let c = 0; c < bolinhas_tech.length; c++){
                            bolinhas_tech[c].addEventListener('click', () =>{
                                //alterando conteudo
                                terminology.textContent = dados.technology[c].name
                                text_tech.textContent = dados.technology[c].description
                                img_tech.src = dados.technology[c].images.landscape

                                counter = c

                                transform_balls(bolinhas_tech, c)
                            })
                        }
                        const interval = setInterval(() =>{
                            if(counter > 2){
                                counter = 0
                            }
                            bolinhas_tech[counter].style = `background-color:rgba(255, 255, 255, 0.800);`
                            for(let c = 0; c < bolinhas_tech.length; c++){
                                if(c != counter){
                                    bolinhas_tech[c].style.backgroundColor = "rgba(255, 255, 255, 0.05)"
                                }
                            }

                            img_tech.src = dados.technology[counter].images.landscape
                            text_tech.textContent = dados.technology[counter].description
                            terminology.textContent = dados.technology[counter].name

                            counter++
                        }, 3000)
                        const stoping_interval = setInterval(() =>{
                            if(main_now != dinamic_main.technology){
                                clearInterval(interval)
                                clearInterval(stoping_interval)
                            }
                        }, 1000)
                }else{
                        menu.close.style.display = 'none'
                        menu.nav_header.style.transform = 'translateX(100vw)'
                        menu.open.style.display = 'block'
                }
                })
            })
        })
    }
}

dinamic_main.modific_main()