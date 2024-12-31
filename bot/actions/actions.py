from rasa_sdk import Action
from rasa_sdk.events import SlotSet

import requests

class ActionHacerPedido(Action):
    def name(self) -> str:
        return "action_hacer_pedido"
    
    def run(self, dispatcher, tracker, domain):

        producto = tracker.get_slot("producto")
        cantidad = tracker.get_slot("cantidad")
       
        if not cantidad :
            dispatcher.utter_message(text="¿Cuántos platos te gustaría pedir?")
            return []
        else:
            dispatcher.utter_message(f"Su pedido se ha realizado con exito Plato: {producto} cantidad:{cantidad}")
            return[
                SlotSet("producto", None),
                SlotSet("cantidad", None)
            ]
        
        # response = requests.post("http://tu-backend.com/pedidos", json={"producto": producto, "cantidad": cantidad})
      