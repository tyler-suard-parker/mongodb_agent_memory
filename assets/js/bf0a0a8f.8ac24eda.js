"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9631],{8506:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var i=t(5893),o=t(1151);const s={title:"AutoGen Studio: Interactively Explore Multi-Agent Workflows",authors:["victordibia","gagb","samershi"],tags:["AutoGen","UI","web","UX"]},a=void 0,r={permalink:"/autogen/blog/2023/12/01/AutoGenStudio",source:"@site/blog/2023-12-01-AutoGenStudio/index.mdx",title:"AutoGen Studio: Interactively Explore Multi-Agent Workflows",description:"AutoGen Studio Playground View: Solving a task with multiple agents that generate a pdf document with images.",date:"2023-12-01T00:00:00.000Z",formattedDate:"December 1, 2023",tags:[{label:"AutoGen",permalink:"/autogen/blog/tags/auto-gen"},{label:"UI",permalink:"/autogen/blog/tags/ui"},{label:"web",permalink:"/autogen/blog/tags/web"},{label:"UX",permalink:"/autogen/blog/tags/ux"}],readingTime:9.085,hasTruncateMarker:!1,authors:[{name:"Victor Dibia",title:"Principal RSDE at Microsoft Research",url:"https://github.com/victordibia",imageURL:"https://github.com/victordibia.png",key:"victordibia"},{name:"Gagan Bansal",title:"Senior Researcher at Microsoft Research",url:"https://www.linkedin.com/in/gagan-bansal/",imageURL:"https://github.com/gagb.png",key:"gagb"},{name:"Saleema Amershi",title:"Senior Principal Research Manager at Microsoft Research",url:"https://github.com/samershi",imageURL:"https://github.com/samershi.png",key:"samershi"}],frontMatter:{title:"AutoGen Studio: Interactively Explore Multi-Agent Workflows",authors:["victordibia","gagb","samershi"],tags:["AutoGen","UI","web","UX"]},unlisted:!1,prevItem:{title:"AgentOptimizer - An Agentic Way to Train Your LLM Agent",permalink:"/autogen/blog/2023/12/23/AgentOptimizer"},nextItem:{title:"Agent AutoBuild - Automatically Building Multi-agent Systems",permalink:"/autogen/blog/2023/11/26/Agent-AutoBuild"}},l={authorsImageUrls:[void 0,void 0,void 0]},d=[{value:"TLDR",id:"tldr",level:2},{value:"Introduction",id:"introduction",level:2},{value:"Getting Started with AutoGen Studio",id:"getting-started-with-autogen-studio",level:2},{value:"Configuring an LLM Provider",id:"configuring-an-llm-provider",level:3},{value:"Installation",id:"installation",level:3},{value:"Running the Application",id:"running-the-application",level:3},{value:"What Can You Do with AutoGen Studio?",id:"what-can-you-do-with-autogen-studio",level:2},{value:"Build",id:"build",level:3},{value:"Playground",id:"playground",level:3},{value:"Gallery",id:"gallery",level:3},{value:"The AutoGen Studio API",id:"the-autogen-studio-api",level:2},{value:"Road Map and Next Steps",id:"road-map-and-next-steps",level:2},{value:"Contribution Guide",id:"contribution-guide",level:2},{value:"FAQ",id:"faq",level:3}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.img,{alt:"AutoGen Studio Playground View: Solving a task with multiple agents that generate a pdf document with images.",src:t(6258).Z+"",width:"1746",height:"1249"}),"\r\n",(0,i.jsx)("p",{align:"center",children:(0,i.jsx)("em",{children:"AutoGen Studio: Solving a task with multiple agents that generate a pdf document with images."})})]}),"\n",(0,i.jsx)(n.h2,{id:"tldr",children:"TLDR"}),"\n",(0,i.jsxs)(n.p,{children:["To help you rapidly prototype multi-agent solutions for your tasks, we are introducing AutoGen Studio, an interface powered by ",(0,i.jsx)(n.a,{href:"https://github.com/microsoft/autogen/tree/main/autogen",children:"AutoGen"}),". It allows you to:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Declaratively define and modify agents and multi-agent workflows through a point and click, drag and drop interface (e.g., you can select the parameters of two agents that will communicate to solve your task)."}),"\n",(0,i.jsx)(n.li,{children:"Use our UI to create chat sessions with the specified agents and view results (e.g., view chat history, generated files, and time taken)."}),"\n",(0,i.jsx)(n.li,{children:"Explicitly add skills to your agents and accomplish more tasks."}),"\n",(0,i.jsx)(n.li,{children:"Publish your sessions to a local gallery."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["AutoGen Studio is open source ",(0,i.jsx)(n.a,{href:"https://github.com/microsoft/autogen/tree/main/samples/apps/autogen-studio",children:"code here"}),", and can be installed via pip.  Give it a try!"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"pip install autogenstudio\n"})}),"\n",(0,i.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsxs)(n.p,{children:["The accelerating pace of technology has ushered us into an era where digital assistants (or agents) are becoming integral to our lives. ",(0,i.jsx)(n.a,{href:"https://github.com/microsoft/autogen/tree/main/autogen",children:"AutoGen"})," has emerged as a leading framework for orchestrating the power of agents. In the spirit of expanding this frontier and democratizing this capability, we are thrilled to introduce a new user-friendly interface: ",(0,i.jsx)(n.strong,{children:"AutoGen Studio"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"With AutoGen Studio, users can rapidly create, manage, and interact with agents that can learn, adapt, and collaborate. As we release this interface into the open-source community, our ambition is not only to enhance productivity but to inspire a level of personalized interaction between humans and agents."}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note"}),": AutoGen Studio is meant to help you rapidly prototype multi-agent workflows and demonstrate an example of end user interfaces built with AutoGen. It is not meant to be a production-ready app."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"getting-started-with-autogen-studio",children:"Getting Started with AutoGen Studio"}),"\n",(0,i.jsx)(n.p,{children:"The following guide will help you get AutoGen Studio up and running on your system."}),"\n",(0,i.jsx)(n.h3,{id:"configuring-an-llm-provider",children:"Configuring an LLM Provider"}),"\n",(0,i.jsxs)(n.p,{children:["To get started, you need access to a language model. You can get this set up by following the steps in the AutoGen documentation ",(0,i.jsx)(n.a,{href:"https://microsoft.github.io/autogen/docs/FAQ#set-your-api-endpoints",children:"here"}),". Configure your environment with either ",(0,i.jsx)(n.code,{children:"OPENAI_API_KEY"})," or ",(0,i.jsx)(n.code,{children:"AZURE_OPENAI_API_KEY"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"For example, in your terminal, you would set the API key like this:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"export OPENAI_API_KEY=<your_api_key>\n"})}),"\n",(0,i.jsx)(n.p,{children:"You can also specify the model directly in the agent's configuration as shown below."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'llm_config = LLMConfig(\r\n    config_list=[{\r\n        "model": "gpt-4",\r\n        "api_key": "<azure_api_key>",\r\n        "base_url": "<azure api base url>",\r\n        "api_type": "azure",\r\n        "api_version": "2023-06-01-preview"\r\n    }],\r\n    temperature=0,\r\n)\n'})}),"\n",(0,i.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,i.jsxs)(n.p,{children:["There are two ways to install AutoGen Studio - from PyPi or from source. We ",(0,i.jsx)(n.strong,{children:"recommend installing from PyPi"})," unless you plan to modify the source code."]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Install from PyPi"})}),"\n",(0,i.jsx)(n.p,{children:"We recommend using a virtual environment (e.g., conda) to avoid conflicts with existing Python packages. With Python 3.10 or newer active in your virtual environment, use pip to install AutoGen Studio:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"pip install autogenstudio\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Install from Source"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Note: This approach requires some familiarity with building interfaces in React."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"If you prefer to install from source, ensure you have Python 3.10+ and Node.js (version above 14.15.0) installed. Here's how you get started:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Clone the AutoGen Studio repository and install its Python dependencies:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"pip install -e .\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Navigate to the ",(0,i.jsx)(n.code,{children:"samples/apps/autogen-studio/frontend"})," directory, install dependencies, and build the UI:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npm install -g gatsby-cli\r\nnpm install --global yarn\r\nyarn install\r\nyarn build\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["For Windows users, to build the frontend, you may need alternative commands provided in the ",(0,i.jsx)(n.a,{href:"https://github.com/microsoft/autogen/tree/main/samples/apps/autogen-studio",children:"autogen studio readme"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"running-the-application",children:"Running the Application"}),"\n",(0,i.jsx)(n.p,{children:"Once installed, run the web UI by entering the following in your terminal:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"autogenstudio ui --port 8081\n"})}),"\n",(0,i.jsxs)(n.p,{children:["This will start the application on the specified port. Open your web browser and go to ",(0,i.jsx)(n.code,{children:"http://localhost:8081/"})," to begin using AutoGen Studio."]}),"\n",(0,i.jsx)(n.p,{children:"Now that you have AutoGen Studio installed and running, you are ready to explore its capabilities, including defining and modifying agent workflows, interacting with agents and sessions, and expanding agent skills."}),"\n",(0,i.jsx)(n.h2,{id:"what-can-you-do-with-autogen-studio",children:"What Can You Do with AutoGen Studio?"}),"\n",(0,i.jsxs)(n.p,{children:["The AutoGen Studio UI is organized into 3 high level sections - ",(0,i.jsx)(n.strong,{children:"Build"}),", ",(0,i.jsx)(n.strong,{children:"Playground"}),", and ",(0,i.jsx)(n.strong,{children:"Gallery"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"build",children:"Build"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Specify Agents.",src:t(5538).Z+"",width:"1576",height:"957"})}),"\n",(0,i.jsx)(n.p,{children:"This section focuses on defining the properties of agents and agent workflows. It includes the following concepts:"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Skills"}),": Skills are functions (e.g., Python functions) that describe how to solve a task. In general, a good skill has a descriptive name (e.g. ",(0,i.jsx)(n.code,{children:"generate_images"}),"), extensive docstrings and good defaults (e.g., writing out files to disk for persistence and reuse). You can add new skills to AutoGen Studio via the provided UI. At inference time, these skills are made available to the assistant agent as they address your tasks."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.img,{alt:"View and add skills.",src:t(9031).Z+"",width:"1533",height:"957"}),"\r\n",(0,i.jsx)("p",{align:"center",children:(0,i.jsx)("em",{children:"AutoGen Studio Build View: View, add or edit skills that an agent can leverage in addressing tasks."})})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Agents"}),": This provides an interface to declaratively specify properties for an AutoGen agent (mirrors most of the members of a base ",(0,i.jsx)(n.a,{href:"https://github.com/microsoft/autogen/blob/main/autogen/agentchat/conversable_agent.py",children:"AutoGen conversable agent"})," class)."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Agent Workflows"}),": An agent workflow is a specification of a set of agents that can work together to accomplish a task. The simplest version of this is a setup with two agents \u2013 a user proxy agent (that represents a user i.e. it compiles code and prints result) and an assistant that can address task requests (e.g., generating plans, writing code, evaluating responses, proposing error recovery steps, etc.). A more complex flow could be a group chat where even more agents work towards a solution."]}),"\n",(0,i.jsx)(n.h3,{id:"playground",children:"Playground"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.img,{alt:"AutoGen Studio Playground View: Solving a task with multiple agents that generate a pdf document with images.",src:t(6258).Z+"",width:"1746",height:"1249"}),"\r\n",(0,i.jsx)("p",{align:"center",children:(0,i.jsx)("em",{children:"AutoGen Studio Playground View: Agents collaborate, use available skills (ability to generate images) to address a user task (generate pdf's)."})})]}),"\n",(0,i.jsx)(n.p,{children:"The playground section is focused on interacting with agent workflows defined in the previous build section. It includes the following concepts:"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Session"}),": A session refers to a period of continuous interaction or engagement with an agent workflow, typically characterized by a sequence of activities or operations aimed at achieving specific objectives. It includes the agent workflow configuration, the interactions between the user and the agents. A session can be \u201cpublished\u201d to a \u201cgallery\u201d."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Chat View"}),": A chat is a sequence of interactions between a user and an agent. It is a part of a session."]}),"\n",(0,i.jsx)(n.h3,{id:"gallery",children:"Gallery"}),"\n",(0,i.jsx)(n.p,{children:"This section is focused on sharing and reusing artifacts (e.g., workflow configurations, sessions, etc.)."}),"\n",(0,i.jsxs)(n.p,{children:["AutoGen Studio comes with 3 example skills: ",(0,i.jsx)(n.code,{children:"fetch_profile"}),", ",(0,i.jsx)(n.code,{children:"find_papers"}),", ",(0,i.jsx)(n.code,{children:"generate_images"}),". Please feel free to review the repo to learn more about how they work."]}),"\n",(0,i.jsx)(n.h2,{id:"the-autogen-studio-api",children:"The AutoGen Studio API"}),"\n",(0,i.jsxs)(n.p,{children:["While  AutoGen Studio is a web interface, it is powered by an underlying python API that is reusable and modular. Importantly, we have implemented an API where agent workflows can be declaratively specified (in JSON), loaded and run. An example of the current API is shown below. Please consult the ",(0,i.jsx)(n.a,{href:"https://microsoft.github.io/autogen/docs/autogenstudio",children:"AutoGen Studio repo"})," for more details."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"import json\r\nfrom autogenstudio import AutoGenWorkFlowManager, AgentWorkFlowConfig\r\n\r\n# load an agent specification in JSON\r\nagent_spec = json.load(open('agent_spec.json'))\r\n\r\n# Create an AutoGen Workflow Configuration from the agent specification\r\nagent_work_flow_config = FlowConfig(**agent_spec)\r\n\r\n# Create a Workflow from the configuration\r\nagent_work_flow = AutoGenWorkFlowManager(agent_work_flow_config)\r\n\r\n# Run the workflow on a task\r\ntask_query = \"What is the height of the Eiffel Tower?\"\r\nagent_work_flow.run(message=task_query)\n"})}),"\n",(0,i.jsx)(n.h2,{id:"road-map-and-next-steps",children:"Road Map and Next Steps"}),"\n",(0,i.jsx)(n.p,{children:"As we continue to develop and refine AutoGen Studio, the road map below outlines an array of enhancements and new features planned for future releases. Here's what users can look forward to:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Complex Agent Workflows"}),": We're working on integrating support for more sophisticated agent workflows, such as ",(0,i.jsx)(n.code,{children:"GroupChat"}),", allowing for richer interaction between multiple agents or dynamic topologies."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Improved User Experience"}),": This includes features like streaming intermediate model output for real-time feedback, better summarization of agent responses, information on costs of each interaction. We will also invest in improving the workflow for composing and reusing agents. We will also explore support for more interactive human in the loop feedback to agents."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Expansion of Agent Skills"}),": We will work towards improving the workflow for authoring, composing and reusing agent skills."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Community Features"}),": Facilitation of sharing and collaboration within AutoGen Studio user community is a key goal. We're exploring options for sharing sessions and results more easily among users and contributing to a shared repository of skills, agents, and agent workflows."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"contribution-guide",children:"Contribution Guide"}),"\n",(0,i.jsx)(n.p,{children:"We welcome contributions to AutoGen Studio. We recommend the following general steps to contribute to the project:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Review the overall AutoGen project ",(0,i.jsx)(n.a,{href:"https://github.com/microsoft/autogen?tab=readme-ov-file#contributing",children:"contribution guide"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Please review the AutoGen Studio ",(0,i.jsx)(n.a,{href:"https://github.com/microsoft/autogen/issues/737",children:"roadmap"})," to get a sense of the current priorities for the project. Help is appreciated especially with Studio issues tagged with ",(0,i.jsx)(n.code,{children:"help-wanted"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"Please initiate a discussion on the roadmap issue or a new issue to discuss your proposed contribution."}),"\n",(0,i.jsxs)(n.li,{children:["Please review the autogenstudio dev branch here [dev branch].(",(0,i.jsx)(n.a,{href:"https://github.com/microsoft/autogen/tree/autogenstudio",children:"https://github.com/microsoft/autogen/tree/autogenstudio"}),") and use as a base for your contribution. This way, your contribution will be aligned with the latest changes in the AutoGen Studio project."]}),"\n",(0,i.jsx)(n.li,{children:"Submit a pull request with your contribution!"}),"\n",(0,i.jsxs)(n.li,{children:["If you are modifying AutoGen Studio in vscode, it has its own devcontainer. See instructions in ",(0,i.jsx)(n.code,{children:".devcontainer/README.md"})," to use it."]}),"\n",(0,i.jsxs)(n.li,{children:["Please use the tag ",(0,i.jsx)(n.code,{children:"studio"})," for any issues, questions, and PRs related to Studio."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"faq",children:"FAQ"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Q: Where can I adjust the default skills, agent and workflow configurations?"}),"\r\nA: You can modify agent configurations directly from the UI or by editing the ",(0,i.jsx)(n.code,{children:"autogentstudio/utils/dbdefaults.json"})," file which is used to initialize the database."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Q: If I want to reset the entire conversation with an agent, how do I go about it?"}),"\r\nA: To reset your conversation history, you can delete the ",(0,i.jsx)(n.code,{children:"database.sqlite"})," file. If you need to clear user-specific data, remove the relevant ",(0,i.jsx)(n.code,{children:"autogenstudio/web/files/user/<user_id_md5hash>"})," folder."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Q: Is it possible to view the output and messages generated by the agents during interactions?"}),"\r\nA: Yes, you can view the generated messages in the debug console of the web UI, providing insights into the agent interactions. Alternatively, you can inspect the ",(0,i.jsx)(n.code,{children:"database.sqlite"})," file for a comprehensive record of messages."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Q: Where can I find documentation and support for AutoGen Studio?"}),"\r\nA: We are constantly working to improve AutoGen Studio. For the latest updates, please refer to the ",(0,i.jsx)(n.a,{href:"https://github.com/microsoft/autogen/tree/main/samples/apps/autogen-studio",children:"AutoGen Studio Readme"}),". For additional support, please open an issue on ",(0,i.jsx)(n.a,{href:"https://github.com/microsoft/autogen",children:"GitHub"})," or ask questions on ",(0,i.jsx)(n.a,{href:"https://discord.gg/pAbnFJrkgZ",children:"Discord"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Q: Can I use Other Models with AutoGen Studio?"}),"\r\nYes. AutoGen standardizes on the openai model api format, and you can use any api server that offers an openai compliant endpoint. In the AutoGen Studio UI, each agent has an ",(0,i.jsx)(n.code,{children:"llm_config"})," field where you can input your model endpoint details including ",(0,i.jsx)(n.code,{children:"model name"}),", ",(0,i.jsx)(n.code,{children:"api key"}),", ",(0,i.jsx)(n.code,{children:"base url"}),", ",(0,i.jsx)(n.code,{children:"model type"})," and ",(0,i.jsx)(n.code,{children:"api version"}),". For Azure OpenAI models, you can find these details in the Azure portal. Note that for Azure OpenAI, the ",(0,i.jsx)(n.code,{children:"model name"})," is the deployment id or engine, and the ",(0,i.jsx)(n.code,{children:"model type"}),' is "azure".\r\nFor other OSS models, we recommend using a server such as vllm to instantiate an openai compliant endpoint.']}),"\n",(0,i.jsx)("br",{})]})}function u(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},5538:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/autogenstudio_config-5e0107b565503d4952c9b00dd3d5c10e.png"},6258:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/autogenstudio_home-cce78dc150d1bb0073620754df73d863.png"},9031:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/autogenstudio_skills-7376f0a5aec5917fda817a4793f2b89a.png"},1151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>a});var i=t(7294);const o={},s=i.createContext(o);function a(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);