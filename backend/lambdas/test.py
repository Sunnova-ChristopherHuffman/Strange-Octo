# hello world for lambda function

import json
from pprint import pprint
from .API_Response import API_Response

class SIC_Response:
    def __init__(self):
        self.credit_notes = []
        self.credit_line_items = []
        self.invoices = []
        self.invoice_line_items = []
    

def lambda_handler(event, context):

    res_obj = SIC_Response()

    pprint(event)

    if event["body"] is None:
        return API_Response._400({
            "message": "No request body"
        })

    # Invoices
    for si in event["body"]["request"]["sicInput"]["sales_invoices"]:
        temp = {
            "sfid": 123,
            "service_period__c": si["ServicePeriod"],
        }
        res_obj.invoices.append(temp)
        for cli in si["sales_invoice_line_items"]:
            temp2 = {
                "sfid": 123,
                "c2g__invoice__c": temp["sfid"],
                "service_period_charge__c": cli["ServicePeriodCharge"]
            }
            res_obj.invoice_line_items.append(temp2)

    # Credit Notes
    for cn in event["body"]["request"]["sicInput"]["credit_notes"]:
        temp = {
            "sfid": 123,
            "service_period__c": cn["ServicePeriod"],
        }
        res_obj.credit_notes.append(temp)
        for cli in cn["credit_note_line_items"]:
            temp2 = {
                "sfid": 123,
                "credit_note__c": temp["sfid"],
                "service_period_charge__c": cli["ServicePeriodCharge"]
            }
            res_obj.credit_line_items.append(temp2)
    


    return API_Response._200({
        "message": "Have some sic data",
        "body": res_obj.__dict__
    })