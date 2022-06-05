import { LightningElement,wire } from 'lwc';
import { getRelatedListsInfo } from 'lightning/uiRelatedListApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
export default class GetRelatedListInfo extends LightningElement {
    error;
    relatedLists;
    @wire(getRelatedListsInfo, {
        parentObjectApiName: ACCOUNT_OBJECT,
        recordTypeId: '012E0000000RR6wIAG' //optional
    })listInfo({ error, data }) {
        if (data) {
            this.relatedLists = data.relatedLists;
            console.log('Data: '+ JSON.stringify(data));
            this.error = undefined;
        } else if (error) {
            this.error = error;
            this.relatedLists = undefined;
        }
    }
}