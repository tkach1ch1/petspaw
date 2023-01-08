export interface ActionsElements {
    id: string
    name: string
    date: string
    url: string
    value: number
    image: { url: string }
}

export interface UpdatedActionsElements extends ActionsElements {
    description?: string
    origin?: string
    life_span?: string
    weight?: { metric: string }
    temperament?: string
}
