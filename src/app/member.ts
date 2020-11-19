



export class Member{
 
    public point: number = 10
    public name: string = ""

    constructor( ){

        console.log('Start', this.point, this.name)

    }

    setPoint(point: number){
        this.point = point
        console.log('Current Point:', this.point)
    }

} 


export class MemberS extends Member{
 
    constructor(){
        super()
        console.log('MemberS', this.point)
    }




} 


