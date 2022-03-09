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
                    },
                },
                {
                    "opcode": "rotateCommand",
                    "blockType": "command",
                    "text": "tell spot to rotate [pitch] [yaw] [roll]",
                    "arguments": {
                        "pitch": {
                            "type": "number",
                            "defaultValue": "0"
                        },
                        "yaw": {
                            "type": "number",
                            "defaultValue": "0"
                        },
                        "roll": {
                            "type": "number",
                            "defaultValue": "0"
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
            method: 'POST',
            headers: {},
            body: JSON.stringify({
              Command: cmdName // eg 'sit'
            }),
        });

        return true;
    }

    rotateCommand(args) {
        fetch('http://192.168.80.101:8000/command', {
            method: 'POST',
            headers: {},
            body: JSON.stringify({
              Command: 'rotate', // eg 'sit'
              Args: {
                  pitch: args.pitch,
                  yaw: args.yaw,
                  roll: args.roll
              }
            }),
        });

        return true;
    }
}

Scratch.extensions.register(new SpotScratch())

// data:text/javascript;base64,