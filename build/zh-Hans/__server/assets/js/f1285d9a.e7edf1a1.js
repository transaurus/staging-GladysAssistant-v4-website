"use strict";
exports.ids = ["4060"];
exports.modules = {
29278(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_integrations_mcp_md_f12_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_integrations_mcp_md_f12_json__rspack_import_0 = __webpack_require__(11724);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	id: 'mcp',
	title: 'Connect an MCP client to Gladys',
	sidebar_label: 'MCP'
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "What does Gladys&#39; MCP server allow?",
  "id": "what-does-gladys-mcp-server-allow",
  "level": 2
}, {
  "value": "System Architecture",
  "id": "system-architecture",
  "level": 2
}, {
  "value": "Configuration in Gladys",
  "id": "configuration-in-gladys",
  "level": 2
}, {
  "value": "Local MCP",
  "id": "local-mcp",
  "level": 3
}, {
  "value": "MCP Server URL",
  "id": "mcp-server-url",
  "level": 4
}, {
  "value": "Generating a local API Key (<code>&lt;LOCAL_API_KEY&gt;</code>)",
  "id": "generating-a-local-api-key-local_api_key",
  "level": 4
}, {
  "value": "Internet Access with Gladys Plus",
  "id": "internet-access-with-gladys-plus",
  "level": 3
}, {
  "value": "URL",
  "id": "url",
  "level": 4
}, {
  "value": "Generating a Gladys Plus API Key (<code>&lt;GLADYS_PLUS_API_KEY&gt;</code>)",
  "id": "generating-a-gladys-plus-api-key-gladys_plus_api_key",
  "level": 4
}, {
  "value": "Configuring MCP Clients",
  "id": "configuring-mcp-clients",
  "level": 2
}, {
  "value": "Optional - mcp-proxy (Claude Desktop and Perplexity)",
  "id": "optional---mcp-proxy-claude-desktop-and-perplexity",
  "level": 3
}, {
  "value": "Installing mcp-proxy",
  "id": "installing-mcp-proxy",
  "level": 4
}, {
  "value": "Configuration for Claude Desktop",
  "id": "configuration-for-claude-desktop",
  "level": 3
}, {
  "value": "Configuration for Perplexity",
  "id": "configuration-for-perplexity",
  "level": 3
}, {
  "value": "VS Code with GitHub Copilot",
  "id": "vs-code-with-github-copilot",
  "level": 3
}, {
  "value": "Mistral Le Chat <strong>only</strong> with Gladys Plus",
  "id": "mistral-le-chat-only-with-gladys-plus",
  "level": 3
}, {
  "value": "Need Help?",
  "id": "need-help",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__rspack_import_2/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__rspack_import_1.jsxs)(react_jsx_runtime__rspack_import_1.Fragment, {
    children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "The Model Context Protocol (MCP) is an open protocol developed by Anthropic that allows exposing tools and functions that AI agents can use to retrieve information or interact with real-world devices."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "what-does-gladys-mcp-server-allow",
      children: "What does Gladys' MCP server allow?"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Gladys Assistant integrates an MCP server that enables your compatible AI agents (Claude Desktop, Perplexity, Mistral Le Chat, etc.) to communicate with your smart home. Currently available capabilities include:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["🌡️ Retrieve device states (latest value or history of values)", "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
            children: "temperature"
          }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
            children: "humidity"
          }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
            children: "open/closed (contact)"
          }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
            children: "lamp"
          }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
            children: "smart plug"
          }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
            children: "air quality"
          }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
            children: "carbon monoxide (CO)"
          }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
            children: "carbon dioxide (CO₂)"
          }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
            children: "energy"
          }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
            children: "brightness"
          }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
            children: "motion"
          }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
            children: "PM10"
          }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
            children: "PM2.5"
          }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
            children: "angle"
          }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
            children: "distance"
          }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
            children: "leak"
          }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
            children: "level"
          }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
            children: "formaldehyde (HCHO)"
          }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
            children: "precipitation"
          }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
            children: "presence"
          }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
            children: "pressure"
          }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
            children: "rain"
          }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
            children: "smoke"
          }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
            children: "VOC (volatile organic compounds)"
          }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
            children: "volume"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "📷 View your cameras and describe what it sees (if your client is compatible)"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "💡 Turn lights on/off"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "🔌 Control switches and outlets"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "🎬 Launch scenes"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "system-architecture",
      children: "System Architecture"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "The MCP system works with 2 components:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "The MCP client"
        }), ": This is your AI agent (Claude Desktop, Perplexity, Mistral Le Chat...)"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "The MCP server"
        }), ": Integrated into Gladys, it exposes available functions that the client can call"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "By default, your agent and your Gladys instance must be on the same local network to communicate with each other."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "If you are a Gladys Plus subscriber, you can use the Open API to continue accessing the MCP server outside your home. This Open API route is also necessary if your agent can only access MCP servers available online (for Mistral Le Chat for example)."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "configuration-in-gladys",
      children: "Configuration in Gladys"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "local-mcp",
      children: "Local MCP"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Go to ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "Integrations"
      }), " → ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "MCP"
      }), " in Gladys."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h4, {
      id: "mcp-server-url",
      children: "MCP Server URL"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "The MCP server URL is visible in the interface:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "http://YOUR_GLADYS_IP/api/v1/service/mcp/proxy\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Authentication for your connection is done by adding the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "Authorization"
      }), " header with your local API key as the value (see below)."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.h4, {
      id: "generating-a-local-api-key-local_api_key",
      children: ["Generating a local API Key (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "<LOCAL_API_KEY>"
      }), ")"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "To secure the connection between your agent and Gladys, you must generate an API key:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "In Gladys' MCP interface, at the bottom of the page, enter a name for your client (e.g., \"Claude Desktop\", \"VS Code\"...)"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Click \"Generate\""
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Important"
        }), ": Copy the generated key immediately, you won't be able to see it again"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["Add it to your client configuration by passing it in the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "Authorization"
        }), " header"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "You can revoke this key at any time if needed."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "internet-access-with-gladys-plus",
      children: "Internet Access with Gladys Plus"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "If you want to use agents that require a public URL (Mistral Le Chat), you can go through Gladys Plus."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h4, {
      id: "url",
      children: "URL"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Gladys Plus provides a secure and authenticated route:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "https://api.gladysgateway.com/v1/api/mcp/<GLADYS_PLUS_API_KEY>\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.h4, {
      id: "generating-a-gladys-plus-api-key-gladys_plus_api_key",
      children: ["Generating a Gladys Plus API Key (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "<GLADYS_PLUS_API_KEY>"
      }), ")"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["You must generate an Open API key (be careful, not one from the configuration interface), to do this follow the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://gladysassistant.com/docs/plus/open-api/#generate-an-api-key",
        children: "Gladys Plus documentation"
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "configuring-mcp-clients",
      children: "Configuring MCP Clients"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "optional---mcp-proxy-claude-desktop-and-perplexity",
      children: "Optional - mcp-proxy (Claude Desktop and Perplexity)"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Not all clients yet support MCP servers directly via HTTP (such as the free version of ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "Claude Desktop"
      }), " or ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "Perplexity"
      }), ") and communicate via STDIO. You must therefore use ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://github.com/sparfenyuk/mcp-proxy",
        children: "mcp-proxy"
      }), " which bridges stdio and HTTP. It's a small software that must be installed on the same machine as the MCP client."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h4, {
      id: "installing-mcp-proxy",
      children: "Installing mcp-proxy"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Follow the installation instructions on the GitHub repository: ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://github.com/sparfenyuk/mcp-proxy?tab=readme-ov-file#installation",
        children: "mcp-proxy Installation"
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Once installed, find the full path of mcp-proxy:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-bash",
        children: "# On macOS/Linux\nwhich mcp-proxy\n\n# On Windows\nwhere.exe mcp-proxy\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Note this path, you'll need it for configuration."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "configuration-for-claude-desktop",
      children: "Configuration for Claude Desktop"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Start Claude Desktop"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["Go to ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Settings → Developer → Local MCPs"
        })]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["Click ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "\"Edit Config\""
        })]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["Modify the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "claude_desktop_config.json"
        }), " file:"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-json",
        children: "{\n  \"mcpServers\": {\n    \"gladys\": {\n      \"command\": \"/full/path/to/mcp-proxy\",\n      \"args\": [\n        \"http://<YOUR_GLADYS_IP>/api/v1/service/mcp/proxy\",\n        \"--transport\",\n        \"streamablehttp\",\n        \"--header\",\n        \"Authorization: <LOCAL_API_KEY>\"\n      ],\n      \"env\": {}\n    }\n  }\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Replace:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "/full/path/to/mcp-proxy"
        }), " with the path obtained from ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "which mcp-proxy"
        })]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "<YOUR_GLADYS_IP>"
        }), " with your Gladys IP address"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "<LOCAL_API_KEY>"
        }), " with the key generated in Gladys"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ol, {
      start: "5",
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Save and restart Claude Desktop"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "If everything works, you should have access to all MCP functions in the chat."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "💡 Tip:"
        }), " You can also use the Gladys Plus URL ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "https://api.gladysgateway.com/v1/api/mcp/<GLADYS_PLUS_API_KEY>"
        }), " instead of the local URL to access your Gladys from anywhere."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "configuration-for-perplexity",
      children: "Configuration for Perplexity"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Start Perplexity"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["Go to ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Settings"
        }), " → ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Connectors"
        }), " → ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Add Connector"
        })]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["Select the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "\"Advanced\""
        }), " tab"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Give a name: \"Gladys\""
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Configure:"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-json",
        children: "{\n  \"command\": \"/full/path/to/mcp-proxy\",\n  \"args\": [\n    \"http://<YOUR_GLADYS_IP>/api/v1/service/mcp/proxy\",\n    \"--transport\",\n    \"streamablehttp\",\n    \"--header\",\n    \"Authorization: <LOCAL_API_KEY>\"\n  ],\n  \"env\": {}\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Replace the same values as for Claude Desktop."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ol, {
      start: "6",
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Save and wait for Perplexity to detect the functions"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["📖 More information: ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://www.perplexity.ai/help-center/en/articles/11502712-local-and-remote-mcps-for-perplexity",
        children: "Perplexity MCP Documentation"
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "💡 Tip:"
        }), " You can also use the Gladys Plus URL ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "https://api.gladysgateway.com/v1/api/mcp/<GLADYS_PLUS_API_KEY>"
        }), " instead of the local URL to access your Gladys from anywhere."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "vs-code-with-github-copilot",
      children: "VS Code with GitHub Copilot"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "GitHub Copilot in VS Code natively supports MCP servers via HTTP."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Open Copilot Chat in VS Code"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["At the bottom, select ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Agent"
        }), " then click the ⚙️ icon (wrench)"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["Choose ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "\"Add more Tools...\""
        }), " from the dropdown"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["Select ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "\"Add MCP Server\""
        })]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["Choose the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "\"HTTP\""
        }), " type"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["Enter the URL: ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "http://<YOUR_GLADYS_IP>/api/v1/service/mcp/proxy"
        })]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["In headers, add:", "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
            children: ["Name: ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "Authorization"
            })]
          }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
            children: ["Value: ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "<LOCAL_API_KEY>"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Give your server a name (e.g., \"Gladys\")"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "You can now chat with Copilot and ask it to interact with your home!"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["📖 More information: ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://code.visualstudio.com/docs/copilot/chat/mcp-servers",
        children: "VS Code MCP Documentation"
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "💡 Tip:"
        }), " You can also use the Gladys Plus URL ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "https://api.gladysgateway.com/v1/api/mcp/<GLADYS_PLUS_API_KEY>"
        }), " instead of the local URL to access your Gladys from anywhere."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.h3, {
      id: "mistral-le-chat-only-with-gladys-plus",
      children: ["Mistral Le Chat ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "only"
      }), " with Gladys Plus"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Le Chat only allows connection to MCPs accessible on the internet."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["Go to ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Intelligence"
        }), " → ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Connectors"
        })]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["Click ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Add a connector"
        })]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["In the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Custom MCP Connector"
        }), " tab, complete the form with the URL and Gladys Plus API key ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "https://api.gladysgateway.com/v1/api/mcp/<GLADYS_PLUS_API_KEY>"
        })]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "You can now interact with Gladys data in Le Chat"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "need-help",
      children: "Need Help?"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Feel free to ask your questions on ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://community.gladysassistant.com/",
        children: "the Gladys forum"
      }), ", the community is here to help you!"]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__rspack_import_2/* .useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,react_jsx_runtime__rspack_import_1.jsx)(MDXLayout, {
    ...props,
    children: (0,react_jsx_runtime__rspack_import_1.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



},
28453(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  R: () => (useMDXComponents),
  x: () => (MDXProvider)
});
/* import */ var react__rspack_import_0 = __webpack_require__(96540);
/**
 * @import {MDXComponents} from 'mdx/types.js'
 * @import {Component, ReactElement, ReactNode} from 'react'
 */

