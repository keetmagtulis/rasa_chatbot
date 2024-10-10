# Chat-Bot

## Overview

The Chat-Bot enhances the Intranet Website by providing users with quick answers to frequently asked questions (FAQs) and basic support. Built using the Rasa framework, this Chat-Bot is designed to streamline user interactions and provide efficient support.

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

### Frontend

### To run React App 

```bash 
   npm run dev
```

### Backend

Python Version - 3.8.10

### Create a virtual environment and activate venv
```bash
python -m venv .venv

\\ Activate venv
source .venv/Scripts/activate

```

### Downgrade setuptools for the installation of requirements
```bash
pip install setuptools==58.0.4
```

### Installation of Tasa and Requirements
```bash
   pip install rasa
 
 \\installation of requirements
   pip install -r requirements.txt

```
## Initialization and Traning of Model

### How to train model 
```bash
rasa train
```
### How to run Rasa 
```bash
rasa shell
```
### NOTE: Make sure to install rust and upgrade version of crpytography to 3.4.7

### Installation of Rust

 ```bash
 curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
 pip install cryptography==3.4.7
```

## Enabling Server and Rasa Actions
```bash
rasa run --enable-api
rasa run actions
```

