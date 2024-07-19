"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9530],{90861:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var o=t(85893),a=t(11151);const r={custom_edit_url:"https://github.com/microsoft/autogen/edit/main/website/docs/topics/non-openai-models/cloud-mistralai.ipynb",source_notebook:"/website/docs/topics/non-openai-models/cloud-mistralai.ipynb",title:"Mistral AI"},s="Mistral AI",i={id:"topics/non-openai-models/cloud-mistralai",title:"Mistral AI",description:"Open In Colab",source:"@site/docs/topics/non-openai-models/cloud-mistralai.mdx",sourceDirName:"topics/non-openai-models",slug:"/topics/non-openai-models/cloud-mistralai",permalink:"/autogen/docs/topics/non-openai-models/cloud-mistralai",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/autogen/edit/main/website/docs/topics/non-openai-models/cloud-mistralai.ipynb",tags:[],version:"current",frontMatter:{custom_edit_url:"https://github.com/microsoft/autogen/edit/main/website/docs/topics/non-openai-models/cloud-mistralai.ipynb",source_notebook:"/website/docs/topics/non-openai-models/cloud-mistralai.ipynb",title:"Mistral AI"},sidebar:"docsSidebar",previous:{title:"Groq",permalink:"/autogen/docs/topics/non-openai-models/cloud-groq"},next:{title:"Together.AI",permalink:"/autogen/docs/topics/non-openai-models/cloud-togetherai"}},l={},c=[{value:"Features",id:"features",level:2},{value:"Getting started",id:"getting-started",level:2},{value:"API parameters",id:"api-parameters",level:2},{value:"Two-Agent Coding Example",id:"two-agent-coding-example",level:2},{value:"Tool Call Example",id:"tool-call-example",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"mistral-ai",children:"Mistral AI"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://colab.research.google.com/github/microsoft/autogen/blob/main/website/docs/topics/non-openai-models/cloud-mistralai.ipynb",children:(0,o.jsx)(n.img,{src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open In Colab"})}),"\n",(0,o.jsx)(n.a,{href:"https://github.com/microsoft/autogen/blob/main/website/docs/topics/non-openai-models/cloud-mistralai.ipynb",children:(0,o.jsx)(n.img,{src:"https://img.shields.io/badge/Open%20on%20GitHub-grey?logo=github",alt:"Open on GitHub"})})]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://mistral.ai/",children:"Mistral AI"})," is a cloud based platform serving\ntheir own LLMs, like Mistral, Mixtral, and Codestral."]}),"\n",(0,o.jsxs)(n.p,{children:["Although AutoGen can be used with Mistral AI\u2019s API directly by changing\nthe ",(0,o.jsx)(n.code,{children:"base_url"})," to their url, it does not cater for some differences\nbetween messaging and, with their API being more strict than OpenAI\u2019s,\nit is recommended to use the Mistral AI Client class as shown in this\nnotebook."]}),"\n",(0,o.jsxs)(n.p,{children:["You will need a Mistral.AI account and create an API key. ",(0,o.jsx)(n.a,{href:"https://mistral.ai/",children:"See their\nwebsite for further details"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"features",children:"Features"}),"\n",(0,o.jsx)(n.p,{children:"When using this client class, messages are automatically tailored to\naccommodate the specific requirements of Mistral AI\u2019s API (such as role\norders), which have become more strict than OpenAI\u2019s API."}),"\n",(0,o.jsx)(n.p,{children:"Additionally, this client class provides support for function/tool\ncalling and will track token usage and cost correctly as per Mistral\nAI\u2019s API costs (as of June 2024)."}),"\n",(0,o.jsx)(n.h2,{id:"getting-started",children:"Getting started"}),"\n",(0,o.jsxs)(n.p,{children:["First you need to install the ",(0,o.jsx)(n.code,{children:"pyautogen"})," package to use AutoGen with\nthe Mistral API library."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"pip install pyautogen[mistral]\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Mistral provides a number of models to use, included below. See the list\nof ",(0,o.jsx)(n.a,{href:"https://docs.mistral.ai/platform/endpoints/",children:"models here"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["See the sample ",(0,o.jsx)(n.code,{children:"OAI_CONFIG_LIST"})," below showing how the Mistral AI client\nclass is used by specifying the ",(0,o.jsx)(n.code,{children:"api_type"})," as ",(0,o.jsx)(n.code,{children:"mistral"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'[\n    {\n        "model": "gpt-35-turbo",\n        "api_key": "your OpenAI Key goes here",\n    },\n    {\n        "model": "gpt-4-vision-preview",\n        "api_key": "your OpenAI Key goes here",\n    },\n    {\n        "model": "dalle",\n        "api_key": "your OpenAI Key goes here",\n    },\n    {\n        "model": "open-mistral-7b",\n        "api_key": "your Mistral AI API Key goes here",\n        "api_type": "mistral"\n    },\n    {\n        "model": "open-mixtral-8x7b",\n        "api_key": "your Mistral AI API Key goes here",\n        "api_type": "mistral"\n    },\n    {\n        "model": "open-mixtral-8x22b",\n        "api_key": "your Mistral AI API Key goes here",\n        "api_type": "mistral"\n    },\n    {\n        "model": "mistral-small-latest",\n        "api_key": "your Mistral AI API Key goes here",\n        "api_type": "mistral"\n    },\n    {\n        "model": "mistral-medium-latest",\n        "api_key": "your Mistral AI API Key goes here",\n        "api_type": "mistral"\n    },\n    {\n        "model": "mistral-large-latest",\n        "api_key": "your Mistral AI API Key goes here",\n        "api_type": "mistral"\n    },\n    {\n        "model": "codestral-latest",\n        "api_key": "your Mistral AI API Key goes here",\n        "api_type": "mistral"\n    }\n]\n'})}),"\n",(0,o.jsxs)(n.p,{children:["As an alternative to the ",(0,o.jsx)(n.code,{children:"api_key"})," key and value in the config, you can\nset the environment variable ",(0,o.jsx)(n.code,{children:"MISTRAL_API_KEY"})," to your Mistral AI key."]}),"\n",(0,o.jsx)(n.p,{children:"Linux/Mac:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'export MISTRAL_API_KEY="your_mistral_ai_api_key_here"\n'})}),"\n",(0,o.jsx)(n.p,{children:"Windows:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"set MISTRAL_API_KEY=your_mistral_ai_api_key_here\n"})}),"\n",(0,o.jsx)(n.h2,{id:"api-parameters",children:"API parameters"}),"\n",(0,o.jsxs)(n.p,{children:["The following parameters can be added to your config for the Mistral.AI\nAPI. See ",(0,o.jsx)(n.a,{href:"https://docs.mistral.ai/api/#operation/createChatCompletion",children:"this\nlink"})," for\nfurther information on them and their default values."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"temperature (number 0..1)"}),"\n",(0,o.jsx)(n.li,{children:"top_p (number 0..1)"}),"\n",(0,o.jsx)(n.li,{children:"max_tokens (null, integer >= 0)"}),"\n",(0,o.jsx)(n.li,{children:"random_seed (null, integer)"}),"\n",(0,o.jsx)(n.li,{children:"safe_prompt (True or False)"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Example:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'[\n    {\n        "model": "codestral-latest",\n        "api_key": "your Mistral AI API Key goes here",\n        "api_type": "mistral",\n        "temperature": 0.5,\n        "top_p": 0.2, # Note: It is recommended to set temperature or top_p but not both.\n        "max_tokens": 10000,\n        "safe_prompt": False,\n        "random_seed": 42\n    }\n]\n'})}),"\n",(0,o.jsx)(n.h2,{id:"two-agent-coding-example",children:"Two-Agent Coding Example"}),"\n",(0,o.jsx)(n.p,{children:"In this example, we run a two-agent chat with an AssistantAgent\n(primarily a coding agent) to generate code to count the number of prime\nnumbers between 1 and 10,000 and then it will be executed."}),"\n",(0,o.jsx)(n.p,{children:"We\u2019ll use Mistral\u2019s Mixtral 8x22B model which is suitable for coding."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'import os\n\nconfig_list = [\n    {\n        # Let\'s choose the Mixtral 8x22B model\n        "model": "open-mixtral-8x22b",\n        # Provide your Mistral AI API key here or put it into the MISTRAL_API_KEY environment variable.\n        "api_key": os.environ.get("MISTRAL_API_KEY"),\n        # We specify the API Type as \'mistral\' so it uses the Mistral AI client class\n        "api_type": "mistral",\n    }\n]\n'})}),"\n",(0,o.jsx)(n.p,{children:"Importantly, we have tweaked the system message so that the model\ndoesn\u2019t return the termination keyword, which we\u2019ve changed to FINISH,\nwith the code block."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'from pathlib import Path\n\nfrom autogen import AssistantAgent, UserProxyAgent\nfrom autogen.coding import LocalCommandLineCodeExecutor\n\n# Setting up the code executor\nworkdir = Path("coding")\nworkdir.mkdir(exist_ok=True)\ncode_executor = LocalCommandLineCodeExecutor(work_dir=workdir)\n\n# Setting up the agents\n\n# The UserProxyAgent will execute the code that the AssistantAgent provides\nuser_proxy_agent = UserProxyAgent(\n    name="User",\n    code_execution_config={"executor": code_executor},\n    is_termination_msg=lambda msg: "FINISH" in msg.get("content"),\n)\n\nsystem_message = """You are a helpful AI assistant who writes code and the user executes it.\nSolve tasks using your coding and language skills.\nIn the following cases, suggest python code (in a python coding block) for the user to execute.\nSolve the task step by step if you need to. If a plan is not provided, explain your plan first. Be clear which step uses code, and which step uses your language skill.\nWhen using code, you must indicate the script type in the code block. The user cannot provide any other feedback or perform any other action beyond executing the code you suggest. The user can\'t modify your code. So do not suggest incomplete code which requires users to modify. Don\'t use a code block if it\'s not intended to be executed by the user.\nDon\'t include multiple code blocks in one response. Do not ask users to copy and paste the result. Instead, use \'print\' function for the output when relevant. Check the execution result returned by the user.\nIf the result indicates there is an error, fix the error and output the code again. Suggest the full code instead of partial code or code changes. If the error can\'t be fixed or if the task is not solved even after the code is executed successfully, analyze the problem, revisit your assumption, collect additional info you need, and think of a different approach to try.\nWhen you find an answer, verify the answer carefully. Include verifiable evidence in your response if possible.\nIMPORTANT: Wait for the user to execute your code and then you can reply with the word "FINISH". DO NOT OUTPUT "FINISH" after your code block."""\n\n# The AssistantAgent, using Mistral AI\'s model, will take the coding request and return code\nassistant_agent = AssistantAgent(\n    name="Mistral Assistant",\n    system_message=system_message,\n    llm_config={"config_list": config_list},\n)\n'})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'# Start the chat, with the UserProxyAgent asking the AssistantAgent the message\nchat_result = user_proxy_agent.initiate_chat(\n    assistant_agent,\n    message="Provide code to count the number of prime numbers from 1 to 10000.",\n)\n'})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-text",children:"User (to Mistral Assistant):\n\nProvide code to count the number of prime numbers from 1 to 10000.\n\n--------------------------------------------------------------------------------\nMistral Assistant (to User):\n\nTo solve this task, I will write a Python function that checks if a number is prime or not. Then, I will iterate through the numbers from 1 to 10000 and count the prime numbers. Here's the plan:\n\n1. Write a function `is_prime(n)` that checks if a number `n` is prime.\n2. Initialize a variable `prime_count` to 0.\n3. Iterate through numbers from 1 to 10000 using a for loop.\n4. For each number, call the `is_prime(n)` function.\n5. If the function returns True, increment the `prime_count` by 1.\n6. Finally, print the `prime_count`.\n\nHere's the code that implements this plan:\n\n```python\ndef is_prime(n):\n    if n <= 1:\n        return False\n    if n <= 3:\n        return True\n    if n % 2 == 0 or n % 3 == 0:\n        return False\n    i = 5\n    while i * i <= n:\n        if n % i == 0 or n % (i + 2) == 0:\n            return False\n        i += 6\n    return True\n\nprime_count = 0\nfor num in range(1, 10001):\n    if is_prime(num):\n        prime_count += 1\n\nprint(prime_count)\n```\n\nThis code will count the number of prime numbers from 1 to 10000 and print the result. Please execute the code and let me know the output.\n```python\ndef is_prime(n):\n    if n <= 1:\n        return False\n    if n <= 3:\n        return True\n    if n % 2 == 0 or n % 3 == 0:\n        return False\n    i = 5\n    while i * i <= n:\n        if n % i == 0 or n % (i + 2) == 0:\n            return False\n        i += 6\n    return True\n\nprime_count = 0\nfor num in range(1, 10001):\n    if is_prime(num):\n        prime_count += 1\n\nprime_count\n```\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> NO HUMAN INPUT RECEIVED.\n\n>>>>>>>> USING AUTO REPLY...\n\n>>>>>>>> EXECUTING 2 CODE BLOCKS (inferred languages are [python, python])...\nUser (to Mistral Assistant):\n\nexitcode: 0 (execution succeeded)\nCode output: 1229\n\n\n--------------------------------------------------------------------------------\nMistral Assistant (to User):\n\nThe code executed successfully and the output is 1229.\n\nThis means there are 1229 prime numbers from 1 to 10000.\n\nThe code defines a function `is_prime(n)` that checks if a number `n` is prime or not. Then, it initializes a variable `prime_count` to 0. It iterates through numbers from 1 to 10000 using a for loop. For each number, it calls the `is_prime(n)` function. If the function returns True, indicating that the number is prime, it increments the `prime_count` by 1. Finally, it prints the `prime_count`.\n\nThis code efficiently checks for prime numbers and accurately counts the number of prime numbers from 1 to 10000.\n\nFINISH\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> NO HUMAN INPUT RECEIVED.\n"})}),"\n",(0,o.jsx)(n.h2,{id:"tool-call-example",children:"Tool Call Example"}),"\n",(0,o.jsx)(n.p,{children:"In this example, instead of writing code, we will have two agents\nplaying chess against each other using tool calling to make moves."}),"\n",(0,o.jsx)(n.p,{children:"We\u2019ll change models to Mistral AI\u2019s large model for this challenging\ntask."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'config_list = [\n    {\n        # Let\'s choose the Mistral AI\'s largest model which is better at Chess than the Mixtral model\n        "model": "mistral-large-latest",\n        "api_key": os.environ.get("MISTRAL_API_KEY"),\n        "api_type": "mistral",\n    }\n]\n'})}),"\n",(0,o.jsxs)(n.p,{children:["First install the ",(0,o.jsx)(n.code,{children:"chess"})," package by running the following command:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"! pip install chess\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-text",children:"Defaulting to user installation because normal site-packages is not writeable\nRequirement already satisfied: chess in /home/autogen/.local/lib/python3.11/site-packages (1.10.0)\n"})}),"\n",(0,o.jsx)(n.p,{children:"Write the function for making a move."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'import random\n\nimport chess\nimport chess.svg\nfrom IPython.display import display\nfrom typing_extensions import Annotated\n\nboard = chess.Board()\n\n\ndef make_move() -> Annotated[str, "A move in UCI format"]:\n    moves = list(board.legal_moves)\n    move = random.choice(moves)\n    board.push(move)\n    # Display the board.\n    display(chess.svg.board(board, size=400))\n    return str(move)\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Let\u2019s create the agents. We have three different agents: -\n",(0,o.jsx)(n.code,{children:"player_white"})," is the agent that plays white. - ",(0,o.jsx)(n.code,{children:"player_black"})," is the\nagent that plays black. - ",(0,o.jsx)(n.code,{children:"board_proxy"})," is the agent that moves the\npieces on the board."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'from autogen import ConversableAgent, register_function\n\nplayer_white = ConversableAgent(\n    name="Player White",\n    system_message="You are a chess player and you play as white. " "Always call make_move() to make a move",\n    llm_config={"config_list": config_list, "cache_seed": None},\n)\n\nplayer_black = ConversableAgent(\n    name="Player Black",\n    system_message="You are a chess player and you play as black. " "Always call make_move() to make a move",\n    llm_config={"config_list": config_list, "cache_seed": None},\n)\n\nboard_proxy = ConversableAgent(\n    name="Board Proxy",\n    llm_config=False,\n    # The board proxy will only respond to the make_move function.\n    is_termination_msg=lambda msg: "tool_calls" not in msg,\n)\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Register tools for the agents. See the ",(0,o.jsx)(n.a,{href:"../../../docs/tutorial/tool-use",children:"tutorial chapter on tool\nuse"})," for more information."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'register_function(\n    make_move,\n    caller=player_white,\n    executor=board_proxy,\n    name="make_move",\n    description="Make a move.",\n)\n\nregister_function(\n    make_move,\n    caller=player_black,\n    executor=board_proxy,\n    name="make_move",\n    description="Make a move.",\n)\n'})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-text",children:"/home/autogen/autogen/autogen/agentchat/conversable_agent.py:2408: UserWarning: Function 'make_move' is being overridden.\n  warnings.warn(f\"Function '{name}' is being overridden.\", UserWarning)\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Register nested chats for the player agents. Nested chats allows each\nplayer agent to chat with the board proxy agent to make a move, before\ncommunicating with the other player agent. See the ",(0,o.jsx)(n.a,{href:"../../../docs/tutorial/conversation-patterns#nested-chats",children:"nested chats\ntutorial\nchapter"})," for\nmore information."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'player_white.register_nested_chats(\n    trigger=player_black,\n    chat_queue=[\n        {\n            "sender": board_proxy,\n            "recipient": player_white,\n        }\n    ],\n)\n\nplayer_black.register_nested_chats(\n    trigger=player_white,\n    chat_queue=[\n        {\n            "sender": board_proxy,\n            "recipient": player_black,\n        }\n    ],\n)\n'})}),"\n",(0,o.jsx)(n.p,{children:"Clear the board and start the chess game."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'# Clear the board.\nboard = chess.Board()\n\nchat_result = player_white.initiate_chat(\n    player_black,\n    message="Let\'s play chess! Your move.",\n    max_turns=4,\n)\n'})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-text",children:"Player White (to Player Black):\n\nLet's play chess! Your move.\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> USING AUTO REPLY...\n\n********************************************************************************\nStarting a new chat....\n\n********************************************************************************\nBoard Proxy (to Player Black):\n\nLet's play chess! Your move.\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> USING AUTO REPLY...\nPlayer Black (to Board Proxy):\n\n\n***** Suggested tool call (AcS1aX4Rl): make_move *****\nArguments: \n{}\n******************************************************\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> USING AUTO REPLY...\n\n>>>>>>>> EXECUTING FUNCTION make_move...\nBoard Proxy (to Player Black):\n\nBoard Proxy (to Player Black):\n\n***** Response from calling tool (AcS1aX4Rl) *****\ng1h3\n**************************************************\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> USING AUTO REPLY...\nPlayer Black (to Board Proxy):\n\nI have made my move. It's g1h3. Your turn.\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> NO HUMAN INPUT RECEIVED.\nPlayer Black (to Player White):\n\nI have made my move. It's g1h3. Your turn.\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> USING AUTO REPLY...\n\n********************************************************************************\nStarting a new chat....\n\n********************************************************************************\nBoard Proxy (to Player White):\n\nI have made my move. It's g1h3. Your turn.\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> USING AUTO REPLY...\nPlayer White (to Board Proxy):\n\n\n***** Suggested tool call (tWVXVAujE): make_move *****\nArguments: \n{}\n******************************************************\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> USING AUTO REPLY...\n\n>>>>>>>> EXECUTING FUNCTION make_move...\nBoard Proxy (to Player White):\n\nBoard Proxy (to Player White):\n\n***** Response from calling tool (tWVXVAujE) *****\nd7d5\n**************************************************\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> USING AUTO REPLY...\nPlayer White (to Board Proxy):\n\nI have made my move. It's d7d5. Your turn.\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> NO HUMAN INPUT RECEIVED.\nPlayer White (to Player Black):\n\nI have made my move. It's d7d5. Your turn.\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> USING AUTO REPLY...\n\n********************************************************************************\nStarting a new chat....\n\n********************************************************************************\nBoard Proxy (to Player Black):\n\nI have made my move. It's d7d5. Your turn.\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> USING AUTO REPLY...\nPlayer Black (to Board Proxy):\n\n\n***** Suggested tool call (ZOfvRz0B1): make_move *****\nArguments: \n{}\n******************************************************\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> USING AUTO REPLY...\n\n>>>>>>>> EXECUTING FUNCTION make_move...\nBoard Proxy (to Player Black):\n\nBoard Proxy (to Player Black):\n\n***** Response from calling tool (ZOfvRz0B1) *****\nb1c3\n**************************************************\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> USING AUTO REPLY...\nPlayer Black (to Board Proxy):\n\nI have made my move. It's b1c3. Your turn.\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> NO HUMAN INPUT RECEIVED.\nPlayer Black (to Player White):\n\nI have made my move. It's b1c3. Your turn.\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> USING AUTO REPLY...\n\n********************************************************************************\nStarting a new chat....\n\n********************************************************************************\nBoard Proxy (to Player White):\n\nI have made my move. It's b1c3. Your turn.\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> USING AUTO REPLY...\nPlayer White (to Board Proxy):\n\n\n***** Suggested tool call (LovRpi6Pq): make_move *****\nArguments: \n{}\n******************************************************\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> USING AUTO REPLY...\n\n>>>>>>>> EXECUTING FUNCTION make_move...\nBoard Proxy (to Player White):\n\nBoard Proxy (to Player White):\n\n***** Response from calling tool (LovRpi6Pq) *****\nc8g4\n**************************************************\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> USING AUTO REPLY...\nPlayer White (to Board Proxy):\n\nI have made my move. It's c8g4. Your turn.\n\n--------------------------------------------------------------------------------\nPlayer White (to Player Black):\n\nI have made my move. It's c8g4. Your turn.\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> USING AUTO REPLY...\n\n********************************************************************************\nStarting a new chat....\n\n********************************************************************************\nBoard Proxy (to Player Black):\n\nI have made my move. It's c8g4. Your turn.\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> USING AUTO REPLY...\nPlayer Black (to Board Proxy):\n\n\n***** Suggested tool call (RfhC8brG7): make_move *****\nArguments: \n{}\n******************************************************\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> USING AUTO REPLY...\n\n>>>>>>>> EXECUTING FUNCTION make_move...\nBoard Proxy (to Player Black):\n\nBoard Proxy (to Player Black):\n\n***** Response from calling tool (RfhC8brG7) *****\na1b1\n**************************************************\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> USING AUTO REPLY...\nPlayer Black (to Board Proxy):\n\nI have made my move. It's a1b1. Your turn.\n\n--------------------------------------------------------------------------------\nPlayer Black (to Player White):\n\nI have made my move. It's a1b1. Your turn.\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> USING AUTO REPLY...\n\n********************************************************************************\nStarting a new chat....\n\n********************************************************************************\nBoard Proxy (to Player White):\n\nI have made my move. It's a1b1. Your turn.\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> USING AUTO REPLY...\nPlayer White (to Board Proxy):\n\n\n***** Suggested tool call (6aVW1t0lm): make_move *****\nArguments: \n{}\n******************************************************\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> USING AUTO REPLY...\n\n>>>>>>>> EXECUTING FUNCTION make_move...\nBoard Proxy (to Player White):\n\nBoard Proxy (to Player White):\n\n***** Response from calling tool (6aVW1t0lm) *****\na7a6\n**************************************************\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> USING AUTO REPLY...\nPlayer White (to Board Proxy):\n\nI have made my move. It's a7a6. Your turn.\n\n--------------------------------------------------------------------------------\nPlayer White (to Player Black):\n\nI have made my move. It's a7a6. Your turn.\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> USING AUTO REPLY...\n\n********************************************************************************\nStarting a new chat....\n\n********************************************************************************\nBoard Proxy (to Player Black):\n\nI have made my move. It's a7a6. Your turn.\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> USING AUTO REPLY...\nPlayer Black (to Board Proxy):\n\n\n***** Suggested tool call (kPTEInlLR): make_move *****\nArguments: \n{}\n******************************************************\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> USING AUTO REPLY...\n\n>>>>>>>> EXECUTING FUNCTION make_move...\nBoard Proxy (to Player Black):\n\nBoard Proxy (to Player Black):\n\n***** Response from calling tool (kPTEInlLR) *****\nh3f4\n**************************************************\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> USING AUTO REPLY...\nPlayer Black (to Board Proxy):\n\nI have made my move. It's h3f4. Your turn.\n\n--------------------------------------------------------------------------------\nPlayer Black (to Player White):\n\nI have made my move. It's h3f4. Your turn.\n\n--------------------------------------------------------------------------------\n"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:t(70574).Z+"",width:"400",height:"400"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-text",children:"[runtime logging] log_function_use: autogen logger is None\n[runtime logging] log_function_use: autogen logger is None\n[runtime logging] log_function_use: autogen logger is None\n[runtime logging] log_function_use: autogen logger is None\n[runtime logging] log_function_use: autogen logger is None\n[runtime logging] log_function_use: autogen logger is None\n[runtime logging] log_function_use: autogen logger is None\n"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:t(82287).Z+"",width:"400",height:"400"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:t(40176).Z+"",width:"400",height:"400"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:t(17656).Z+"",width:"400",height:"400"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:t(90855).Z+"",width:"400",height:"400"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:t(79760).Z+"",width:"400",height:"400"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:t(139).Z+"",width:"400",height:"400"})})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},70574:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/cell-11-output-2-8afc976ea38ba6bf705120e1cc03a598.svg"},82287:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/cell-11-output-4-94ad724e2648d7c2f99c06a70d7f503f.svg"},40176:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/cell-11-output-5-7a236d6a754e45227932de44660bac15.svg"},17656:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/cell-11-output-6-bcb4bfdd4a0eaf04bf7ab22791aa68d3.svg"},90855:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/cell-11-output-7-30fd19ceb8fd91dbbf54fbb487a51b7c.svg"},79760:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/cell-11-output-8-f1116d2f4c75cbb7d26667c96e51e49c.svg"},139:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/cell-11-output-9-106cf80775fc4f6144bde69e60ea86ef.svg"},11151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>s});var o=t(67294);const a={},r=o.createContext(a);function s(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);