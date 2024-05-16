// Screens
var container = document.getElementById("container");

var splashScreen = document.getElementById("splash");

var aboutScreen = document.getElementById("about");
var aboutScroll = 110;

var analysisScreen = document.getElementById("analysis");
var analysisScroll = 110;

var dataScreen = document.getElementById("data");
var dataScroll = 110;

var codingScreen = document.getElementById("coding");
var codingScroll = 110;

var designScreen = document.getElementById("design");
var designScroll = 110;

var interactiveScreen = document.getElementById("interactive");
var interactiveScroll = 110;

var contactScreen = document.getElementById("contact");
var contactScroll = 110;

var nav = document.getElementById("nav");

//Nav Buttons
var homeNavIcon = document.getElementById("navHomeIcon");
var aboutNavIcon = document.getElementById("navAboutIcon");
var dataNavIcon = document.getElementById("navDataIcon");
var analysisNavIcon = document.getElementById("navAnalysisIcon");
var programmingNavIcon = document.getElementById("navProgrammingIcon");
var designNavIcon = document.getElementById("navDesignIcon");
var interactiveNavIcon = document.getElementById("navInteractiveIcon");
var contactNavIcon = document.getElementById("navContactIcon");

//About Page Items
var aboutBioBut = document.getElementById("aboutBioBut");
var aboutEduBut = document.getElementById("aboutEduBut");
var aboutExpBut = document.getElementById("aboutExpBut");
var aboutResBut = document.getElementById("aboutResBut");

var aboutBioBox = document.getElementById("aboutBioBox");
var aboutEduBox = document.getElementById("aboutEduBox");
var aboutExpBox = document.getElementById("aboutExpBox");
var aboutResBox = document.getElementById("aboutResBox");

//Experience Buttons
var csiDescBut = document.getElementById("csiDescBut");
var csiDescBox = document.getElementById("csiDescBox");
var strokeDescBut = document.getElementById("strokeDescBut");
var strokeDescBox = document.getElementById("strokeDescBox");

//Data page
var aadmBanner = document.getElementById("aadmBanner");
var aadmDisplay = document.getElementById("aadmDisplay");

var sgrBanner = document.getElementById("sgrBanner");
var sgrDisplay = document.getElementById("sgrDisplay");

var sitBanner = document.getElementById("sitBanner");
var sitDisplay = document.getElementById("sitDisplay");

var xlwBanner = document.getElementById("xlwBanner");
var xlwDisplay = document.getElementById("xlwDisplay");

var hivBanner = document.getElementById("hivBanner");
var hivDisplay = document.getElementById("hivDisplay");

// Analysis Page
var fbbBanner = document.getElementById("fbbBanner");
var fbbDisplay = document.getElementById("fbbDisplay");

var slpBanner = document.getElementById("slpBanner");
var slpDisplay = document.getElementById("slpDisplay");

var pgaBanner = document.getElementById("pgaBanner");
var pgaDisplay = document.getElementById("pgaDisplay");

var afaBanner = document.getElementById("afaBanner");
var afaDisplay = document.getElementById("afaDisplay");

var hhmBanner = document.getElementById("hhmBanner");
var hhmDisplay = document.getElementById("hhmDisplay");

// Coding Page
var krpgBanner = document.getElementById("krpgBanner");
var krpgDisplay = document.getElementById("krpgDisplay");

var sttBanner = document.getElementById("sttBanner");
var sttDisplay = document.getElementById("sttDisplay");

var canvBanner = document.getElementById("canvBanner");
var canvDisplay = document.getElementById("canvDisplay");

var uplBanner = document.getElementById("uplBanner");
var uplDisplay = document.getElementById("uplDisplay");

var halBanner = document.getElementById("halBanner");
var halDisplay = document.getElementById("halDisplay");

// Design Page
var bpBanner = document.getElementById("bpBanner");
var bpDisplay = document.getElementById("bpDisplay");

var logoBanner = document.getElementById("logoBanner");
var logoDisplay = document.getElementById("logoDisplay");

var vialBanner = document.getElementById("vialBanner");
var vialDisplay = document.getElementById("vialDisplay");

var settlerBanner = document.getElementById("settlerBanner");
var settlerDisplay = document.getElementById("settlerDisplay");

var hdnBanner = document.getElementById("hdnBanner");
var hdnDisplay = document.getElementById("hdnDisplay");

// Interactive Page
var escBanner = document.getElementById("escBanner");
var escDisplay = document.getElementById("escDisplay");

var hackBanner = document.getElementById("hackBanner");
var hackDisplay = document.getElementById("hackDisplay");

var roverBanner = document.getElementById("roverBanner");
var roverDisplay = document.getElementById("roverDisplay");

//89.395 is max currently

