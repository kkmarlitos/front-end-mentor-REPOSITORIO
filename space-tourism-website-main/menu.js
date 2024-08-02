export const menu = {
    open: document.getElementById('abre_menu'),
    close: document.getElementById('fecha_menu'),
    nav_header: document.getElementsByTagName('nav')[0],

    p_home: document.getElementById('p_home'),
    p_destination: document.getElementById('p_destination'),
    p_crew: document.getElementById('p_crew'),
    p_technology: document.getElementById('p_technology'),


    menu_functions: function(){
        this.open.addEventListener('click', () =>{
            this.open.style.display = 'none'
            this.nav_header.style.transform = 'translateX(30vw)'
            this.close.style.display = 'block'
        })
        this.close.addEventListener('click', () =>{
            this.close.style.display = 'none'
            this.nav_header.style.transform = 'translateX(100vw)'
            this.open.style.display = 'block'
        })

        // alterando as bordas da navegação
        const menu_itens = [this.p_home, this.p_destination, this.p_crew, this.p_technology]
        menu_itens[0].style = `border-color: white;`
        let menu_choise = 0
        for(let c = 0; c < menu_itens.length; c ++){
            menu_itens[c].addEventListener('click', () =>{
                if(menu_choise == c){
                    menu_itens[menu_choise].style = `border-color: white;`
                }
                else{
                   menu_itens[menu_choise].style = `border-color: transparent;`
                   menu_itens[c].style = `border-color: white;`
                }
                menu_choise = c
            })
        }
    }
}