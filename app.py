from flask import Flask, redirect, url_for, jsonify , request, render_template, send_from_directory
import logging
# create logger
logger = logging.getLogger(__name__)
logger.setLevel(logging.DEBUG)
# create console handler and set level to debug
ch = logging.StreamHandler()
ch.setLevel(logging.DEBUG) # can change from debugg to something else like .info which will give us info
formatter = logging.Formatter('%(asctime)s - %(name)s %(funcName)s():%(lineno)i: - %(levelname)s - %(message)s')
ch.setFormatter(formatter)
logger.addHandler(ch)


import boto3
from botocore.exceptions import ClientError


app = Flask(__name__, static_folder="client/dist", static_url_path="/") 




@app.route('/del_name')
def del_name():

    #client = boto3.client('s3')
    #client.delete_object(Bucket='fav-name-storage' , Key= 'fav-name.txt')
    clientdb = boto3.client('dynamodb')
    
    response = clientdb.delete_item(
        TableName='tblname2',
        Key={
            'userId': {'S': request.args.get('name')} 
            }
            )
    return jsonify(status="ok" , name= request.args.get('name') )




@app.route('/get_cred')
def get_cred():
    clientdb = boto3.client('dynamodb')
    try:
        response = clientdb.get_item(
            TableName='tblname2',
            Key={
                'userId': {'S' : request.args.get('name')}
            }
            )
        db_psw = response['Item']['psw']['S'] # password in database
        input_psw = request.args.get('password') # this is th password from the html page
        if db_psw == input_psw:
            return jsonify(sucess=True)         
    except: 
        return jsonify(sucess=False , status="Invalid password")

    #return jsonify(status="ok", request_name = request.args.get('name'), 
    #db_name = response['Item']['userId']['S'], db_password = response['Item']['psw']['S']
    #,password = request.args.get('password'))

#    client= boto3.client('s3')
#    try:
#        obj=client.get_object(Bucket='fav-food-storage' , Key='fav_food.txt')
#    except: 
#        return jsonify(status='error')





@app.route('/register_user')
def register_user(): 
    clientdb = boto3.client('dynamodb')
    clientdb.put_item(
        TableName= 'tblname2', 
        Item={
            'userId': {'S' : request.args.get('name')}, 
            'psw' : {'S' : request.args.get('password')}
            }
            )
#    client = boto3.client('s3')
#    client.put_object(
#            Body = request.args.get('name'), 
#            Bucket='fav-name-storage',
#            Key='fav-name.txt' ,  
#            ContentType='text/plain')

    return jsonify(status="ok", name=request.args.get('name') , password=request.args.get('password'))


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve_react(path):
    try:
        return send_from_directory(app.static_folder, "index.html")
    except Exception as e:
        return jsonify(error="File not found", details=str(e)), 404
    #return redirect('/static/index.html')



#below is for serving react routes 
@app.errorhandler(404)
def not_found(e):
    return app.send_static_file('index.html')

if __name__ == '__main__': 

    logger.debug("logger is fucntional")
    app.run(host='0.0.0.0')






