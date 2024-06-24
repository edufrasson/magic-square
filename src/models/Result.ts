type ResultStatus = 'doing' | 'correct' | 'wrong'

export interface Result{
    status: ResultStatus 
    message: string
}

export const setCorrect = (result: Result) => {
    result.status = 'correct',
    result.message = 'Quadrado mágico!'
}

export const setDoing = (result: Result) => {
    result.status = 'doing',
    result.message = 'Insira seu quadrado!'
}

export const setWrong = (result: Result) => {
    result.status = 'wrong',
    result.message = 'Não é um quadrado mágico!'
}