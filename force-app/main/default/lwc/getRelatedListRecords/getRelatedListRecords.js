import { LightningElement,wire,api} from 'lwc';
import { getRelatedListRecords } from 'lightning/uiRelatedListApi';
export default class GetRelatedListRecords extends LightningElement {
    @api recordId;
    error;
    records;
    //get all contacts records of Account
    @wire(getRelatedListRecords, {
        parentRecordId: '$recordId',
        relatedListId: 'Contacts',
        fields: ['Contact.Name','Contact.Id']
    }) contacts({ error, data }){
        if (data) {
            this.records = data.records;
            console.log('data: '+JSON.stringify(data));
            this.error = undefined;
        } else if (error) {
            this.error = error;
            this.records = undefined;
        }
    }
}