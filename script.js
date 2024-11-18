var button = document.querySelector('#bouttonsun');
var section = document.querySelector('section');
var titre1 = document.getElementsByClassName('titre1');
var titre2 = document.getElementsByClassName('titre2');
var titre3 = document.getElementsByClassName('titre3');
var couleurPrincipal = 'rgb(254, 127, 45)';
var couleurSecondaire = 'rgb(252, 202, 70)';
var couleurTertiaire = 'rgb(161, 193, 129)';

button.addEventListener("click", () => {
    console.log("click");
    

    if (section.style.backgroundColor != couleurPrincipal) {
        button.innerHTML = '🌙';
        section.style.backgroundColor = couleurPrincipal;
        // H1 Color
        titre1[0].style.backgroundColor= couleurPrincipal;
        titre1[1].style.backgroundColor= couleurPrincipal;
        titre1[2].style.backgroundColor= couleurPrincipal;
        // H2 Color
        titre2[0].style.color= couleurSecondaire;
        titre2[1].style.color= couleurSecondaire;
        titre2[2].style.color= couleurSecondaire;
        titre2[3].style.color= couleurSecondaire;
        titre2[4].style.color= couleurSecondaire;
        titre2[5].style.color= couleurSecondaire;
        // H3 Color
        titre3[0].style.color= couleurTertiaire;
        titre3[1].style.color= couleurTertiaire;
        titre3[2].style.color= couleurTertiaire;
        titre3[3].style.color= couleurTertiaire;
        titre3[4].style.color= couleurTertiaire;
        titre3[5].style.color= couleurTertiaire;

    }
    else {
        section.style.backgroundColor = '#424e5e';
        // H1 Color
        titre1[0].style.backgroundColor= "#424e5e";
        titre1[1].style.backgroundColor= "#424e5e";
        titre1[2].style.backgroundColor= "#424e5e";
        // H2 Color
        titre2[0].style.color= "grey";
        titre2[1].style.color= "grey";
        titre2[2].style.color= "grey";
        titre2[3].style.color= "grey";
        titre2[4].style.color= "grey";
        titre2[5].style.color= "grey";
        // H3 Color
        titre3[0].style.color= "#424e5e";
        titre3[1].style.color= "#424e5e";
        titre3[2].style.color= "#424e5e";
        titre3[3].style.color= "#424e5e";
        titre3[4].style.color= "#424e5e";
        titre3[5].style.color= "#424e5e";
        button.innerHTML = '🌞';
    }
})