

export const BasicFunction = () => {

    const sumNum = (a:number, b:number): number => {
        return a+b;
    }
    
    const sumNumString = (a:number, b:number): string => // Resultado como string
    {
        return `${a+b}`.toLowerCase();  
    }

    return (
        <>
        <div>BasicFunction</div>
        <h3>Funciones</h3>
        <span>Resultado 1 es: {sumNum(2,3)+1} </span>
        <span>Resultado 2 es : {sumNumString(2,3)} </span>
        </>
    )
}
