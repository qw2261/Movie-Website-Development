        
        // To randomly switch the spotlight images on loading/reloading of the page
        function switchSpot(){
            spotImg = new Array("../images/casablanca.jpg", "../images/spot2.png", "../images/spot3.jpg");
            choice = Math.floor(Math.random()*3);
            spotPic = document.getElementById("spot");
            spotPic.src = spotImg[choice];
        }
        
        // To clear the generated video objects information for regeneration especially when the numbers are clicked
        function clearInfo(){
            for(i=0; i < 5; i++){
                switch(i){
                    case 0:
                        partId = document.getElementById("part1");
                        break;
                    case 1:
                        partId = document.getElementById("part2");
                        break;
                    case 2:
                        partId = document.getElementById("part3");
                        break;
                    case 3:
                        partId = document.getElementById("part4");
                        break;
                    case 4:
                        partId = document.getElementById("part5");
                        break;
                }
                partId.style.visibility = "hidden";
            }
        }
        
        // To use getVideo() to get random pick of video objects and generate the video information
        function videoInfoShow(){
            clearInfo();
            watchShow = getVideo();
            for(i=0; i < watchShow.length; i++){
                switch(i){
                    case 0:
                        partId = document.getElementById("part1");
                        break;
                    case 1:
                        partId = document.getElementById("part2");
                        break;
                    case 2:
                        partId = document.getElementById("part3");
                        break;
                    case 3:
                        partId = document.getElementById("part4");
                        break;
                    case 4:
                        partId = document.getElementById("part5");
                        break;
                }
                partId.style.visibility = "visible";
                // To show the video information and attach the title to the URL of Play.html
                partId.innerHTML =
                '<a href="Play.html'+ '?' + watchShow[i].title + '">' +
                '<img src="../images/' + watchShow[i].poster + '" alt="The image cannot be shown." />' +
                '</a>' +
                '<p><span class="title">'+ watchShow[i].title + '</span> - '+ watchShow[i].desc + '</p>';
                
            }
        }
        
        // The following functions are called to show "hand" style when the numbers are mouse over
        function handStyle(){
            tds = document.getElementsByTagName("td");
            for(i=0; i<tds.length; i++){
                tds[i].onmouseover = hand;
            }
            tdsCountry = document.querySelectorAll('.country');
            for(i=0; i<tdsCountry.length; i++){
                tdsCountry[i].onmouseover = normal;
            }
            
        }
        function hand(){
            this.style.cursor = "pointer";
        }
        function normal(){
            this.style.cursor = "auto";
        }
        
       