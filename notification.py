import boto3

ses = boto3.client('ses', region_name='us-east-1')

def lambda_handler(event, context):

    for record in event['Records']:

        if record['eventName'] != 'INSERT':
            continue

        new_image = record['dynamodb']['NewImage']

        name = new_image['name']['S']
        email = new_image['email']['S']
        vehicle = new_image['vehicle']['S']
        message = new_image['message']['S']
        service_address = new_image['serviceAddress']['S']
        phoneNumber = new_image['phoneNumber']['S']
        availability = new_image['availability']['S']
        referral = new_image['referral']['S']

        # --------------------------------
        # EMAIL TO CUSTOMER
        # --------------------------------

        customer_email_body = f"""
Hi {name},

Thank you for contacting On The Go Mobile Oil Change.

We received your service request:

Vehicle:
{vehicle}

Service Address:
{service_address}

Usual Availability:
{availability}

phone Number:
{phoneNumber}


Message:
{message}

We'll review your request and contact you to confirm the appointment.

Thank you,
On The Go Mobile Oil Change
"""

        try:
            print(f"Sending customer email to: {email}")

            ses.send_email(
                Source='noreply@otgoilchange.com',
                Destination={
                    'ToAddresses': [email]
                },
                ReplyToAddresses=[
                    'otg.oilservices@gmail.com'
                ],
                Message={
                    'Subject': {
                        'Data': 'On The Go Mobile Oil Change - Service Request Received'
                    },
                    'Body': {
                        'Text': {
                            'Data': customer_email_body
                        }
                    }
                }
            )

            print("Customer email sent successfully.")

        except Exception as e:
            print(f"Customer email failed: {e}")

        # --------------------------------
        # EMAIL TO YOU
        # --------------------------------

        owner_email_body = f"""
NEW SERVICE REQUEST

Customer:
{name}

Email:
{email}

Vehicle:
{vehicle}

Service Address:
{service_address}

Phone Number:
{phoneNumber}

Usual Availability:
{availability}

Message:
{message}

Referral:
{referral}
"""

        try:
            print("Sending owner email to: otg.oilservices@gmail.com")

            ses.send_email(
                Source='noreply@otgoilchange.com',
                Destination={
                    'ToAddresses': [
                        'otg.oilservices@gmail.com'
                    ]
                },
                Message={
                    'Subject': {
                        'Data': f'New Service Request - {name}'
                    },
                    'Body': {
                        'Text': {
                            'Data': owner_email_body
                        }
                    }
                }
            )

            print("Owner email sent successfully.")

        except Exception as e:
            print(f"Owner email failed: {e}")

    return {
        'statusCode': 200
    }