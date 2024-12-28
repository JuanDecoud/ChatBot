
import Configuration from "openai"
import OpenAIApi from "openai"
import EnvValues from "../../config/env/env.variables.js";


export default class ChatBotService {
    #configuration ;
    openAi;
    constructor(){
        this.configuration= new Configuration({
            apiKey: EnvValues.chatKey
        })
        if(this.configuration)this.openAi= new OpenAIApi(this.#configuration)
    }

}