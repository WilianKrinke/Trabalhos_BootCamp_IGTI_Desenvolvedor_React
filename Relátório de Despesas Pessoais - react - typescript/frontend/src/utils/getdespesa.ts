export interface IDespesa{
    id: number,
    descricao: string,
    categoria: string,
    valor: number,
    mes: string,
    dia: string
}

export function getDespesas(anoMes: string): Promise<IDespesa[]>{
    return fetch(`http://localhost:3001/despesas?mes=${anoMes}&_sort=dia`)
        .then(res => {
            if (res.ok) {
                return res.json();
            } else {
                throw new Error(res.statusText);                
            }
        })
}

