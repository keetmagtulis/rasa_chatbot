# This files contains your custom actions which can be used to run
# custom Python code.
#
# See this guide on how to implement these action:
# https://rasa.com/docs/rasa/custom-actions


# This is a simple example for a custom action which utters "Hello World!"

from typing import Any, Coroutine, Text, Dict, List

from rasa_sdk import Action, Tracker
from rasa_sdk.executor import CollectingDispatcher
from rasa_sdk.types import DomainDict

class ExtractSupportEntity(Action):
    """Extract support entity and respond accordingly"""

    def name(self) -> Text:
        return "action_extract_support_entity"

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:

        support_entity = next(tracker.get_latest_entity_values('support'), None)

        if support_entity: 
            dispatcher.utter_message(text=f"Sure, I will be happy to assist you with your {support_entity}. Please tell me more")
        else: 
            dispatcher.utter_message(text="I'm sorry, I can't help you with that one.")

        return []
    
class SupportGuideAction(Action): 
    def name(self) -> Text:
        return "action_support_guide"
    
    def run(self, dispatcher: CollectingDispatcher, 
            tracker: Tracker, 
            domain:Dict[Text, Any]) -> List[Dict[Text, Any]]:
    
        support_entity = next(tracker.get_latest_entity_values('office365_support'), None)

        if support_entity == "skype": 
            dispatcher.utter_message(text=
            "To log in to your Skype account, follow these steps:\n\n"
            "1. Open the Skype application or go to the Skype website.\n"
            "2. Enter your email address in the format `(your email)@jp.yazaki.com`.\n"
            "3. Type in your password.\n\n"
            "4. Change the second prompt of email to (your email)@ph.yazaki.com"
            "If you encounter any issues, please make sure your credentials are correct or contact support for assistance.")
        else: 
            dispatcher.utter_message(text="I'm sorry, I can't help you with that one.")


        return[]
     