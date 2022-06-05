import { LightningElement ,wire,api} from 'lwc';
import { getRelatedListInfoBatch } from 'lightning/uiRelatedListApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
export default class GetRelatedListInfoBatch extends LightningElement {
    records;
    error;
    //Account related list info batch
    @wire(getRelatedListInfoBatch, {
        parentObjectApiName: ACCOUNT_OBJECT,
        relatedListParameters: [
            {
                relatedListId: 'Contacts',
            },
            {
                relatedListId: 'Opportunities',
            },
            {
                relatedListId: 'Cases',
            }
         ]
    }) relatedListInfo({ error, data }){
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