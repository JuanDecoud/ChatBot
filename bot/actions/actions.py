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
      
        try:
            response = requests.post("http://localhost:8080/orders/addOrder", json={"producto": producto, "cantidad": cantidad})
            response.raise_for_status()  
            
            dispatcher.utter_message(f"Su pedido se ha realizado con éxito. Plato: {producto} Cantidad: {cantidad}")
        
        except requests.exceptions.RequestException as e:
            dispatcher.utter_message(text=f"Hubo un problema al realizar el pedido: {str(e)}")
        
        return [
            SlotSet("producto", None),
            SlotSet("cantidad", None)
        ]
        
        
      