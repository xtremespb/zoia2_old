// Compiled using marko@4.18.10 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/vdom").t(),
    marko_component = {
        onCreate: function() {
          this.state = {
              count: 0
            };
        },
        increment: function() {
          this.state.count++;
        }
      },
    components_helpers = require("marko/src/runtime/components/helpers"),
    marko_registerComponent = components_helpers.rc,
    marko_componentType = marko_registerComponent("/marko-webpack$1.0.0/src/pages/home1/template.marko", function() {
      return module.exports;
    }),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/vdom/helpers"),
    marko_createElement = marko_helpers.e,
    marko_const = marko_helpers.const,
    marko_const_nextId = marko_const("e377da"),
    marko_node0 = marko_createElement("h1", null, "0", null, 1, 0, {
        i: marko_const_nextId()
      })
      .t("Home 1");

function render(input, out, __component, component, state) {
  var data = input;

  out.n(marko_node0, component);

  out.e("div", null, "1", component, 2)
    .t("The current count is ")
    .t(state.count);

  out.e("button", null, "2", component, 1, 0, {
      onclick: __component.d("click", "increment", false)
    })
    .t("Click me!");
}

marko_template._ = marko_renderer(render, {
    ___type: marko_componentType
  }, marko_component);

marko_template.Component = marko_defineComponent(marko_component, marko_template._);
