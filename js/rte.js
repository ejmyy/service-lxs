// --- Globals -----
var g_valid = true;
// --- End Globals -----

var dojoConfig = {
    async: true,
    baseUrl: '.',
    parseOnLoad: true,
    packages: [
        'dojo',
        'dijit',
        'dojox',
        'demo'
    ]
};


/*require([
    'dojo/dom',
    'dojo/fx',
    'dojo/domReady!'
], function (dom, fx) {
    // The piece we had before...
    var greeting = dom.byId('greeting');
    //greeting.innerHTML += ' from Dojo!';

    // ...but now, with an animation!
    /*fx.slideTo({
        node: greeting,
        top: 100,
        left: 200
    }).play();
});*/

$('#textArea').each(function () {
    this.contentEditable = true;
});

require(["dojo/on", "dojo/dom", "dojo/query", "dojo/domReady!"],
function (on, dom) {

    var myObject = {
        id: "myObject",
        onClick: function (evt) {
            dom.byId("textArea").innerHTML += this.id + ", ";
        }
    };
    var div = dom.byId("buttons");
    on(div, ".clickMe:click", myObject.onClick);
});

// Bold
require(["dijit/form/Button", "dojo/domReady!"], function (Button) {
    var button = new Button({
        showLabel: true,
        label: "B", // analogous to title when showLabel is false
        onClick: function () { document.execCommand('bold'); }
    }, "bold");
    button.startup();
});

// Underline
require(["dijit/form/Button", "dojo/domReady!"], function (Button) {
    var button = new Button({
        showLabel: true,
        label: "U", // analogous to title when showLabel is false
        onClick: function () { document.execCommand('underline'); }
    }, "underline");
    button.startup();
});

// Italic
require(["dijit/form/Button", "dojo/domReady!"], function (Button) {
    var button = new Button({
        showLabel: true,
        label: "I", // analogous to title when showLabel is false
        onClick: function () { document.execCommand('italic'); }
    }, "italic");
    button.startup();
});

// Font size
require(["dijit/form/ToggleButton", "dijit/form/ComboButton", "dijit/Menu", "dijit/MenuItem", "dijit/form/DropDownButton", "dijit/TooltipDialog"],
    function (ToggleButton, ComboButton, Menu, MenuItem, DropDownButton, TooltipDialog) {   

    var menu = new Menu({
        id: "FontMenu"
    });
    var menuItem1 = new MenuItem({
        label: "Size 1".fontsize(1),
        iconClass: "",
        onClick: function () { document.execCommand('fontSize', false, '1'); }
    });
    var menuItem2 = new MenuItem({
        label: "Size 2".fontsize(2),
        onClick: function () { document.execCommand('fontSize', false, '2'); }
    });
    var menuItem3 = new MenuItem({
        label: "Size 3".fontsize(3),
        onClick: function () { document.execCommand('fontSize', false, '3'); }
    });
    var menuItem4 = new MenuItem({
        label: "Size 4".fontsize(4),
        onClick: function () { document.execCommand('fontSize', false, '4'); }
    });
    var menuItem5 = new MenuItem({
        label: "Size 5".fontsize(5),
        onClick: function () { document.execCommand('fontSize', false, '5'); }
    });
    var menuItem6 = new MenuItem({
        label: "Size 6".fontsize(6),
        onClick: function () { document.execCommand('fontSize', false, '6'); }
    });
    var menuItem7 = new MenuItem({
        label: "Size 7".fontsize(7),
        onClick: function () { document.execCommand('fontSize', false, '7'); }
    });
    menu.addChild(menuItem1);
    menu.addChild(menuItem2);
    menu.addChild(menuItem3);
    menu.addChild(menuItem4);
    menu.addChild(menuItem5);
    menu.addChild(menuItem6);
    menu.addChild(menuItem7);
    var comboButton = new ComboButton({
        optionsTitle: "Font Options",
        iconClass: "dijitIconFile",
        label: "Font size",
        dropDown: menu,
        onClick: function () { document.execCommand('fontSize', false, '3'); }
    }, "fontSize");
    comboButton.startup();
    menu.startup(); // this also starts up its child MenuItems    
});