var currentScreen = 0;
var scrollFactor = 6;

const scrollScreen = (dir) => {
    //console.log(dir)

    //we are scrolling down
    if(dir > 0){
        switch(currentScreen){
            case 0:
                if(aboutScroll > 0){
                    if(aboutScroll > scrollFactor){
                        aboutScroll -= scrollFactor;
                        
                    } else {
                        aboutScroll = 0;
                        currentScreen = 1;
                    }
                    aboutScreen.style.top = (aboutScroll/100) * 1400 + "px";
                }
                break;
            case 1:
                if(dataScroll > 0){
                    if(dataScroll > scrollFactor){
                        dataScroll -= scrollFactor;
                    } else {
                        dataScroll = 0;
                        currentScreen = 2;
                    }
                    dataScreen.style.top = (dataScroll/100) * 1400 + "px";
                }
                break;
            case 2:
                if(analysisScroll > 0){
                    if(analysisScroll > scrollFactor){
                        analysisScroll -= scrollFactor;
                    } else {
                        analysisScroll = 0;
                        currentScreen = 3;
                    }
                    analysisScreen.style.top = (analysisScroll/100) * 1400 + "px";
                }
                break;
            case 3:
                if(codingScroll > 0){
                    if(codingScroll > scrollFactor){
                        codingScroll -= scrollFactor;
                    } else {
                        codingScroll = 0;
                        currentScreen = 4;
                    }
                    codingScreen.style.top = (codingScroll/100) * 1400 + "px";
                }
                break;
            case 4:
                if(designScroll > 0){
                    if(designScroll > scrollFactor){
                        designScroll -= scrollFactor;
                    } else {
                        designScroll = 0;
                        currentScreen = 5;
                    }
                    designScreen.style.top = (designScroll/100) * 1400 + "px";
                }
                break;
            case 5:
                if(interactiveScroll > 0){
                    if(interactiveScroll > scrollFactor){
                        interactiveScroll -= scrollFactor;
                    } else {
                        interactiveScroll = 0;
                        currentScreen = 6;
                    }
                    interactiveScreen.style.top = (interactiveScroll/100) * 1400 + "px";
                }
                break;
            case 6:
                if(contactScroll > 0){
                    if(contactScroll > scrollFactor){
                        contactScroll -= scrollFactor;
                    } else {
                        contactScroll = 0;
                        currentScreen = 6;
                    }
                    contactScreen.style.top = (contactScroll/100) * 1400 + "px";
                    }
                break;
            default:
                break;
        }
    }
        

    if(dir < 0){
        switch(currentScreen){
            case 0:
                if(aboutScroll < 111){
                    if(aboutScroll < 100){
                        aboutScroll += scrollFactor;
                    } else {
                        aboutScroll = 110;
                        currentScreen = 0;
                    }
                    
                    aboutScreen.style.top = (aboutScroll/100) * 1400 + "px";
                }
                break;
            case 1:
                if(dataScroll < 111){
                    if(dataScroll < 125){
                        dataScroll += scrollFactor;
                    } else {
                        dataScroll = 110;
                        currentScreen = 1;
                    }
                    
                    dataScreen.style.top = (dataScroll/100) * 1400 + "px";
                } else {
                    currentScreen = 0;
                }
                break;
            case 2:
                if(analysisScroll < 111){
                    if(analysisScroll < 125){
                        analysisScroll += scrollFactor;
                    } else {
                        analysisScroll = 110;
                        currentScreen = 1;
                    }
                    
                    analysisScreen.style.top = (analysisScroll/100) * 1400 + "px";
                } else {
                    currentScreen = 1;
                }
                break;
            case 3:
                if(codingScroll < 111){
                    if(codingScroll < 125){
                        codingScroll += scrollFactor;
                    } else {
                        codingScroll = 110;
                        currentScreen = 2;
                    }
                    
                    codingScreen.style.top = (codingScroll/100) * 1400 + "px";
                } else {
                    currentScreen = 2;
                }
                break;
            case 4:
                if(designScroll < 111){
                    if(designScroll < 125){
                        designScroll += scrollFactor;
                    } else {
                        designScroll = 110;
                        currentScreen = 3;
                    }
                    
                    designScreen.style.top = (designScroll/100) * 1400 + "px";
                } else {
                    currentScreen = 3;
                }
                break;
            case 5:
                if(interactiveScroll < 111){
                    if(interactiveScroll < 125){
                        interactiveScroll += scrollFactor;
                    } else {
                        interactiveScroll = 110;
                        currentScreen = 4;
                    }
                    
                    interactiveScreen.style.top = (interactiveScroll/100) * 1400 + "px";
                } else {
                    currentScreen = 4;
                }
                break;
            case 6:
                if(contactScroll < 111){
                    if(contactScroll < 125){
                        contactScroll += scrollFactor;
                    } else {
                        contactScroll = 110;
                        currentScreen = 5;
                    }
                    
                    contactScreen.style.top = (contactScroll/100) * 1400 + "px";
                } else {
                    currentScreen = 5;
                }
                break;
            default:
                break;
        }

    }
}

