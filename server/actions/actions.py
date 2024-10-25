# This files contains your custom actions which can be used to run
# custom Python code.
#
# See this guide on how to implement these action:
# https://rasa.com/docs/rasa/custom-actions


# This is a simple example for a custom action which utters "Hello World!"

from typing import Any, Text, Dict, List

from rasa_sdk import Action, Tracker
from rasa_sdk.executor import CollectingDispatcher


class ActionHelloWorld(Action):

     def name(self) -> Text:
         return "action_hello_world"

     def run(self, dispatcher: CollectingDispatcher,
             tracker: Tracker,
             domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:

         dispatcher.utter_message(text="Hello World!")

         return []
     

class ActionExtractEntity(Action): 
    def name(name) -> Text: 
        return "action_extract_entity"
    
    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:
        
        support_entity = next(tracker.get_lastest_entity_values('support_type'), None)

        if support_entity: 
            dispatcher.utter_message(text = f'I understand you need support with {support_entity}. Please tell me more.')

            if support_entity == "price": 
                dispatcher.utter_message( response = "utter_rate")
            
            elif support_entity == "contact":
                dispatcher.utter_message( response = "utter_contacts")
            
            elif support_entity == "customize":
                dispatcher.utter_message( response = "utter_customize_tutorial")


        else:
            dispatcher.utter_message(text = "I'm sorry I can't help you with that one.")

        return[]