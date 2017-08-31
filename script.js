function toggleModal() {
    var modal = document.getElementById("Modal");
    modal.classList.toggle("is-active")
}

var cheese = 0;
function createPoem() {
    cheese += 1;
    var poemName = document.getElementById("poemName");
    var poetName = document.getElementById("poetName");
    var realPoem = document.getElementById("realPoem");
    var tiles = document.getElementById("Tiles");
    var tagCheckboxes = document.getElementById("tagCheckboxes");



    var tags = tagCheckboxes.querySelectorAll(".tag");

    tagsChecked = ""
    for (var i = 0; i < tags.length; i++) {
        if (tags[i].checked == true) {
            var tagColor;

            switch (tags[i].value) {
                case "Love":
                    tagColor = "is-danger";
                    break;
                case "Happiness":
                    tagColor = "is-warning";
                    break;
                case "Sadness":
                    tagColor = "is-info";
                    break;
                case "New Beginnings":
                    tagColor = "is-success";
                    break;
                case "Nostalgia":
                    tagColor = "is-primary";
                    break;
                case "Heartbreak":
                    tagColor = "is-light";
                    break;
                case "Death":
                    tagColor = "is-black";
                    break;
                default:
                    tagColor = "is-white";


            };


            tagsChecked += `<span style="border: 1px solid white;" class="tag ${tagColor}">${tags[i].value}</span>`;
        }

    }
    toggleModal();
    if (cheese%3 === 0) {
        var Ancestor = document.createElement('div');
        Ancestor.classList += 'tile is-ancestor';
        tiles.appendChild(Ancestor);
    } 

    var ancestorList = document.querySelectorAll(".is-ancestor");
console.log(ancestorList);
   
    
var tileColors = ["is-danger", "is-warning", "is-info", "is-sucess", "is-primary"]

var randomNum = Math.floor(Math.random() * tileColors.length)




    // <div class="tile is-ancestor"></div>

    var poem = document.createElement('div');
    poem.classList = 'tile is-4  is-parent';
    poem.innerHTML = `    
                  <article class="tile ${tileColors[randomNum]} notification  is-child">
                    <p class="title">${poemName.value}</p>
                    <p class="subtitle">${poetName.value}</p>
                    <div class="content">
                        ${realPoem.value}  
                    </div>
                    <div class="tags">
                    ${tagsChecked}
                    </div>
                  </article>
            `;
    ancestorList[ancestorList.length - 1].appendChild(poem);
    poemName.value = "";
    poetName.value = "";
    realPoem.value = "";
    for (var i = 0; i < tags.length; i++) {
        tags[i].checked = false;
    }

}



// <div class="tile  is-parent">

//               <article class="tile  is-child">
//                 <p class="title"> The Road Not Taken</p>
//                 <p class="subtitle">Robert Frost</p>
//                 <div class ="content">
//                     Two roads diverged in a yellow wood, <br>
//                     And sorry I could not travel both <br>
//                     And be one traveler, long I stood <br>
//                     And looked down one as far as I could <br>
//                     To where it bent in the undergrowth; <br><br>

//                     Then took the other, as just as fair, <br> 
//                     And having perhaps the better claim, <br>
//                     Because it was grassy and wanted wear; <br>
//                     Though as for that the passing there <br> 
//                     Had worn them really about the same, <br> <br>

//                     And both that morning equally lay <br>
//                     In leaves no step had trodden black. <br>
//                     Oh, I kept the first for another day! <br>
//                     Yet knowing how way leads on to way, <br>
//                     I doubted if I should ever come back. <br> <br>

//                     I shall be telling this with a sigh <br>
//                     Somewhere ages and ages hence: <br>
//                     Two roads diverged in a wood, and I—  <br>
//                     I took the one less traveled by,  <br>
//                     And that has made all the difference.  

//                 </div>
//                 <span class="tag is-danger">Danger</span>
//               </article>

//             </div>