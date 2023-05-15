## How to post to Salesforce Web Service

1. Authenticate
    

    
### POST https://test.salesforce.com/services/apexrest/JobOptimization/ 
### HEADERS 
    "Content-Type": "application/x-www-form-urlencoded"
### Body 
    grant_type=password
    &
    client_id=client_id
    &
    client_secret=client_secret
    &
    username=username
    &
    password=password


### Use Response
    {
	"access_token": "SOME_BEARER_TOKEN",
	"instance_url": "INSTANCE_URL",
	"id": "https://test.salesforce.com/id/00D020000004hdJEAQ/005E0000001xyJIIAY",
	"token_type": "Bearer",
	"issued_at": "1684175555796",
	"signature": "jkE3ENn5Ss0mA3Cl5NXFMQezMdSCaLwMGfUGT39HvH4="
    }
