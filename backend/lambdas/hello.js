import { Response } from '../lib/Response.js'
import {generateShortUUID} from '../lib/uuid.js'

export async function handler(event) {
  console.log("Processing Request");
    
    let res_obj = {
        "credit_notes": [],
        "credit_line_items": [],
        "invoices": [],
        "invoice_line_items": []
    }

    // Invoices
    event.body.request.sicInput.sales_invoices.forEach(si => {
        temp = {
            "sfid": generateShortUUID(), 
            "service_period__c": si.ServicePeriod,
        }
        res_obj.invoices.push(temp)
        si.sales_invoice_line_items.forEach(cli => {
            temp2 = {
                "sfid": generateShortUUID(), 
                "c2g__invoice__c": temp.sfid,
                "service_period_charge__c": cli.ServicePeriodCharge
            }
            res_obj.invoice_line_items.push(temp2)
        })
    });

    // Credit Notes
    event.body.request.sicInput.credit_notes.forEach(cn => {
        temp = {
            "sfid": generateShortUUID(), 
            "service_period__c": cn.ServicePeriod,
        }
        res_obj.credit_notes.push(temp)
        cn.credit_note_line_items.forEach(cli => {
            temp2 = {
                "sfid": generateShortUUID(), 
                "credit_note__c": temp.sfid,
                "service_period_charge__c": cli.ServicePeriodCharge
            }
            res_obj.credit_line_items.push(temp2)
        })
    });

    console.log("Request Processed");

    Response._200(res_obj)
}