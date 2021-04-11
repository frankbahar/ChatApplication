$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("chat.feature");
formatter.feature({
  "line": 1,
  "name": "Validation of Chat Application",
  "description": "",
  "id": "validation-of-chat-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "User Should be able to enter valid txt and post in to chat",
  "description": "",
  "id": "validation-of-chat-application;user-should-be-able-to-enter-valid-txt-and-post-in-to-chat",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I write \"\u003cmessage\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click on send button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I see my \"\u003cmessage\u003e\" in chat",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "validation-of-chat-application;user-should-be-able-to-enter-valid-txt-and-post-in-to-chat;",
  "rows": [
    {
      "cells": [
        "message"
      ],
      "line": 12,
      "id": "validation-of-chat-application;user-should-be-able-to-enter-valid-txt-and-post-in-to-chat;;1"
    },
    {
      "cells": [
        "Hi How are you?"
      ],
      "line": 13,
      "id": "validation-of-chat-application;user-should-be-able-to-enter-valid-txt-and-post-in-to-chat;;2"
    },
    {
      "cells": [
        "geffdgfdgmfdgdfgjljdl;jgfsdlgjfl;djgfdgjfdgjfdlgjfdl;gj;fdlgjfdgfdlgjfdlgjfdl;gj;fdlgj;fdlgl;fdgjfdlgj;fdlgj;fdlg;gdlfjg;lfdj;dlgldfj;glgval"
      ],
      "line": 14,
      "id": "validation-of-chat-application;user-should-be-able-to-enter-valid-txt-and-post-in-to-chat;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6649933200,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on the home page http://localhost:8080",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "8080",
      "offset": 39
    }
  ],
  "location": "ChatSteps.i_am_on_the_home_page_http_localhost(int)"
});
formatter.result({
  "duration": 2097486200,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "User Should be able to enter valid txt and post in to chat",
  "description": "",
  "id": "validation-of-chat-application;user-should-be-able-to-enter-valid-txt-and-post-in-to-chat;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I write \"Hi How are you?\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click on send button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I see my \"Hi How are you?\" in chat",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Hi How are you?",
      "offset": 9
    }
  ],
  "location": "ChatSteps.i_write(String)"
});
formatter.result({
  "duration": 394385800,
  "status": "passed"
});
formatter.match({
  "location": "ChatSteps.i_click_on_send_button()"
});
formatter.result({
  "duration": 3279421200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hi How are you?",
      "offset": 10
    }
  ],
  "location": "ChatSteps.i_see_my_in_chat(String)"
});
formatter.result({
  "duration": 3050291800,
  "status": "passed"
});
formatter.after({
  "duration": 6488499800,
  "status": "passed"
});
formatter.before({
  "duration": 6902924600,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on the home page http://localhost:8080",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "8080",
      "offset": 39
    }
  ],
  "location": "ChatSteps.i_am_on_the_home_page_http_localhost(int)"
});
formatter.result({
  "duration": 1915124000,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "User Should be able to enter valid txt and post in to chat",
  "description": "",
  "id": "validation-of-chat-application;user-should-be-able-to-enter-valid-txt-and-post-in-to-chat;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I write \"geffdgfdgmfdgdfgjljdl;jgfsdlgjfl;djgfdgjfdgjfdlgjfdl;gj;fdlgjfdgfdlgjfdlgjfdl;gj;fdlgj;fdlgl;fdgjfdlgj;fdlgj;fdlg;gdlfjg;lfdj;dlgldfj;glgval\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click on send button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I see my \"geffdgfdgmfdgdfgjljdl;jgfsdlgjfl;djgfdgjfdgjfdlgjfdl;gj;fdlgjfdgfdlgjfdlgjfdl;gj;fdlgj;fdlgl;fdgjfdlgj;fdlgj;fdlg;gdlfjg;lfdj;dlgldfj;glgval\" in chat",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "geffdgfdgmfdgdfgjljdl;jgfsdlgjfl;djgfdgjfdgjfdlgjfdl;gj;fdlgjfdgfdlgjfdlgjfdl;gj;fdlgj;fdlgl;fdgjfdlgj;fdlgj;fdlg;gdlfjg;lfdj;dlgldfj;glgval",
      "offset": 9
    }
  ],
  "location": "ChatSteps.i_write(String)"
});
formatter.result({
  "duration": 282149000,
  "status": "passed"
});
formatter.match({
  "location": "ChatSteps.i_click_on_send_button()"
});
formatter.result({
  "duration": 3270679600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "geffdgfdgmfdgdfgjljdl;jgfsdlgjfl;djgfdgjfdgjfdlgjfdl;gj;fdlgjfdgfdlgjfdlgjfdl;gj;fdlgj;fdlgl;fdgjfdlgj;fdlgj;fdlg;gdlfjg;lfdj;dlgldfj;glgval",
      "offset": 10
    }
  ],
  "location": "ChatSteps.i_see_my_in_chat(String)"
});
formatter.result({
  "duration": 3044711500,
  "status": "passed"
});
formatter.after({
  "duration": 5345679100,
  "status": "passed"
});
});