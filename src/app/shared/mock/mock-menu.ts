import { Menu } from "../models/menu";

export const MENUMOCK: Menu[] = [
    {
        descricao: "",
        nome: "Home",
        url: "",
        posicao: 1,
        itens: [
            {
                descricao: "Home",
                nome: "Home",
                url: "home",
                posicao: 0,
            }
        ]
    },
    {
        descricao: "",
        nome: "Cadastro",
        url: "",
        posicao: 2,
        itens: [
            {
                descricao: "Cadastro de Usuario",
                nome: "Cadastro de Usuario",
                url: "cadastrarUsuario",
                posicao: 1,
            },

        ]
    },
    {
        descricao: "",
        nome: "Visualização",
        url: "",
        posicao: 3,
        itens: [
            
            {
                descricao: "Ver Localidade",
                nome: "Ver Localidade",
                url: "verLocalidade",
                posicao: 1
            },
        ]
    },   
]
