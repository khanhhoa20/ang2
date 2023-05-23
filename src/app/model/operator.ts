import { Department } from "./department"
import { User } from "./user"

export class Operator {
    operatorID: number
    operPhone: string
    operAddress: string
    operName: string
    operatorStatus: string
    user: User
    department: Department
    constructor(operatorID: number,
        operPhone: string,
        operAddress: string,
        operName: string,
        operatorStatus: string,
        user: User,
        department: Department) {
        this.department = department
        this.operAddress = operAddress
        this.operName = operName
        this.operPhone = operPhone
        this.operatorID = operatorID
        this.operatorStatus = operatorStatus
        this.user = user
    }
}
