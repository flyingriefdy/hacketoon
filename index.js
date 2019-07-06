// const AWS = require('aws-sdk');
// AWS.config.update({region: 'us-east-1'});

// const comprehend = new AWS.Comprehend({
//     accessKeyId: 'AKIAJUKA7CLTUEFBLF5Q',
//     secretAccessKey: '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'
// });

// const params = {
//     'LanguageCode' : 'en',
//     'Text' : 'i am having a crazy headache...'
// };

// comprehend.detectSentiment(params, function (err, res){
//     if (err)	console.log(err, err.stack);
//     else		console.log(res);
// });

// class AwsSentiment{
//     constructor(){
//         this.accessKeyId = 'AKIAJUKA7CLTUEFBLF5Q'
//         this.secretAccessKey = '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'
//         this.languageCode = 'en'
//         this.region = 'us-east-1'
//     }

//     async getSentiment(text){
//         const AWS = require('aws-sdk');
//         AWS.config.update({region: `${this.region}`});
        
//         var comprehend = new AWS.Comprehend(
//             {
//                 accessKeyId: `${this.accessKeyId}`,
//                 secretAccessKey: `${this.secretAccessKey}`
//             });
            
//         const params = {
//             'LanguageCode' : `${this.languageCode}`,
//             'Text': `${text}`
//         };

//         // comprehend.detectSentiment(params, function(err, res){
//         //     if(err) console.log(err, err.stack);
//         //     else    return res;
//         // })

//         const json = await comprehend.detectSentiment(params);

//         return json;
//     }
// }

// aws = new AwsSentiment();
// let output = aws.getSentiment('test');
// console.log(output);


const AWS = require('aws-sdk');
AWS.config.update({region: 'us-east-1'});
let comprehend = new AWS.Comprehend(
	{
		accessKeyId: 'AKIAJUKA7CLTUEFBLF5Q',
		secretAccessKey: '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'
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
