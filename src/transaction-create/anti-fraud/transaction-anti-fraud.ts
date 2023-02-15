import { CreateTransactionCreateInput } from '../dto/create-transaction-create.input';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TransactionAntiFraud {

    private valueValidate : Number = 1000;
    private pending : Number = 1;
    private approved : Number = 2;
    private rejected : Number = 3;

    Valida_Anti_Fraud(obj: CreateTransactionCreateInput){

        if(this.valueValidate > obj.value){
            obj.transactionStatusId = this.rejected
        }
        else{
            obj.transactionStatusId = this.approved
        }
        return obj;
    }

}