// Font name
require(["dijit/form/ToggleButton", "dijit/form/ComboButton", "dijit/Menu", "dijit/MenuItem", "dijit/form/DropDownButton", "dijit/TooltipDialog"],
    function (ToggleButton, ComboButton, Menu, MenuItem, DropDownButton, TooltipDialog) {

        var menu = new Menu({
            id: "fontMenu"
        });
        var menuItem1 = new MenuItem({
            label: "Arial",
            onClick: function () { document.execCommand('fontName', false, 'Arial'); }
        });
        var menuItem2 = new MenuItem({
            label: "Halvetica",
            onClick: function () { document.execCommand('fontName', false, 'Halvetica'); }
        });
        var menuItem3 = new MenuItem({
            label: "Verdana",
            onClick: function () { document.execCommand('fontName', false, 'Verdana'); }
        });
        var menuItem4 = new MenuItem({
            label: "Times New Roman",
            onClick: function () { document.execCommand('fontName', false, 'Times New Roman'); }
        });
        var menuItem5 = new MenuItem({
            label: "Tahoma",
            onClick: function () { document.execCommand('fontName', false, 'Tahoma'); }
        });
        var menuItem6 = new MenuItem({
            label: "Comic Sans MS",
            onClick: function () { document.execCommand('fontName', false, 'Comic Sans MS'); }
        });
        menu.addChild(menuItem1);
        menu.addChild(menuItem2);
        menu.addChild(menuItem3);
        menu.addChild(menuItem4);
        menu.addChild(menuItem5);
        menu.addChild(menuItem6);
        var comboButton = new ComboButton({
            optionsTitle: "Font Options",
            iconClass: "dijitIconFile",
            label: "Font name",
            dropDown: menu,
            onClick: function () { document.execCommand('fontName', false, 'Comic Sans MS'); }
        }, "fontName");
        comboButton.startup();
        menu.startup(); // this also starts up its child MenuItems
    });

// JustifyCenter
require(["dijit/form/Button", "dojo/domReady!"], function (Button) {
    var button = new Button({
        showLabel: false,
        label: "Justify", // analogous to title when showLabel is false
        iconClass: "dijitEditorIcon dijitEditorIconJustifyCenter",
        onClick: function () { document.execCommand('justifyCenter'); }
    }, "justifyCenter");
    button.startup();
});

// JustifyFull
require(["dijit/form/Button", "dojo/domReady!"], function (Button) {
    var button = new Button({
        showLabel: false,
        label: "Justify", // analogous to title when showLabel is false
        iconClass: "dijitEditorIcon dijitEditorIconJustifyFull",
        onClick: function () { document.execCommand('justifyFull'); }
    }, "justifyFull");
    button.startup();
});

// JustifyLeft
require(["dijit/form/Button", "dojo/domReady!"], function (Button) {
    var button = new Button({
        showLabel: false,
        label: "Justify", // analogous to title when showLabel is false
        iconClass: "dijitEditorIcon dijitEditorIconJustifyLeft",
        onClick: function () { document.execCommand('justifyLeft'); }
    }, "justifyLeft");
    button.startup();
});

// JustifyRight
require(["dijit/form/Button", "dojo/domReady!"], function (Button) {
    var button = new Button({
        showLabel: false,
        label: "Justify", // analogous to title when showLabel is false
        iconClass: "dijitEditorIcon dijitEditorIconJustifyRight",
        onClick: function () { document.execCommand('justifyRight'); }
    }, "justifyRight");
    button.startup();
});

// UnorderedList
require(["dijit/form/Button", "dojo/domReady!"], function (Button) {
    var button = new Button({
        showLabel: false,
        label: "UnorderedList", // analogous to title when showLabel is false
        iconClass: "dijitEditorIcon dijitEditorIconInsertUnorderedList",
        onClick: function () { document.execCommand('insertUnorderedList'); }
    }, "unorderedList");
    button.startup();
});

