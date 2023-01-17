# Zach's Library Info

This is a serverless websit that was built using ReactJS. It takes advantage of state, effect, and routing. The book image files are stored in an amazon S3 bucket, and data is stored in DynamoDB. 

To make this wesbite serverless, I used API Gateway to create an API that the react front end can call to get it's data. API Gateway is connected to Lambda functions, written in NodeJS, that run when HTTP GET requests are sent to the API. The functions retrieve the appropritate data and send it back to the front end to be displayed on the screen.

In the future to, add functionality, I would like to impliment a search bar, improve website responsiveness for mobile devices, and add more books with more extensive reviews.
