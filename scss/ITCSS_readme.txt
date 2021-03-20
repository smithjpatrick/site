Settings – used with preprocessors and contain font, colors definitions, etc.

This is the starting point when using CSS preprocessors. It contains global variables that can be accessed from anywhere within your CSS project. Examples of global settings are font sizes and colour definitions.

https://www.digitalocean.com/community/tutorials/how-to-solve-large-scale-css-bottlenecks-with-itcss-and-bem

https://dev.to/carlillo/understanding-itcss-real-case-using-itcss-in-a-ghostcms-blog-1p9b

Settings
This is the starting point when using CSS preprocessors. It contains global variables that can be accessed from anywhere within your CSS project. Examples of global settings are font sizes and colour definitions.

Tools
This contains global functions and mixins and it comes after the settings since the mixins and functions might need access to global settings. This layer is the second layer if you are using preprocessors. Examples are font-size mixins px-to-rem mixins, etc. It is important to avoid writing actual styles in the first two layers.

Generic
This is the point where actual CSS is written and it is also the starting point if you are not using a preprocessor. It contains styles such as CSS reset roles, global box-sizing rules, and CSS normalising rules. The styles here affect much of the DOM.

Element
This layer contains element selector styles. It contains styles for bare and un-classed HTML elements. Styles for form, heading, img, links and table elements also come in here. Styles here are still very low-specificity but affects slightly less of the DOM.

Objects
This is the first layer with class-based selector. It contains styles for non-cosmetic objects such as containers, wrappers and layout systems. This layer affects less of the DOM than the last layer, has a higher specificity, and is slightly more explicit given that we are now targeting specific sections of the DOM with classes.

Components
This layer holds the style for each component in your project. It’s more explicit than the previous layer because we are now styling visible UI elements. In component based frameworks like Angular, Vue or React, this is the layer where you import your styling for each component if you don’t include them directly in your component.

Trumps
This layer beats other layers. This is where utility and helper styles are defined. It is specificity heavy, can override previous styles and is the tip of the triangle. Most of the styles here contain the !important flag.


<nav class="navbar__nav">
            <ul class="navbar__nav-list">
              <li class="navbar__nav-item">
                <a href="#" class="navbar__nav-link nav-link">About</a>
              </li>
              <li class="navbar__nav-item">
                <a href="#" class="navbar__nav-link nav-link"
                  >Work <i class="fas fa-chevron-down u-margin-left-small"></i
                ></a>
                <!-- <ul class="navbar__work-list o-dropdown">
                  <li class="navbar__work-item o-dropdown__item">
                    <a href="#" class="navbar__nav-link">Toast</a>
                  </li>
                  <li class="navbar__work-item o-dropdown__item">
                    <a href="#" class="navbar__nav-link">Waltham Mills</a>
                  </li>
                  <li class="navbar__work-item o-dropdown__item">
                    <a href="#" class="navbar__nav-link">Grasshopper</a>
                  </li>
                  <li class="navbar__work-item o-dropdown__item">
                    <a href="#" class="navbar__nav-link"
                      >Canton Public Library</a
                    >
                  </li>
                </ul> -->
              </li>
              <li class="navbar__nav-item">
                <a href="#" class="navbar__nav-link nav-link">Contact</a>
              </li>
              <li class="navbar__nav-item">
                <a href="#" class="navbar__nav-link nav-link">Resume</a>
              </li>
            </ul>
          </nav>