/**
 * @callback MergeComponents
 *   Custom merge function.
 * @param {Readonly<MDXComponents>} currentComponents
 *   Current components from the context.
 * @returns {MDXComponents}
 *   Additional components.
 *
 * @typedef Props
 *   Configuration for `MDXProvider`.
 * @property {ReactNode | null | undefined} [children]
 *   Children (optional).
 * @property {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @property {boolean | null | undefined} [disableParentContext=false]
 *   Turn off outer component context (default: `false`).
 */



/** @type {Readonly<MDXComponents>} */
const emptyComponents = {}

const MDXContext = react__rspack_import_0.createContext(emptyComponents)

/**
 * Get current components from the MDX Context.
 *
 * @param {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @returns {MDXComponents}
 *   Current components.
 */
function useMDXComponents(components) {
  const contextComponents = react__rspack_import_0.useContext(MDXContext)

  // Memoize to avoid unnecessary top-level context changes
  return react__rspack_import_0.useMemo(
    function () {
      // Custom merge via a function prop
      if (typeof components === 'function') {
        return components(contextComponents)
      }

      return {...contextComponents, ...components}
    },
    [contextComponents, components]
  )
}

/**
 * Provider for MDX context.
 *
 * @param {Readonly<Props>} properties
 *   Properties.
 * @returns {ReactElement}
 *   Element.
 * @satisfies {Component}
 */
