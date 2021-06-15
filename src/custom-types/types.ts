export interface MenuItem {
    label: string
    link?: string
    internal?: MenuItem[]
}

export interface Meditations {
    id: string
    title: string
    description: string
    img: string
}

export interface Reading {
    day: string,
    title: string,
    content: string,
    image?: string,
    verse?: string,
}
