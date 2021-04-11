Feature: Validation of Chat Application

Background:
Given I am on the home page http://localhost:8080  

@sanity
Scenario Outline: User Should be able to enter valid txt and post in to chat
When I write "<message>"
Then I click on send button
Then I see my "<message>" in chat
Examples:
|message					|
|Hi How are you?	|
|geffdgfdgmfdgdfgjljdl;jgfsdlgjfl;djgfdgjfdgjfdlgjfdl;gj;fdlgjfdgfdlgjfdlgjfdl;gj;fdlgj;fdlgl;fdgjfdlgj;fdlgj;fdlg;gdlfjg;lfdj;dlgldfj;glgval|

@sanity @regression
Scenario Outline: User Should be able to enter more than 140 character txt and post in to chat and see only 140 character in the chat	 
When I write "<message>"
Then I click on send button
Then I see only 140 character of my "<message>" in chat
Examples:
|message					|
|geffdgfdgmfdgdfgjljdl;jgfsdlgjfl;djgfdgjfdgjfdlgjfdl;gj;fdlgjfdgfdlgjfdlgjfdl;gj;fdlgj;fdlgl;fdgjfdlgj;fdlgj;fdlg;gdlfjg;lfdj;dlgldfj;glgvalfgdggdgfdgfdgdf	|

@sanity @regression
Scenario Outline: User Should be able to see error msg for empty msg	 
When I write "<message>"
Then I click on send button
Then I see error msg chat
Examples:
|message					|
||

@sanity @regression
Scenario Outline: User Should be able see valid sign up date on chat 
When I write "<message>"
Then I click on send button
Then I move cursor to my message on chat
Then I verify your "<signupDate>" within the chat box
Examples: 
|message					|signupDate			|
|Hi How are you?	|April 07, 2017	|