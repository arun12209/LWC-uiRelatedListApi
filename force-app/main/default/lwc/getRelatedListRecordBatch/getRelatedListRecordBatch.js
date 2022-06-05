import { LightningElement,api,wire } from 'lwc';
import { getRelatedListRecordsBatch } from 'lightning/uiRelatedListApi';
export default class GetRelatedListRecordBatch extends LightningElement {
     //get Account Related List Records
    @api recordId;
    error;
    records;
     @wire(getRelatedListRecordsBatch, {
        parentRecordId: '$recordId',
        relatedListParameters: [
            {
                relatedListId: 'Contacts',
                fields: ['Contact.Name','Contact.Id']
            },
            {
                relatedListId: 'Opportunities',
                fields: ['Opportunity.Name','Opportunity.Amount']
            },
            {
                relatedListId: 'Cases',
                fields: ['Case.Subject','Case.Id']
            }
         ]
    }) allListInfo({ error, data }) {
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