const autoScroller = (targetScreen) => {

    var diff = targetScreen - currentScreen;

    if(diff > 0){

        // Scroll down
        for(var i = 0; i < Math.abs(diff); i++){
            var curScreen = container.children[currentScreen + 1 + i];

            curScreen.style.transition = "top 2s ease";
            curScreen.style.transitionDelay = i/3 + "s";

            curScreen.style.top = 0;
        }

        currentScreen = targetScreen;

    } else if (diff < 0){

        console.log('here');

        // Scroll up
        for(var i = 0; i < Math.abs(diff); i++){
            var curScreen = container.children[currentScreen - i];

            curScreen.style.transition = "top 2s ease";
            curScreen.style.transitionDelay = i/3 + "s";

            curScreen.style.top = "1600px";
        } 

        currentScreen = targetScreen;

    } else {
        return;
    }
}

const updateTracker = (targetInd) => {

    const iconArray = [homeNavIcon, aboutNavIcon, dataNavIcon, analysisNavIcon, programmingNavIcon, designNavIcon, interactiveNavIcon, contactNavIcon]

    for(var i = 0; i<iconArray.length;i++){
        iconArray[i].className = "navIcon"
    }

    iconArray[targetInd].className = "navIcon selected"
}

const resetAbout = () => {
    aboutBioBut.className = "about-menu-item"
    aboutEduBut.className = "about-menu-item"
    aboutExpBut.className = "about-menu-item"
    aboutResBut.className = "about-menu-item"

    aboutBioBox.className = "hidden"
    aboutEduBox.className = "hidden"
    aboutExpBox.className = "hidden"
    aboutResBox.className = "hidden"
    csiDescBox.className = "hidden"
    strokeDescBox.className = "hidden"
}

const resetData = () => {
    aadmBanner.className = "data-banner-img"
    aadmDisplay.className = "hidden"

    sgrBanner.className = "data-banner-img"
    sgrDisplay.className = "hidden"

    sitBanner.className = "data-banner-img"
    sitDisplay.className = "hidden"

    xlwBanner.className = "data-banner-img"
    xlwDisplay.className = "hidden"

    hivBanner.className = "data-banner-img"
    hivDisplay.className = "hidden"
}

const resetAnalysis = () => {
    fbbBanner.className = "data-banner-img"
    fbbDisplay.className = "hidden"

    slpBanner.className = "data-banner-img"
    slpDisplay.className = "hidden"

    pgaBanner.className = "data-banner-img"
    pgaDisplay.className = "hidden"

    afaBanner.className = "data-banner-img"
    afaDisplay.className = "hidden"

    hhmBanner.className = "data-banner-img"
    hhmDisplay.className = "hidden"
}

const resetCoding = () => {
    krpgBanner.className = "data-banner-img"
    krpgDisplay.className = "hidden"

    sttBanner.className = "data-banner-img"
    sttDisplay.className = "hidden"

    canvBanner.className = "data-banner-img"
    canvDisplay.className = "hidden"

    uplBanner.className = "data-banner-img"
    uplDisplay.className = "hidden"

    halBanner.className = "data-banner-img"
    halDisplay.className = "hidden"
}

const resetDesign = () => {
    bpBanner.className = "data-banner-img"
    bpDisplay.className = "hidden"

    logoBanner.className = "data-banner-img"
    logoDisplay.className = "hidden"

    vialBanner.className = "data-banner-img"
    vialDisplay.className = "hidden"

    settlerBanner.className = "data-banner-img"
    settlerDisplay.className = "hidden"

    hdnBanner.className = "data-banner-img"
    hdnDisplay.className = "hidden"
}

const resetInteractive = () => {
    escBanner.className = "data-banner-img"
    escDisplay.className = "hidden"

    hackBanner.className = "data-banner-img"
    hackDisplay.className = "hidden"

    roverBanner.className = "data-banner-img"
    roverDisplay.className = "hidden"
}

/*
container.addEventListener("wheel", event => {

    for(var i = 0; i < container.children.length; i++){
        container.children[i].style.transition = 'none';
    }

    var dir = event.deltaY;

    scrollScreen(dir);
});
*/

nav.addEventListener("click", event => {
    var targ = document.getElementById(event.target.id)

    var childInd = Array.prototype.indexOf.call(nav.children, targ) / 2;

    console.log("You are on screen " + currentScreen + " and you're trying to navigate to " + childInd);

    autoScroller(childInd);
    updateTracker(childInd);
});

