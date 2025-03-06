# 🤖 Ai Document summarizer
A simple web application that leverages AI to help users summarize long documents. Users can input text by pasting it and the application will generate an AI-powered summary along with key points extracted from the text. Perfect for quick text analysis and content summarization.

![Screenshot 2025-03-05 at 11 46 48 PM](https://github.com/user-attachments/assets/06aa03fc-b611-42bc-8326-381493cad226)


## Setup instructions

To set up it is pretty straigth forward:

- Clone this repo
- Install dependencies
- Create your [Hugging Face API Token](https://huggingface.co/docs)

## How to run the application

**To run the frontend**
```
cd ai-document-summarizer/frontend
npm install
npm start
```
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

**To run the backend**
```
cd ai-document-summarizer/backend
cp env.example .env 
npm install
node server.js
```

Runs the server in the development mode.\
at [http://localhost:4000](http://localhost:4000)

The server will reload when you make changes.\

**copy your API key in .env file**

## Brief explanation of your technical choices

**Frontend**
- React.js, is used because it’s fast, efficient, and flexible for building modern, interactive websites.
- Tailwindcss, is used to style the website quickly without writing lots of custom CSS, making the process faster and more maintainable.

**Backned**
- Node.js, is used for building a fast and scalable backend with JavaScript, streamlining development by using the same language for both frontend and backend.
- Express, is used to simplify server management, making it easy to handle requests, define routes, and manage middleware efficiently.
- Hugging Face API because it is free and has good documentation, is used for text summarization because it provides powerful, pre-trained AI models that save us from building our own complex solutions, making it easy to implement advanced NLP tasks

## Any known limitations or future improvements

For the frontend:
- I did not need any state management other than hooks since the app is pretty small and react composition was enough but for biggers aplications of course that needs to be addressed.
- when passing down functions as props from parent to child component is always good to use optimization to avoid unnecesary rerenders but in this case it was not critical
- The desing could be better, for now I just use the components provided by Tailwind
- It is always nice to handle loading spinners or skeletons when loading data just to give a better user experience but in this case I just used a text
- when working on real project we need to consider test coverage, good news is that react already have a built in react-testing-library

For the backend:
- Is good practice separate the controllers from the services to isolete responsabilities but in this case since the app is smaller I put it together
- Initially I was sending a prompt to get the summarized points but looks like this free model was not that great so for now I limited the keypoint to split the summarized text, this is not ideal of course but I was limitated by the free model
- It is also needed to have a testing coverage

In general:
- Authentication and authorization with JWT
- Add a database to handle users, roles, payments and other future features
- Internationalization and Accessibility 


