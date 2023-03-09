var sequences = {
    
   
    "AWS Mini Demo": {

    "GD 5 Sample Findings": [
        {
            "routing_key": services["AWS Mini Demo"]["GuardDuty"],
            "payload": payloads["GuardDuty: RDP Brute Force Attack"],
            "delay": 0
        },
        {
            "routing_key": services["AWS Mini Demo"]["GuardDuty"],
            "payload": payloads["GuardDuty: SSH Brute Force Attack"],
            "delay": 0
        },
        {
            "routing_key": services["AWS Mini Demo"]["GuardDuty"],
            "payload": payloads["GuardDuty: DNS Data Exfiltration"],
            "delay": 0
        },
        {
            "routing_key": services["AWS Mini Demo"]["GuardDuty"],
            "payload": payloads["GuardDuty: GuardDuty Changes"],
            "delay": 0
        },
        {
            "routing_key": services["AWS Mini Demo"]["GuardDuty"],
            "payload": payloads["GuardDuty: API's invoked"],
            "delay": 0
        }
    ],
    "GD BitCoin Alerts": [
        {
            "routing_key": services["AWS Mini Demo"]["GuardDuty"],
            "payload": payloads["GuardDuty: Recon NetworkPermissions"],
            "delay": 3
        },
        {
            "routing_key": services["AWS Mini Demo"]["GuardDuty"],
            "payload": payloads["GuardDuty: Unauthorized Access"],
            "delay": 2
        },
        {
            "routing_key": services["AWS Mini Demo"]["GuardDuty"],
            "payload": payloads["GuardDuty: Turn Off Logging (host 1)"],
            "delay": 2
        },
        {
            "routing_key": services["AWS Mini Demo"]["GuardDuty"],
            "payload": payloads["GuardDuty: Turn Off Logging (host 1)"],
            "delay": 3
        },
        {
            "routing_key": services["AWS Mini Demo"]["GuardDuty"],
            "payload": payloads["GuardDuty: Turn Off Logging (host 1)"],
            "delay": 4
        },
        {
            "routing_key": services["AWS Mini Demo"]["GuardDuty"],
            "payload": payloads["GuardDuty: Bitcoin DNS"],
            "delay": 2
        },
        {
            "routing_key": services["AWS Mini Demo"]["GuardDuty"],
            "payload": payloads["GuardDuty: Bitcoin DNS #2"],
            "delay": 1
        },
        {
            "routing_key": services["AWS Mini Demo"]["GuardDuty"],
            "payload": payloads["GuardDuty: Bitcoin DNS #3"],
            "delay": 2
        }
    ],
    "Personal Health Dashboard": [
        {
            "routing_key": services["AWS Mini Demo"]["CloudWatch"],
            "payload": payloads["CloudWatch: EC2 Store Drive Issue (US West 1)"],
            "delay": 0
        },
        {
            "routing_key": services["AWS Mini Demo"]["CloudWatch"],
            "payload": payloads["CloudWatch: EC2 Store Drive Issue (US West 2)"],
            "delay": 2
        },
        {
            "routing_key": services["AWS Mini Demo"]["CloudWatch"],
            "payload": payloads["CloudWatch: EC2 Store Drive Issue (AP SouthEast 2)"],
            "delay": 2
        }
    ],
    "CloudWatch JVM Restarts": [
        {
            "routing_key": services["AWS Mini Demo"]["CloudWatch"],
            "payload": payloads["CloudWatch: JVM Restart"],
            "delay": 1
        },
        {
            "routing_key": services["AWS Mini Demo"]["CloudWatch"],
            "payload": payloads["CloudWatch: JVM Restart"],
            "delay": 2
        },
        {
            "routing_key": services["AWS Mini Demo"]["CloudWatch"],
            "payload": payloads["CloudWatch: JVM Restart"],
            "delay": 2
        },
        {
            "routing_key": services["AWS Mini Demo"]["CloudWatch"],
            "payload": payloads["CloudWatch: JVM Restart"],
            "delay": 2
        }       ],
    }
}
