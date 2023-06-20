import { Department } from "./department";
import { User } from "./user";

export class Manager {
    managerID : number;
	managerPhone : string;
	managerAddress : string;
	managerEmail : string;
	managerName : string;
	managerStatus : string;
	user : User;
	department : Department;

	constructor (managerID : number, managerPhone : string, managerAddress : string, managerEmail : string,
				managerName : string, managerStatus : string, user : User, department : Department){
					this.managerID = managerID;
					this.managerPhone = managerPhone;
					this.managerAddress = managerAddress;
					this.managerEmail = managerEmail;
					this.managerName = managerName;
					this.managerStatus = managerStatus;
					this.user = user;
					this.department = department;
	}
}
