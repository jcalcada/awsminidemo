var sequences = {
    "Joe Calcada": {

    "GD 5 Sample Findings": [
        {
            "routing_key": services["Joe Calcada"]["GuardDuty"],
            "payload": payloads["GuardDuty: RDP Brute Force Attack"],
            "delay": 0
        },
        {
            "routing_key": services["Joe Calcada"]["GuardDuty"],
            "payload": payloads["GuardDuty: SSH Brute Force Attack"],
            "delay": 0
        },
        {
            "routing_key": services["Joe Calcada"]["GuardDuty"],
            "payload": payloads["GuardDuty: DNS Data Exfiltration"],
            "delay": 0
        },
        {
            "routing_key": services["Joe Calcada"]["GuardDuty"],
            "payload": payloads["GuardDuty: GuardDuty Changes"],
            "delay": 0
        },
        {
            "routing_key": services["Joe Calcada"]["GuardDuty"],
            "payload": payloads["GuardDuty: API's invoked"],
            "delay": 0
        }
    ],
    "GD BitCoin Alerts": [
        {
            "routing_key": services["Joe Calcada"]["GuardDuty"],
            "payload": payloads["GuardDuty: Recon NetworkPermissions"],
            "delay": 3
        },
        {
            "routing_key": services["Joe Calcada"]["GuardDuty"],
            "payload": payloads["GuardDuty: Unauthorized Access"],
            "delay": 2
        },
        {
            "routing_key": services["Joe Calcada"]["GuardDuty"],
            "payload": payloads["GuardDuty: Turn Off Logging (host 1)"],
            "delay": 2
        },
        {
            "routing_key": services["Joe Calcada"]["GuardDuty"],
            "payload": payloads["GuardDuty: Turn Off Logging (host 1)"],
            "delay": 3
        },
        {
            "routing_key": services["Joe Calcada"]["GuardDuty"],
            "payload": payloads["GuardDuty: Turn Off Logging (host 1)"],
            "delay": 4
        },
        {
            "routing_key": services["Joe Calcada"]["GuardDuty"],
            "payload": payloads["GuardDuty: Bitcoin DNS"],
            "delay": 2
        },
        {
            "routing_key": services["Joe Calcada"]["GuardDuty"],
            "payload": payloads["GuardDuty: Bitcoin DNS #2"],
            "delay": 1
        },
        {
            "routing_key": services["Joe Calcada"]["GuardDuty"],
            "payload": payloads["GuardDuty: Bitcoin DNS #3"],
            "delay": 2
        }
    ],
    "Personal Health Dashboard": [
        {
            "routing_key": services["Joe Calcada"]["CloudWatch"],
            "payload": payloads["CloudWatch: EC2 Store Drive Issue (US West 1)"],
            "delay": 0
        },
        {
            "routing_key": services["Joe Calcada"]["CloudWatch"],
            "payload": payloads["CloudWatch: EC2 Store Drive Issue (US West 2)"],
            "delay": 2
        },
        {
            "routing_key": services["Joe Calcada"]["CloudWatch"],
            "payload": payloads["CloudWatch: EC2 Store Drive Issue (AP SouthEast 2)"],
            "delay": 2
        }
    ],
    "CloudWatch JVM Restarts": [
        {
            "routing_key": services["Joe Calcada"]["CloudWatch"],
            "payload": payloads["CloudWatch: JVM Restart"],
            "delay": 1
        },
        {
            "routing_key": services["Joe Calcada"]["CloudWatch"],
            "payload": payloads["CloudWatch: JVM Restart"],
            "delay": 2
        },
        {
            "routing_key": services["Joe Calcada"]["CloudWatch"],
            "payload": payloads["CloudWatch: JVM Restart"],
            "delay": 2
        },
        {
            "routing_key": services["Joe Calcada"]["CloudWatch"],
            "payload": payloads["CloudWatch: JVM Restart"],
            "delay": 2
        }       ],
    },
    "Adam Del Gobbo": {

    "GD 5 Sample Findings": [
        {
            "routing_key": services["Adam Del Gobbo"]["GuardDuty"],
            "payload": payloads["GuardDuty: RDP Brute Force Attack"],
            "delay": 0
        },
        {
            "routing_key": services["Adam Del Gobbo"]["GuardDuty"],
            "payload": payloads["GuardDuty: SSH Brute Force Attack"],
            "delay": 0
        },
        {
            "routing_key": services["Adam Del Gobbo"]["GuardDuty"],
            "payload": payloads["GuardDuty: DNS Data Exfiltration"],
            "delay": 0
        },
        {
            "routing_key": services["Adam Del Gobbo"]["GuardDuty"],
            "payload": payloads["GuardDuty: GuardDuty Changes"],
            "delay": 0
        },
        {
            "routing_key": services["Adam Del Gobbo"]["GuardDuty"],
            "payload": payloads["GuardDuty: API's invoked"],
            "delay": 0
        }
    ],
    "GD BitCoin Alerts": [
        {
            "routing_key": services["Adam Del Gobbo"]["GuardDuty"],
            "payload": payloads["GuardDuty: Recon NetworkPermissions"],
            "delay": 3
        },
        {
            "routing_key": services["Adam Del Gobbo"]["GuardDuty"],
            "payload": payloads["GuardDuty: Unauthorized Access"],
            "delay": 2
        },
        {
            "routing_key": services["Adam Del Gobbo"]["GuardDuty"],
            "payload": payloads["GuardDuty: Turn Off Logging (host 1)"],
            "delay": 2
        },
        {
            "routing_key": services["Adam Del Gobbo"]["GuardDuty"],
            "payload": payloads["GuardDuty: Turn Off Logging (host 1)"],
            "delay": 3
        },
        {
            "routing_key": services["Adam Del Gobbo"]["GuardDuty"],
            "payload": payloads["GuardDuty: Turn Off Logging (host 1)"],
            "delay": 4
        },
        {
            "routing_key": services["Adam Del Gobbo"]["GuardDuty"],
            "payload": payloads["GuardDuty: Bitcoin DNS"],
            "delay": 2
        },
        {
            "routing_key": services["Adam Del Gobbo"]["GuardDuty"],
            "payload": payloads["GuardDuty: Bitcoin DNS #2"],
            "delay": 1
        },
        {
            "routing_key": services["Adam Del Gobbo"]["GuardDuty"],
            "payload": payloads["GuardDuty: Bitcoin DNS #3"],
            "delay": 2
        }
    ],
    "Personal Health Dashboard": [
        {
            "routing_key": services["Adam Del Gobbo"]["CloudWatch"],
            "payload": payloads["CloudWatch: EC2 Store Drive Issue (US West 1)"],
            "delay": 0
        },
        {
            "routing_key": services["Adam Del Gobbo"]["CloudWatch"],
            "payload": payloads["CloudWatch: EC2 Store Drive Issue (US West 2)"],
            "delay": 2
        },
        {
            "routing_key": services["Adam Del Gobbo"]["CloudWatch"],
            "payload": payloads["CloudWatch: EC2 Store Drive Issue (AP SouthEast 2)"],
            "delay": 2
        }
    ],
    "CloudWatch JVM Restarts": [
        {
            "routing_key": services["Adam Del Gobbo"]["CloudWatch"],
            "payload": payloads["CloudWatch: JVM Restart"],
            "delay": 1
        },
        {
            "routing_key": services["Adam Del Gobbo"]["CloudWatch"],
            "payload": payloads["CloudWatch: JVM Restart"],
            "delay": 2
        },
        {
            "routing_key": services["Adam Del Gobbo"]["CloudWatch"],
            "payload": payloads["CloudWatch: JVM Restart"],
            "delay": 2
        },
        {
            "routing_key": services["Adam Del Gobbo"]["CloudWatch"],
            "payload": payloads["CloudWatch: JVM Restart"],
            "delay": 2
        } 
      ],
    },
    "Ryan Garrett": {

    "GD 5 Sample Findings": [
        {
            "routing_key": services["Ryan Garrett"]["GuardDuty"],
            "payload": payloads["GuardDuty: RDP Brute Force Attack"],
            "delay": 0
        },
        {
            "routing_key": services["Ryan Garrett"]["GuardDuty"],
            "payload": payloads["GuardDuty: SSH Brute Force Attack"],
            "delay": 0
        },
        {
            "routing_key": services["Ryan Garrett"]["GuardDuty"],
            "payload": payloads["GuardDuty: DNS Data Exfiltration"],
            "delay": 0
        },
        {
            "routing_key": services["Ryan Garrett"]["GuardDuty"],
            "payload": payloads["GuardDuty: GuardDuty Changes"],
            "delay": 0
        },
        {
            "routing_key": services["Ryan Garrett"]["GuardDuty"],
            "payload": payloads["GuardDuty: API's invoked"],
            "delay": 0
        }
    ],
    "GD BitCoin Alerts": [
        {
            "routing_key": services["Ryan Garrett"]["GuardDuty"],
            "payload": payloads["GuardDuty: Recon NetworkPermissions"],
            "delay": 3
        },
        {
            "routing_key": services["Ryan Garrett"]["GuardDuty"],
            "payload": payloads["GuardDuty: Unauthorized Access"],
            "delay": 2
        },
        {
            "routing_key": services["Ryan Garrett"]["GuardDuty"],
            "payload": payloads["GuardDuty: Turn Off Logging (host 1)"],
            "delay": 2
        },
        {
            "routing_key": services["Ryan Garrett"]["GuardDuty"],
            "payload": payloads["GuardDuty: Turn Off Logging (host 1)"],
            "delay": 3
        },
        {
            "routing_key": services["Ryan Garrett"]["GuardDuty"],
            "payload": payloads["GuardDuty: Turn Off Logging (host 1)"],
            "delay": 4
        },
        {
            "routing_key": services["Ryan Garrett"]["GuardDuty"],
            "payload": payloads["GuardDuty: Bitcoin DNS"],
            "delay": 2
        },
        {
            "routing_key": services["Ryan Garrett"]["GuardDuty"],
            "payload": payloads["GuardDuty: Bitcoin DNS #2"],
            "delay": 1
        },
        {
            "routing_key": services["Ryan Garrett"]["GuardDuty"],
            "payload": payloads["GuardDuty: Bitcoin DNS #3"],
            "delay": 2
        }
    ],
    "Personal Health Dashboard": [
        {
            "routing_key": services["Ryan Garrett"]["CloudWatch"],
            "payload": payloads["CloudWatch: EC2 Store Drive Issue (US West 1)"],
            "delay": 0
        },
        {
            "routing_key": services["Ryan Garrett"]["CloudWatch"],
            "payload": payloads["CloudWatch: EC2 Store Drive Issue (US West 2)"],
            "delay": 2
        },
        {
            "routing_key": services["Ryan Garrett"]["CloudWatch"],
            "payload": payloads["CloudWatch: EC2 Store Drive Issue (AP SouthEast 2)"],
            "delay": 2
        }
    ],
    "CloudWatch JVM Restarts": [
        {
            "routing_key": services["Ryan Garrett"]["CloudWatch"],
            "payload": payloads["CloudWatch: JVM Restart"],
            "delay": 1
        },
        {
            "routing_key": services["Ryan Garrett"]["CloudWatch"],
            "payload": payloads["CloudWatch: JVM Restart"],
            "delay": 2
        },
        {
            "routing_key": services["Ryan Garrett"]["CloudWatch"],
            "payload": payloads["CloudWatch: JVM Restart"],
            "delay": 2
        },
        {
            "routing_key": services["Ryan Garrett"]["CloudWatch"],
            "payload": payloads["CloudWatch: JVM Restart"],
            "delay": 2
        }       ],
    },
    "Kieran Galvin": {

    "GD 5 Sample Findings": [
        {
            "routing_key": services["Kieran Galvin"]["GuardDuty"],
            "payload": payloads["GuardDuty: RDP Brute Force Attack"],
            "delay": 0
        },
        {
            "routing_key": services["Kieran Galvin"]["GuardDuty"],
            "payload": payloads["GuardDuty: SSH Brute Force Attack"],
            "delay": 0
        },
        {
            "routing_key": services["Kieran Galvin"]["GuardDuty"],
            "payload": payloads["GuardDuty: DNS Data Exfiltration"],
            "delay": 0
        },
        {
            "routing_key": services["Kieran Galvin"]["GuardDuty"],
            "payload": payloads["GuardDuty: GuardDuty Changes"],
            "delay": 0
        },
        {
            "routing_key": services["Kieran Galvin"]["GuardDuty"],
            "payload": payloads["GuardDuty: API's invoked"],
            "delay": 0
        }
    ],
    "GD BitCoin Alerts": [
        {
            "routing_key": services["Kieran Galvin"]["GuardDuty"],
            "payload": payloads["GuardDuty: Recon NetworkPermissions"],
            "delay": 3
        },
        {
            "routing_key": services["Kieran Galvin"]["GuardDuty"],
            "payload": payloads["GuardDuty: Unauthorized Access"],
            "delay": 2
        },
        {
            "routing_key": services["Kieran Galvin"]["GuardDuty"],
            "payload": payloads["GuardDuty: Turn Off Logging (host 1)"],
            "delay": 2
        },
        {
            "routing_key": services["Kieran Galvin"]["GuardDuty"],
            "payload": payloads["GuardDuty: Turn Off Logging (host 1)"],
            "delay": 3
        },
        {
            "routing_key": services["Kieran Galvin"]["GuardDuty"],
            "payload": payloads["GuardDuty: Turn Off Logging (host 1)"],
            "delay": 4
        },
        {
            "routing_key": services["Kieran Galvin"]["GuardDuty"],
            "payload": payloads["GuardDuty: Bitcoin DNS"],
            "delay": 2
        },
        {
            "routing_key": services["Kieran Galvin"]["GuardDuty"],
            "payload": payloads["GuardDuty: Bitcoin DNS #2"],
            "delay": 1
        },
        {
            "routing_key": services["Kieran Galvin"]["GuardDuty"],
            "payload": payloads["GuardDuty: Bitcoin DNS #3"],
            "delay": 2
        }
    ],
    "Personal Health Dashboard": [
        {
            "routing_key": services["Kieran Galvin"]["CloudWatch"],
            "payload": payloads["CloudWatch: EC2 Store Drive Issue (US West 1)"],
            "delay": 0
        },
        {
            "routing_key": services["Kieran Galvin"]["CloudWatch"],
            "payload": payloads["CloudWatch: EC2 Store Drive Issue (US West 2)"],
            "delay": 2
        },
        {
            "routing_key": services["Kieran Galvin"]["CloudWatch"],
            "payload": payloads["CloudWatch: EC2 Store Drive Issue (AP SouthEast 2)"],
            "delay": 2
        }
    ],
    "CloudWatch JVM Restarts": [
        {
            "routing_key": services["Kieran Galvin"]["CloudWatch"],
            "payload": payloads["CloudWatch: JVM Restart"],
            "delay": 1
        },
        {
            "routing_key": services["Kieran Galvin"]["CloudWatch"],
            "payload": payloads["CloudWatch: JVM Restart"],
            "delay": 2
        },
        {
            "routing_key": services["Kieran Galvin"]["CloudWatch"],
            "payload": payloads["CloudWatch: JVM Restart"],
            "delay": 2
        },
        {
            "routing_key": services["Kieran Galvin"]["CloudWatch"],
            "payload": payloads["CloudWatch: JVM Restart"],
            "delay": 2
        }       ],
    },
    "Joe Pusateri": {

    "GD 5 Sample Findings": [
        {
            "routing_key": services["Joe Pusateri"]["GuardDuty"],
            "payload": payloads["GuardDuty: RDP Brute Force Attack"],
            "delay": 0
        },
        {
            "routing_key": services["Joe Pusateri"]["GuardDuty"],
            "payload": payloads["GuardDuty: SSH Brute Force Attack"],
            "delay": 0
        },
        {
            "routing_key": services["Joe Pusateri"]["GuardDuty"],
            "payload": payloads["GuardDuty: DNS Data Exfiltration"],
            "delay": 0
        },
        {
            "routing_key": services["Joe Pusateri"]["GuardDuty"],
            "payload": payloads["GuardDuty: GuardDuty Changes"],
            "delay": 0
        },
        {
            "routing_key": services["Joe Pusateri"]["GuardDuty"],
            "payload": payloads["GuardDuty: API's invoked"],
            "delay": 0
        }
    ],
    "GD BitCoin Alerts": [
        {
            "routing_key": services["Joe Pusateri"]["GuardDuty"],
            "payload": payloads["GuardDuty: Recon NetworkPermissions"],
            "delay": 3
        },
        {
            "routing_key": services["Joe Pusateri"]["GuardDuty"],
            "payload": payloads["GuardDuty: Unauthorized Access"],
            "delay": 2
        },
        {
            "routing_key": services["Joe Pusateri"]["GuardDuty"],
            "payload": payloads["GuardDuty: Turn Off Logging (host 1)"],
            "delay": 2
        },
        {
            "routing_key": services["Joe Pusateri"]["GuardDuty"],
            "payload": payloads["GuardDuty: Turn Off Logging (host 1)"],
            "delay": 3
        },
        {
            "routing_key": services["Joe Pusateri"]["GuardDuty"],
            "payload": payloads["GuardDuty: Turn Off Logging (host 1)"],
            "delay": 4
        },
        {
            "routing_key": services["Joe Pusateri"]["GuardDuty"],
            "payload": payloads["GuardDuty: Bitcoin DNS"],
            "delay": 2
        },
        {
            "routing_key": services["Joe Pusateri"]["GuardDuty"],
            "payload": payloads["GuardDuty: Bitcoin DNS #2"],
            "delay": 1
        },
        {
            "routing_key": services["Joe Pusateri"]["GuardDuty"],
            "payload": payloads["GuardDuty: Bitcoin DNS #3"],
            "delay": 2
        }
    ],
    "Personal Health Dashboard": [
        {
            "routing_key": services["Joe Pusateri"]["CloudWatch"],
            "payload": payloads["CloudWatch: EC2 Store Drive Issue (US West 1)"],
            "delay": 0
        },
        {
            "routing_key": services["Joe Pusateri"]["CloudWatch"],
            "payload": payloads["CloudWatch: EC2 Store Drive Issue (US West 2)"],
            "delay": 2
        },
        {
            "routing_key": services["Joe Pusateri"]["CloudWatch"],
            "payload": payloads["CloudWatch: EC2 Store Drive Issue (AP SouthEast 2)"],
            "delay": 2
        }
    ],
    "CloudWatch JVM Restarts": [
        {
            "routing_key": services["Joe Pusateri"]["CloudWatch"],
            "payload": payloads["CloudWatch: JVM Restart"],
            "delay": 1
        },
        {
            "routing_key": services["Joe Pusateri"]["CloudWatch"],
            "payload": payloads["CloudWatch: JVM Restart"],
            "delay": 2
        },
        {
            "routing_key": services["Joe Pusateri"]["CloudWatch"],
            "payload": payloads["CloudWatch: JVM Restart"],
            "delay": 2
        },
        {
            "routing_key": services["Joe Pusateri"]["CloudWatch"],
            "payload": payloads["CloudWatch: JVM Restart"],
            "delay": 2
        }       ],
    },
    "Mark Gabbard": {

    "GD 5 Sample Findings": [
        {
            "routing_key": services["Mark Gabbard"]["GuardDuty"],
            "payload": payloads["GuardDuty: RDP Brute Force Attack"],
            "delay": 0
        },
        {
            "routing_key": services["Mark Gabbard"]["GuardDuty"],
            "payload": payloads["GuardDuty: SSH Brute Force Attack"],
            "delay": 0
        },
        {
            "routing_key": services["Mark Gabbard"]["GuardDuty"],
            "payload": payloads["GuardDuty: DNS Data Exfiltration"],
            "delay": 0
        },
        {
            "routing_key": services["Mark Gabbard"]["GuardDuty"],
            "payload": payloads["GuardDuty: GuardDuty Changes"],
            "delay": 0
        },
        {
            "routing_key": services["Mark Gabbard"]["GuardDuty"],
            "payload": payloads["GuardDuty: API's invoked"],
            "delay": 0
        }
    ],
    "GD BitCoin Alerts": [
        {
            "routing_key": services["Mark Gabbard"]["GuardDuty"],
            "payload": payloads["GuardDuty: Recon NetworkPermissions"],
            "delay": 3
        },
        {
            "routing_key": services["Mark Gabbard"]["GuardDuty"],
            "payload": payloads["GuardDuty: Unauthorized Access"],
            "delay": 2
        },
        {
            "routing_key": services["Mark Gabbard"]["GuardDuty"],
            "payload": payloads["GuardDuty: Turn Off Logging (host 1)"],
            "delay": 2
        },
        {
            "routing_key": services["Mark Gabbard"]["GuardDuty"],
            "payload": payloads["GuardDuty: Turn Off Logging (host 1)"],
            "delay": 3
        },
        {
            "routing_key": services["Mark Gabbard"]["GuardDuty"],
            "payload": payloads["GuardDuty: Turn Off Logging (host 1)"],
            "delay": 4
        },
        {
            "routing_key": services["Mark Gabbard"]["GuardDuty"],
            "payload": payloads["GuardDuty: Bitcoin DNS"],
            "delay": 2
        },
        {
            "routing_key": services["Mark Gabbard"]["GuardDuty"],
            "payload": payloads["GuardDuty: Bitcoin DNS #2"],
            "delay": 1
        },
        {
            "routing_key": services["Mark Gabbard"]["GuardDuty"],
            "payload": payloads["GuardDuty: Bitcoin DNS #3"],
            "delay": 2
        }
    ],
    "Personal Health Dashboard": [
        {
            "routing_key": services["Mark Gabbard"]["CloudWatch"],
            "payload": payloads["CloudWatch: EC2 Store Drive Issue (US West 1)"],
            "delay": 0
        },
        {
            "routing_key": services["Mark Gabbard"]["CloudWatch"],
            "payload": payloads["CloudWatch: EC2 Store Drive Issue (US West 2)"],
            "delay": 2
        },
        {
            "routing_key": services["Mark Gabbard"]["CloudWatch"],
            "payload": payloads["CloudWatch: EC2 Store Drive Issue (AP SouthEast 2)"],
            "delay": 2
        }
    ],
    "CloudWatch JVM Restarts": [
        {
            "routing_key": services["Mark Gabbard"]["CloudWatch"],
            "payload": payloads["CloudWatch: JVM Restart"],
            "delay": 1
        },
        {
            "routing_key": services["Mark Gabbard"]["CloudWatch"],
            "payload": payloads["CloudWatch: JVM Restart"],
            "delay": 2
        },
        {
            "routing_key": services["Mark Gabbard"]["CloudWatch"],
            "payload": payloads["CloudWatch: JVM Restart"],
            "delay": 2
        },
        {
            "routing_key": services["Mark Gabbard"]["CloudWatch"],
            "payload": payloads["CloudWatch: JVM Restart"],
            "delay": 2
        }       ],
    },

    "Place Holder": {

    "GD 5 Sample Findings": [
        {
            "routing_key": services["Place Holder"]["GuardDuty"],
            "payload": payloads["GuardDuty: RDP Brute Force Attack"],
            "delay": 0
        },
        {
            "routing_key": services["Place Holder"]["GuardDuty"],
            "payload": payloads["GuardDuty: SSH Brute Force Attack"],
            "delay": 0
        },
        {
            "routing_key": services["Place Holder"]["GuardDuty"],
            "payload": payloads["GuardDuty: DNS Data Exfiltration"],
            "delay": 0
        },
        {
            "routing_key": services["Place Holder"]["GuardDuty"],
            "payload": payloads["GuardDuty: GuardDuty Changes"],
            "delay": 0
        },
        {
            "routing_key": services["Place Holder"]["GuardDuty"],
            "payload": payloads["GuardDuty: API's invoked"],
            "delay": 0
        }
    ],
    "GD BitCoin Alerts": [
        {
            "routing_key": services["Place Holder"]["GuardDuty"],
            "payload": payloads["GuardDuty: Recon NetworkPermissions"],
            "delay": 3
        },
        {
            "routing_key": services["Place Holder"]["GuardDuty"],
            "payload": payloads["GuardDuty: Unauthorized Access"],
            "delay": 2
        },
        {
            "routing_key": services["Place Holder"]["GuardDuty"],
            "payload": payloads["GuardDuty: Turn Off Logging (host 1)"],
            "delay": 2
        },
        {
            "routing_key": services["Place Holder"]["GuardDuty"],
            "payload": payloads["GuardDuty: Turn Off Logging (host 1)"],
            "delay": 3
        },
        {
            "routing_key": services["Place Holder"]["GuardDuty"],
            "payload": payloads["GuardDuty: Turn Off Logging (host 1)"],
            "delay": 4
        },
        {
            "routing_key": services["Place Holder"]["GuardDuty"],
            "payload": payloads["GuardDuty: Bitcoin DNS"],
            "delay": 2
        },
        {
            "routing_key": services["Place Holder"]["GuardDuty"],
            "payload": payloads["GuardDuty: Bitcoin DNS #2"],
            "delay": 1
        },
        {
            "routing_key": services["Place Holder"]["GuardDuty"],
            "payload": payloads["GuardDuty: Bitcoin DNS #3"],
            "delay": 2
        }
    ],
    "Personal Health Dashboard": [
        {
            "routing_key": services["Place Holder"]["CloudWatch"],
            "payload": payloads["CloudWatch: EC2 Store Drive Issue (US West 1)"],
            "delay": 0
        },
        {
            "routing_key": services["Place Holder"]["CloudWatch"],
            "payload": payloads["CloudWatch: EC2 Store Drive Issue (US West 2)"],
            "delay": 2
        },
        {
            "routing_key": services["Place Holder"]["CloudWatch"],
            "payload": payloads["CloudWatch: EC2 Store Drive Issue (AP SouthEast 2)"],
            "delay": 2
        }
    ],
    "GuardDuty Unsafe logins": [
        {
            "routing_key": services["Place Holder"]["GuardDuty"],
            "payload": payloads["GuardDuty: No 2FA Auth (amountjoy)"],
            "delay": 1
        },
        {
            "routing_key": services["Place Holder"]["GuardDuty"],
            "payload": payloads["GuardDuty: Root Account Usage"],
            "delay": 1
        },
        {
            "routing_key": services["Place Holder"]["GuardDuty"],
            "payload": payloads["GuardDuty: No 2FA Auth (jdoe)"],
            "delay": 1
        },
        {
            "routing_key": services["Place Holder"]["GuardDuty"],
            "payload": payloads["GuardDuty: Root Account Usage"],
            "delay": 1
        },
        {
            "routing_key": services["Place Holder"]["GuardDuty"],
            "payload": payloads["GuardDuty: No 2FA Auth (dmendez)"],
            "delay": 1
        }
    ],
    "CloudWatch JVM Restarts": [
        {
            "routing_key": services["Place Holder"]["CloudWatch"],
            "payload": payloads["CloudWatch: JVM Restart"],
            "delay": 1
        },
        {
            "routing_key": services["Place Holder"]["CloudWatch"],
            "payload": payloads["CloudWatch: JVM Restart"],
            "delay": 2
        },
        {
            "routing_key": services["Place Holder"]["CloudWatch"],
            "payload": payloads["CloudWatch: JVM Restart"],
            "delay": 2
        },
        {
            "routing_key": services["Place Holder"]["CloudWatch"],
            "payload": payloads["CloudWatch: JVM Restart"],
            "delay": 2
        }       ],
    }
};
