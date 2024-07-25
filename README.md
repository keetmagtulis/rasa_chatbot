# PET Intranet Chat-Bot

## Overview

The PET Intranet Chat-Bot enhances the PET Intranet Website by providing users with quick answers to frequently asked questions (FAQs) and basic support. Built using the Rasa framework, this Chat-Bot is designed to streamline user interactions and provide efficient support.

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
- **Database Integration:** Connects with PET Intranet's systems to access real-time data.

## Goals

- Assist users with FAQs and provide basic support on the PET Intranet Website.
- Automate routine tasks and streamline user interactions.
- Continuously improve based on user feedback and interaction data.

## Reference Videos: 

[How to Build Chatbot with Python & Rasa](https://www.youtube.com/watch?v=ykeamfE0-g4).

## How to Setup

Python Version - 3.9.0

### Create a virtual environment 
```bash
python -m venv .venv
```
### Activate venv 
```bash
source .venv/Scripts/activate
```
### Install Rasa 
```bash
 pip install rasa
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
rasa run actions
```

