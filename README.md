<p align="center">
<img src="./images/logo.png" alt="lama.js logo"/>
</p>

LAMA.JS is a framework to build *cross-platform* and *cross-device* HTML/CSS/JavaScript applications that have the look and feel of a native app. Create seamless applications with minimal effort from scratch or power your existing application by simply integrating lama.js into it. Create standalone applications using just Sublime Text or any other code editors.

* Now its easy to create beautiful looking applications using lama.js.*

# Browser and Device Support

lama aims to create applications that are compatible with all browsers and devices. Every feature in the framework is tested on multiple browsers and devices.

# Setup

For a live demo, visit [lama.js](https://praveen-manohar.github.io/lama.js/) on desktop or mobile.
<p align="center">
<img src="./images/demo.gif" alt="Demo"/>
</p>

Copy all files from www/js, www/css and www/fonts to your applications www folder.
Add these lines in the head tag of index.html as:

    <head>
    ..
    <!-- lama CSS -->
    <link rel="stylesheet" type="text/css" href="./css/lama.css" />
    <!-- Font-Family CSS -->
    <link href='./css/font-family.css' rel='stylesheet' type='text/css'>
    ..
    </head>

Add these lines before closing body tag of index.html as:

    <body>
    ..
    <!-- lama -->
    <script src="./js/lama.js" type="text/javascript"></script>
    </body>

# Usage

Initialize lama and create an instance in your index.js file

    var demo = lama.init();

Add a div element inside the body element of index.html

    <body>
        <div id="container">
        ..
        //app body content goes here
        ..
        </div>
    </body>

The following features are available in lama framework

### lamacookee navigation menu

To add a lamacookee menu setup lama and add this code above the **container** element of index.html. It should look like this.

    <body>
        <ul id="lama-menu">
        <li class="lama-item"><a href="#">Item one</a></li>
        <li class="lama-item"><a href="#">Item two</a></li>
        <li class="lama-item"><a href="#">Item three</a></li>
        <li class="lama-item"><a href="#">Item four</a></li>
        </ul>
    
        //All other content must come under the container div element below this ul tag.
        <div id="container">
        ..
        //app body content goes here
        ..
        </div>
    </body>

Then in your index.js file, call **lamamenu** to initialize the lamacookee navigation.
    
    demo.lamamenu();

### Debugging

Logs a message to console

    var msg = "This is a message!";
    demo.log(msg);

### UI

Shows an elegant notification message. Leave 'type' as blank for default notification

    demo.notify("This is a default notification");

    demo.notify("This is an alert notification","alert");

    demo.notify("This is an error notification","error");

    demo.notify("This is a success notification","success");

Sets the content of the containing body element

    var content = "<p>This is the content!</p>";
    demo.setContent(content);

Sets the style of the target element. Use '#elementID' for an element with id and '.class' for elements in a class

    var style = '{"backgroundColor":"Red", "color":"White"}';
    demo.setStyle(style, "#classID");

    OR

    demo.setStyle(style, ".className");

Returns a DOM element which has star ratings (maximum 10 star rating)

    var rating = demo.createStarCard("lama" ,"./images/logo.png" ,5);

Adds DOM element to containing body

    demo.addElement(rating);

Shows a loading element

    demo.showLoading();

Hides the loading element

    demo.hideLoading();

# Contribution

I welcome pull requests from all! Thanks in advance! Visit our [Contributions](CONTRIBUTING.md) page for more information.


# License

Created and Maintained by Praveen Manoharan. Licensed under [MIT](LICENSE).
