"use strict";
exports.ids = ["3709"];
exports.modules = {
82886(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_2024_08_26_duckdb_launch_md_5ba_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_2024_08_26_duckdb_launch_md_5ba_json__rspack_import_0 = __webpack_require__(92011);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	title: 'DuckDB: Extreme Performance and a 97% Lighter Database!',
	description: 'A major Gladys update that will revolutionize your experience.',
	authors: 'pierregilles',
	image: '/img/presentation/duckdb-launch.jpg',
	slug: 'gladys-and-duckdb'
};
const contentTitle = undefined;

const assets = {
"authorsImageUrls": [undefined],
};



const toc = [{
  "value": "The Technology: DuckDB",
  "id": "the-technology-duckdb",
  "level": 2
}, {
  "value": "Integration into Gladys",
  "id": "integration-into-gladys",
  "level": 2
}, {
  "value": "The Result",
  "id": "the-result",
  "level": 2
}, {
  "value": "How Does It Work Under the Hood?",
  "id": "how-does-it-work-under-the-hood",
  "level": 2
}, {
  "value": "How to Update?",
  "id": "how-to-update",
  "level": 2
}, {
  "value": "The Migration",
  "id": "the-migration",
  "level": 2
}, {
  "value": "Conclusion",
  "id": "conclusion",
  "level": 2
}, {
  "value": "Supporting the Project",
  "id": "supporting-the-project",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    br: "br",
    code: "code",
    h2: "h2",
    img: "img",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__rspack_import_2/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__rspack_import_1.jsxs)(react_jsx_runtime__rspack_import_1.Fragment, {
    children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Hi everyone,"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Today is a big day: I’m releasing a major version of Gladys that will drastically improve the Gladys experience and keep us at the cutting edge of data storage technology."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Imagine..."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["➡️ Your Gladys database shrinking from 47 GB to 1.5 GB...", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.br, {}), "\n", "➡️ Your charts displaying instantly, even over long periods of data...", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.br, {}), "\n", "➡️ Your Gladys Plus backups becoming lighter and faster..."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Well, we did it!"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "the-technology-duckdb",
      children: "The Technology: DuckDB"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://duckdb.org/",
        children: "DuckDB"
      }), " is an OLAP database system that, like SQLite, stores data in a single file."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "If we had to define DuckDB:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
        children: "DuckDB is an analytical database engine designed to offer optimal performance on large volumes of data while remaining lightweight and easy to integrate. It is particularly suited for embedded data analysis, with native support for complex SQL queries and efficient in-memory processing."
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "DuckDB, with its OLAP + file approach, is unique in its kind, and I had been monitoring this technology for several years."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Until recently, DuckDB was in alpha and therefore not ready to be used in production on a critical product like Gladys."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "But in June, DuckDB finally reached version 1.0, with a clear announcement that the API and file format would no longer undergo major changes, making DuckDB suitable for production use."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "integration-into-gladys",
      children: "Integration into Gladys"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Following the launch of version 1.0, I immediately started development in Gladys and did a YouTube live stream to test the technology with you."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "We quickly saw together that the technology was very promising, so I continued development."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "In a nutshell, the tasks included:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Migrating the sensor history currently in SQLite to DuckDB (and if possible, without downtime)"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Setting up an interface to monitor the migration and a way to \"clean\" the SQLite DB afterward"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Modifying all the code that writes historical sensor values"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Rewriting the dashboard chart display queries"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Reviewing the entire Gladys Plus backup process"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Finally, testing the migration in real-world scenarios to see if DuckDB works well in daily use on real instances."
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "In short, there was a lot of work to do!"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "the-result",
      children: "The Result"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "On August 6th, I started the \"real\" tests on my personal Gladys setup."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "My instance has about forty devices and has been live since February 2024."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "I had a 905 MB database, with 996,000 sensor states, which after migration was reduced to:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "SQLite to DuckDB Reduction Percentage Pierre-Gilles",
        src: (__webpack_require__(6347)/* ["default"] */.A) + "",
        width: "1600",
        height: "1201"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Yes, you read that right, my database was reduced to 19 MB! It's almost ridiculous!"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "For the largest Gladys user, Terdious, with 80 million states for a 47.7 GB database, it was reduced to:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "SQLite to DuckDB Reduction Percentage Terdious",
        src: (__webpack_require__(42415)/* ["default"] */.A) + "",
        width: "1600",
        height: "1196"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "In short, it's quite revolutionary!"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "For the past 20 days, this new version has been running smoothly on my setup and other Gladys users' setups."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "The charts are much faster; Terdious noticed load times twice as fast on his mini-PC."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "On his Pi 4, it's even more impressive, with dashboards containing charts now displaying in 150 ms compared to 1 to 5 seconds before."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "how-does-it-work-under-the-hood",
      children: "How Does It Work Under the Hood?"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "At this point, you might be thinking: is this magic?"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Actually, not really:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "First of all, SQLite is not suited for this use case, so we were forced to store information 4 times in the database: once for the \"raw\" data, once for monthly aggregated data, once for daily aggregated data, and once for hourly aggregated data. This allowed us to fetch data more quickly from pre-reduced datasets."
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Then, on the SQLite side, I had added very specific indexes to respond to queries like \"Show me the values of temperature sensor XX between this morning and now.\" These multi-column indexes provided good performance but were storage-intensive (again, this is redundancy)."
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["Finally, DuckDB does an outstanding job. The data is aggressively compressed (If you're interested, there's ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://duckdb.org/2022/10/28/lightweight-compression.html",
          children: "an article on their blog"
        }), ")."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "For example, in the case of Gladys, if you have a binary sensor (door open sensor, motion sensor, leak sensor, etc.), the data is just 0s and 1s: there are only 2 possible values."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "This kind of dataset is very easy to compress:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "DuckDB Compression",
        src: (__webpack_require__(43435)/* ["default"] */.A) + "",
        width: "1548",
        height: "1256"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "how-to-update",
      children: "How to Update?"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Gladys should normally update automatically if you use Watchtower."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["If you installed Gladys with Docker, make sure you're using Watchtower. See the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "/docs/installation/docker/#auto-upgrade-gladys-with-watchtower",
        children: "documentation"
      }), "."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "If you're impatient and know what you're doing, you can also manually run Watchtower in \"one-shot\" mode:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-sh",
        children: "docker run --rm \\\n    -v /var/run/docker.sock:/var/run/docker.sock \\\n    nickfedor/watchtower \\\n    --run-once\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "(Don't forget to use sudo if you're running Gladys as an administrator)"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Once Gladys is updated to ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "v4.45.0"
      }), ", there are several steps to take before seeing your DB shrink."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "the-migration",
      children: "The Migration"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "As soon as your instance updates, the migration to DuckDB will begin."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "At the top of your dashboard, you will see a message:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Migration to DuckDB",
        src: (__webpack_require__(69274)/* ["default"] */.A) + "",
        width: "2436",
        height: "346"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "During this migration, your instance may be slowed down, and your charts will not be available."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "You can find the migration status in \"Settings → System\":"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Migration to DuckDB Summary",
        src: (__webpack_require__(45732)/* ["default"] */.A) + "",
        width: "900",
        height: "1222"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Once the migration is complete, the \"Migration completed\" line will change from \"No\" to \"Yes.\""
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Take a moment to browse Gladys and check that all your charts look correct."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "If everything looks good, you can then purge the SQLite states by clicking the red \"Purge SQLite states\" button, which will start a task:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "SQLite Purge",
        src: (__webpack_require__(66726)/* ["default"] */.A) + "",
        width: "1810",
        height: "772"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "During this task, your Gladys instance will be a bit slower, which is normal."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Depending on the number of states in your database and the speed of your disk, this task can take a few hours or even days if you have a large DB."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Gladys remains usable, but slower!"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Finally, once this purge is complete, you'll need to clean the SQLite DB so that the file on your disk is finally reduced."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "To do this, click on the \"Clean database\" button:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        alt: "Clean Database",
        src: (__webpack_require__(76118)/* ["default"] */.A) + "",
        width: "908",
        height: "624"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["This task is ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "blocking"
      }), ", and Gladys will not be available during the cleanup."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Finally, once the task is done, restart Gladys."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "You're done! You should now have a much smaller database and a much faster Gladys instance!"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "conclusion",
      children: "Conclusion"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "I hope this update will bring you the same results as it has for all the testers!"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "In any case, I'm convinced that this update will revolutionize the use of Gladys, and I welcome your feedback."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Thanks again to all the testers who helped in the development 🙏"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "supporting-the-project",
      children: "Supporting the Project"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "There are many ways to support the project:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Participate in discussions on the forum, help newcomers."
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Contribute to the project by proposing new integrations/features."
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Improve the documentation, which is open source."
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Thanks to everyone who supports Gladys 🙏"
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
76118(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/clean-db-67eab8809ca677fff53934628ef60d12.png");

},
43435(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/duckdb-encoding-ac246f11d34cd7d4f4bc907fa2af8e55.png");

},
45732(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/duckdb-migration-recap-e8b17fe4a777684fc781c214a21a3638.png");

},
69274(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/duckdb-migration-32db94b600e5e3ae21ec71f285d59856.png");

},
6347(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/pierregilles-duckdb-d86d7309155c1de6c7f1c433a1de6ac8.jpg");

},
66726(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/sqlite-state-purge-591939acd4be55ca432faeeb120b43d1.png");

},
42415(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/terdious-duckdb-749fb0172c8fb38df5fa6d14c9e0b77e.jpg");

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
92011(module) {
module.exports = JSON.parse('{"permalink":"/zh-Hans/blog/gladys-and-duckdb","editUrl":"https://github.com/GladysAssistant/v4-website/edit/master/blog/2024-08-26-duckdb-launch.md","source":"@site/blog/2024-08-26-duckdb-launch.md","title":"DuckDB: Extreme Performance and a 97% Lighter Database!","description":"A major Gladys update that will revolutionize your experience.","date":"2024-08-26T00:00:00.000Z","tags":[],"readingTime":5.84,"hasTruncateMarker":true,"authors":[{"name":"Pierre-Gilles Leymarie","title":"Founder of Gladys Assistant","url":"https://github.com/Pierre-Gilles","socials":{"x":"https://x.com/pierregillesl","github":"https://github.com/Pierre-Gilles"},"imageURL":"/zh-Hans/img/pierre-gilles.jpg","key":"pierregilles","page":null}],"frontMatter":{"title":"DuckDB: Extreme Performance and a 97% Lighter Database!","description":"A major Gladys update that will revolutionize your experience.","authors":"pierregilles","image":"/img/presentation/duckdb-launch.jpg","slug":"gladys-and-duckdb"},"unlisted":false,"prevItem":{"title":"Proactive AI Arrives in Gladys Assistant!","permalink":"/zh-Hans/blog/proactive-ai"},"nextItem":{"title":"Test Gladys Assistant with an existing Zigbee2mqtt instance!","permalink":"/zh-Hans/blog/gladys-4-40-external-zigbee"}}')

},

};
;