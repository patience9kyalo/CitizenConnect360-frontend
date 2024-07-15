export interface AddPolls{

    question: string
    options: string[]
    votes:string
}

export interface Polls{

    pollsId: string
    question: string
    options: string[]
    votes:string

}

export interface AddResponse{

    message: string

}