// OrderedList
require(["dijit/form/Button", "dojo/domReady!"], function (Button) {
    var button = new Button({
        showLabel: false,
        label: "OrderedList", // analogous to title when showLabel is false
        iconClass: "dijitEditorIcon dijitEditorIconInsertOrderedList",
        onClick: function () { document.execCommand('insertOrderedList'); }
    }, "orderedList");
    button.startup();
});

// Paragraph
require(["dijit/form/Button", "dojo/domReady!"], function (Button) {
    var button = new Button({
        showLabel: true,
        label: "P", // analogous to title when showLabel is false
        onClick: function () { document.execCommand('insertParagraph'); }
    }, "paragraph");
    button.startup();
});

/*// Image
require(["dijit/form/Button", "dojo/domReady!"], function (Button) {
    var button = new Button({
        showLabel: true,
        label: "Image", // analogous to title when showLabel is false
        onClick: function () { main(); }
    }, "image");
    button.startup();
});

function main() {
    var inputFileToLoad = document.createElement("input");
    inputFileToLoad.type = "file";
    inputFileToLoad.id = "inputFileToLoad";
    document.body.appendChild(inputFileToLoad);

    var buttonLoadFile = document.createElement("button");
    buttonLoadFile.onclick = loadImageFileAsURL;
    buttonLoadFile.textContent = "Load Selected File";
    document.body.appendChild(buttonLoadFile);
}

function loadImageFileAsURL() {
    var filesSelected = document.getElementById("inputFileToLoad").files;
    if (filesSelected.length > 0) {
        var fileToLoad = filesSelected[0];

        if (fileToLoad.type.match("image.*")) {
            var fileReader = new FileReader();
            fileReader.onload = function (fileLoadedEvent) {
                var imageLoaded = document.createElement("img");
                imageLoaded.src = fileLoadedEvent.target.result;
                document.body.appendChild(imageLoaded);
                var doc = document.getElementById("textArea");
                doc.execCommand("insertimage", false, imageLoaded);
            };
            fileReader.readAsDataURL(fileToLoad);
        }
    }
}*/

// onFocus
function textAreaOnFocus(input){
    input.style.color = "blue";//"#0E11C2"; 
    if (!g_valid) {
        require(["dijit/Tooltip", "dojo/dom", "dojo/on", "dojo/mouse", "dojo/domReady!"], function (Tooltip, dom, on, mouse) {
            var node = dom.byId('textArea');
            Tooltip.show("Toto pole je nutne vyplnit", node);
            /*on.once(node, mouse.leave, function () {
                Tooltip.hide(node);
            })*/
        })
    }
}

// onBlur - losing focus
function textAreaOnBlur(input) {
    input.style.color = "black";
    validate(input);
    if (!g_valid)
    {
        var textArea = document.getElementById("textArea");
        textArea.style.borderColor = "red";
    }    
}

function validate(input) {
    var temp = input.innerHTML;
    // change text (&nbsp;) to the symbol " "
    var pattern = new RegExp("[^\\s]");
    temp = replaceAll(temp, "&nbsp;", " ");
    temp = replaceAll(temp, "<div><br></div>", " ");
    temp = replaceAll(temp, "<div>", "");
    temp = replaceAll(temp, "</div>", "");
    temp = replaceAll(temp, "<br>", " ");
    console.log(temp);
    g_valid = pattern.test(temp);
}

function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
}

function textAreaOnInput(input) {
    validate(input);
    if (g_valid) {        
        var textArea = document.getElementById("textArea");
        textArea.style.borderColor = "black";        
        require(["dijit/Tooltip", "dojo/dom", "dojo/on", "dojo/mouse", "dojo/domReady!"], function (Tooltip, dom, on, mouse) {
            var node = dom.byId('textArea');            
            Tooltip.hide(node);            
        })
    }
}

// Load the Tooltip widget class
/*require(["dijit/Tooltip", "dojo/parser", "dojo/domReady!"], function (Tooltip, parser) {
    parser.parse();
});*/