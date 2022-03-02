class SpotScratch {
    constructor() {
    }
    
    getInfo() {
        return {
            "id": "SpotScratch",
            "name": "Spot! Scratch",
            "blocks": [
                {
                    "opcode": "bodyCommand",
                    "blockType": "command",
                    "text": "send a [cmdName] command to spot",
                    "arguments": {
                        "cmdName": {
                            "type": "string",
                            "defaultValue": "sit",
                            "menu": "cmdMenu"
                        },
                    }
                }
            ],
            "menus": {
                "cmdMenu": [{text:"sit",value:"sit"}, {text:"stand",value:"stand"}]
            }       
        };
    }

    bodyCommand({cmdName}) {
        fetch('http://192.168.80.101:8000/command', {
            method: 'GET',
            headers: {},
            body: JSON.stringify({
              Command: "cmdName" // eg 'sit'
            }),
        });

        return true;
    }
}

Scratch.extensions.register(new SpotScratch())

// data:text/javascript;base64,