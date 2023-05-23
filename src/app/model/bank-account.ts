import { Customer } from "./customer"

export class BankAccount {
    bankAccountId: number
    balance: number
    bankName: string
    lockStatus: string
    customer: Customer
    listTransactions: []
    constructor(bankAccountId: number,
        balance: number,
        bankName: string,
        lockStatus: string,
        customer: Customer,
        listTransactions: []) {
        this.balance = balance
        this.bankAccountId = bankAccountId
        this.bankName = bankName
        this.customer = customer
        this.listTransactions = []
        this.lockStatus = lockStatus
    }
}
