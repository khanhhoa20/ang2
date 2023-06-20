import { User } from "./user"

export class Customer {
    customerId: number | null
    customerName: string
    customerAddress: string
    customerPhone: string
    customerEmail: string
    customerNationalId: number
    customerDob: string
    user: User
    constructor(customerId: number | null,
        customerName: string,
        customerAddress: string,
        customerPhone: string,
        customerEmail: string,
        customerNationalId: number,
        customerDob: string,
        user: User) {
        this.customerAddress = customerAddress
        this.customerDob = customerDob
        this.customerEmail = customerEmail
        this.customerId = customerId
        this.customerName = customerName
        this.customerNationalId = customerNationalId
        this.customerPhone = customerPhone
        this.user = user
    }
}