aboutBioBut.addEventListener("click", event => {
    resetAbout();

    aboutBioBox.className = "";
    aboutBioBut.className = "about-menu-item selected";
});

aboutEduBut.addEventListener("click", event => {
    resetAbout();

    aboutEduBox.className = "";
    aboutEduBut.className = "about-menu-item selected";
})

aboutExpBut.addEventListener("click", event => {
    resetAbout();

    aboutExpBox.className = "";
    aboutExpBut.className = "about-menu-item selected";
});

aboutResBut.addEventListener("click", event => {
    resetAbout();

    aboutResBox.className = "";
    aboutResBut.className = "about-menu-item selected";
});


csiDescBut.addEventListener("click", event => {
    resetAbout();

    aboutExpBox.className = "hidden";
    csiDescBox.className = "";
});

strokeDescBut.addEventListener("click", event => {
    resetAbout();

    aboutExpBox.className = "hidden";
    strokeDescBox.className = "";
});

// Data Page listeners
aadmBanner.addEventListener("click", event => {
    resetData();

    aadmBanner.className = "data-banner-img selected"
    aadmDisplay.className = "display"
});

sgrBanner.addEventListener("click", event => {
    resetData();

    sgrBanner.className = "data-banner-img selected"
    sgrDisplay.className = "display"
});

sitBanner.addEventListener("click", event => {
    resetData();

    sitBanner.className = "data-banner-img selected"
    sitDisplay.className = "display"
});

xlwBanner.addEventListener("click", event => {
    resetData();

    xlwBanner.className = "data-banner-img selected"
    xlwDisplay.className = "display"
});

hivBanner.addEventListener("click", event => {
    resetData();

    hivBanner.className = "data-banner-img selected"
    hivDisplay.className = "display"
});


//Analysis Page Listeners
fbbBanner.addEventListener("click", event => {
    resetAnalysis();

    fbbBanner.className = "data-banner-img selected"
    fbbDisplay.className = "display"
});

slpBanner.addEventListener("click", event => {
    resetAnalysis();

    slpBanner.className = "data-banner-img selected"
    slpDisplay.className = "display"
});

pgaBanner.addEventListener("click", event => {
    resetAnalysis();

    pgaBanner.className = "data-banner-img selected"
    pgaDisplay.className = "display"
});

afaBanner.addEventListener("click", event => {
    resetAnalysis();

    afaBanner.className = "data-banner-img selected"
    afaDisplay.className = "display"
});

hhmBanner.addEventListener("click", event => {
    resetAnalysis();

    hhmBanner.className = "data-banner-img selected"
    hhmDisplay.className = "display"
});

//coding Page Listeners
krpgBanner.addEventListener("click", event => {
    resetCoding();

    krpgBanner.className = "data-banner-img selected"
    krpgDisplay.className = "display"
});

sttBanner.addEventListener("click", event => {
    resetCoding();

    sttBanner.className = "data-banner-img selected"
    sttDisplay.className = "display"
});

canvBanner.addEventListener("click", event => {
    resetCoding();

    canvBanner.className = "data-banner-img selected"
    canvDisplay.className = "display"
});

uplBanner.addEventListener("click", event => {
    resetCoding();

    uplBanner.className = "data-banner-img selected"
    uplDisplay.className = "display"
});

halBanner.addEventListener("click", event => {
    resetCoding();

    halBanner.className = "data-banner-img selected"
    halDisplay.className = "display"
});


//Design Page Listeners
bpBanner.addEventListener("click", event => {
    resetDesign();

    bpBanner.className = "data-banner-img selected"
    bpDisplay.className = "display"
});

logoBanner.addEventListener("click", event => {
    resetDesign();

    logoBanner.className = "data-banner-img selected"
    logoDisplay.className = "display"
});

vialBanner.addEventListener("click", event => {
    resetDesign();

    vialBanner.className = "data-banner-img selected"
    vialDisplay.className = "display"
});

settlerBanner.addEventListener("click", event => {
    resetDesign();

    settlerBanner.className = "data-banner-img selected"
    settlerDisplay.className = "display"
});

hdnBanner.addEventListener("click", event => {
    resetDesign();

    hdnBanner.className = "data-banner-img selected"
    hdnDisplay.className = "display"
});

//Interactive Page Listeners
escBanner.addEventListener("click", event => {
    resetInteractive();

    escBanner.className = "data-banner-img selected"
    escDisplay.className = "display"
});

hackBanner.addEventListener("click", event => {
    resetInteractive();

    hackBanner.className = "data-banner-img selected"
    hackDisplay.className = "display"
});

roverBanner.addEventListener("click", event => {
    resetInteractive();

    roverBanner.className = "data-banner-img selected"
    roverDisplay.className = "display"
});