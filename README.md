Web App 
During the entire web design process, I went through several iterations. 
At first, I designed the web app with overly complex features, like 
letting users create their own training plans, watch training videos, 
and calculate heart rate and calorie consumption based on their data. 
But I underestimated the time and challenges involved in implementing 
these complex features.

In the early stages, I planned for multiple pages and envisioned a 
section called "Courses" where users could generate related course 
content after creating their plans. However, I ran into difficulties 
during implementation. For example, I wanted to implement random 
image generation, but it didn't work as expected [there are emapmles images from the "Pictures" 
folder, to keep our folder structure tidy](Pictures/Prototype.png) VS(Pictures/Final.png). 
Additionally, the assignment required a single-page architecture, so I had to modify 
the prototype website [there are emapmles images from the "Pictures" 
folder, to keep our folder structure tidy](Pictures/Prototype1.png) VS(Pictures/Final1.png).

After several rounds of iteration and adjustments, I simplified the 
web app's design. Now, its main function is a yoga tracking app 
where users can input data like yoga type, duration, and intensity. 
I focused on simplifying the user interface and functionality to 
ensure each part works smoothly and provides a good user experience. 
This design process taught me a lot, especially in dealing with complex 
features and debugging code.

When users enter the page, they can click the "Check-in" button to 
register their attendance. They can view their check-in count at 
the top [this is an emapmle image from the "Pictures" folder, 
to keep our folder structure tidy](Pictures/Check in.png). 
Users can create their own training plans, which will be displayed 
in the "Courses" module upon completion. There, the plans will 
automatically generate BPM (Beats Per Minute) data. By clicking 
on a created plan, users can view detailed information 
on the right side of the page. Additionally, users can customize 
multiple plans flexibly.

Despite my efforts, there are still some discrepancies between 
the final web page and the UI design. I couldn't find a suitable 
font package, so I couldn't change the web page's font. Also, 
the two sections on the web page have different sizes because 
one section includes dynamic changes, causing the modules to be 
inconsistent in size  [there are emapmles images from the "Pictures" 
folder, to keep our folder structure tidy](Pictures/Prototype2.png) VS(Pictures/Final2.png).
 Another issue was the image resolution. If I arranged images on the web 
page according to the UI design's size, they appeared blurry 
 [there are emapmles images from the "Pictures" 
folder, to keep our folder structure tidy](Pictures/Prototype3.png) 
VS(Pictures/Final3.png). 
These issues had some impact on the visual effect.
During the creation of the web app, I also used some code 
components downloaded from websites to ensure the web page 
runs smoothly.

Before deploying to Node and GitHub, first, download and 
install Node.js (v-14.21.3-x64). Then, create a new directory 
in your web code folder for the Node.js project. Run cmd and 
type node -v to make sure Node.js is installed successfully. 
Open ‘Powershell’ in the saved web code folder, and type 
‘node index.js’ in ‘Powershell’ [this is an emapmle image from the "Pictures" folder, 
to keep our folder structure tidy](Pictures/PowerShell.png), which will create 
a package.json file [this is an emapmle image from the "Pictures" folder, 
to keep our folder structure tidy](Pictures/Package.png). 
Next, create an index.js file and add your application code.
 Here, we use the express framework to create a simple web 
 server. Install the express dependency by running npm install 
 express. Then, start the application in cmd with node index.js, 
 and verify it works by visiting 127.0.0.1:3000/pc/index.html 
 for PC and 127.0.0.1:3000 for mobile. [this is an emapmle image from the "Pictures" folder, 
to keep our folder structure tidy](Pictures/CMD.png).
 After that, log in to GitHub and create a new repository to store the project. 
 Back in the project directory, initialize a Git repository with git init, 
 add all files to the repository, and commit the initial version. 
 Then, use commands to link your local repository with the remote 
 repository on GitHub, and finally push the code to GitHub.
 
References
Chinese webs：
js pages using element-ui-CSDN blogs. (n.d.).blog.csdn.net.Retrieved May 24, 2024, from https://blog.csdn.net/qq_47793359/article/details/134202069

sweetalert Usage summary and download address, Great jump tips for user experience _sweetalert download -CSDN blog.(n.d.).blog.csdn.net.Retrieved 
May 24, 2024, from https://blog.csdn.net/qq_33182756/article/details/79604827

Introduction to Node.js. (n.d.). Node.js. https://nodejs.org/en/learn/getting-started/introduction-to-nodejs

palepinkgetaway.com | Illustration, Fitness, Fitness art. (n.d.). Pinterest. Retrieved June 2, 2024, from https://www.pinterest.com.au/pin/211669251228995679/

Pin by Francesca Cavaliere on idee per sfondi di danza | Illustration art girl, Yoga art, Illustration art. (n.d.). Pinterest. Retrieved June 2, 2024, from https://www.pinterest.com.au/pin/240942648807881825/

‌Fluid Logo | Logo design trends, Logo design, Logo color inspiration. (n.d.). Pinterest. Retrieved June 2, 2024, from https://www.pinterest.com.au/pin/716987203191711642/

‌The Noun Project | Royalty free icons, Search icon, Icon. (n.d.). Pinterest. Retrieved June 2, 2024, from https://www.pinterest.com.au/pin/868913321848890443/

‌Beautiful Woman Practicing Yoga in Lotus Position. (n.d.). Pinterest. Retrieved June 2, 2024, from https://www.pinterest.com.au/pin/741616263662147816/

‌Bearded Guy with Glasses Avatar | Illustration character design, Logo illustration design, Doodle art designs. (n.d.). Pinterest. Retrieved June 2, 2024, from https://www.pinterest.com.au/pin/653796070920117187/

‌Examples - Apache ECharts. (n.d.). Echarts.apache.org. Retrieved June 2, 2024, from https://echarts.apache.org/examples/zh/index.html#chart-type-calendar

‌JS Foundation - js.foundation. (2019). Download jQuery | jQuery. Jquery.com. https://jquery.com/download/

‌
‌
‌
