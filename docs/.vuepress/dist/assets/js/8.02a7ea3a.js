(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{253:function(t,a,s){"use strict";s.r(a);var e=s(28),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"helpers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#helpers"}},[t._v("#")]),t._v(" Helpers")]),t._v(" "),s("p",[t._v("Fjord includes a variety of global helper PHP functions and Vue mixins.")]),t._v(" "),s("h3",{attrs:{id:"fjord-facade"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fjord-facade"}},[t._v("#")]),t._v(" Fjord Facade")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#method-php-fjord-installed"}},[t._v("installed")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#method-php-fjord-route"}},[t._v("route")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#method-php-fjord-url"}},[t._v("url")])])]),t._v(" "),s("h3",{attrs:{id:"miscellaneous"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#miscellaneous"}},[t._v("#")]),t._v(" Miscellaneous")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#method-php-f"}},[t._v("__f")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#method-php-fa"}},[t._v("fa")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#method-fjord"}},[t._v("fjord")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#method-php-fjord_user"}},[t._v("fjord_user")])])]),t._v(" "),s("h2",{attrs:{id:"fjord-facade-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fjord-facade-2"}},[t._v("#")]),t._v(" Fjord Facade")]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("Fjord")]),t._v(" singleton contains some helpers which are related to the Fjord application.")]),t._v(" "),s("p",[s("a",{attrs:{name:"method-php-fjord-installed"}})]),t._v(" "),s("h3",{attrs:{id:"installed"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installed"}},[t._v("#")]),t._v(" "),s("code",[t._v("installed()")])]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("installed")]),t._v(" method checks if fjord has been installed. This can be usefull in service providers.")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("Fjord"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Support"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Facades"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Fjord")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v(" Fjord"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("installed")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("a",{attrs:{name:"method-php-fjord-route"}})]),t._v(" "),s("h3",{attrs:{id:"route-name"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#route-name"}},[t._v("#")]),t._v(" "),s("code",[t._v("route($name)")])]),t._v(" "),s("p",[t._v("If a route is added to the route file "),s("code",[t._v("fjord/routes/fjord.php")]),t._v(", the prefix "),s("code",[t._v("fjord")]),t._v(" is added to the name. The helper route also adds this prefix as well. Depending on your preferences you can use the laravel helper "),s("code",[t._v("route")]),t._v(" or the Fjord helper to call up a route.")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// fjord/routes/fjord.php")]),t._v("\n\nRoute"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'dashboard'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" DashboardController"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'dashboard'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("a href"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[t._v("\"{{ Fjord::route('dashboard') }}\"")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("Dashboard"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Is the same as:")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("a href"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[t._v("\"{{ route('fjord.dashboard') }}\"")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("Dashboard"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),s("p",[s("a",{attrs:{name:"method-php-fjord-url"}})]),t._v(" "),s("h3",{attrs:{id:"url-url"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#url-url"}},[t._v("#")]),t._v(" "),s("code",[t._v("url($url)")])]),t._v(" "),s("p",[t._v("If you don't want to use the route name to call a route but directly specify the url, you can use the "),s("code",[t._v("url")]),t._v(" helper which prepends the "),s("code",[t._v("route_prefix")]),t._v(" from the config "),s("strong",[t._v("fjord.php")]),t._v(" to your url.")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("a href"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[t._v("\"{{ Fjord::url('dashboard') }}\"")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("Dashboard"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),s("h2",{attrs:{id:"miscellaneous-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#miscellaneous-2"}},[t._v("#")]),t._v(" Miscellaneous")]),t._v(" "),s("p",[s("a",{attrs:{name:"method-php-f"}})]),t._v(" "),s("h3",{attrs:{id:"f-key-replace"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#f-key-replace"}},[t._v("#")]),t._v(" "),s("code",[t._v("__f($key, $replace)")])]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("__f")]),t._v(" method returns the translation using the Fjord application locale for the authenticated fjord-user.")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'names'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'singular'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("__f")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'employee'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'plural'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("__f")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'employees'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("p",[s("a",{attrs:{name:"method-php-fa"}})]),t._v(" "),s("h3",{attrs:{id:"fa-group-icon"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fa-group-icon"}},[t._v("#")]),t._v(" "),s("code",[t._v("fa($group, $icon)")])]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("fa")]),t._v(" helper makes it easy to create "),s("a",{attrs:{href:"https://fontawesome.com/icons?d=gallery",target:"_blank",rel:"noopener noreferrer"}},[t._v("Fontawesome"),s("OutboundLink")],1),t._v(" icons.")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fa")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'home'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// <i class="fas fa-home"></i>')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fa")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'fal'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'abacus'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// <i class="fal fa-abacus"></i>')]),t._v("\n")])])]),s("p",[s("a",{attrs:{name:"method-php-fjord"}})]),t._v(" "),s("h3",{attrs:{id:"fjord"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fjord"}},[t._v("#")]),t._v(" "),s("code",[t._v("fjord()")])]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("fjord")]),t._v(" method returns the "),s("code",[t._v("Fjord")]),t._v(" singelton.")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fjord")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("installed")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Is the same as:")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("Fjord"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Support"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Singletons"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Fjord")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nFjord"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("installed")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[s("a",{attrs:{name:"method-php-fjord_user"}})]),t._v(" "),s("h3",{attrs:{id:"fjord-user"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fjord-user"}},[t._v("#")]),t._v(" "),s("code",[t._v("fjord_user()")])]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("fjord_user")]),t._v(" method returns the authenticated Fjord user model.")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("span"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fjord_user")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("email")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("span"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);