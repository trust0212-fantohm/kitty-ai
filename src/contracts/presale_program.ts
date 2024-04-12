export type PresaleProgram = {
  "version": "0.1.0",
  "name": "presale_program",
  "instructions": [
    {
      "name": "initialize",
      "accounts": [
        {
          "name": "presale",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "paymentWallet",
          "type": "publicKey"
        },
        {
          "name": "rate",
          "type": "u64"
        }
      ]
    },
    {
      "name": "buyTokens",
      "accounts": [
        {
          "name": "presale",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "buyer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "paymentWallet",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "priceFeed",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "`price_feed` represents an external SOL/USD price feed.",
            "It assumes the feed is up-to-date and correctly formatted."
          ]
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "solAmount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "withdrawSol",
      "accounts": [
        {
          "name": "presale",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "recipient",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "changeRate",
      "accounts": [
        {
          "name": "presale",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "newRate",
          "type": "u64"
        }
      ]
    },
    {
      "name": "changePaymentWallet",
      "accounts": [
        {
          "name": "presale",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "newWallet",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "pausePresale",
      "accounts": [
        {
          "name": "presale",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "pause",
          "type": "bool"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "Presale",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "owner",
            "type": "publicKey"
          },
          {
            "name": "rate",
            "type": "u64"
          },
          {
            "name": "paymentWallet",
            "type": "publicKey"
          },
          {
            "name": "isPaused",
            "type": "bool"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "PresaleIsPaused",
      "msg": "The presale is currently paused."
    },
    {
      "code": 6001,
      "name": "Overflow",
      "msg": "Operation overflowed."
    },
    {
      "code": 6002,
      "name": "Underflow",
      "msg": "Operation underflowed."
    },
    {
      "code": 6003,
      "name": "Unauthorized",
      "msg": "Unauthorized."
    },
    {
      "code": 6004,
      "name": "InvalidPaymentWallet",
      "msg": "Invalid payment wallet provided."
    },
    {
      "code": 6005,
      "name": "InvalidAmountTransferred",
      "msg": "Invalid amount of SOL transferred."
    },
    {
      "code": 6006,
      "name": "InvalidPriceFeed",
      "msg": "Invalid Price Feed"
    }
  ]
}

export const IDL: PresaleProgram = {
  version: '0.1.0',
  name: 'presale_program',
  instructions: [
    {
      name: 'initialize',
      accounts: [
        {
          name: 'presale',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'owner',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'paymentWallet',
          type: 'publicKey',
        },
        {
          name: 'rate',
          type: 'u64',
        },
      ],
    },
    {
      name: 'buyTokens',
      accounts: [
        {
          name: 'presale',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'buyer',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'paymentWallet',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'priceFeed',
          isMut: false,
          isSigner: false,
          docs: [
            '`price_feed` represents an external SOL/USD price feed.',
            'It assumes the feed is up-to-date and correctly formatted.',
          ],
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'solAmount',
          type: 'u64',
        },
      ],
    },
    {
      name: 'withdrawSol',
      accounts: [
        {
          name: 'presale',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'recipient',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'owner',
          isMut: false,
          isSigner: true,
        },
      ],
      args: [
        {
          name: 'amount',
          type: 'u64',
        },
      ],
    },
    {
      name: 'changeRate',
      accounts: [
        {
          name: 'presale',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'owner',
          isMut: false,
          isSigner: true,
        },
      ],
      args: [
        {
          name: 'newRate',
          type: 'u64',
        },
      ],
    },
    {
      name: 'changePaymentWallet',
      accounts: [
        {
          name: 'presale',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'owner',
          isMut: false,
          isSigner: true,
        },
      ],
      args: [
        {
          name: 'newWallet',
          type: 'publicKey',
        },
      ],
    },
    {
      name: 'pausePresale',
      accounts: [
        {
          name: 'presale',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'owner',
          isMut: false,
          isSigner: true,
        },
      ],
      args: [
        {
          name: 'pause',
          type: 'bool',
        },
      ],
    },
  ],
  accounts: [
    {
      name: 'Presale',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'owner',
            type: 'publicKey',
          },
          {
            name: 'rate',
            type: 'u64',
          },
          {
            name: 'paymentWallet',
            type: 'publicKey',
          },
          {
            name: 'isPaused',
            type: 'bool',
          },
        ],
      },
    },
  ],
  errors: [
    {
      code: 6000,
      name: 'PresaleIsPaused',
      msg: 'The presale is currently paused.',
    },
    {
      code: 6001,
      name: 'Overflow',
      msg: 'Operation overflowed.',
    },
    {
      code: 6002,
      name: 'Underflow',
      msg: 'Operation underflowed.',
    },
    {
      code: 6003,
      name: 'Unauthorized',
      msg: 'Unauthorized.',
    },
    {
      code: 6004,
      name: 'InvalidPaymentWallet',
      msg: 'Invalid payment wallet provided.',
    },
    {
      code: 6005,
      name: 'InvalidAmountTransferred',
      msg: 'Invalid amount of SOL transferred.',
    },
    {
      code: 6006,
      name: 'InvalidPriceFeed',
      msg: 'Invalid Price Feed',
    },
  ],
}