function MDXProvider(properties) {
  /** @type {Readonly<MDXComponents>} */
  let allComponents

  if (properties.disableParentContext) {
    allComponents =
      typeof properties.components === 'function'
        ? properties.components(emptyComponents)
        : properties.components || emptyComponents
  } else {
    allComponents = useMDXComponents(properties.components)
  }

  return react__rspack_import_0.createElement(
    MDXContext.Provider,
    {value: allComponents},
    properties.children
  )
}


},
11724(module) {
module.exports = JSON.parse('{"id":"integrations/mcp","title":"Connect an MCP client to Gladys","description":"The Model Context Protocol (MCP) is an open protocol developed by Anthropic that allows exposing tools and functions that AI agents can use to retrieve information or interact with real-world devices.","source":"@site/docs/integrations/mcp.md","sourceDirName":"integrations","slug":"/integrations/mcp","permalink":"/zh-Hans/docs/integrations/mcp","draft":false,"unlisted":false,"editUrl":"https://github.com/GladysAssistant/v4-website/edit/master/docs/integrations/mcp.md","tags":[],"version":"current","frontMatter":{"id":"mcp","title":"Connect an MCP client to Gladys","sidebar_label":"MCP"},"sidebar":"docs","previous":{"title":"Matterbridge","permalink":"/zh-Hans/docs/integrations/matterbridge"},"next":{"title":"MQTT","permalink":"/zh-Hans/docs/integrations/mqtt"}}')

},

};
;