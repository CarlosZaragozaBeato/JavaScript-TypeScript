
export class MathUtil{
    public static printMathTable(value:number):string{
        let tmp:string = '';
        for(let i:number=0; i<=10;i++){
            tmp += `${value} * ${i} = ${value*i}\n`;
        }
        return tmp;
    }
}