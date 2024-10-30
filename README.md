# E-Commerce Assistant Chat-Bot

## Overview

This Chat-Bot enhances the Website by providing users with quick answers to frequently asked questions (FAQs) and some inquries about the Website. Built using the Rasa framework, this Chat-Bot is designed to streamline user interactions and provide efficient support with the customers.

## Features

- **FAQ Assistance:** Provides answers to commonly asked questions.
- **Basic Support:** Assists with routine support tasks and general inquiries.
- **Natural Language Understanding:** Recognizes user intents and extracts key information.
- **Conversational Management:** Handles multi-turn dialogues and maintains context.
- **User-Friendly Interface:** Offers an intuitive and easy-to-navigate experience.
- **Feedback Collection:** Allows users to provide feedback for continuous improvement.

## Technology Stack

- **Rasa Framework:** For natural language understanding and dialogue management.
- **Python:** For implementing custom logic and integrations.
- **Database Integration:** Connects with Intranet's systems to access real-time data.


## How to Setup

### Clone this repository in your computer 
```bash
git clone https://github.com/keetmagtulis/service-desk-chatbot.git
```

## Frontend

### Navigate into the frontend directory
```bash
cd client
```

### Install dependencies 
```bash
npm install
```

### Run React-App
```bash
npm run dev
```

## Backend

### Navigate into the backend directory 
```bash
cd server
```

### Install dependencies
```bash
pip install -r requirements.txt
```

### Create a virtual environment
```bash
python -m venv .venv
```

### Activate the virtual environment 
```bash
source .venv/bin/activate
```


### Installation of Rasa 
```bash
   pip install rasa
```


### Enabling Server and Rasa Actions
```bash
rasa run --model models --enable-api --cors "*"
rasa run actions
```

