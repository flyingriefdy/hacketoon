const AWS = require('aws-sdk');
AWS.config.update({region: 'us-east-1'});
let comprehend = new AWS.Comprehend(
	{
		accessKeyId: 'AKIAJUKA7CLTUEFBLF5Q',
	});

function getSentiment(text, fn){

		const params = {
			'LanguageCode' : 'en',
			'Text': `${text}`
		};
    
    comprehend.detectSentiment(params, function(err, json){
		if(err) console.log(err, err.stack);
		else	console.log(json);
		// else 	return json;
	});

};

let test = getSentiment('i am so hungry', fn(i)=>{console.log(i)};
