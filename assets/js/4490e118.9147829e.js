"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3317],{535:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var a=n(5893),i=n(1151);const s={title:"How to Assess Utility of LLM-powered Applications?",authors:["julianakiseleva","narabzad"],tags:["LLM","GPT","evaluation","task utility"]},r=void 0,o={permalink:"/autogen/blog/2023/11/20/AgentEval",source:"@site/blog/2023-11-20-AgentEval/index.mdx",title:"How to Assess Utility of LLM-powered Applications?",description:"Fig.1: A verification framework",date:"2023-11-20T00:00:00.000Z",formattedDate:"November 20, 2023",tags:[{label:"LLM",permalink:"/autogen/blog/tags/llm"},{label:"GPT",permalink:"/autogen/blog/tags/gpt"},{label:"evaluation",permalink:"/autogen/blog/tags/evaluation"},{label:"task utility",permalink:"/autogen/blog/tags/task-utility"}],readingTime:9.48,hasTruncateMarker:!1,authors:[{name:"Julia Kiseleva",title:"Senior Researcher at Microsoft Research",url:"https://github.com/julianakiseleva/",imageURL:"https://avatars.githubusercontent.com/u/5908392?v=4",key:"julianakiseleva"},{name:"Negar Arabzadeh",title:"PhD student at the University of Waterloo",url:"https://www.negara.me/",imageURL:"https://github.com/Narabzad.png",key:"narabzad"}],frontMatter:{title:"How to Assess Utility of LLM-powered Applications?",authors:["julianakiseleva","narabzad"],tags:["LLM","GPT","evaluation","task utility"]},unlisted:!1,prevItem:{title:"Agent AutoBuild - Automatically Building Multi-agent Systems",permalink:"/autogen/blog/2023/11/26/Agent-AutoBuild"},nextItem:{title:"AutoGen Meets GPTs",permalink:"/autogen/blog/2023/11/13/OAI-assistants"}},l={authorsImageUrls:[void 0,void 0]},c=[{value:"Introduction",id:"introduction",level:2},{value:"<code>AgentEval</code> Framework",id:"agenteval-framework",level:2},{value:"<code>AgentEval</code> Results based on Math Problems Dataset",id:"agenteval-results-based-on-math-problems-dataset",level:2},{value:"Limitations and Future Work",id:"limitations-and-future-work",level:2},{value:"Summary",id:"summary",level:2},{value:"Previous Research",id:"previous-research",level:2}];function d(e){const t={a:"a",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Fig.1: A verification framework",src:n(4690).Z+"",width:"3142",height:"640"})}),"\n",(0,a.jsx)("p",{align:"center",children:(0,a.jsx)("em",{children:"Fig.1 illustrates the general flow of AgentEval"})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"TL;DR:"})}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"As a developer of an LLM-powered application, how can you assess the utility it brings to end users while helping them with their tasks?"}),"\n",(0,a.jsxs)(t.li,{children:["To shed light on the question above, we introduce ",(0,a.jsx)(t.code,{children:"AgentEval"})," \u2014 the first version of the framework to assess the utility of any LLM-powered application crafted to assist users in specific tasks.  AgentEval aims to simplify the evaluation process by automatically proposing a set of criteria tailored to the unique purpose of your application. This allows for a comprehensive assessment, quantifying the utility of your application against the suggested criteria."]}),"\n",(0,a.jsxs)(t.li,{children:["We demonstrate how ",(0,a.jsx)(t.code,{children:"AgentEval"})," work using ",(0,a.jsx)(t.a,{href:"https://microsoft.github.io/autogen/blog/2023/06/28/MathChat",children:"math problems dataset"})," as an example in the ",(0,a.jsx)(t.a,{href:"https://github.com/microsoft/autogen/blob/main/notebook/agenteval_cq_math.ipynb",children:"following notebook"}),". Any feedback would be useful for future development. Please contact us on our ",(0,a.jsx)(t.a,{href:"http://aka.ms/autogen-dc",children:"Discord"}),"."]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,a.jsx)(t.p,{children:"AutoGen aims to simplify the development of LLM-powered multi-agent systems for various applications, ultimately making end users' lives easier by assisting with their tasks. Next, we all yearn to understand how our developed systems perform, their utility for users, and, perhaps most crucially, how we can enhance them. Directly evaluating multi-agent systems poses challenges as current approaches predominantly rely on success metrics \u2013 essentially, whether the agent accomplishes tasks. However, comprehending user interaction with a system involves far more than success alone. Take math problems, for instance; it's not merely about the agent solving the problem. Equally significant is its ability to convey solutions based on various criteria, including completeness, conciseness, and the clarity of the provided explanation. Furthermore, success isn't always clearly defined for every task."}),"\n",(0,a.jsxs)(t.p,{children:["Rapid advances in LLMs and multi-agent systems have brought forth many emerging capabilities that we're keen on translating into tangible utilities for end users. We introduce the first version of ",(0,a.jsx)(t.code,{children:"AgentEval"})," framework - a tool crafted to empower developers in swiftly gauging the utility of LLM-powered applications designed to help end users accomplish the desired task."]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.img,{alt:"Fig.2: An overview of the tasks taxonomy",src:n(8850).Z+"",width:"1954",height:"1111"}),"\r\n",(0,a.jsx)("p",{align:"center",children:(0,a.jsx)("em",{children:"Fig. 2 provides  an overview of the tasks taxonomy"})})]}),"\n",(0,a.jsx)(t.p,{children:"Let's first look into an overview of the suggested task taxonomy that a multi-agent system can be designed for. In general, the tasks can be split into two types, where:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.em,{children:"Success is not clearly defined"})," - refer to instances when users utilize a system in an assistive manner, seeking suggestions rather than expecting the system to solve the task. For example, a user might request the system to generate an email. In many cases, this generated content serves as a template that the user will later edit. However, defining success precisely for such tasks is relatively complex."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.em,{children:"Success is clearly defined"})," - refer to instances where we can clearly define whether a system solved the task or not. Consider agents that assist in accomplishing household tasks, where the definition of success is clear and measurable. This category can be further divided into two separate subcategories:","\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.em,{children:"The optimal solution exits"})," - these are tasks where only one solution is possible. For example, if you ask your assistant to turn on the light, the success of this task is clearly defined, and there is only one way to accomplish it."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.em,{children:"Multiple solutions exist"})," - increasingly, we observe situations where multiple trajectories of agent behavior can lead to either success or failure. In such cases, it is crucial to differentiate between the various successful and unsuccessful trajectories. For example, when you ask the agent to suggest you a food recipe or tell you a joke."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["In our ",(0,a.jsx)(t.code,{children:"AgentEval"})," framework, we are currently focusing on tasks where ",(0,a.jsx)(t.em,{children:"Success is clearly defined"}),". Next, we will introduce the suggested framework."]}),"\n",(0,a.jsxs)(t.h2,{id:"agenteval-framework",children:[(0,a.jsx)(t.code,{children:"AgentEval"})," Framework"]}),"\n",(0,a.jsxs)(t.p,{children:["Our previous research on ",(0,a.jsx)(t.a,{href:"https://github.com/microsoft/iglu-datasets",children:"assistive agents in Minecraft"})," suggested that the most optimal way to obtain human judgments is to present humans with two agents side by side and ask for preferences. In this setup of pairwise comparison, humans can develop criteria to explain why they prefer the behavior of one agent over another. For instance, ",(0,a.jsx)(t.em,{children:"'the first agent was faster in execution,'"})," or ",(0,a.jsx)(t.em,{children:"'the second agent moves more naturally.'"})," So, the comparative nature led humans to come up with a list of criteria that helps to infer the utility of the task. With this idea in mind, we designed ",(0,a.jsx)(t.code,{children:"AgentEval"})," (shown in Fig. 1), where we employ LLMs to help us understand, verify, and assess task ",(0,a.jsx)(t.em,{children:"utility"})," for the multi-agent system. Namely:"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["The goal of ",(0,a.jsx)(t.code,{children:"CriticAgent"})," is to suggest the list of criteria (Fig. 1), that can be used to assess task utility. This is an example of how ",(0,a.jsx)(t.code,{children:"CriticAgent"})," is defined using ",(0,a.jsx)(t.code,{children:"Autogen"}),":"]}),"\n"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:'critic = autogen.AssistantAgent(\r\n    name="critic",\r\n    llm_config={"config_list": config_list},\r\n    system_message="""You are a helpful assistant. You suggest criteria for evaluating different tasks. They should be distinguishable, quantifiable, and not redundant.\r\n    Convert the evaluation criteria into a dictionary where the keys are the criteria.\r\n    The value of each key is a dictionary as follows {"description": criteria description, "accepted_values": possible accepted inputs for this key}\r\n    Make sure the keys are criteria for assessing the given task. "accepted_values" include the acceptable inputs for each key that are fine-grained and preferably multi-graded levels. "description" includes the criterion description.\r\n    Return only the dictionary."""\r\n)\n'})}),"\n",(0,a.jsxs)(t.p,{children:["Next, the critic is given successful and failed examples of the task execution; then, it is able to return a list of criteria (Fig. 1). For reference, use the ",(0,a.jsx)(t.a,{href:"https://github.com/microsoft/autogen/blob/main/notebook/agenteval_cq_math.ipynb",children:"following notebook"}),"."]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["The goal of ",(0,a.jsx)(t.code,{children:"QuantifierAgent"})," is to quantify each of the suggested criteria (Fig. 1), providing us with an idea of the utility of this system for the given task. Here is an example of how it can be defined:"]}),"\n"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:'quantifier = autogen.AssistantAgent(\r\n    name="quantifier",\r\n    llm_config={"config_list": config_list},\r\n    system_message = """You are a helpful assistant. You quantify the output of different tasks based on the given criteria.\r\n    The criterion is given in a dictionary format where each key is a distinct criteria.\r\n    The value of each key is a dictionary as follows {"description": criteria description , "accepted_values": possible accepted inputs for this key}\r\n    You are going to quantify each of the criteria for a given task based on the task description.\r\n    Return a dictionary where the keys are the criteria and the values are the assessed performance based on accepted values for each criteria.\r\n    Return only the dictionary."""\r\n\r\n)\n'})}),"\n",(0,a.jsxs)(t.h2,{id:"agenteval-results-based-on-math-problems-dataset",children:[(0,a.jsx)(t.code,{children:"AgentEval"})," Results based on Math Problems Dataset"]}),"\n",(0,a.jsx)(t.p,{children:"As an example, after running CriticAgent, we obtained the following criteria to verify the results for math problem dataset:"}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Criteria"}),(0,a.jsx)(t.th,{children:"Description"}),(0,a.jsx)(t.th,{children:"Accepted Values"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"Problem Interpretation"}),(0,a.jsx)(t.td,{children:"Ability to correctly interpret the problem"}),(0,a.jsx)(t.td,{children:'["completely off", "slightly relevant", "relevant", "mostly accurate", "completely accurate"]'})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"Mathematical Methodology"}),(0,a.jsx)(t.td,{children:"Adequacy of the chosen mathematical or algorithmic methodology for the question"}),(0,a.jsx)(t.td,{children:'["inappropriate", "barely adequate", "adequate", "mostly effective", "completely effective"]'})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"Calculation Correctness"}),(0,a.jsx)(t.td,{children:"Accuracy of calculations made and solutions given"}),(0,a.jsx)(t.td,{children:'["completely incorrect", "mostly incorrect", "neither", "mostly correct", "completely correct"]'})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"Explanation Clarity"}),(0,a.jsx)(t.td,{children:"Clarity and comprehensibility of explanations, including language use and structure"}),(0,a.jsx)(t.td,{children:'["not at all clear", "slightly clear", "moderately clear", "very clear", "completely clear"]'})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"Code Efficiency"}),(0,a.jsx)(t.td,{children:"Quality of code in terms of efficiency and elegance"}),(0,a.jsx)(t.td,{children:'["not at all efficient", "slightly efficient", "moderately efficient", "very efficient", "extremely efficient"]'})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"Code Correctness"}),(0,a.jsx)(t.td,{children:"Correctness of the provided code"}),(0,a.jsx)(t.td,{children:'["completely incorrect", "mostly incorrect", "partly correct", "mostly correct", "completely correct"]'})]})]})]}),"\n",(0,a.jsx)(t.p,{children:"Then, after running QuantifierAgent, we obtained the results presented in Fig. 3, where you can see three models:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"AgentChat"}),"\n",(0,a.jsx)(t.li,{children:"ReAct"}),"\n",(0,a.jsx)(t.li,{children:"GPT-4 Vanilla Solver"}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"Lighter colors represent estimates for failed cases, and brighter colors show how discovered criteria were quantified."}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.img,{alt:"Fig.3: Results based on overall math problems dataset _s stands for successful cases, _f - stands for failed cases",src:n(5003).Z+"",width:"1200",height:"800"}),"\r\n",(0,a.jsx)("p",{align:"center",children:(0,a.jsxs)("em",{children:["Fig.3 presents results based on overall math problems dataset ",(0,a.jsx)(t.code,{children:"_s"})," stands for successful cases, ",(0,a.jsx)(t.code,{children:"_f"})," - stands for failed cases"]})})]}),"\n",(0,a.jsx)(t.p,{children:"We note that while applying agentEval to math problems, the agent was not exposed to any ground truth information about the problem. As such, this figure illustrates an estimated performance of the three different agents, namely, Autogen (blue), Gpt-4 (red), and ReAct (green). We observe that by comparing the performance of any of the three agents in successful cases (dark bars of any color) versus unsuccessful cases (lighter version of the same bar), we note that AgentEval was able to assign higher quantification to successful cases than that of failed ones. This observation verifies AgentEval's ability for task utility prediction. Additionally, AgentEval allows us to go beyond just a binary definition of success, enabling a more in-depth comparison between successful and failed cases."}),"\n",(0,a.jsx)(t.p,{children:"It's important not only to identify what is not working but also to recognize what and why actually went well."}),"\n",(0,a.jsx)(t.h2,{id:"limitations-and-future-work",children:"Limitations and Future Work"}),"\n",(0,a.jsxs)(t.p,{children:["The current implementation of ",(0,a.jsx)(t.code,{children:"AgentEval"})," has a number of limitations which are planning to overcome in the future:"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["The list of criteria varies per run (unless you store a seed). We would recommend to run ",(0,a.jsx)(t.code,{children:"CriticAgent"})," at least two times, and pick criteria you think is important for your domain."]}),"\n",(0,a.jsxs)(t.li,{children:["The results of the ",(0,a.jsx)(t.code,{children:"QuantifierAgent"})," can vary with each run, so we recommend conducting multiple runs to observe the extent of result variations."]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"To mitigate the limitations mentioned above, we are working on VerifierAgent, whose goal is to stabilize the results and provide additional explanations."}),"\n",(0,a.jsx)(t.h2,{id:"summary",children:"Summary"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"CriticAgent"})," and ",(0,a.jsx)(t.code,{children:"QuantifierAgent"})," can be applied to the logs of any type of application, providing you with an in-depth understanding of the utility your solution brings to the user for a given task."]}),"\n",(0,a.jsxs)(t.p,{children:["We would love to hear about how AgentEval works for your application. Any feedback would be useful for future development. Please contact us on our ",(0,a.jsx)(t.a,{href:"http://aka.ms/autogen-dc",children:"Discord"}),"."]}),"\n",(0,a.jsx)(t.h2,{id:"previous-research",children:"Previous Research"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:'@InProceedings{pmlr-v176-kiseleva22a,\r\n  title = "Interactive Grounded Language Understanding in a Collaborative Environment: IGLU 2021",\r\n  author = "Kiseleva, Julia and Li, Ziming and Aliannejadi, Mohammad and Mohanty, Shrestha and ter Hoeve, Maartje and Burtsev, Mikhail and Skrynnik, Alexey and Zholus, Artem and Panov, Aleksandr and Srinet, Kavya and Szlam, Arthur and Sun, Yuxuan and Hofmann, Katja and C{\\^o}t{\\\'e}, Marc-Alexandre and Awadallah, Ahmed and Abdrazakov, Linar and Churin, Igor and Manggala, Putra and Naszadi, Kata and van der Meer, Michiel and Kim, Taewoon",\r\n  booktitle = "Proceedings of the NeurIPS 2021 Competitions and Demonstrations Track",\r\n  pages = "146--161",\r\n  year = 2022,\r\n  editor = "Kiela, Douwe and Ciccone, Marco and Caputo, Barbara",\r\n  volume = 176,\r\n  series = "Proceedings of Machine Learning Research",\r\n  month = "06--14 Dec",\r\n  publisher = "PMLR",\r\n  pdf = \t {https://proceedings.mlr.press/v176/kiseleva22a/kiseleva22a.pdf},\r\n  url = \t {https://proceedings.mlr.press/v176/kiseleva22a.html}.\r\n}\n'})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:'@InProceedings{pmlr-v220-kiseleva22a,\r\n  title = "Interactive Grounded Language Understanding in a Collaborative Environment: Retrospective on Iglu 2022 Competition",\r\n  author = "Kiseleva, Julia and Skrynnik, Alexey and Zholus, Artem and Mohanty, Shrestha and Arabzadeh, Negar and C\\^{o}t\\\'e, Marc-Alexandre and Aliannejadi, Mohammad and Teruel, Milagro and Li, Ziming and Burtsev, Mikhail and ter Hoeve, Maartje and Volovikova, Zoya and Panov, Aleksandr and Sun, Yuxuan and Srinet, Kavya and Szlam, Arthur and Awadallah, Ahmed and Rho, Seungeun and Kwon, Taehwan and Wontae Nam, Daniel and Bivort Haiek, Felipe and Zhang, Edwin and Abdrazakov, Linar and Qingyam, Guo and Zhang, Jason and Guo, Zhibin",\r\n  booktitle = "Proceedings of the NeurIPS 2022 Competitions Track",\r\n  pages = "204--216",\r\n  year = 2022,\r\n  editor = "Ciccone, Marco and Stolovitzky, Gustavo and Albrecht, Jacob",\r\n  volume = 220,\r\n  series = "Proceedings of Machine Learning Research",\r\n  month = "28 Nov--09 Dec",\r\n  publisher = "PMLR",\r\n  pdf = "https://proceedings.mlr.press/v220/kiseleva22a/kiseleva22a.pdf",\r\n  url = "https://proceedings.mlr.press/v220/kiseleva22a.html".\r\n}\n'})})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},4690:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/agenteval-CQ-59f82d98878045817d02a3915839a92a.png"},5003:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/math-problems-plot-03ec81b957c85db6ad9b1da353784b96.png"},8850:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/tasks-taxonomy-c4b7c6fe465e12dddde9235c3ee8c281.png"},1151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>r});var a=n(7294);const i={},s=a.createContext(i);function r(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);